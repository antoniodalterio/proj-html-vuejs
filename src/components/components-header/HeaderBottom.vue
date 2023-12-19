<script>
export default {
  name: 'HeaderBottom',
  data() {
    return {
      nav: [
        {
          name: 'Home',
          link: '#',
          target: '_self',
        },
        {
          name: 'About',
          link: '#',
          target: '_self',
        },
        {
          name: 'Servicies',
          link: '#',
          target: '_self',
        },
        {
          name: 'Showcase',
          link: '#',
          target: '_self',
        },
        {
          name: 'Blog',
          link: '#',
          target: '_self',
        },
        {
          name: 'Contact',
          link: '#',
          target: '_self',
        },
      ],

      isActive: false,
    };
  },
  methods: {
    showInput() {
      this.isActive = !this.isActive;
      console.log(this.isActive);
    },
  },
  computed: {
    display() {
      if (this.isActive) {
        return 'd-inline-block';
      } else return 'd-none';
    },
  },
};
</script>
<template>
  <div class="container py-3 d-flex justify-content-between align-items-center">
    <img src="../../assets/img/cropped-Group-39-2x.png" alt="Logo" />
    <ul class="d-flex gap-4 my-0">
      <li v-for="li in nav" class="list-group">
        <a :href="li.link" :target="li.target">{{ li.name }}</a>
      </li>
    </ul>
    <div class="d-flex gap-4">
      <button class="ad-btn">purchase</button>
      <div class="d-flex align-items-center">
        <div class="mx-2 icon-glass" @click="showInput()">
          <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
        </div>
        <input
          type="text"
          name="search-area"
          id="search"
          class="border-0 bg-trasparent col-auto"
          :class="display"
          @keyup.enter="showInput()"
        />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use '../../assets/scss/_partials/variables' as *;
.icon-glass {
  color: $bg-body;
}

input {
  outline: 1px solid $bg-body;
}
</style>
