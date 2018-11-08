<template>
	<div>
		<div class="header">
			<span class="iconfont" @click="routerGo">&#xe667;</span>
		  	<span class="header_title">工作demo</span>
		</div>
		<div class="namelist" v-for='(item,index) in nameData' :key='index'>
			<span>{{item.productId}}</span>
			<span>{{item.productName}}</span>
			<span>{{item.prodcutPrice}}</span>
			<span>{{item.prodcutImg}}</span>
		</div>
	</div>
</template>
<script>
	export default{
		name:"Case",
		data(){
			return {
				nameData:''
			}
		},
		created(){
			this.$store.dispatch('getName')
		},
		mounted(){
			this.nameData = this.$store.state.nameData
		},
		methods:{
		  	routerGo(){
		  		this.$router.go(-1)
		  	},
		},
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
.namelist{
	display: flex;
	line-height: 40px;
	span:nth-child(1){
		flex-basis:10%;
		text-align: center;
	}
	span:nth-child(2){
		flex-basis:30%;
		overflow: hidden;
		text-overflow:ellipsis;
		white-space: nowrap;
	}
	span:nth-child(3){
		flex-basis:20% ;
		text-align: center;
	}
	span:nth-child(4){
		flex-basis:20%;
		text-align: center; 
	}
}
</style>