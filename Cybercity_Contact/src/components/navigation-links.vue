<template>
  <nav class="navigation-links-nav" v-bind:class="rootClassName">
    <span class="navigation-links-text">{{ link1 }}</span>
    <a href="http://contact.military.th" class="navigation-links-navlink">
      {{ link2 }}
    </a>
  </nav>
</template>

<script>
export default {
  name: 'NavigationLinks',
  props: {
    rootClassName: String,
    link2: {
      type: String,
      default: 'ช่องทางการติดต่อ',
    },
    link1: {
      type: String,
      default: 'เกี่ยวกับเรา',
    },
  },
}
</script>

<style scoped>
.navigation-links-nav {
  flex: 0 0 auto;
  display: flex;
  align-items: center;
  flex-direction: row;
}
.navigation-links-text {
  color: #000000;
  cursor: pointer;
  font-size: 16px;
  font-style: normal;
  transition: 0.3s;
  font-family: IBM Plex Sans Condensed;
  font-weight: 600;
  line-height: 1.3;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  text-decoration: none;
}
.navigation-links-navlink {
  color: #000000;
  cursor: pointer;
  font-size: 16px;
  font-style: normal;
  transition: 0.3s;
  font-family: IBM Plex Sans Condensed;
  font-weight: 600;
  line-height: 1.3;
  margin-left: 41px;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  text-decoration: none;
}








.navigation-links-root-class-name8 {
  right: 93px;
  bottom: 71px;
  position: absolute;
}
@media(max-width: 1600px) {
  .navigation-links-root-class-name8 {
    right: 93px;
    bottom: 71px;
    position: absolute;
  }
}
@media(max-width: 1200px) {
  .navigation-links-text {
    font-size: 30px;
  }
  .navigation-links-navlink {
    font-size: 30px;
  }
}
@media(max-width: 767px) {
  .navigation-links-nav {
    align-items: flex-start;
    flex-direction: column;
  }
}
</style>
