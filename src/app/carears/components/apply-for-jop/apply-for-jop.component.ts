import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { blogList } from 'src/app/blog/models/blog.model';
import { JobDetailsModel } from 'src/app/shared/models/job-details.model';
import { JobUtilityService } from 'src/app/shared/services/job-utility.service';
import { JobService } from 'src/app/shared/services/job.service';
import { QuestionType } from 'src/app/shared/enums/question-type.enum';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { JobQuestionOptionModel } from 'src/app/shared/models/job-question-option.model';
import { ApplicantModel } from 'src/app/shared/models/applicant.model';
import { numericValidator } from 'src/app/shared/validators/validators';
import { CandidateStatus } from 'src/app/shared/enums/condidate-status.enum';


@Component({
  selector: 'app-apply-for-jop',
  templateUrl: './apply-for-jop.component.html',
  styleUrls: ['./apply-for-jop.component.scss']
})
export class ApplyForJopComponent implements OnInit {
  form: FormGroup;
  loaded: boolean = false;
  showForm: boolean = false;
  id: number;
  CVName: string = "";
  jobDetail: JobDetailsModel = {} as JobDetailsModel;
  QuestionType = QuestionType;
  // submitted = true;
  applicantModel: ApplicantModel;

  constructor(private JobService: JobService, private route: ActivatedRoute, private router: Router, public JobUtilityService: JobUtilityService, private fb: FormBuilder) { }

  ngOnInit(): void {
    if (!this.id || this.id == 0) {
      this.route.params.subscribe((params: { [x: string]: string | number; }) => {
        this.id = + params['id'];
        if (this.id) {
          this.getJobById(this.id);
        }
      });
    }
  }


  createForm() {
    let jQuestions = this.fb.array([]);

    this.form = this.fb.group({
      FirstName: ['', [Validators.required, Validators.maxLength(20), Validators.pattern('^[a-zA-Z][a-zA-Z ]*$')]],
      LastName: ['', [Validators.required, Validators.maxLength(20), Validators.pattern('^[a-zA-Z][a-zA-Z ]*$')]],
      //@ Followed by char && . Followed by char
      Email: ['', [Validators.required, Validators.pattern('^[^\\s@][^@\\s]+@[^@\\s]+\\.[^@\\s]+$')]],
      PhoneNumber: ['', [Validators.required, Validators.maxLength(11), numericValidator()]],
      ExpectedSalary: ['', [Validators.required, Validators.maxLength(5), Validators.pattern('^[0-9]+$')]],
      NoticePeriod: ['', [Validators.required, Validators.maxLength(20), Validators.pattern('^[0-9a-zA-Z][0-9a-zA-Z ]*$')]],
      CVFile: ['', [Validators.required]],
      JobId: ['', [Validators.required]],
      CandidateStatus: ['', [Validators.required]],
      ApplicantQuestionOption: jQuestions
    })

    this.form.patchValue({
      JobId: this.jobDetail.jobId,
      CandidateStatus: CandidateStatus.New
    })

    this.populateJobQuestionForm();
  }

  populateJobQuestionForm(): void {
    const formArray = this.fb.array([]);
    const JobQuestionsFormArray = this.ApplicantQuestionOption;

    this.jobDetail.jobQuestions?.forEach(jobQuestions => {

      JobQuestionsFormArray.push(this.fb.group({
        jobId: [jobQuestions.jobId, Validators.required],
        JobQuestionId: [jobQuestions.jobQuestionId, Validators.required],
        JobQuestionOptionId: [null],
        questionText: [jobQuestions.questionText, Validators.required],
        questionType: [jobQuestions.questionType, Validators.required],
        answerText: ['', [Validators.maxLength(200)]],
        jobQuestionOptions: this.populateJobQuestionOptionForm(jobQuestions.jobQuestionOptions),

      }));


    });
  }
  populateJobQuestionOptionForm(JobQuestionOptionModel: JobQuestionOptionModel[]) {

    let jQuestionsOptionFormArray = this.fb.array([]) as FormArray;

    JobQuestionOptionModel.forEach(JobQuestionOption => {
      jQuestionsOptionFormArray.push(this.fb.group({
        optionText: [JobQuestionOption.optionText],
        jobQuestionId: [JobQuestionOption.jobQuestionId],
        jobQuestionOptionId: [JobQuestionOption.jobQuestionOptionId],
        isChecked: [false]
      }))
    })

    return jQuestionsOptionFormArray
  }

