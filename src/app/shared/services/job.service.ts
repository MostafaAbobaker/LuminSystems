import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PagedList } from '../models/PagedList';
import { SearchModel } from '../models/SearchModel';
import { environment } from 'src/environments/environment';
import { JobModel } from '../models/job.model';
import { JobDetailsModel } from '../models/job-details.model';
import { ApplicantModel } from '../models/applicant.model';
import { CareerPageModel } from '../models/career-page.model';

@Injectable({
  providedIn: 'root',
})
export class JobService {
  apiUrl: string = environment.baseApiUrl + '/api/' + environment.baseApiVersion;


  constructor(private httpClient: HttpClient) {
  }

  getjobs(searchModel: SearchModel): Observable<PagedList<JobModel>> {
    return this.httpClient.post<PagedList<JobModel>>
      (this.apiUrl + '/JobApplications/GetJobsPagedList', searchModel);
  }
  AddNewApplicant(ApplicantModel: any): Observable<boolean> {
    return this.httpClient.post<boolean>
      (this.apiUrl + '/JobApplications/AddNewApplicant', ApplicantModel);
  }

  getJobById(jobId: number): Observable<JobDetailsModel> {
    return this.httpClient.get<JobDetailsModel>
      (this.apiUrl + '/JobApplications/GetJobById/' + jobId);
  }

  getCareerPageContent(): Observable<CareerPageModel> {
    return this.httpClient.get<CareerPageModel>
      (this.apiUrl + '/Career/GetCareerPage/');
  }

}