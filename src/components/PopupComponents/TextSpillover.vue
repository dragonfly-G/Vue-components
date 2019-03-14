<template>
	<div @click="waiceng">
		<div class="header">
			<span class="iconfont" @click="routerGo">&#xe667;</span>
		  	<span class="header_title">溢出弹出层</span>
		</div>
		<div class="kuang" ref='xiaokuang'>{{propdata}}</div>
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
		},
		data(){
			return{
				myTop:'',
				myLeft:'',
				timeoutflag : null,
			}
		},
		updated(){
			if (this.PopupDom > this.$refs.xiaokuang.offsetWidth) {
				this.$refs.xiaokuang.style.top = -500 + 'px'
			}else {
				this.$refs.xiaokuang.style.top = this.top - 35 + 'px'
				this.$refs.xiaokuang.style.left = this.left + 10 + 'px'
				if (this.left + 10 + this.$refs.xiaokuang.offsetWidth >= document.body.clientWidth) {
					
				}
				if (this.timeoutflag != null) {
			        clearTimeout(this.timeoutflag)
			    }
				this.timeoutflag = setTimeout(function () {
					console.log('时间延迟')
					document.querySelector('.kuang').style.top = -500 + 'px'
				}, 1000)
			}
		},
		methods:{
			routerGo(){
		  		this.$router.go(-1)
		  	},
		  	waiceng(){
		  		this.$refs.xiaokuang.style.top = -500 + 'px'
		  	}
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