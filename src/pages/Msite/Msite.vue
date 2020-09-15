<template>
  <section class="msite">
    <!--首页头部  title="北京市朝阳区南京路北路一号"  -->
		<HeaderTop title="北京市朝阳区南京路北路一号">
			 <span class="header_search" slot="left">
				 <i class="iconfont icon-sousuo"></i>
			 </span>
			<span class="header_login" slot="right">
				 <span class="header_login_text">登录|注册</span>
			 </span>
		</HeaderTop>
		
    <!--首页导航-->
    <nav class="msite_nav">
		
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <a href="javascript:" class="link_to_food">
              <div class="food_container">
                <img src="./images/1.png">
              </div>
              <span>甜品饮品</span>
            </a>
            <a href="javascript:" class="link_to_food">
              <div class="food_container">
                <img src="./images/2.png">
              </div>
              <span>商超便利</span>
            </a>
            <a href="javascript:" class="link_to_food">
              <div class="food_container">
                <img src="./images/3.png">
              </div>
              <span>美食</span>
            </a>
            <a href="javascript:" class="link_to_food">
              <div class="food_container">
                <img src="./images/4.png">
              </div>
              <span>简餐</span>
            </a>
            <a href="javascript:" class="link_to_food">
              <div class="food_container">
                <img src="./images/5.png">
              </div>
              <span>新店特惠</span>
            </a>
            <a href="javascript:" class="link_to_food">
              <div class="food_container">
                <img src="./images/6.png">
              </div>
              <span>准时达</span>
            </a>
            <a href="javascript:" class="link_to_food">
              <div class="food_container">
                <img src="./images/7.png">
              </div>
              <span>预订早餐</span>
            </a>
            <a href="javascript:" class="link_to_food">
              <div class="food_container">
                <img src="./images/8.png">
              </div>
              <span>土豪推荐</span>
            </a>
          </div>
          <div class="swiper-slide">
            <a href="javascript:" class="link_to_food">
              <div class="food_container">
                <img src="./images/9.png">
              </div>
              <span>甜品饮品1</span>
            </a>
            <a href="javascript:" class="link_to_food">
              <div class="food_container">
                <img src="./images/1.png">
              </div>
              <span>商超便利</span>
            </a>
            <a href="javascript:" class="link_to_food">
              <div class="food_container">
                <img src="./images/10.png">
              </div>
              <span>美食</span>
            </a>
            <a href="javascript:" class="link_to_food">
              <div class="food_container">
                <img src="./images/9.png">
              </div>
              <span>简餐</span>
            </a>
            <a href="javascript:" class="link_to_food">
              <div class="food_container">
                <img src="./images/7.png">
              </div>
              <span>新店特惠</span>
            </a>
            <a href="javascript:" class="link_to_food">
              <div class="food_container">
                <img src="./images/5.png">
              </div>
              <span>准时达</span>
            </a>
            <a href="javascript:" class="link_to_food">
              <div class="food_container">
                <img src="./images/4.png">
              </div>
              <span>预订早餐</span>
            </a>
            <a href="javascript:" class="link_to_food">
              <div class="food_container">
                <img src="./images/10.png">
              </div>
              <span>土豪推荐1</span>
            </a>
          </div>
        </div>
        <!-- Add Pagination -->
        <!-- <div class="swiper-pagination"></div> -->
		<div class="swiper-pagination"></div>
      </div>
    </nav>
    <!--首页附近商家-->
   <div class="msite_shop_list">
      <div class="shop_header">
        <i class="iconfont icon-xuanxiang"></i>
        <span class="shop_header_title">附近商家</span>
      </div>
	  
    </div>
	<Shoplist></Shoplist>
  </section>
</template>

<script>
	
	import Swiper from 'swiper'
	import 'swiper/css/swiper.css'
	
	import HeaderTop from '../../common/HeaderTop.vue'
	import Shoplist from '../../components/Shoplist.vue'
	
	export default{
		mounted() {
			new Swiper ('.swiper-container', {
				// direction: 'vertical', // 垂直切换选项
			    loop: true, // 循环模式选项
			    
			    // 如果需要分页器
			    pagination: {
			      el: '.swiper-pagination'
			    }
			  })        
		},
		components:{
			HeaderTop,
			Shoplist
		}
	}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .msite  //首页
    width 100%
    .msite_nav
      bottom-border-1px(#e4e4e4)
      margin-top 45px
      height 200px
      background #fff
      .swiper-container
        width 100%
        height 100%
        .swiper-wrapper
          width 100%
          height 100%
          .swiper-slide
            display flex
            justify-content center
            align-items flex-start
            flex-wrap wrap
            .link_to_food
              width 25%
              .food_container
                display block
                width 100%
                text-align center
                padding-bottom 10px
                font-size 0
                img
                  display inline-block
                  width 50px
                  height 50px
              span
                display block
                width 100%
                text-align center
                font-size 13px
                color #666
        .swiper-pagination
          >span.swiper-pagination-bullet-active
            background #02a774
    .msite_shop_list
      top-border-1px(#e4e4e4)
      margin-top 10px
      background #fff
      .shop_header
        padding 10px 10px 0
        .shop_icon
          margin-left 5px
          color #999
        .shop_header_title
          color #999
          font-size 14px
          line-height 20px
	.header
	  background-color #02a774
	  position fixed
	  z-index 100
	  left 0
	  top 0
	  width 100%
	  height 45px
	  .header_search
	    position absolute
	    left 15px
	    top 50%
	    transform translateY(-50%)
	    width 10%
	    height 50%
	    .icon-sousuo
	      font-size 25px
	      color #fff
	  .header_title
	    position absolute
	    top 50%
	    left 50%
	    transform translate(-50%, -50%)
	    width 50%
	    color #fff
	    text-align center
	    .header_title_text
	      font-size 20px
	      color #fff
	      display block
	  .header_login
	    font-size 14px
	    color #fff
	    position absolute
	    right 15px
	    top 50%
	    transform translateY(-50%)
	    .header_login_text
	      color #fff
</style>
