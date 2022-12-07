<template>
  <div class="blog-post-card-blog-post-card">
    <img
      :alt="image_alt"
      :src="image_src"
      image_src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDd8fHBvcnRyYWl0fGVufDB8fHx8MTYyNjM3ODk3Mg&amp;ixlib=rb-1.2.1&amp;h=1000"
      class="blog-post-card-image"
    />
    <div class="blog-post-card-container">
      <div class="blog-post-card-container1">
        <span class="blog-post-card-text">{{ text1 }}</span>
        <span class="blog-post-card-text1">{{ text2 }}</span>
      </div>
      <h1 class="blog-post-card-text2">{{ heading }}</h1>
      <span class="blog-post-card-text3">{{ text }}</span>
      <div class="blog-post-card-container2">
        <div class="blog-post-card-profile">
          <img
            :alt="image_alt1"
            :src="image_src1"
            class="blog-post-card-image1"
          />
          <span class="blog-post-card-text4">{{ text4 }}</span>
        </div>
        <span class="blog-post-card-text5">{{ text3 }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BlogPostCard',
  props: {
    image_src: {
      type: String,
      default: '/playground_assets/maxresdefault.jpg',
    },
    text1: {
      type: String,
      default: 'JOKE',
    },
    image_alt: {
      type: String,
      default: 'image',
    },
    heading: {
      type: String,
      default:
        'ข่าวด่วน! นักแสดงตลกชายชื่อดังเเห่งเมืองโลกอนาคต โหน่ง ชะชะช่า โดนใบเเดง',
    },
    text2: {
      type: String,
      default: '3 days ago',
    },
    image_src1: {
      type: String,
      default: '/playground_assets/default-profile-icon-16-200h.jpg',
    },
    text3: {
      type: String,
      default: 'Read More ->',
    },
    text: {
      type: String,
      default:
        'จะเป็นอย่างไหร่ เมื่อนักเเสดงชายที่เป็นตลกชื่อดังของประเทศไทย จับได้ใบเเดงในประเพณีเกณฑ์ทหาร ประจำปี 2765 ของเขตสุลล่าน เมืองไซเบอร์ซิตี้ สามารถอ่านข่าวเพิ่มเติมได้ที่นี้',
    },
    text4: {
      type: String,
      default: 'Soldier_TH',
    },
    image_alt1: {
      type: String,
      default: 'profile',
    },
  },
}
</script>

<style scoped>
.blog-post-card-blog-post-card {
  width: 100%;
  display: flex;
  position: relative;
  max-width: var(--dl-size-size-maxwidth);
  box-shadow: 4px 4px 10px 0px rgba(18, 18, 18, 0.1);
  transition: 0.3s;
  align-items: stretch;
  flex-direction: row;
  justify-content: space-between;
}
.blog-post-card-blog-post-card:hover {
  transform: scale(1.02);
}
.blog-post-card-image {
  width: 350px;
  height: 350px;
  object-fit: cover;
  flex-shrink: 0;
  border-radius: 0px;
}
.blog-post-card-container {
  display: flex;
  align-items: flex-start;
  padding-top: var(--dl-space-space-twounits);
  padding-left: var(--dl-space-space-twounits);
  padding-right: var(--dl-space-space-twounits);
  flex-direction: column;
  padding-bottom: var(--dl-space-space-twounits);
  justify-content: space-between;
}
.blog-post-card-container1 {
  width: 100%;
  display: flex;
  align-items: flex-start;
  margin-bottom: var(--dl-space-space-halfunit);
  flex-direction: row;
  justify-content: space-between;
}
.blog-post-card-text {
  color: #595959;
  font-weight: 600;
  text-transform: uppercase;
}
.blog-post-card-text1 {
  color: #595959;
  font-weight: 300;
}
.blog-post-card-text2 {
  margin-bottom: var(--dl-space-space-twounits);
}
.blog-post-card-text3 {
  color: #595959;
  font-size: 1.25rem;
  margin-bottom: var(--dl-space-space-twounits);
}
.blog-post-card-container2 {
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
}
.blog-post-card-profile {
  display: flex;
  align-items: center;
}
.blog-post-card-image1 {
  width: var(--dl-size-size-small);
  height: var(--dl-size-size-small);
  object-fit: cover;
  border-radius: var(--dl-radius-radius-round);
}
.blog-post-card-text4 {
  font-style: normal;
  font-weight: 600;
  margin-left: var(--dl-space-space-halfunit);
}
.blog-post-card-text5 {
  color: var(--dl-color-scheme-black);
  font-style: normal;
  font-weight: 500;
}
@media(max-width: 1200px) {
  .blog-post-card-text2 {
    width: 710px;
  }
}
@media(max-width: 991px) {
  .blog-post-card-blog-post-card {
    flex-direction: row;
    justify-content: space-between;
  }
}
@media(max-width: 767px) {
  .blog-post-card-blog-post-card {
    flex-direction: column;
  }
  .blog-post-card-image {
    width: 100%;
  }
}
@media(max-width: 479px) {
  .blog-post-card-container2 {
    padding-left: 0px;
    padding-right: 0px;
  }
  .blog-post-card-text5 {
    width: auto;
  }
}
</style>
