import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Subject, takeUntil } from 'rxjs';
import { JobCondition } from 'src/app/shared/enums/job-condition.enum';
import { JobLevel } from 'src/app/shared/enums/job-level.enum';
import { JobType } from 'src/app/shared/enums/job-type.enum';
import { JobModel } from 'src/app/shared/models/job.model';
import { SearchFieldModel, SearchModel } from 'src/app/shared/models/SearchModel';
import { JobUtilityService } from 'src/app/shared/services/job-utility.service';
import { JobService } from 'src/app/shared/services/job.service';

@Component({
  selector: 'app-explore-jobs',
  templateUrl: './explore-jobs.component.html',
  styleUrls: ['./explore-jobs.component.scss']
})
export class ExploreJobsComponent implements OnInit, OnDestroy {
  loaded: boolean = true;
  public dataItems: JobModel[] = [];
  public searchModel: SearchModel = new SearchModel();
  componentDestroyed$: Subject<boolean> = new Subject();
  pageNumber: number = 1;
  isMoreData: boolean = true;
  filterForm: FormGroup;

  jobLevels = Object.keys(JobLevel)
    .filter(key => isNaN(Number(key)))
    .map(key => ({
      value: JobLevel[(key as any)],
      label: key
    }));

  jobCondtions = Object.keys(JobCondition)
    .filter(key => isNaN(Number(key)))
    .map(key => ({
      value: JobCondition[(key as any)],
      label: key
    }));



  constructor(private fb: FormBuilder, private JobPolicyService: JobService, public JobUtilityService: JobUtilityService) {
    this.filterForm = this.fb.group({
      searchTerm: [null],
      jobLevel: [null],
      jobCondtion: [null]

    });
  }

  ngOnInit(): void {
    this.getJobs(null, false)
  }
  ngOnDestroy(): void {

  }


  applyFilter() {
    this.getJobs(null, false)
  }
  getJobs(event: SearchModel | null = null, isLoadMore: boolean) {

    this.searchModel = event ?? new SearchModel();
    if (!this.searchModel.orderBy) {
      this.searchModel.orderBy = 'createDate';
      this.searchModel.orderType = 'desc';
    }

    let formData = this.filterForm.value

    let jobLevelSearchField = new SearchFieldModel()
    jobLevelSearchField.fieldName = "JobLevel"
    jobLevelSearchField.value = formData.jobLevel
    jobLevelSearchField.operator = "startsWith";

    let jobConditionSearchField = new SearchFieldModel()
    jobConditionSearchField.fieldName = "JobCondition"
    jobConditionSearchField.value = formData.jobCondtion
    jobConditionSearchField.operator = "startsWith";

    let SearchField = new SearchFieldModel()
    SearchField.fieldName = "JobTitle"
    SearchField.value = formData.searchTerm
    SearchField.operator = "contains";

    this.searchModel.searchFields.push(jobLevelSearchField);
    this.searchModel.searchFields.push(jobConditionSearchField);
    this.searchModel.searchFields.push(SearchField);

    this.JobPolicyService.getjobs(this.searchModel)
      .pipe(takeUntil(this.componentDestroyed$))
      .subscribe(
        (res) => {
          if (isLoadMore) {
            this.dataItems.push(...res.entities);
          }else{
            this.dataItems = res.entities;
          }
          if (res.totalCount == this.dataItems.length) this.isMoreData = false
          this.loaded = false;
        },
        (err) => {
          console.log(err);
        }
      );
  }

  getJobById() {
    this.JobPolicyService.getJobById(1).subscribe(l => {
      console.log(l)
    })
  }

  loadMoreJobs() {
    let loadMoreJob = new SearchModel();
    loadMoreJob.pageNumber = loadMoreJob.pageNumber + this.pageNumber
    this.loaded = true;
    this.getJobs(loadMoreJob, true)
    this.pageNumber++
  }


  getJobConditionText(conditionValue: number): string {
    return JobCondition[conditionValue];
  }
  getTypeText(TypeValue: number): string {
    return JobType[TypeValue];
  }
  getLevelText(levelValue: number): string {
    return JobLevel[levelValue];
  }

}
