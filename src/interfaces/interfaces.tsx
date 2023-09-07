export interface result {
  ok: boolean,
  count?: number,
  error?: string,
  error_ui?: string
}

export interface dataObject {
  loading: boolean,
  data?: result,
  error?: string
}