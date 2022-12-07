<template>
  <div class="home-container">
    <app-navigation rootClassName="navigation-root-class-name1"></app-navigation>
    <main class="home-main">
      <div class="home-hero section-container">
        <h1 class="home-text">
          <span class="home-text01">กระทรวงกลาโหม ประเทศไทย</span>
          <br />
          <span class="home-text03">ยินดีต้อนรับ</span>
          <br />
        </h1>
        <div class="home-max-width max-content-container">
          <div>
            <router-link
            to="/"
            class="home-primary button-primary button-lg button"
          >
            เข้าสู่เว็บไซต์
          </router-link>
          </div>
          <div class="home-btns-container">
            <a
              href="https://th.wikipedia.org/wiki/%E0%B8%81%E0%B8%A3%E0%B8%B0%E0%B8%97%E0%B8%A3%E0%B8%A7%E0%B8%87%E0%B8%81%E0%B8%A5%E0%B8%B2%E0%B9%82%E0%B8%AB%E0%B8%A1_(%E0%B8%9B%E0%B8%A3%E0%B8%B0%E0%B9%80%E0%B8%97%E0%B8%A8%E0%B9%84%E0%B8%97%E0%B8%A2)"
              target="_blank"
              rel="noreferrer noopener"
              class="home-secondary button button-outline button-lg-border"
            >
              เรียนรู้เพิ่มเติม
            </a>
          </div>
        </div>
      </div>
      <div class="home-speakers section-container">
        <div class="home-max-width1 max-content-container">
          <div class="home-heading-container">
            <h1 class="home-text05">ทำเนียบผู้บังคับบัญชา กระทรวงกลาโหม</h1>
            <span class="home-text06">
              COMMANDERS OF the permanent secretary For defence
            </span>
          </div>
          <div class="home-speakers-container">
            <speaker-card
              rootClassName="speaker-card-root-class-name"
            ></speaker-card>
            <speaker-card1></speaker-card1>
            <speaker-card3></speaker-card3>
            <speaker-card4></speaker-card4>
          </div>
        </div>
      </div>
      <div class="home-numbers-banner section-container">
        <div class="home-container1 max-content-container">
          <div class="home-heading-container1">
            <span class="home-text07">
              ตลอดระยะเวลาที่ผ่านมา
              กระทรวงกลาโหมทำอะไรให้กับประชาชนไซเบอร์ซิตี้ไปเเล้วบ้าง
            </span>
            <h1 class="home-text08">ผลงานของกระทรวงกลาโหม Cybercity</h1>
          </div>
          <div class="home-numbers-container">
            <numbers-card></numbers-card>
            <numbers-card
              text="years"
              number="12"
              image_src="/playground_assets/interface%20time%20reset-200h.png"
            ></numbers-card>
            <numbers-card
              text="total events"
              number="64"
              image_src="/playground_assets/interface%20calendar%20favorite-200h.png"
            ></numbers-card>
            <numbers-card
              text="companies"
              number="15,070"
              image_src="/playground_assets/shopping%20bag%20suit%20case-200h.png"
            ></numbers-card>
            <numbers-card
              text="cities"
              number="14"
              image_src="/playground_assets/travel%20map%20location%20pin-200h.png"
            ></numbers-card>
            <numbers-card
              text="speakers"
              number="1,071"
              image_src="/playground_assets/computer%20voice%20mail-200h.png"
            ></numbers-card>
          </div>
        </div>
      </div>
      <div class="home-blog">
        <span class="home-text09">ข่าวประชาสัมพันธ์และกิจกรรม</span>
        <div class="home-container2"><blog-post-card></blog-post-card></div>
        <div class="home-container3"><blog-post-card1></blog-post-card1></div>
        <div class="home-blog-post-card">
          <img
            alt="image"
            src="/playground_assets/screenshot%202022-08-31%20222456-1200w.png"
            image_src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDd8fHBvcnRyYWl0fGVufDB8fHx8MTYyNjM3ODk3Mg&amp;ixlib=rb-1.2.1&amp;h=1000"
            class="home-image"
          />
          <div class="home-container4">
            <div class="home-container5">
              <span class="home-text10">JOKE</span>
              <span class="home-text11">3 days ago</span>
            </div>
            <h1 class="home-text12">
              <span class="home-text13">
                ฮาลั่นกองร้อย! ทหารรายงานเวรหลายเวอร์ชั่น
              </span>
              <br />
              <br class="home-text15" />
            </h1>
            <span class="home-text16">
              ชาวเน็ตสุดฮาเมื่อครูฝึกสั่งพลทหารรายงานการเข้าเวรในแบบฉบับหลากหลายภาษา
            </span>
            <div class="home-container6">
              <div class="home-profile">
                <img
                  alt="profile"
                  src="/playground_assets/default-profile-icon-16-200h.jpg"
                  class="home-image1"
                />
                <span class="home-text17">Soldier_TH</span>
              </div>
              <span class="home-text18">Read More -&gt;</span>
            </div>
          </div>
        </div>
      </div>
    </main>
    <app-footer rootClassName="footer-root-class-name"></app-footer>
  </div>
