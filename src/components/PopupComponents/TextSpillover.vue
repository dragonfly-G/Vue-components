<template>
	<div>
		<div class="header">
			<span class="iconfont" @click="routerGo">&#xe667;</span>
		  	<span class="header_title">溢出弹出层</span>
		</div>
		<div class="kuang" ref='xiaokuang'>4{{propdata}}</div>
		<slot></slot>
	</div>
</template>
<script>
	export default{
		name:"TextSpillover",
		props:{
			propdata:{
				type:String
			},
			top:{
				
			},
			left:{
				
			},
			PopupDom:{

			},
			showPopup:{
				type:Boolean
			}
		},
		data(){
			return{
				myTop:'',
				myLeft:'',
				timeoutflag : null,
			}
		},
		updated(){
			console.log(this.top,3333333)
			if (this.PopupDom > this.$refs.xiaokuang.offsetWidth) {
				console.log(666666)
				this.$refs.xiaokuang.style.top = -500 + 'px'
			}else {
				this.$refs.xiaokuang.style.top = this.top - 35 + 'px'
				this.$refs.xiaokuang.style.left = this.left + 10 + 'px'
				console.log(777777)
			}
			console.log(this.PopupDom,'我是弹出框')
		},
		methods:{
			routerGo(){
		  		this.$router.go(-1)
		  	},
		},
		components:{
		}
	}
</script>
<style scoped lang="less">
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
.kuang{
	position: fixed;
	padding: 4px 5px;
	background: #fff;
	border:1px solid #e0e0e0;
	border-radius: 5px;
	color: #74828F;
}
</style>