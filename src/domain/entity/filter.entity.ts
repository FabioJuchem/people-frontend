export default class Filter {
  name: string;

  document: string;

  birthDate: string;

  constructor(obj: any) {
    this.name = obj.name || '';
    this.document = obj.document || '';
    this.birthDate = obj.birthDate || '';
  }

  public static of(obj: any): Filter {
    return new Filter(obj);
  }

  public static ofList(obj: any[]): Filter[] {
    return obj.map(this.of);
  }
}
