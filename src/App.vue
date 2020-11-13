<template>
  <v-app>
    <v-main>
      <div>
        <v-text-field
          v-model="byName"
          :label="'Buscar por nome'">
        </v-text-field>
        <v-btn
          @click="getPersonByName()">
          Buscar Por Nome
        </v-btn>
          <span class="ml-10">
            Resultado da Busca
          </span>
        <pre>{{ person }}</pre>
      </div>
      <v-divider class="mt-14 mb-14"
        color="black">
      </v-divider>
      <div>
        <div class="filter">
          <v-text-field
            v-model="filter.name"
            :label="'Filtro por nome'">
          </v-text-field>
          <v-text-field class="ml-10"
            v-model="filter.document"
            :label="'Filtro por CPF'">
          </v-text-field>
          <v-text-field class="ml-10"
            v-model="filter.birthDate"
            :label="'Filtro por data de nascimento'">
          </v-text-field>
        </div>
        <v-btn
          @click="getPersonFiltered()">
          Buscar Filtrada
        </v-btn>
          <span class="ml-10">
            Resultado da Busca
          </span>
        <pre>{{ personList }}</pre>
      </div>
      <v-divider class="mt-14 mb-14"
        color="black">
      </v-divider>
      <div class="new-person">
        <div class="new-person__person">
          <v-text-field
            v-model="newPerson.name"
            :label="'Nome'">
          </v-text-field>
          <v-text-field class="ml-10"
            v-model="newPerson.document"
            :label="'CPF'">
          </v-text-field>
          <v-text-field class="ml-10"
            v-model="newPerson.birthDate"
            :label="'Data de nascimento'">
          </v-text-field>
        </div>
          <div v-for="contact in newPerson.contacts" :key="contact" class="new-person__contact">
            <v-text-field
              v-model="contact.name"
              :label="'Nome do contato'">
            </v-text-field>
            <v-text-field class="ml-10"
              v-model="contact.phoneNumber"
              :label="'Telefone do contato'">
            </v-text-field>
            <v-text-field class="ml-10"
              v-model="contact.email"
              :label="'email do contato'">
            </v-text-field>
          </div>
        <v-btn
          @click="saveNewPerson()">
          Salvar Novo
        </v-btn>
          <span class="ml-10">
            Resultado da Busca
          </span>
        <pre>{{ personResponse }}</pre>
      </div>
      <v-divider class="mt-14 mb-14"
        color="black">
      </v-divider>
      <div>
        <div class="filter">
          <v-text-field
            v-model="newContact.name"
            :label="'Nome do contato'">
          </v-text-field>
          <v-text-field class="ml-10"
            v-model="newContact.phoneNumber"
            :label="'Telefone do contato'">
          </v-text-field>
          <v-text-field class="ml-10"
            v-model="newContact.email"
            :label="'Email do contato'">
          </v-text-field>
        </div>
        <v-btn
          @click="saveNewContact()">
          Salvar Contato por Id
        </v-btn>
        <v-text-field class="ml-10"
          v-model="personId"
          style="width: 400px"
          :label="'Id da Pessoa'">
        </v-text-field>
          <span class="ml-10">
            Resultado da Busca
          </span>
        <pre>{{ contactResponse }}</pre>
      </div>
      <v-divider class="mt-14 mb-14"
        color="black">
      </v-divider>
      <div class="mb-14">
        <v-btn
          @click="deletePerson()">
          Deletar Pessoa por Id
        </v-btn>
        <v-text-field class="ml-10"
          v-model="personToDeleteId"
          style="width: 400px"
          :label="'Id da Pessoa a ser deletada'">
        </v-text-field>
        <pre>{{ deletionStatus }}</pre>
      </div>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import PersonService from '@/domain/service/person.service';
import Person from './domain/entity/person.entity';
import Filter from './domain/entity/filter.entity';
import Contact from './domain/entity/contact.entity';

@Component({ components: { } })
export default class App extends Vue {
  byName: string = '';

  person: Person = Person.of({});

  filter: Filter = Filter.of({});

  personList: Person[] = [];

  newPerson: Person = new Person({});

  personResponse: Person = new Person({});

  newContact: Contact = new Contact({});

  contactResponse: Contact = new Contact({});

  personId: string = '';

  deletionStatus: string = '';

  personToDeleteId: string = '';

  created() {
    this.newPerson.contacts.push(new Contact({}));
  }

  getPersonByName() {
    PersonService.getPersonByName(this.byName)
      .then((response: any) => {
        this.person = response;
      });
  }

  getPersonFiltered() {
    PersonService.getAllPerson(this.filter)
      .then((response: any[]) => {
        this.personList = response;
      });
  }

  saveNewPerson() {
    PersonService.saveNewPerson(this.newPerson)
      .then((response: any) => {
        this.personResponse = response;
      });
  }

  saveNewContact() {
    PersonService.saveNewContact(this.newContact, this.personId)
      .then((response: any) => {
        this.contactResponse = response;
      });
  }

  deletePerson() {
    PersonService.deletePerson(this.personToDeleteId)
      .then(() => {
        this.deletionStatus = '200';
      })
      .catch(() => {
        this.deletionStatus = 'InternalError';
      });
  }
}

</script>

<style lang="scss" scoped>
.filter {
  display: flex;
}

.new-person__person {
  display: flex;
}

.new-person__contact {
  display: flex;
}

</style>
