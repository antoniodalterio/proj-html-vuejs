<script>
import MainSection1 from './components-main/MainSection1.vue';
import MainSection2 from './components-main/MainSection2.vue';
import MainSection3 from './components-main/MainSection3.vue';
export default {
  name: 'MainApp',
  components: {
    MainSection1,
    MainSection2,
    MainSection3,
  },
};
</script>
<template>
  <MainSection1></MainSection1>
  <MainSection2></MainSection2>
  <MainSection3></MainSection3>
</template>
<style scoped lang="scss">
section {
  padding: 120px 0;
}
</style>
