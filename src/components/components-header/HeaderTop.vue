<script>
export default {
  name: 'HeaderTop',
  data() {
    return {};
  },
};
</script>
<template>
  <header class="bg-dark text-white py -1">
    <!-- contenitore HeaderTop -->
    <div class="ad-container d-flex justify-content-between align-items-center">
      <!-- div col 1 -->
      <div>
        <span><font-awesome-icon icon="fa-solid fa-phone" /></span>
        <span class="mx-3">(001) 88451234 88455438</span>
      </div>
      <!-- div col 1 -->

      <!-- ul col 2 socials -->
      <ul class="d-flex m-0 gap-2">
        <!-- facebook -->
        <li class="list-group">
          <a href="#"><font-awesome-icon icon="fa-brands fa-facebook-f" /></a>
        </li>

        <!-- x-Twitter -->
        <li class="list-group">
          <a href="#"><font-awesome-icon icon="fa-brands fa-x-twitter" /></a>
        </li>

        <!-- pinterest -->
        <li class="list-group">
          <a href="#"><font-awesome-icon icon="fa-brands fa-pinterest-p" /></a>
        </li>
      </ul>
      <!-- ul col 2 socials -->
    </div>
    <!-- contenitore HeaderTop -->
  </header>
</template>
