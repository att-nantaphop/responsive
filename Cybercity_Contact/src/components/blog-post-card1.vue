<template>
  <div class="blog-post-card1-blog-post-card">
    <img
      :alt="image_alt"
      :src="image_src"
      image_src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDd8fHBvcnRyYWl0fGVufDB8fHx8MTYyNjM3ODk3Mg&amp;ixlib=rb-1.2.1&amp;h=1000"
      class="blog-post-card1-image"
    />
    <div class="blog-post-card1-container">
      <div class="blog-post-card1-container1">
        <span class="blog-post-card1-text">{{ text1 }}</span>
        <span class="blog-post-card1-text1">{{ text2 }}</span>
      </div>
      <h1 class="blog-post-card1-text2">{{ heading }}</h1>
      <span class="blog-post-card1-text3">{{ text }}</span>
      <div class="blog-post-card1-container2">
        <div class="blog-post-card1-profile">
          <img
            :alt="image_alt1"
            :src="image_src1"
            class="blog-post-card1-image1"
          />
          <span class="blog-post-card1-text4">{{ text4 }}</span>
        </div>
        <span class="blog-post-card1-text5">{{ text3 }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BlogPostCard1',
  props: {
    text3: {
      type: String,
      default: 'Read More ->',
    },
    heading: {
      type: String,
      default: 'ออท.รัฐอิสราเอล ประจำประเทศไทย เข้าเยี่ยมคำนับ  รมช.กห.',
    },
    image_src1: {
      type: String,
      default: '/playground_assets/default-profile-icon-16-200h.jpg',
    },
    text: {
      type: String,
      default:
        ' นาง ออร์นา ซากิฟ เอกอัครราชทูตรัฐอิสราเอล ประจำประเทศไทย เข้าเยี่ยมคำนับ พลเอก ชัยชาญ ช้างมงคล รัฐมนตรีช่วยว่าการกระทรวงกลาโหม-เพื่อแนะนำตัวในโอกาสเข้ารับหน้าที่ เมื่อวันที่ ๑๗ สิงหาคม ๒๕๖๕ ณ ห้องกัลยาณไมตรี ในศาลาว่าการกลาโหม',
    },
    image_alt1: {
      type: String,
      default: 'profile',
    },
    text1: {
      type: String,
      default: 'alliance',
    },
    image_src: {
      type: String,
      default: '/playground_assets/screenshot%202022-08-31%20222057-1500w.png',
    },
    text2: {
      type: String,
      default: '3 days ago',
    },
    text4: {
      type: String,
      default: 'Soldier_TH',
    },
    image_alt: {
      type: String,
      default: 'image',
    },
  },
}
</script>

<style scoped>
.blog-post-card1-blog-post-card {
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
.blog-post-card1-blog-post-card:hover {
  transform: scale(1.02);
}
.blog-post-card1-image {
  width: 350px;
  height: 350px;
  object-fit: cover;
  flex-shrink: 0;
  border-radius: 0px;
}
.blog-post-card1-container {
  display: flex;
  align-items: flex-start;
  padding-top: var(--dl-space-space-twounits);
  padding-left: var(--dl-space-space-twounits);
  padding-right: var(--dl-space-space-twounits);
  flex-direction: column;
  padding-bottom: var(--dl-space-space-twounits);
  justify-content: space-between;
}
.blog-post-card1-container1 {
  width: 100%;
  display: flex;
  align-items: flex-start;
  margin-bottom: var(--dl-space-space-halfunit);
  flex-direction: row;
  justify-content: space-between;
}
.blog-post-card1-text {
  color: rgb(89, 89, 89);
  font-weight: 600;
  text-transform: uppercase;
}
.blog-post-card1-text1 {
  color: #595959;
  font-weight: 300;
}
.blog-post-card1-text2 {
  margin-bottom: var(--dl-space-space-twounits);
}
.blog-post-card1-text3 {
  color: rgb(89, 89, 89);
  font-size: 1.25rem;
  margin-bottom: var(--dl-space-space-twounits);
}
.blog-post-card1-container2 {
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
}
.blog-post-card1-profile {
  display: flex;
  align-items: center;
}
.blog-post-card1-image1 {
  width: var(--dl-size-size-small);
  height: var(--dl-size-size-small);
  object-fit: cover;
  border-radius: var(--dl-radius-radius-round);
}
.blog-post-card1-text4 {
  font-style: normal;
  font-weight: 600;
  margin-left: var(--dl-space-space-halfunit);
}
.blog-post-card1-text5 {
  color: var(--dl-color-scheme-black);
  font-style: normal;
  font-weight: 500;
}
@media(max-width: 1200px) {
  .blog-post-card1-text2 {
    width: 710px;
  }
}
@media(max-width: 991px) {
  .blog-post-card1-blog-post-card {
    flex-direction: row;
    justify-content: space-between;
  }
}
@media(max-width: 767px) {
  .blog-post-card1-blog-post-card {
    flex-direction: column;
  }
  .blog-post-card1-image {
    width: 100%;
  }
}
@media(max-width: 479px) {
  .blog-post-card1-container2 {
    padding-left: 0px;
    padding-right: 0px;
  }
  .blog-post-card1-text5 {
    width: auto;
  }
}
</style>
