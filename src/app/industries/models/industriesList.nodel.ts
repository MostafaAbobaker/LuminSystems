export interface industryList{
	industryId:number;
	industryTitle:string;
	industryTitleNavigation:string;
	industryDescription:string;
	industryImage:string;
}

export interface industryDetail{
	industryDetailId:number;
	industryImage:string;
	industryDetailTitle:string;
	industryDetailHeadingTitle:string;
	industryDetailHeadingSufixTitle:string;
	industryDetailContent:string;
	industryDetailSubHeadingTitle:string;
	industryDetailSubContent:string;
	featuresMainTitle:string;
    featuresList:featuresList[];
    caseStudyList:row[];
    customerMainTitle:string;
    customerList:customerList[]
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
export interface customerList{
    customerImg:string;
}