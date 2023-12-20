<script>
import FooterTop from './components-footer/FooterTop.vue';
import FooterBottom from './components-footer/FooterBottom.vue';
export default {
  name: 'FooterApp',
  components: {
    FooterTop,
    FooterBottom,
  },
};
</script>
<template>
  <FooterTop></FooterTop>
  <FooterBottom></FooterBottom>
</template>

<style scoped lang="scss">
section {
  padding: 120px 0;
}
</style>
