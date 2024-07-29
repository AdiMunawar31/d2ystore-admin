export interface ApiResponseInterface<T> {
  data: T
  message: string
  status: number
  meta?: MetaApiResponseInterface
  pagination?: PaginationApiResponseInterface
}

export interface MetaApiResponseInterface {
  total: number
  limit: number
  page: number
  total_page: number
}

export interface PaginationApiResponseInterface {
  total: number
  limit: number
  current_page: number
  last_page: number
}
