<template>
	<div>
		<!-- 侧边 -->
	    <ul class="letter">
			<li 
				v-for="(item,index) in province"
				:key="index"
				:ref="item.name"
				@touchstart="handleTouchStart"
		        @touchmove="handleTouchMove"
		        @touchend="handleTouchEnd"
		        @click="changeHandle(item.name)"
			>
				{{item.name}}
			</li>
		</ul>
	</div>
</template>
<script>
	export default{
		name:'Bscroll',
		props:['province'],
		data () {
			return {
				//滑动状态
				touchStatus: false,
				startY: 0,
      			timer: null
			}
		},
		updated () {
			//62
		    this.startY = this.$refs['北京市'][0].offsetTop
		},
		methods:{
			changeHandle(ele){
				console.log(ele)
       			this.$emit('changeLetter', ele)
		    },
		    //开始滑动
		    handleTouchStart () {
		    	this.touchStatus = true
		    },
		    //滑动中
		    handleTouchMove (e) {
		      	if (this.touchStatus) {
		        	if (this.timer) {
		          		clearTimeout(this.timer)
		        	}
		        	this.timer = setTimeout(() => {
		        		// 滑动的距离
		          		const touchY = e.touches[0].clientY
		          		// （滑动的距离 - 顶部空白距离）/ 每个li的高度 
		          		const index = Math.floor((touchY - this.startY) / 16)
		          		if (index >= 0 && index < this.province.length) {
		            		this.$emit('changeLetter', this.province[index].name)
		          		}
		        	}, 16)
		      	}
		    },
		    //滑动结束
		    handleTouchEnd () {
		      this.touchStatus = false
		    }
		}
	}
</script>
<style lang="less" scoped>
ul{
	list-style: none;
}	
.letter{
	z-index: 19;
	position: fixed;
	top: 0;
	right:0;
	bottom:0;
	font-size: 12px;
	width:3rem;
	text-align: center;
	color:#00bcd4;
	display: flex;
    flex-direction: column;
    justify-content: center;
}	
</style>