  applyJob() {
    this.showForm = true;
    setTimeout(() => {
      const targetElement = document.getElementById('jobForm');
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 0);
  }



  getJobById(jobId: number) {
    this.JobService.getJobById(jobId).subscribe(jobDetail => {
      this.jobDetail = jobDetail
      this.createForm();
    })
  }

  getJobQuestionsControl() {
    return (<FormArray>this.form.get('ApplicantQuestionOption')).controls;
  }
  getJobQuestionsOptionControl(j: number): any {
    return (<FormArray>(<FormArray>this.form.get('ApplicantQuestionOption'))?.controls?.at(j)?.get('jobQuestionOptions')).controls

  }



  get ApplicantQuestionOption(): FormArray {
    return this.form.get('ApplicantQuestionOption') as FormArray;
  }


  submit() {
    let formData: FormData = new FormData();
    Object.keys(this.form.controls).forEach((formControlName) => {
      formData.append(formControlName, this.form.get(formControlName)?.value);

    });

    formData.append("CVFile", this.form.get("CVFile")?.value[0])

    const applicantQuestionOptions = this.form.get('ApplicantQuestionOption')?.value;
    let options = []
    if (applicantQuestionOptions) {
      for (let index = 0; index < applicantQuestionOptions.length; index++) {
        const element = applicantQuestionOptions[index];
        options.push({
          'AnswerText': element.answerText,
          "JobQuestionId": element.JobQuestionId,
          "QuestionType": element.questionType,
          "JobQuestionOptions": element.jobQuestionOptions
        })

      }
    }
    formData.set("ApplicantQuestionOption", JSON.stringify(options))

    // this.submitted = true
    if (this.form.valid) {
      const controls = this.form.controls;
      Object.keys(controls).forEach(controlName =>
        controls[controlName].markAsTouched()
      );
      this.loaded = true;
      this.AddNewApplicant(formData)
    } else {
      Object.keys(this.form.controls).forEach(field => {
        const control = this.form.get(field);
        control?.markAsTouched({ onlySelf: true });
      });
    }
  }

  AddNewApplicant(formData: FormData) {
    this.JobService.AddNewApplicant(formData).subscribe(l => {
      this.loaded = false;
      this.router.navigate(['/careers/explore-jobs']);
    })
  }

  // handleFileInput(event: Event): void {
  //   const element = event.target as HTMLInputElement;
  //   const files = element.files;
  //   if (files && files.length > 0) {
  //     const file = files[0];
  //     const reader = new FileReader();
  //     reader.onload = (e: ProgressEvent<FileReader>) => {
  //       let base64 = e.target?.result as string;
  //       base64 = base64.split(',')[1];
  //       this.form.patchValue({ CVFile: base64 });
  //     };
  //     reader.readAsDataURL(file);
  //   }
  // }

  uploadFile(event: any, fileType: string) {
    this.updateFile(event, fileType);
  }
  private updateFile(event: Event, formControlName: string) {
    let inputElement: HTMLInputElement = event.target as HTMLInputElement;
    let files: File[] = [];
    if (inputElement.files) {
      for (var file of inputElement.files) {
        let fileSize = file.size / 1024 / 1024;
        if (fileSize > 5.0 || file.name.split('.').pop() == 'exe') {
          this.form.controls[formControlName].patchValue(null);
          this.form.get(formControlName)?.updateValueAndValidity();
          (inputElement.previousSibling as HTMLInputElement).value = '';
          files = [];
          break;
        } else {
          files.push(file);
          this.CVName = file.name
        }
        if (files.length > 0) {
          this.form.controls[formControlName].patchValue(files);
          this.form.get(formControlName)?.updateValueAndValidity();
          if (inputElement.previousSibling) {
            (inputElement.previousSibling as HTMLInputElement).value = '';
            files.forEach((file) => {
              (
                inputElement.previousSibling as HTMLInputElement
              ).value += `\"${file.name}\" `;
            });
          }
        }
      }
    }
  }

  HandleCheckBox(event: any, questionIndex: number, optionIndex: number) {
    const isChecked = event.target.checked;
    ((this.getJobQuestionsOptionControl(questionIndex) as FormArray).at(optionIndex).get('isChecked') as FormControl).setValue(isChecked);
  }
  HandleDropDown(event: any, questionIndex: number) {
    // Retrieve the index from the custom data attribute
    const selectedIndex = event.target.options[event.target.selectedIndex].getAttribute('data-index');
    const optionsArray = this.getJobQuestionsOptionControl(questionIndex) as FormArray;

    // Reset all options to false
    (optionsArray as any).forEach((control: any) => {
      control.get('isChecked')?.setValue(false);
    });

    // Set the selected option to true
    optionsArray.at(parseInt(selectedIndex)).get('isChecked')?.setValue(true);
  }

  HandleRadioButton(event: any, questionIndex: number, optionIndex: number) {
    const optionsArray = this.getJobQuestionsOptionControl(questionIndex) as FormArray;
    // Reset all options to false
    (optionsArray as any).forEach((control: any) => {
      control.get('isChecked')?.setValue(false);
    });
    optionsArray.at(optionIndex).get('isChecked')?.setValue(true);

  }

}
