<template>
	<!-- 内容 -->
	<div class="bscroll" ref="bscroll">
	    <div class="bscroll-container">
	    	<ul class="cityList">
	    		<li class="province" v-for="(item,index) in province" :key="index">
	    			<p :ref="item.name">{{item.name}}</p>
	    			<ul>
		    			<li class="city" v-for="(itemData,index) in item.city">{{itemData.name}}</li>
		    		</ul>
	    		</li>
	    	</ul>
	    </div>
	</div>
</template>
<script>
	import BScroll from "better-scroll";
	export default{
		name:'Bscroll',
		data () {
			return {
			}
		},
		props:["province","letters"],
		watch: {
		    letters () {
			    if (this.letters) {
			        const element = this.$refs[this.letters][0]
					this.aBScroll.scrollToElement(element,600)
			    }
		    }
		},
		mounted () {
		    this.$nextTick(() => {
		        let bscrollDom = this.$refs.bscroll;
		        this.aBScroll = new BScroll(bscrollDom,{
		        	click: true,
		        	scrollY: true
		        })
		    })
		},
	}
</script>
<style lang="less" scoped>
.bscroll{
    width: 100%;
    overflow: hidden;
    height:92vh;
    .bscroll-container{
    	width: 100%;
    	.cityList {
    		.province{
    			p{
    				line-height: 2.5rem;
	    			padding:0 1rem;
	    			border-bottom: 1px solid #ccc;
	    			background: #eee;
    			}
    			ul{
    				.city{
    					padding: 0 2rem;
    					line-height: 2rem;
		    			border-bottom: 1px solid #ccc;
		    			font-size: 14px;
    				}
    			}
    		}
    	}
    }
}	
</style>