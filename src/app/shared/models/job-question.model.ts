import { QuestionType } from "../enums/question-type.enum";
import { JobQuestionOptionModel } from "./job-question-option.model";

export interface JobQuestionModel {
    jobId: number;
    jobQuestionOptionId: number;
    jobQuestionId: number;
    questionType: QuestionType;
    questionText: string;
    answerText: string;
    jobQuestionOptions: JobQuestionOptionModel[];
}
