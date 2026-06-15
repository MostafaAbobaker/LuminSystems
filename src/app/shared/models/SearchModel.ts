export class SearchModel {
  public orderBy: string="";
  public orderType: string="";
  public pageNumber: number = 1;
  public pageSize: number = 4;
  public searchFields: SearchFieldModel[] = [];
}

export class SearchFieldModel {
  public fieldName: string = "";
  public operator: string = "";
  public value: string = "";
  public dateSearchType: string | null = null;
}
