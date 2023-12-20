<script>
import HeaderTop from './components-header/HeaderTop.vue';
import HeaderBottom from './components-header/HeaderBottom.vue';
import Jumbo from './components-header/Jumbo.vue';
export default {
  name: 'HeaderApp',
  components: {
    HeaderTop,
    HeaderBottom,
    Jumbo,
  },
};
</script>
<template>
  <HeaderTop></HeaderTop>
  <HeaderBottom></HeaderBottom>
  <Jumbo></Jumbo>
</template>
