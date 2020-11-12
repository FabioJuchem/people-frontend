import axios from 'axios';
import Filter from '../entity/filter.entity';
import Person from '../entity/person.entity';

export default class PersonService {
  public static getPersonByName(name: string): Promise<Person> {
    return axios.get(`api/v1/person?name=${name}`)
      .then((response: any) => Person.of(response.data));
  }

  public static getAllPerson(filter: Filter): Promise<Person[]> {
    return axios
      .get(`api/v1/person/list?page=0&size=100&name=${filter.name}&document=${filter.document}&birthDate=${filter.birthDate}`)
      .then((response: any) => Person.ofList(response.data.content));
  }
}
