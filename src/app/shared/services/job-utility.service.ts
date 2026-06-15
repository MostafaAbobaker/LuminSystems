import { Injectable } from '@angular/core';
import { JobCondition } from '../enums/job-condition.enum';
import { JobType } from '../enums/job-type.enum';
import { JobLevel } from '../enums/job-level.enum';
import { QuestionType } from '../enums/question-type.enum';

@Injectable({
  providedIn: 'root'
})
export class JobUtilityService {

  constructor() { }

  getJobConditionText(conditionValue: number): string {
    return JobCondition[conditionValue];
  }

  getTypeText(typeValue: number): string {
    return JobType[typeValue];
  }

  getLevelText(levelValue: number): string {
    return JobLevel[levelValue];
  }
  getQuestionType(levelValue: number): string {
    return QuestionType[levelValue];
  }
}
