<script>
import HeaderTop from './components-header/HeaderTop.vue';
import HeaderBottom from './components-header/HeaderBottom.vue';
export default {
  name: 'HeaderApp',
  components: {
    HeaderTop,
    HeaderBottom,
  },
};
</script>
<template>
  <HeaderTop></HeaderTop>
  <HeaderBottom></HeaderBottom>
</template>
