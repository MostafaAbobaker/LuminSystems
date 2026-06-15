export interface PagedList<TEntity> {
  totalCount: number;
  pageNumber: number;
  pageSize: number;
  entities: TEntity[];
}
