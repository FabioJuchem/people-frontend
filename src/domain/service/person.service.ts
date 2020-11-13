import axios from 'axios';
import Contact from '../entity/contact.entity';
import Filter from '../entity/filter.entity';
import Person from '../entity/person.entity';

export default class PersonService {
  public static getPersonByName(name: string): Promise<Person> {
    return axios.get(`https://fabio-people-api.herokuapp.com/api/v1/person?name=${name}`)
      .then((response: any) => Person.of(response.data));
  }

  public static getAllPerson(filter: Filter): Promise<Person[]> {
    return axios
      .get(`https://fabio-people-api.herokuapp.com/api/v1/person/list?page=0&size=100&name=${filter.name}&document=${filter.document}&birthDate=${filter.birthDate}`)
      .then((response: any) => Person.ofList(response.data.content));
  }

  public static saveNewPerson(person: Person): Promise<Person> {
    return axios
      .post('https://fabio-people-api.herokuapp.com/api/v1/person', person)
      .then((response: any) => Person.of(response.data));
  }

  public static saveNewContact(contact: Contact, personId: string): Promise<Contact> {
    return axios
      .put(`https://fabio-people-api.herokuapp.com/api/v1/person/${personId}/contact`, contact)
      .then((response: any) => Contact.of(response.data));
  }

  public static deletePerson(personId: string): Promise<void> {
    return axios
      .delete(`https://fabio-people-api.herokuapp.com/api/v1/person/${personId}`);
  }
}
