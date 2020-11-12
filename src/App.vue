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
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import PersonService from '@/domain/service/person.service';
import Person from './domain/entity/person.entity';
import Filter from './domain/entity/filter.entity';

@Component({ components: { } })
export default class App extends Vue {
  byName: string = '';

  person: Person = Person.of({});

  filter: Filter = Filter.of({});

  personList: Person[] = [];

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
}

</script>

<style lang="scss" scoped>
.filter {
  display: flex;
}

</style>
