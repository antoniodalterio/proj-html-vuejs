<script>
export default {
  name: 'MainContent4',
};
</script>
<template>
  <section>
    <div class="ad-container position-relative">
      <div class="box-1 position-relative shadow-lg">
        <img
          src="../../assets/img/person-with-long-curly-hair-PZ99QM2-2x.jpg"
          alt=""
          class="w-100"
        />
        <div
          class="text-center z-3 position-absolute info text-white text-uppercase w-50"
        >
          <h2>280</h2>
          <p>Project</p>
          <div class="row pt-4">
            <div class="col-6">
              <h4>+3,500</h4>
              <p>Users Comments</p>
            </div>
            <div class="col-6">
              <h4>100%</h4>
              <p>Happy Clients</p>
            </div>
          </div>
        </div>
      </div>

      <div class="box-2 position-absolute shadow-lg">
        <h2 class="lh-base">
          We<span class="different-test"> Love </span>What We Do
        </h2>
        <div class="d-flex my-2">
          <div class="ad-border"></div>
          <div class="ad-border-2"></div>
        </div>
        <p class="my-4">
          Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia, there live the blind texts. Separated they
          live in Bookmarksgrove right al the coast of the Semantics, a large
          language ocean.Separated they live in Bookmarksgrove.
        </p>
        <div>
          <p><font-awesome-icon icon="fa-solid fa-check" /></p>
          <p><font-awesome-icon icon="fa-solid fa-check" /></p>
          <p><font-awesome-icon icon="fa-solid fa-check" /></p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
@use '../../assets/scss/_partials/variables' as *;

section {
  background-color: $bg-secondary;
}

.box-1,
.box-2 {
  width: 55%;
  border-radius: 20px;
}

.box-1 {
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

  img {
    border-radius: 20px;
  }
}

.info {
  top: 50%;
  left: 45%;
  transform: translate(-50%, -50%);
  h2 {
    font-size: 90px;
  }

  p {
    color: #ffffff;
  }
}

.box-2 {
  background-color: white;
  padding: 100px;
  top: 100px;
  right: 0;

  h2 {
    padding-right: 300px;
  }
  p {
    padding-right: 200px;
  }
}
</style>
