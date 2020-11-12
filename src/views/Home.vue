<template>
  <div class="home">
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import PersonService from '@/domain/service/person.service';

@Component({ components: { } })
export default class Home extends Vue {
  getPerson() {
    PersonService.getPersonByName('Fabio')
      .then((response: any) => console.log(response));
  }
}
</script>
<style lang="sass" scoped>

</style>
