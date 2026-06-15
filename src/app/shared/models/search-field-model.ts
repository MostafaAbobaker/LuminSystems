export interface SearchFieldModel{
  fieldName: string,
  operator:string, //filter.matchMode,
  value?:string,
  dateSearchType?: 'Date' | 'DateTime' | 'TimeSpan';
  valueList?:string[],
  isLocalized?:boolean
}
