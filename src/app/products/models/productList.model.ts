export interface productList{
	productId:number;
	productTitle:string;
	productTitleNavigation:string;
	productDescription:string;
	productImage:string;
}


export interface productDetail{
	productDetailId:number;
	productImage:string;
	productDetailTitle:string;
	productDetailHeadingTitle:string;
	productDetailHeadingSufixTitle:string;
	productDetailContent:string;
	productDetailSubHeadingTitle:string;
	productDetailSubContent:string;
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