<template>
  <header
    data-role="Header"
    class="navigation-header"
    v-bind:class="rootClassName"
  >
    <a href="http://127.0.0.1" class="navigation-navlink">
      <img :alt="image_alt" :src="image_src" class="navigation-image" />
    </a>
    <a href="http://127.0.0.1" class="navigation-text">{{ text21 }}</a>
    <a href="http://127.0.0.1" class="navigation-navlink1">{{ text2 }}</a>
    <navigation-links
      rootClassName="navigation-links-root-class-name8"
    ></navigation-links>
  </header>
</template>

<script>
import NavigationLinks from './navigation-links'

export default {
  name: 'Navigation',
  props: {
    rootClassName: String,
    image_alt: {
      type: String,
      default: 'image',
    },
    image_src: {
      type: String,
      default: '/playground_assets/newlogo.png',
    },
    text21: {
      type: String,
      default: 'กระทรวงกลาโหม',
    },
    text2: {
      type: String,
      default: 'MINISTRY OF DEFENCE',
    },
  },
  components: {
    NavigationLinks,
  },
}
</script>

<style scoped>
.navigation-header {
  top: 0;
  width: 100%;
  height: 179px;
  display: flex;
  z-index: 100;
  position: absolute;
  align-items: center;
  justify-content: center;
}
.navigation-navlink {
  display: contents;
}
.navigation-image {
  top: 20px;
  left: 60px;
  width: 140px;
  height: 132px;
  position: absolute;
  object-fit: cover;
  text-decoration: none;
}
.navigation-text {
  top: 47px;
  left: 246px;
  color: #000000;
  bottom: -53px;
  position: absolute;
  font-size: 29px;
  font-style: normal;
  font-family: Exo 2;
  font-weight: 700;
  text-transform: uppercase;
  text-decoration: none;
}
.navigation-navlink1 {
  top: 81px;
  left: 247px;
  color: #000000;
  bottom: -53px;
  position: absolute;
  font-size: 29px;
  font-style: normal;
  font-family: Exo 2;
  font-weight: 700;
  text-transform: uppercase;
  text-decoration: none;
}


@media(max-width: 1600px) {
  .navigation-header {
    height: 179px;
  }
  .navigation-image {
    top: 20px;
    left: 60px;
  }
  .navigation-text {
    top: 47px;
    left: 246px;
    max-width: auto;
    min-width: auto;
    max-height: auto;
    min-height: auto;
  }
  .navigation-navlink1 {
    top: 81px;
    left: 247px;
  }
  .navigation-root-class-name1 {
    background-color: rgba(217, 217, 217, 0);
  }
}
@media(max-width: 1200px) {
  .navigation-image {
    top: 13px;
    left: 47px;
  }
  .navigation-text {
    left: 171px;
    bottom: -53px;
  }
  .navigation-navlink1 {
    left: 171px;
    bottom: -53px;
  }
}
</style>
