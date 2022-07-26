export interface PaginationProps {
  page: number;
  per_page: number;
}

export interface ResponseData<T> extends PaginationProps {
  total: number;
  total_pages: number;
  data: T;
}
