export default class Contact {
    id: string;

    name: string;

    phoneNumber: string;

    email: string;

    constructor(obj: any) {
      this.id = obj.id;
      this.name = obj.name;
      this.phoneNumber = obj.phoneNumber;
      this.email = obj.email;
    }

    public static of(obj: any): Contact {
      return new Contact(obj);
    }

    public static ofList(obj: any[]): Contact[] {
      return obj.map(this.of);
    }
}
