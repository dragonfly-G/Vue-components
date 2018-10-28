<template>
	<div class="gallery">
    <div class="header">
      <span class="iconfont" @click="routerGo">&#xe667;</span>
      <span class="header_title">图片画廊</span>
    </div>
    <!-- 要点处理 -->
		<img @click="showbanner" src="../../assets/img/double11_5.jpg">
    <!-- 画廊部分 -->
    <FadeAnimation>
      <div class="gallery_back" v-show="showGallery" @click="showbanner">
        <div class="gallery_img" v-show="showGallery">
          <swiper :options="swiperOption">
              <swiper-slide>
                <img src="../../assets/img/double11_2.jpg">
              </swiper-slide>
              <swiper-slide>
                <img src="../../assets/img/double11_3.jpg">
              </swiper-slide>
              <swiper-slide>
                <img src="../../assets/img/double11_4.jpg">
              </swiper-slide>
              <!-- 分页小圆点 -->
              <div class="swiper-pagination"  slot="pagination"></div>
          </swiper>
        </div>
      </div>
    </FadeAnimation>
	</div>
</template>

<script>
import FadeAnimation from '@/components/BannerComponents/FadeAnimation'
export default {
  name: 'Gallery',
  data () {
    return {
      swiperOption: {
        // 如果这种形式不行就用下边的{}中的
        // pagination : '.swiper-pagination'
        pagination: { 
          el: ".swiper-pagination",
          // 分页是数字，而不是小圆点
          type: 'fraction'
        },
        // 滑动出现卡顿加上下边代码
        observeParents: true,
        observer: true
      },
      showGallery: false
    }
  },
  methods: {
    showbanner(e){
      this.showGallery = !this.showGallery
    },
    routerGo(){
      this.$router.go(-1)
    }
  },
  components: {
  	FadeAnimation
  }
}
</script>

<style scoped lang="less">
.gallery{
  .header{
    text-align: center;
    line-height: 3rem;
    padding:0 .5rem;
    .iconfont{
      float: left;
    }
    .header_title{
      padding: 1rem 0;
      text-align: center;
      border-bottom: 1px solid #ccc;
    }
  }
  img{
    width:100%;
  }
  /*画廊部分*/
  .gallery_back{
    position: fixed;
    top:0;
    left: 0;
    right:0;
    bottom:0;
    background: #000;
    z-index: 9;
    
    .gallery_img{
      z-index: 19;
      
      .swiper-container{
        overflow: inherit;
        .swiper-pagination-fraction{
          color:#fff;
          margin-bottom:-3rem;
        }
      }
    }
  }
    
}
</style>