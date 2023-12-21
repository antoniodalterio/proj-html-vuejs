<script>
export default {
  name: 'MainSection-8',
  data() {
    return {
      client: [
        {
          src: 'src/assets/img/client-1-2x.png',
        },
        {
          src: 'src/assets/img/client-9-2x.png',
        },
        {
          src: 'src/assets/img/client-7-2x.png',
        },
        {
          src: 'src/assets/img/client-3-2x.png',
        },
        {
          src: 'src/assets/img/client-4-2x.png',
        },
        {
          src: 'src/assets/img/client-5-2x.png',
        },
      ],
    };
  },
};
</script>
<template>
  <div class="sponsor">
    <div class="ad-container row">
      <div v-for="img in client" class="col-2">
        <img :src="img.src" alt="" />
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
@use '../../assets/scss/_partials/variables' as *;

.sponsor {
  background-color: $bg-secondary;
  .ad-container {
    padding-top: 250px;
    padding-bottom: 150px;
  }
}
</style>
