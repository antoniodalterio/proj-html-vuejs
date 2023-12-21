<script>
export default {
  name: 'MainSection2',
};
</script>
<template>
  <section class="">
    <div class="row gx-0 align-items-center">
      <div class="col-7 position-relative">
        <div class="box-1 position-relative">
          <img
            src="../../assets/img/busy-architect-PYVKWM4-1024x872.jpg"
            alt=""
            class="shadow-lg"
          />
        </div>
        <div class="box-2">
          <img
            src="../../assets/img/businesswoman-analysing-document-P8WSNMC-1024x820.jpg"
            alt=""
            class="shadow-lg"
          />
        </div>
      </div>
      <div class="col-4 p-5">
        <h2 class="lh-base">learn more about Our <span>missions</span></h2>
        <p class="my-4">
          Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia, there live the blind texts. Separated they
          live in Bookmarksgrove right al the coast of the Semantics, a large
          language ocean.Separated they live in Bookmarksgrove.
        </p>

        <button class="ad-btn my-3">view all</button>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
@use '../../assets/scss/_partials/variables' as *;

section {
  padding: 120px 0;

  h2 {
    padding-right: 300px;
  }
  .box-1 {
    width: 784px;
    height: 90%;

    img {
      width: 100%;
      height: 100%;
      border-radius: 20px;
    }

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      border-radius: 20px;
      width: 100%;
      height: 100%;
      background: rgb(149, 225, 96);
      background: linear-gradient(
        45deg,
        $bg-gradient-trasparent 0%,
        $bg-body-trasparent 67%
      );
    }
  }
  .box-2 {
    width: 784px;
    height: 90%;

    position: absolute;
    top: 100px;
    left: 230px;

    img {
      width: 100%;
      height: 100%;
      border-radius: 20px;
    }
  }

  h2 {
    font-size: 40px;
    span {
      color: $bg-body;
    }
  }
}
</style>
