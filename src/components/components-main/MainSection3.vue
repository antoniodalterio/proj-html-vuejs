<script>
export default {
  name: 'MainSection3',
  data() {
    return {
      images: [
        {
          src: 'src/assets/img/ina-soulis-227104-unsplash-1024x1024.jpg',
          alt: 'image 1',
        },
        {
          src: 'src/assets/img/sunisa-misa-531163-unsplash-1024x1024.jpg',
          alt: 'image 2',
        },
        {
          src: 'src/assets/img/355H-1024x1024.jpg',
          alt: 'image 3',
        },
        {
          src: 'src/assets/img/photo-1448932252197-d19750584e56-1024x1024.jpg',
          alt: 'image 4',
        },
        {
          src: 'src/assets/img/business-competition-PB366D8-1024x1024.jpg',
          alt: 'image 5',
        },
        {
          src: 'src/assets/img/cozy-sofa-in-living-room-PQR5AB9-1024x1024.jpg',
          alt: 'image 6',
        },
        {
          src: 'src/assets/img/aa9a4539-PQGJ7HU-1024x1024.jpg',
          alt: 'image 7',
        },
        {
          src: 'src/assets/img/cody-davis-253928-unsplash-1024x1024.jpg',
          alt: 'image 8',
        },
      ],
    };
  },
};
</script>
<template>
  <section class="">
    <div class="ad-container">
      <!--  row divisa in 2 colonne -->
      <div class="row">
        <div class="d-flex mb-3">
          <div class="ad-border"></div>
          <div class="ad-border-2"></div>
        </div>
        <h2 class="col-6">
          Our recent <span class="different-test">web designs</span> & some
          examples of past <span class="different-test">projects</span>
        </h2>
        <div class="d-flex my-3">
          <div class="ad-border"></div>
          <div class="ad-border-2"></div>
        </div>
        <div class="col-6 d-flex align-items-end">
          <p>
            Far far awayr behind the word mountains, far from the countries
            Vokalià end Consonantia, there live the blind texts. Separatec they
            live in Bookmarksgrove right at the coast of the Semantics, large
            language ocen.5eparèted they live in Bookmòrksgrove.Fër far behind
            the word mountèins, from the countries Vok'li& Conson&ntia, there
            live blint text'. they live in Bookrn&rksgrove.
          </p>
        </div>
      </div>
      <!--  row divisa in 2 colonne -->

      <!--  row di immagini -->

      <div class="row mt-5 position-relative align-items-center">
        <div class="row col-11">
          <div class="col-3 box" v-for="img in this.images">
            <img :src="img.src" :alt="img.alt" class="rounded" />
          </div>
        </div>

        <div class="vertical-text px-5 col">
          17 years of experience helping people for best solutions
        </div>
      </div>

      <!--  row di immagini -->

      <div class="text-center mt-5 pt-5">
        <button class="ad-btn">read more</button>
      </div>
    </div>
  </section>
</template>
<style scoped lang="scss">
h2 {
  padding-right: 150px;
}

.box {
  padding: 2px;

  img {
    width: 100%;
  }
}

.vertical-text {
  right: -50px;
}
</style>
