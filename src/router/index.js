import Vue from 'vue'
import Router from 'vue-router'
// 首页
import OverHome from '@/pages/OverHome'
// 目录
import Catalog from "@/pages/Catalog"
//头部样式效果
import HeaderTop from "@/components/HeaderComponents/HeaderTop"
import HeaderDraw from "@/components/HeaderComponents/HeaderDraw"
import Header from "@/components/HeaderComponents/Header"
import HeaderSlider from "@/components/HeaderComponents/HeaderSlider"
import ScrollBar from "@/components/HeaderComponents/ScrollBar"
//底部样式效果
import FootFlex from "@/components/FooterComponents/FootFlex"
//banner样式效果
import Banner from "@/components/BannerComponents/Banner"
import Gallery from "@/components/BannerComponents/Gallery"
import FadeAnimation from "@/components/BannerComponents/FadeAnimation"
//图片列表效果
import Lazyload from "@/components/ImageComponents/Lazyload"
//查询、筛选、检索
import RetrieveList from "@/components/FilterComponents/Bscroll/RetrieveList"
import FilterBox from "@/components/FilterBox/FilterBox"
//图表
import Bargraph from "@/components/EcahrtComponents/Bargraph"
//工作实例demo
import Case from "@/components/demo/Case"
//文本溢出弹出层
import Casedemo from '@/components/PopupComponents/Casedemo'

Vue.use(Router)

const router = new Router({
  routes: [
    // 首页
    { path: '/', name: 'OverHome', component: OverHome },
    //目录列表
    { path: '/Catalog/:id/:name', name: 'Catalog', component: Catalog },
    //头部样式效果
    { path: '/HeaderTop', name: 'HeaderTop', component: HeaderTop },
    { path: '/Header', name: 'Header', component: Header },
    { path: '/HeaderSlider', name: 'HeaderSlider', component: HeaderSlider },
    { path: '/HeaderDraw', name: 'HeaderDraw', component: HeaderDraw },
    { path: '/ScrollBar', name: 'ScrollBar', component: ScrollBar },
    //底部样式效果
    { path: '/FootFlex', name: 'FootFlex', component: FootFlex },
    //banner样式效果
    { path: '/Banner', name: 'Banner', component: Banner },
    { path: '/Gallery', name: 'Gallery', component: Gallery },
    { path: '/FadeAnimation', name: 'FadeAnimation', component: FadeAnimation },
    //查询、筛选、检索
    { path: '/RetrieveList', name: 'RetrieveList', component: RetrieveList },
    { path: '/FilterBox', name: 'FilterBox', component: FilterBox },
    //图片列表效果
    { path: '/Lazyload', name: 'Lazyload', component: Lazyload },
    //图表
    { path: '/Bargraph', name: 'Bargraph', component: Bargraph },
    //demo
    { path: '/Case', name: 'Case', component: Case },
    //文本溢出弹出层
    { path: '/Casedemo', name: 'Casedemo', component: Casedemo },
  ],

  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})
/*router.beforeEach((to, from, next) => {
  if (to.path === '/') {
    next()
  }
})*/
export default router
