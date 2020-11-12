<template>
  <div class="home">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script lang="ts">
import HelloWorld from '@/components/HelloWorld.vue';
import { Vue, Component } from 'vue-property-decorator';
import PersonService from '@/domain/service/person.service';

@Component({ components: { HelloWorld } })
export default class Home extends Vue {
  getPerson() {
    PersonService.getPersonByName('Fabio')
      .then((response: any) => console.log(response));
  }
}
</script>
<style lang="sass" scoped>

</style>
