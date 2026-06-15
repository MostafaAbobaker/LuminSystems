import { JobCondition } from "src/app/shared/enums/job-condition.enum";
import { JobLevel } from "src/app/shared/enums/job-level.enum";
import { JobType } from "src/app/shared/enums/job-type.enum";

export interface JobModel {
    jobId: number;
    createDate: Date;
    jobLevel: JobLevel;
    jobTitle: string;
    jobCondition: JobCondition;
    jobType: JobType;
    jobDescription: string;
}





