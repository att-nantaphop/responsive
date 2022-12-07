<template>
  <div class="speaker-card4-speaker-card">
    <div class="speaker-card4-image-container">
      <img
        :alt="image_alt"
        :src="image_src"
        loading="eager"
        class="speaker-card4-image"
      />
      <div class="speaker-card4-read-more-container">
        <span class="speaker-card4-hint">{{ hint }}</span>
        <svg viewBox="0 0 1024 1024" class="speaker-card4-icon">
          <path
            d="M621.254 877.254l320-320c24.994-24.992 24.994-65.516 0-90.51l-320-320c-24.994-24.992-65.516-24.992-90.51 0-24.994 24.994-24.994 65.516 0 90.51l210.746 210.746h-613.49c-35.346 0-64 28.654-64 64s28.654 64 64 64h613.49l-210.746 210.746c-12.496 12.496-18.744 28.876-18.744 45.254s6.248 32.758 18.744 45.254c24.994 24.994 65.516 24.994 90.51 0z"
          ></path>
        </svg>
      </div>
    </div>
    <span class="speaker-card4-first-name">{{ firstName }}</span>
    <span class="speaker-card4-last-name">{{ lastName }}</span>
    <span class="speaker-card4-text">{{ text }}</span>
  </div>
</template>

<script>
export default {
  name: 'SpeakerCard4',
  props: {
    firstName: {
      type: String,
      default: 'พ.อ.ประเสริฐ',
    },
    text: {
      type: String,
      default: 'เลขารัฐมนตรีกระทรวงมหาดไทย',
    },
    image_alt: {
      type: String,
      default: 'image',
    },
    lastName: {
      type: String,
      default: 'ดวงดีวังวล',
    },
    hint: {
      type: String,
      default: 'read more',
    },
    image_src: {
      type: String,
      default: '/playground_assets/4-300w.png',
    },
  },
}
</script>

<style scoped>
.speaker-card4-speaker-card {
  display: flex;
  position: relative;
  align-items: flex-start;
  flex-direction: column;
}
.speaker-card4-image-container {
  width: 100%;
  height: 100%;
  display: flex;
  position: relative;
  min-width: 255px;
  min-height: 255px;
  align-items: flex-end;
  margin-bottom: var(--dl-space-space-unit);
  flex-direction: column;
  justify-content: flex-end;
}
.speaker-card4-image {
  left: 0px;
  width: 100%;
  bottom: 0px;
  height: 100%;
  position: absolute;
  object-fit: cover;
}
.speaker-card4-read-more-container {
  flex: 1;
  width: 100%;
  cursor: pointer;
  display: flex;
  opacity: 0;
  z-index: 1;
  transition: 0.3s;
  align-items: flex-end;
  padding-right: 20px;
  flex-direction: row;
  padding-bottom: 18px;
  justify-content: flex-end;
  background-color: rgba(251, 39, 90, 0.6);
}
.speaker-card4-read-more-container:hover {
  opacity: 1;
}
.speaker-card4-hint {
  color: var(--dl-color-scheme-white);
  font-style: normal;
  font-weight: 600;
  line-height: 1.3;
  margin-right: 11px;
}
.speaker-card4-icon {
  fill: var(--dl-color-scheme-white);
  width: 21px;
  height: 21px;
}
.speaker-card4-first-name {
  font-size: 30px;
  font-style: normal;
  font-weight: 700;
  line-height: 1.1;
}
.speaker-card4-last-name {
  font-size: 30px;
  font-style: normal;
  font-weight: 700;
  line-height: 1.1;
  margin-bottom: var(--dl-space-space-halfunit);
}
.speaker-card4-text {
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
}
@media(max-width: 1600px) {
  .speaker-card4-first-name {
    line-height: 1.1;
  }
  .speaker-card4-last-name {
    font-size: 30px;
    font-style: normal;
    font-weight: 700;
    line-height: 1.1;
  }
  .speaker-card4-text {
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
  }
}
</style>
