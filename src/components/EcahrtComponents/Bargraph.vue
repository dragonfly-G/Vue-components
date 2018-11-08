<template>
	<div>
		<div class="header">
			<span class="iconfont" @click="routerGo">&#xe667;</span>
		  	<span class="header_title">柱状图点击</span>
		</div>
		<div class="chart">
			<ECharts :options='optiondata' @click="onClick"></ECharts>
		</div>
		<!-- 测试弹出层 -->
		<div class="popup" v-if='showPopup'>
			<div class="header">
				<span class="iconfont" @click="closePopup">&#xe667;</span>
			  	<span class="header_title">我是弹出层</span>
			</div>
			我是弹出层
		</div>
	</div>
</template>
<script>
	import ECharts from 'vue-echarts'
	export default{
		name:'Bargraph',
		data(){
			return{
				 optiondata:{
				 	xAxis: {
			        	type: 'category',
			        	data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
				    },
				    tooltip:{
				    	show:true,
				    },
				    yAxis: {
				        type: 'value'
				    },
				    series: [{
				    	data: [120, 200, 150, 80, 70, 110, 130],
				        type: 'bar'
				    }]
				},
				showPopup:false
			}
		},
		mounted(){
			console.log()
		},
		methods:{
		  	routerGo(){
		  		this.$router.go(-1)
		  	},
			onClick(event, instance, echarts) {
				this.$router.push({path:'/Lazyload',query:{name:event.name}})
			},
			closePopup(){
			}
		},
		components:{
			ECharts
		}
	}
</script>
<style lang="less" scoped>
.header{
	z-index: 9;
	background: #00bcd4;
	text-align: center;
	line-height: 3rem;
	padding:0 .5rem;
	.iconfont{
		float: left;
		color:#fff;
	}
	.header_title{
		padding: 1rem 0;
	    text-align: center;
	    color:#fff;
	}
}	
.chart{
	width:100%;
	div{
		width:100%;
		height: 300px;
	}
}
.popup{
	position: fixed;
	top:0;
	left:0;
	width: 100%;
	height:100%;
	background: #fff;
	z-index: 10;
}
</style>