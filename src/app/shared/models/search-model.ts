import { SearchFieldModel } from 'src/app/shared/models/search-field-model';

export interface SearchModel {
  searchFields?: SearchFieldModel[];
  orderBy?: string;
  orderType?: string;
  pageNumber?: number;
  pageSize?: number;
}
