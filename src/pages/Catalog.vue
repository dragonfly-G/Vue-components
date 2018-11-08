<template>
	<div class="catalog">
		<div class="header">
	  		<router-link to='/'>
		  		<span class="iconfont">&#xe667;</span>
		  	</router-link>
		  	<span class="header_title">{{this.$route.params.name}}</span>
	  	</div>
		<ul>
			<router-link 
		        tag='li'
		        v-for='(item,index) in headList'
		        :to="item.path"
		        :key='item.id'
		    >
		       {{item.name}}
		        <span class="iconfont">&#xe602;</span>
		    </router-link>
		</ul>
	</div>
</template>

<script>
export default {
  name: 'Catalog',
  data () {
  	return {
  		homelist: [
	        {//0
	          id:'001',name:'顶部header(position)固定',path:'/Header'
	        },
	        {//1
	          id:'002',name:'顶部header下拉后固定',path:'/HeaderSlider'
	        },
	        {//2
	          id:'003',name:'顶部header渐隐渐现',path:'/HeaderTop'
	        },
	        {//3
	          id:'004',name:'顶部header上拉下拉(touch事件)',path:'/HeaderDraw'
	        },
	        {//4
	          id:'005',name:'顶部header上拉下拉(scroll事件)',path:'/ScrollBar'
	        },
	        {//5
	          id:'006',name:'底部foooter(flex)固定',path:'/FootFlex'
	      	},
	      	{//6
	          id:'007',name:'banner轮播图',path:'/Banner'
	      	},
	      	{//7
	          id:'008',name:'点击图片画廊',path:'/Gallery'
	      	},
	      	{//8
	          id:'009',name:'公共基础动画fade/move',path:'/FadeAnimation'
	      	},
	      	{//9
	          id:'010',name:'右侧上下滑动检索目录',path:'/RetrieveList'
	      	},
	      	{//10
	          id:'011',name:'筛选器(框)',path:'/FilterBox'
	      	},
	      	{//11
	      	  id:'012',name:'图片懒加载vue-lazyload',path:'/Lazyload'
	      	},
	      	{//12
	      	  id:'013',name:'柱状图点击事件',path:'/Bargraph'
	      	},
	      	{//13
	      	  id:'014',name:'demo',path:'/Case'
	      	},
	      	{//14
	      	  id:'015',name:'文本溢出弹出层',path:'/Casedemo'
	      	}
	    ],
	    headList:'',

  	}
  },
  mounted(){
  			if(this.$route.params.id == '001'){
  		this.headList = this.homelist.slice(0,5)
  	} else if (this.$route.params.id == '002') {
  		this.headList = this.homelist.slice(5,6)
  	} else if (this.$route.params.id == '003') {
  		this.headList = this.homelist.slice(6,8)
  	} else if (this.$route.params.id == '004') {
  		this.headList = this.homelist.slice(8,9)
  	} else if (this.$route.params.id == '005') {
  		this.headList = this.homelist.slice(9,11)
  	} else if (this.$route.params.id == '006') {
  		this.headList = this.homelist.slice(11,12)
  	} else if (this.$route.params.id == '007') {
  		this.headList = this.homelist.slice(12,13)
  	} else if (this.$route.params.id == '008') {
  		this.headList = this.homelist.slice(13,14)
  	} else if (this.$route.params.id == '009') {
  		this.headList = this.homelist.slice(14)
  	}
  },
}
</script>

<style lang="less" scoped>
.header{
	text-align: center;
	line-height: 3rem;
	padding:0 .5rem;
	border-bottom: 1px solid #ccc;
	.iconfont{
		float: left;
	}
	.header_title{
		padding: 1rem 0;
	    text-align: center;
	}
}
.catalog{
	h3{
		margin: 0;
		padding: 1rem 0;
		text-align: center;
		border-bottom: 1px solid #ccc;
	}
	ul{
		list-style: none;
		padding: 0 .8rem;
		li{
			line-height: 3rem;
			border-bottom: 1px solid #ccc;
			span:nth-child(1){
				color: #ccc;
				float: right;
			}
		}
	}
}
</style>
