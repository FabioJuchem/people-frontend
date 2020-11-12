import Contact from './contact.entity';

export default class Person {
  id: string;

  name: string;

  document: string;

  birthDate: string;

  contacts: Contact[];

  constructor(obj: any) {
    this.id = obj.id;
    this.name = obj.name;
    this.document = obj.document;
    this.birthDate = obj.birthDate;
    this.contacts = obj.contacts ? Contact.ofList(obj.contacts) : [];
  }

  public static of(obj: any): Person {
    return new Person(obj);
  }

  public static ofList(obj: any[]): Person[] {
    return obj.map(this.of);
  }
}