</template>

<script>
import AppNavigation from '../components/navigation'
import SpeakerCard from '../components/speaker-card'
import SpeakerCard1 from '../components/speaker-card1'
import SpeakerCard3 from '../components/speaker-card3'
import SpeakerCard4 from '../components/speaker-card4'
import NumbersCard from '../components/numbers-card'
import BlogPostCard from '../components/blog-post-card'
import BlogPostCard1 from '../components/blog-post-card1'
import AppFooter from '../components/footer'

export default {
  name: 'Home',
  components: {
    AppNavigation,
    SpeakerCard,
    SpeakerCard1,
    SpeakerCard3,
    SpeakerCard4,
    NumbersCard,
    BlogPostCard,
    BlogPostCard1,
    AppFooter,
  },
  metaInfo: {
    title: 'MINISTRY OF DEFENCE',
    meta: [
      {
        property: 'og:title',
        content: 'MINISTRY OF DEFENCE',
      },
    ],
  },
}
</script>

<style scoped>
.home-container {
  width: 100%;
  display: flex;
  position: relative;
  min-height: 100vh;
  overflow-x: hidden;
  align-items: center;
  flex-direction: column;
}
.home-main {
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  position: relative;
  align-items: flex-start;
  flex-direction: column;
}
.home-hero {
  height: 788px;
  position: relative;
  align-items: center;
  padding-top: 128px;
  margin-bottom: 100px;
  justify-content: center;
}
.home-text {
  width: 1393px;
  font-size: 100px;
  margin-top: var(--dl-space-space-threeunits);
  text-align: center;
  margin-bottom: var(--dl-space-space-unit);
  text-transform: lowercase;
}
.home-text03 {
  color: #d20dbb;
}
.home-max-width {
  gap: 40px;
  display: flex;
  flex-direction: row;
  width: 1722px;
  align-items: center;
  justify-content: center;
}
.home-primary {
  text-decoration: none;
}
.home-btns-container {
  flex: 0 0 auto;
  display: flex;
  align-items: flex-start;
}
.home-secondary {
  height: 54px;
  text-decoration: none;
}
.home-speakers {
  display: flex;
  margin-top: 50px;
  padding-top: var(--dl-space-space-fiveunits);
  flex-direction: column;
}
.home-max-width1 {
  flex-direction: column;
}
.home-heading-container {
  flex: 0 0 auto;
  display: flex;
  align-items: center;
  margin-bottom: var(--dl-space-space-fourunits);
  flex-direction: column;
}
.home-text05 {
  text-align: center;
}
.home-text06 {
  color: var(--dl-color-scheme-darkgray);
  font-style: normal;
  text-align: center;
  font-weight: 500;
}
.home-speakers-container {
  width: 100%;
  display: grid;
  grid-row-gap: var(--dl-space-space-fourunits);
  grid-column-gap: 30px;
  grid-template-columns: 1fr 1fr 1fr 1fr;
}
.home-numbers-banner {
  display: flex;
  padding-top: var(--dl-space-space-fiveunits);
  flex-direction: column;
  background-size: cover;
  background-image: url("/playground_assets/group%2029-1500w.png");
}
.home-container1 {
  flex-direction: column;
}
.home-heading-container1 {
  flex: 0 0 auto;
  display: flex;
  align-items: center;
  margin-bottom: var(--dl-space-space-fourunits);
  flex-direction: column;
}
.home-text07 {
  color: var(--dl-color-scheme-white);
  font-style: normal;
  text-align: center;
  font-weight: 500;
}
.home-text08 {
  color: var(--dl-color-scheme-white);
  text-align: center;
}
.home-numbers-container {
  width: 100%;
  display: grid;
  grid-row-gap: var(--dl-space-space-fourunits);
  grid-column-gap: 30px;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
}
.home-blog {
  width: 1403px;
  display: flex;
  padding: var(--dl-space-space-threeunits);
  max-width: var(--dl-size-size-maxwidth);
  align-self: center;
  margin-top: 0px;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
}
.home-text09 {
  font-size: 50px;
  font-style: normal;
  font-family: IBM Plex Sans Condensed;
  font-weight: 700;
  margin-bottom: var(--dl-space-space-twounits);
}
.home-container2 {
  display: flex;
  align-items: center;
  margin-bottom: var(--dl-space-space-twounits);
  flex-direction: column;
  justify-content: space-between;
}
.home-container3 {
  display: flex;
  align-items: center;
  margin-bottom: var(--dl-space-space-twounits);
  flex-direction: column;
  justify-content: space-between;
}
.home-blog-post-card {
  width: 100%;
  display: flex;
  max-width: var(--dl-size-size-maxwidth);
  box-shadow: 4px 4px 10px 0px rgba(18, 18, 18, 0.1);
  transition: 0.3s;
  align-items: stretch;
  flex-direction: row;
  justify-content: space-between;
}
.home-blog-post-card:hover {
  transform: scale(1.02);
}
.home-image {
  width: 350px;
  height: 350px;
  object-fit: cover;
  flex-shrink: 0;
  border-radius: 0px;
}
.home-container4 {
  display: flex;
  align-items: flex-start;
  padding-top: var(--dl-space-space-twounits);
  padding-left: var(--dl-space-space-twounits);
  padding-right: var(--dl-space-space-twounits);
  flex-direction: column;
  padding-bottom: var(--dl-space-space-twounits);
  justify-content: space-between;
}
.home-container5 {
  width: 100%;
  display: flex;
  align-items: flex-start;
  margin-bottom: var(--dl-space-space-halfunit);
  flex-direction: row;
  justify-content: space-between;
}
.home-text10 {
  color: #595959;
  font-weight: 600;
  text-transform: uppercase;
}
.home-text11 {
  color: #595959;
  font-weight: 300;
}
.home-text12 {
  margin-bottom: var(--dl-space-space-twounits);
}
.home-text16 {
  color: rgb(89, 89, 89);
  font-size: 1.25rem;
  margin-bottom: var(--dl-space-space-twounits);
}
.home-container6 {
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
}
.home-profile {
  display: flex;
  align-items: center;
}
.home-image1 {
  width: var(--dl-size-size-small);
  height: var(--dl-size-size-small);
  object-fit: cover;
  border-radius: var(--dl-radius-radius-round);
}
.home-text17 {
  font-style: normal;
  font-weight: 600;
  margin-left: var(--dl-space-space-halfunit);
}
.home-text18 {
  color: var(--dl-color-scheme-black);
  font-style: normal;
  font-weight: 500;
}
@media(max-width: 1600px) {
  .home-hero {
    height: 867px;
    display: flex;
    margin-bottom: 100px;
    padding-bottom: var(--dl-space-space-fourunits);
  }
  .home-text {
    width: 1338px;
    font-size: 100px;
    align-self: center;
    margin-top: var(--dl-space-space-threeunits);
    text-align: center;
    margin-bottom: var(--dl-space-space-unit);
    text-transform: lowercase;
  }
  .home-text01 {
    width: 864px;
    align-self: center;
  }
  .home-text03 {
    color: #d20dbb;
  }
  .home-primary {
    color: var(--dl-color-scheme-darkblue);
    width: 178px;
    position: static;
    align-self: flex-start;
    text-align: center;
    text-decoration: none;
  }
  .home-btns-container {
    position: relative;
  }
  .home-secondary {
    width: 173px;
    position: static;
  }
  .home-text06 {
    color: var(--dl-color-scheme-darkgray);
    font-style: normal;
    font-weight: 500;
  }
  .home-text07 {
    color: var(--dl-color-scheme-white);
    font-style: normal;
    font-weight: 500;
  }
  .home-text08 {
    color: var(--dl-color-scheme-white);
  }
}
@media(max-width: 1200px) {
  .home-text12 {
    width: 710px;
  }
  .home-text13 {
    width: 710px;
  }
  .home-text15 {
    width: 710px;
  }
}
@media(max-width: 991px) {
  .home-max-width {
    gap: 40px;
    flex-direction: row;
  }
  .home-speakers-container {
    grid-template-columns: 1fr 1fr 1fr;
  }
  .home-numbers-container {
    grid-template-columns: 1fr 1fr 1fr;
  }
  .home-blog-post-card {
    flex-direction: row;
    justify-content: space-between;
  }
}
@media(max-width: 767px) {
  .home-text {
    font-size: 48px;
  }
  .home-text01 {
    font-size: 48px;
  }
  .home-speakers-container {
    grid-template-columns: 1fr 1fr;
  }
  .home-numbers-container {
    grid-template-columns: 1fr 1fr;
  }
  .home-blog {
    padding-left: var(--dl-space-space-twounits);
    padding-right: var(--dl-space-space-twounits);
  }
  .home-blog-post-card {
    flex-direction: column;
  }
  .home-image {
    width: 100%;
  }
}
@media(max-width: 479px) {
  .home-speakers-container {
    grid-template-columns: 1fr;
  }
  .home-blog {
    padding-top: var(--dl-space-space-twounits);
    padding-left: var(--dl-space-space-unit);
    padding-right: var(--dl-space-space-unit);
    padding-bottom: var(--dl-space-space-twounits);
  }
  .home-container6 {
    padding-left: 0px;
    padding-right: 0px;
  }
  .home-text18 {
    width: auto;
  }
}
</style>
