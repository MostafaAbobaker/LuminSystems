export interface serviceSubCategory{
	serviceSubCategoryId:number;
	serviceSubCategoryTitle:string;
	serviceSubCategoryImg:string;
	serviceSubCategoryHeadingTitle:string;
	serviceSubCategoryContent:string;
	serviceSubCategorySubHeadingTitle:string;
	serviceSubCategorySubContent:string;
	successfullMainTitle:string;
    successfullList:successfullList[];
    caseStudyList:row[];
    TechnologyMainTitle:string;
    technologyUsedList:technologyUsedList[]
}
export interface successfullList{
    successfullTitle:string;
    sucessfullDescription:string
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