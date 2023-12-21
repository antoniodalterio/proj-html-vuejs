<script>
import MainSection1 from './components-main/MainSection1.vue';
import MainSection2 from './components-main/MainSection2.vue';
import MainSection3 from './components-main/MainSection3.vue';
import MainSection4 from './components-main/MainSection4.vue';
import MainSection5 from './components-main/MainSection5.vue';
import MainSection6 from './components-main/MainSection6.vue';
import MainSection7 from './components-main/MainSection7.vue';
import MainSection8 from './components-main/MainSection8.vue';
export default {
  name: 'MainApp',
  components: {
    MainSection1,
    MainSection2,
    MainSection3,
    MainSection4,
    MainSection5,
    MainSection6,
    MainSection7,
    MainSection8,
  },
};
</script>
<template>
  <MainSection1></MainSection1>
  <MainSection2></MainSection2>
  <MainSection3></MainSection3>
  <MainSection4></MainSection4>
  <MainSection5></MainSection5>
  <MainSection6></MainSection6>
  <MainSection7></MainSection7>
  <MainSection8></MainSection8>
</template>
<style scoped lang="scss">
section {
  padding: 200px 0;
}
</style>
