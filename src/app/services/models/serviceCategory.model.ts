export interface serviceCategory{
	serviceCategoryId:number;
	serviceCategoryTitle:string;
	serviceImg:string;
	serviceCategoryHeadingTitle:string;
	serviceCategoryContent:string;
	serviceCategorySubHeadingTitle:string;
	serviceCategorySubContent:string;
	serviceSubCategoryList:serviceSubCategory[]
}

export interface serviceSubCategory{
    serviceId:string;
    serviceNavigationTitle:string;
    serviceTitle:string;
    serviceDesc:string;
    serviceImg:string;

}