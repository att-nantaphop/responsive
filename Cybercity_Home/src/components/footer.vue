<template>
  <footer class="footer-footer section-container" v-bind:class="rootClassName">
    <div class="footer-max-width max-content-container">
      <div class="footer-bottom-container">
        <div class="footer-left-side">
          <img
            alt="image"
            src="/playground_assets/newlogo.png"
            class="footer-image"
          />
          <span class="footer-text">
            <span>
              ที่ตั้งกระทรวงกลาโหม : ศาลาว่าการกลาโหม ถนนสนามไขย เขตพระนคร กรุงเทพ
              ๑๐๒๐๐
            </span>
            <br />
            <span>
              ติดต่อผู้จัดทำเว็บไซต์ (๐๒)๑๑๑-๑๑๑๑ ต่อ xxxx
              <span v-html="raw93dw"></span>
            </span>
          </span>
          <img
            :alt="pastedImage_alt"
            :src="pastedImage_src"
            class="footer-pasted-image"
          />
          <div class="footer-social-media"></div>
        </div>
        <div class="footer-links">
          <div class="footer-container">
            <span class="footer-text04">โครงสร้างกระทรวง</span>
            <span class="footer-link">ประวัติความเป็นมา</span>
            <span class="footer-link">พันธกิจ</span>
            <span class="footer-link">วิสัยทัศน์</span>
            <span class="footer-link">นโยบาย</span>
            <span class="footer-link">โครงการ</span>
            <span class="footer-text10 footer-link">สัมมนาและการอบรม</span>
          </div>
          <div class="footer-container1">
            <span class="footer-text11">แจ้งเรื่องร้องเรียน</span>
            <span class="footer-link">สำหรับเจ้าหน้าที่ภายในกระทรวง</span>
            <span class="footer-link">สำหรับเจ้าหน้าที่ทั่วไป</span>
            <span class="footer-link">สำหรับประชาชน</span>
          </div>
        </div>
      </div>
      <div class="footer-copyright">
        <span class="footer-text15">
          <span>
            <span>
              © All rights reserved
              <span v-html="rawyedu"></span>
            </span>
            <span><span v-html="rawzeon"></span></span>
          </span>
          <a
            href="https://www.teleporthq.io"
            target="_blank"
            rel="noreferrer noopener"
          >
            <span class="footer-text19">@TeleportHQ.</span>
          </a>
          <span>
            <span>
              Powered by
              <span v-html="rawkluo"></span>
            </span>
            <span><span v-html="rawp72h"></span></span>
          </span>
          <a
            href="https://www.vercel.com"
            target="_blank"
            rel="noreferrer noopener"
          >
            <span class="footer-text23">Vercel</span>
          </a>
          <span>
            <span>
              . Image source:
              <span v-html="raweyhk"></span>
            </span>
            <span><span v-html="rawbprp"></span></span>
          </span>
          <a
            href="https://www.unsplash.com"
            target="_blank"
            rel="noreferrer noopener"
          >
            <span class="footer-text27">Unsplash</span>
          </a>
          <span>.</span>
        </span>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  props: {
    rootClassName: String,
    rootClassName1: String,
    pastedImage_src: {
      type: String,
      default: '/playground_assets/pastedimage-2x8y-600w.png',
    },
    pastedImage_alt: {
      type: String,
      default: 'pastedImage',
    },
  },

  data() {
    return {
      raw93dw: ' ',
      rawyedu: ' ',
      rawzeon: ' ',
      rawkluo: ' ',
      rawp72h: ' ',
      raweyhk: ' ',
      rawbprp: ' ',
    }
  },
}
</script>

<style scoped>
.footer-footer {
  margin-top: 0px;
  padding-top: var(--dl-space-space-twounits);
  padding-left: 0px;
  padding-right: 0px;
  padding-bottom: 0px;
  background-color: var(--dl-color-scheme-black);
}
.footer-max-width {
  align-items: flex-start;
  flex-direction: column;
  justify-content: space-between;
}
.footer-bottom-container {
  width: 100%;
  display: flex;
  margin-bottom: var(--dl-space-space-sixunits);
  justify-content: space-between;
}
.footer-left-side {
  flex: 0 0 auto;
  width: 50%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.footer-image {
  width: 117px;
  height: 121px;
  margin-bottom: var(--dl-space-space-twounits);
}
.footer-text {
  color: var(--dl-color-scheme-white);
  max-width: 350px;
  margin-bottom: 60px;
  text-transform: none;
}
.footer-pasted-image {
  width: 535px;
  height: 287px;
}
.footer-social-media {
  flex: 0 0 auto;
  border: 2px dashed rgba(120, 120, 120, 0.4);
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.footer-links {
  flex: 0 0 auto;
  width: 40%;
  display: flex;
  align-items: flex-start;
  flex-direction: row;
}
.footer-container {
  flex: 0 0 auto;
  width: 50%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.footer-text04 {
  color: var(--dl-color-scheme-white);
  cursor: default;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  margin-bottom: var(--dl-space-space-threeunits);
}
.footer-text10 {
  margin-bottom: 0px;
}
.footer-container1 {
  flex: 0 0 auto;
  width: 50%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.footer-text11 {
  color: var(--dl-color-scheme-white);
  cursor: default;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  margin-bottom: var(--dl-space-space-threeunits);
}
.footer-copyright {
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  align-items: flex-start;
  padding-top: var(--dl-space-space-twounits);
  flex-direction: column;
  padding-bottom: var(--dl-space-space-twounits);
}
.footer-text15 {
  color: var(--dl-color-scheme-white80);
  font-size: 14px;
  text-transform: none;
}
.footer-text19 {
  text-decoration: underline;
}
.footer-text23 {
  text-decoration: underline;
}
.footer-text27 {
  text-decoration: underline;
}


@media(max-width: 1600px) {
  .footer-image {
    width: 106px;
    height: 108px;
  }
  .footer-pasted-image {
    width: 527px;
    height: 288px;
  }
  .footer-root-class-name1 {
    margin-top: var(--dl-space-space-twounits);
  }
}
@media(max-width: 1200px) {
  .footer-image {
    width: 131px;
    height: 148px;
  }
  .footer-text {
    color: var(--dl-color-scheme-white);
    text-transform: none;
  }
  .footer-pasted-image {
    width: 520px;
    height: 286px;
  }
  .footer-text04 {
    color: var(--dl-color-scheme-white);
  }
  .footer-text11 {
    color: var(--dl-color-scheme-white);
  }
}
@media(max-width: 991px) {
  .footer-bottom-container {
    flex-direction: column-reverse;
  }
  .footer-left-side {
    width: 100%;
  }
  .footer-links {
    width: 100%;
    margin-bottom: var(--dl-space-space-threeunits);
  }
}
@media(max-width: 479px) {
  .footer-links {
    flex-wrap: wrap;
  }
  .footer-container {
    width: 100%;
    margin-bottom: var(--dl-space-space-threeunits);
  }
  .footer-text04 {
    margin-bottom: var(--dl-space-space-twounits);
  }
  .footer-container1 {
    width: 100%;
    margin-bottom: var(--dl-space-space-threeunits);
  }
  .footer-text11 {
    margin-bottom: var(--dl-space-space-twounits);
  }
}
</style>
