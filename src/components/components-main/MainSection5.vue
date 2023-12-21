<script>
export default {
  name: 'MainSection5',
  data() {
    return {
      sub: [
        // Design obj
        {
          title: 'Designing',
          subTitle: 'All Designs',
          prize: '13',
          type: '/Design',
          info: [
            {
              text: 'Creative Design Enabled',
            },
            {
              text: 'Vibrant Color Usage',
            },
            {
              text: 'Eye Ca tching Design',
            },
            {
              text: 'Extreme Typography',
            },
            {
              text: 'Exceptional Design',
            },
          ],
        },
        // Design obj

        // Development obj
        {
          title: 'Development',
          subTitle: 'WordPress Projects',
          prize: '15',
          type: '/Projects',
          info: [
            {
              text: 'Creative Design Enabled',
            },
            {
              text: 'Vibrant Color Usage',
            },
            {
              text: 'Eye Ca tching Design',
            },
            {
              text: 'Extreme Typography',
            },
            {
              text: 'Exceptional Design',
            },
          ],
        },
        // Development obj

        // Seo obj
        {
          title: 'Seo',
          subTitle: 'Web Products',
          prize: '10',
          type: '/Product',
          info: [
            {
              text: 'Creative Design Enabled',
            },
            {
              text: 'Vibrant Color Usage',
            },
            {
              text: 'Eye Ca tching Design',
            },
            {
              text: 'Extreme Typography',
            },
            {
              text: 'Exceptional Design',
            },
          ],
        },
        // Seo obj
      ],
    };
  },
};
</script>
<template>
  <section>
    <div class="ad-container row align-items-center">
      <div class="col-4">
        <h2 class="lh-base pe-5">
          With<span class="different-test"> Live Chat 24/7 </span>Support
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
      </div>

      <!-- col 2 -->
      <ul class="col-8 d-flex gap-2 justify-content-end">
        <li
          v-for="li in sub"
          class="list-group text-center pt-3 boxes shadow-lg overflow-hidden"
        >
          <div class="py-3 bg-white">
            <h3 class="fw-bolder text-uppercase">{{ li.title }}</h3>
            <p>{{ li.subTitle }}</p>
          </div>

          <div class="text-white py-4">
            <span class="fs-4 me-1">$</span
            ><span class="fs-2 me-3">{{ li.prize }} </span>
            <span> {{ li.type }}</span>
          </div>

          <ul class="pt-5 pb-3 bg-white d-flex flex-column align-items-start">
            <li v-for="info in li.info" class="list-group">
              <p>
                <font-awesome-icon icon="fa-solid fa-check" class="me-3" />{{
                  info.text
                }}
              </p>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </section>
</template>
<style scoped lang="scss">
@use '../../assets/scss/_partials/variables' as *;

.boxes {
  width: calc(100% / 3 - 80px);
  background: $gradient-primary;
  background: linear-gradient(45deg, $gradient-primary 0%, $black 100%);
  margin-left: 40px;
  border-radius: 20px;

  &:hover {
    background: $bg-gradient;
    background: linear-gradient(45deg, $bg-gradient 0%, $bg-body 67%);
    cursor: pointer;
  }

  h3 {
    font-size: 30px;
  }
}
</style>
