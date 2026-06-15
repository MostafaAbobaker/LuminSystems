
export interface technologyList{
	technologyId:number;
	technologyTitle:string;
	technologyTitleNavigation:string;
	technologyDescription:string;
	technologyImage:string;
}

export interface technologyDetail{
	technologyDetailId:number;
	technologyImage:string;
	technologyDetailTitle:string;
	technologyDetailHeadingTitle:string;
	technologyDetailHeadingSufixTitle:string;
	technologyDetailContent:string;
	technologyDetailSubHeadingTitle:string;
	technologyDetailSubContent:string;
	featuresMainTitle:string;
    featuresList:featuresList[];
    caseStudyList:row[];
    TechnologyMainTitle:string;
    technologyUsedList:technologyUsedList[]
}

export interface featuresList{
    featuresTitle:string;
    featuresDescription:string
}

export interface row{
    cols:[caseStudyList]
    
}
export interface caseStudyList{
    caseStudyTitle:string;
    caseStudyDescription:string
    caseStudyImage:string
}
export interface technologyUsedList{
    technologyImg:string;
}