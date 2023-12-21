<script>
export default {
  name: 'FooterTop',
  data() {
    return {
      // Array Quick Links

      links: [
        {
          title: 'Carrers',
          link: '#',
          target: '_self',
        },
        {
          title: 'News',
          link: '#',
          target: '_self',
        },
        {
          title: 'Term of use',
          link: '#',
          target: '_self',
        },
        {
          title: 'Privacy Projects',
          link: '#',
          target: '_self',
        },
        {
          title: 'About',
          link: '#',
          target: '_self',
        },
        {
          title: 'Contact',
          link: '#',
          target: '_self',
        },
      ],

      // Array Contact

      contact: [
        {
          info: 'Patricia C. Amedee 4401 Waldeck Street Crapevine Nashville, TX 76051',
        },
        {
          info: 'info@yourdamain.com',
        },
        {
          info: '+99 (0) 101 0000 888',
        },
      ],
    };
  },
};
</script>
<template>
  <section>
    <!-- container con row -->
    <div class="ad-container row">
      <!-- col1 -->
      <div class="col-3">
        <img src="../../assets/img/cropped-Group-39-2x.png" alt="Logo" />
        <p class="mt-4 pe-4">
          White the Iovely valley teems with vapour around me, and the meridian
          sun strikes the upper surface of the impenetrable foliage of my
          trees.While the lovely valley teems with vapcur around me.
        </p>
      </div>
      <!-- col1 -->

      <!-- col2 -->
      <div class="col-3">
        <h4 class="text-uppercase fw-bolder">Quick Links</h4>
        <div class="d-flex mb-3">
          <div class="ad-border"></div>
          <div class="ad-border-2"></div>
        </div>
        <ul class="mt-5 text-center p-0">
          <li v-for="li in this.links" class="list-group">
            <a :href="li.link" :target="li.target">{{ li.title }}</a>
          </li>
        </ul>
      </div>
      <!-- col2 -->

      <!-- col3 -->
      <div class="col-3">
        <h4 class="text-uppercase fw-bolder">Contact</h4>
        <div class="d-flex mb-3">
          <div class="ad-border"></div>
          <div class="ad-border-2"></div>
        </div>
        <ul class="mt-5 ps-0 pe-5">
          <li v-for="li in this.contact" class="list-group mb-2">
            <p class="pe-4">{{ li.info }}</p>
          </li>
        </ul>
      </div>
      <!-- col3 -->

      <!-- col4 -->
      <div class="col-3">
        <h4 class="text-uppercase fw-bolder">Location on map</h4>
        <div class="d-flex">
          <div class="ad-border"></div>
          <div class="ad-border-2"></div>
        </div>
        <img src="../../assets/img/map.png" alt="map Location" class="mt-5" />
      </div>
      <!-- col4 -->
    </div>
  </section>
</template>

<style scoped lang="scss">
@use '../../assets/scss/_partials/variables' as *;

li {
  color: $p-color;
}
</style>
