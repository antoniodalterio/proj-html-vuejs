<script>
export default {
  name: 'MainSection6',
  data() {
    return {
      comments: [
        {
          name: 'Lissa Durbin',
          comment:
            'When it comes to barbequing, there are two main schools of thought for the techniques that you can use. Freshly scrambled eggs with applewood  smoked bacon -are amazing!',

          src: 'src/assets/img/businesswoman-analysing-document-P8WSNMC-1024x820.jpg',

          role: 'Client',
        },
      ],
    };
  },
};
</script>
<template>
  <section class="position-relative">
    <ul class="content position-relative z-1">
      <li
        v-for="li in comments"
        class="row flex-column align-items-center text-center"
      >
        <h2 class="different-test">
          <font-awesome-icon icon="fa-solid fa-quote-left" />
        </h2>
        <p class="fs-5 mt-4 text-white">
          <em>
            {{ li.comment }}
          </em>
        </p>

        <div class="box-img mt-5">
          <img :src="li.src" alt="Client Photo" />
        </div>

        <h3 class="different-test mt-4">{{ li.name }}</h3>
        <p class="fw-bolder text-white">{{ li.role }}</p>
      </li>
    </ul>
  </section>
</template>
<style scoped lang="scss">
@use '../../assets/scss/_partials/variables' as *;

section {
  background-image: url('../../assets/img/four-businesspeople-in-a-boardroom-with-paperwork-PC4V8H4.jpg');
  background-position: center;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: $black-trasparent;
  }

  .content {
    width: 42%;
    margin: auto;

    .box-img {
      img {
        height: 100px;
        width: 100px;
        border-radius: 100%;
        border: 2px solid white;
      }
    }
  }
}
</style>
