import { JobCondition } from "../enums/job-condition.enum";
import { JobLevel } from "../enums/job-level.enum";
import { JobType } from "../enums/job-type.enum";
import { JobQuestionModel } from "./job-question.model";

export interface JobDetailsModel {
    jobId: number;
    createDate: Date;
    jobLevel: JobLevel; 
    jobTitle: string;
    jobQualifications: string;
    jobReponsibilities: string;
    jobCondition: JobCondition; 
    jobType: JobType; 
    jobDescription: string;
    jobBenefits: string;
    jobQuestions: JobQuestionModel[];
}
