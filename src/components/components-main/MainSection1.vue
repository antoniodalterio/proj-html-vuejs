<script>
import {
  faGaugeHigh,
  faCloud,
  faTabletScreenButton,
  faStopwatch,
} from '@fortawesome/free-solid-svg-icons';
export default {
  name: 'section1',
  data() {
    return {
      list: [
        {
          name: 'Speed Optimization',
          overview:
            'Far far away, behind the word mountains, far from the countries vokal a Separated...',

          icon: faGaugeHigh,
        },
        {
          name: 'Cloud Solution',
          overview:
            'Far far away, behind the word mountains, far from the countries vokal a Separated...',

          icon: faCloud,
        },
        {
          name: 'Website Designe',
          overview:
            'Far far away, behind the word mountains, far from the countries vokal a Separated...',

          icon: faTabletScreenButton,
        },
        {
          name: 'Online Marketing',
          overview:
            'Far far away, behind the word mountains, far from the countries vokal a Separated...',

          icon: faStopwatch,
        },
      ],
    };
  },
};
</script>
<template>
  <section>
    <div class="ad-container">
      <div class="row">
        <div class="col-4 my-3">
          <h2 class="lh-base">
            We Are Here To Make Your <span>Website</span> Look More
            <span>Elegant</span> And Stylish!
          </h2>

          <button class="ad-btn my-5">view all</button>
        </div>

        <div class="col-8 d-flex align-items-center">
          <ul class="d-flex flex-wrap gap-2">
            <li
              v-for="li in this.list"
              class="list-group shadow-lg p-5 m-2 bg-body-tertiary rounded"
            >
              <div class="icon mb-2">
                <font-awesome-icon :icon="li.icon" />
              </div>
              <div class="title mb-2">{{ li.name }}</div>
              <p>
                {{ li.overview }}
              </p>
            </li>
          </ul>
          <div class="vertical-text px-3">
            17 years of experience helping people for best solutions
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
@use '../../assets/scss/_partials/variables' as *;
@use '../../assets/scss/_partials/common' as *;

.row {
  align-items: center;

  h2 {
    padding-right: 155px;
    font-size: 40px;

    span {
      color: $bg-body;
    }
  }

  li {
    width: calc(100% / 2 - 20px);
  }

  .title {
    font-size: 22px;
  }
  .icon {
    color: $bg-body;
    font-size: 50px;
  }
}
</style>
