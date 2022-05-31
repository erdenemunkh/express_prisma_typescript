export class ApiResult {
  constructor(
    public status: boolean,
    public data: object | null,
    public message: any
  ) {
    this.status = status;
    this.data = data;
    this.message = message;
  }
}
