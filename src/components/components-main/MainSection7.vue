<script>
export default {
  name: 'MainSection7',
  data() {
    return {
      cards: [
        // card 1
        {
          src: 'src/assets/img/serious-businesswoman-with-documents-talking-on-P9Q6LX6-1024.jpg',

          date: 'May 24, 2018',
          made: 'by Alex',
          text: 'Marketing Ideas',
        },
        // card 1

        // card 2
        {
          src: 'src/assets/img/Businessman-at-the-desk-in-his-office-resting--1024x768.jpg',

          date: 'May 24, 2018',
          made: 'by Alex',
          text: 'Marketing Ideas',
        },
        // card 2

        // card 3
        {
          src: 'src/assets/img/simple-home-office-with-tree-PBXRXYB-large-1024x768.jpg',

          date: 'May 24, 2018',
          made: 'by Alex',
          text: 'Marketing Ideas',
        },
        // card 2
      ],
    };
  },
};
</script>
<template>
  <section class="position-relative d-flex flex-column align-items-center">
    <h2 class="text-center mb-4">
      Latest News & Our <span class="different-test">Blog</span>
    </h2>
    <div class="d-flex my-4">
      <div class="ad-border"></div>
      <div class="ad-border-2"></div>
    </div>
    <ul class="row ad-container">
      <li v-for="li in cards" class="boxes col-4 position-relative list-group">
        <div class="w-100">
          <img :src="li.src" alt="" class="img-fluid rounded shadow-lg" />
        </div>

        <div
          class="badg text-start py-5 px-2 shadow-lg position-absolute bg-white"
        >
          <div class="ms-3 dot position-relative px-3">
            <p>
              {{ li.date }} <span>{{ li.made }}</span>
            </p>
            <h3>
              {{ li.text }}
            </h3>
          </div>
        </div>
      </li>
    </ul>

    <div class="text-center container-btn">
      <button class="ad-btn">view all post</button>
    </div>

    <di class="ad-container row cards gap-5 position-absolute">
      <div class="col shadow-lg">
        <div
          class="text-center d-flex flex-column align-items-center p-5 rounded"
        >
          <p>Are You Ready?</p>
          <h3 class="fw-bolder text-white">Start a New Project</h3>
          <div class="d-flex border w-50 px-3 py-2 form mt-5">
            <input
              type="text"
              class="form-control border-0 bg-transparent"
              id="autoSizingInputGroup"
              placeholder="Username"
            />
            <button class="ms-2">Submit</button>
          </div>
        </div>
      </div>
      <div class="col shadow-lg">
        <div
          class="text-center d-flex flex-column align-items-center p-5 rounded"
        >
          <p>What Are YOU Waiting for?</p>
          <h3 class="fw-bolder text-white">Let's Talk About Work</h3>
          <div class="w-50 px-3 py-2 mt-5">
            <button class="ad-btn">Start Now</button>
          </div>
        </div>
      </div>
    </di>
  </section>
</template>
<style scoped lang="scss">
@use '../../assets/scss/_partials/variables' as *;

// scss del primo container
.ad-container {
  .badg {
    width: 75%;
    border-radius: 20px;
    left: 50%;
    bottom: -90px;
    transform: translate(-50%);

    p {
      margin-bottom: 0;
    }

    h3 {
      &::before {
        content: '\2022';
        position: absolute;
        font-size: 30px;
        color: $bg-body;

        left: -5px;
        bottom: 0;
      }
    }
  }
}
// scss del primo container

.container-btn {
  margin-top: 150px;
  margin-bottom: 400px;
}

// scss del secondo container
.cards {
  bottom: -180px;
  left: 50%;
  transform: translate(-50%);

  .col {
    padding: 50px 0;
    border-radius: 20px;
    background: $gradient-primary;
    background: linear-gradient(45deg, $gradient-primary 0%, $black 100%);

    &:hover {
      background: $bg-gradient;
      background: linear-gradient(45deg, $bg-gradient 0%, $bg-body 67%);
    }
  }
  .form {
    border-radius: 50px;
    background-color: $bg-form;
    color: $p-color;

    input::placeholder {
      color: $p-color;
    }
  }
}
// scss del secondo container
</style>
