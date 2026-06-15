export interface ApplicantModel {
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    expectedSalary: string;
    noticePeriod: string;
    jobId: number;
    jobTitle: string;
    candidateStatus: number;
    candidateStatusDescription: string;
    cvFile: string;
    applicantQuestionOption: ApplicantQuestionOptionModel[];
  }
  
  export interface ApplicantQuestionOptionModel {
    jobQuestionId?: number;
    jobQuestionOptionId?: number;
    answerText: string;
    questionType: string;
  }
  