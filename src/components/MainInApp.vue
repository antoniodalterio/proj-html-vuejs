<script>
import MainSection1 from './components-main/MainSection1.vue';
import MainSection2 from './components-main/MainSection2.vue';
export default {
  name: 'MainApp',
  components: {
    MainSection1,
    MainSection2,
  },
};
</script>
<template>
  <MainSection1></MainSection1>
  <MainSection2></MainSection2>
</template>
<style scoped lang="scss">
section {
  padding: 120px 0;
}
</style>
