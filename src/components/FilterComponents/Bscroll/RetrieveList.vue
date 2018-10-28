<template>
	<div>
		<GuHeader></GuHeader>
	  	<BScrollComponent :province='province' :letters="letters"></BScrollComponent>
	  	<BscrollSide :province='province' @changeLetter="changeLet"></BscrollSide>
	</div>
</template>
<script>
	import axios from 'axios'
	import GuHeader from "./GuHeader";
	import BScrollComponent from "./BScroll";
	import BscrollSide from "./BscrollSide";
	export default{ 
		name: 'RetrieveList',
		data () {
			return {
				aBScroll:'',
				province:'',
				letters:''
			}
		},
		created () {
			this.getCityInfo()
		},

		methods: {
			getCityInfo () {
		      	axios.get('/static/mock/cityLIst.json').then(res => {
		        	this.province = res.data
		        })
		    },
		    changeLet (letter) {
		    	this.letters = letter
		    }
		},
		components: {
			GuHeader,
			BScrollComponent,
			BscrollSide
		}
	}
</script>
<style lang="less" scoped>
ul{
	list-style: none;
}
</style>