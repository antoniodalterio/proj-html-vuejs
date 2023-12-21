<script>
export default {
  name: 'jumbo',
};
</script>

<template>
  <section class="overflow-hidden">
    <div class="ad-container">
      <div class="row position-relative">
        <div class="col-5">
          <p class="text-uppercase jumbo-p">17 Years of Experience</p>
          <h2>
            Focus on your
            <span>Business</span>
          </h2>
          <p class="my-5">
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts. Separated they
            live in Bookmarksgrove right al the coast of the Semantics, a large
            language ocean.Separated they live in Bookmarksgrove.
          </p>
          <!-- button -->
          <button class="ad-btn my-5">Read More</button>

          <!-- social -->
          <div class="socials-string fw-bolder text-uppercase mb-5">
            <span><a href="#">Facebook - </a></span>
            <span><a href="#">instagram - </a></span>
            <span><a href="#">youtube - </a></span>
            <span><a href="#">X</a></span>
          </div>

          <div class="button-select d-flex position-absolute">
            <div><button>1</button></div>
            <div><button>2</button></div>
            <div><button>3</button></div>
          </div>
        </div>

        <div class="col">
          <img
            src="../../assets/img/Group-35-2x.png"
            alt=""
            class="position-absolute"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
@use '../../assets/scss/_partials/variables' as *;
@use '../../assets/scss/_partials/common' as *;

section {
  background-color: $bg-secondary;

  .col-5 {
    margin-top: 150px;

    .jumbo-p {
      letter-spacing: 1rem;
      font-size: 12px;
      color: $bg-body;
    }

    h2 {
      font-weight: bolder;
      padding: 0 200px 0 0;
      font-size: 50px;

      span {
        color: $bg-body;
      }
    }

    .socials-string {
      font-size: 12px;
    }

    .button-select {
      bottom: 50px;
      left: 40%;
      z-index: 10;
    }
  }

  .col {
    img {
      scale: 1.6;
      top: 10px;
      object-fit: cover;
      right: 10px;

      height: 100%;
    }
  }
}
</style>
