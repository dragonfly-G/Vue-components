<template>
	<div>
		<TextSpillover :propdata='propdata' :top='top' :left='left' :PopupDom='PopupDom'>
			<div class="namelist" v-for='(item,index) in nameData' :key='index'>
				<span>{{item.productId}}</span>
				<span 
					ref="PopupDocument" 
					@click='handlePopup(item.productName,$event,index)'
				>
					{{item.productName}}
				</span>
				<span>{{item.prodcutPrice}}</span>
				<span>{{item.prodcutImg}}</span>
			</div>
		</TextSpillover>
	</div>
</template>
<script>
	import TextSpillover from './TextSpillover'
	export default{
		name:"Casedemo",
		data(){
			return {
				nameData:'',
				propdata:'',
				top:'',
				left:'',
				PopupDom:''
			}
		},
		created(){
			this.$store.dispatch('getName')
		},
		mounted(){
			setTimeout(() => {
				this.nameData = this.$store.state.nameData
			},11)
		},
		methods:{
		  	routerGo(){
		  		this.$router.go(-1)
		  	},
		  	handlePopup(val,event,index){
		  		event.stopPropagation()
		  		event.preventDefault()
		  		if (event.target.nodeName === 'SPAN') {
			  		this.propdata = val
			  		this.top = event.clientY
			  		this.left = event.clientX
			  		this.PopupDom = this.$refs.PopupDocument[index].offsetWidth	  		
		  		}
		  	},
		  	
		},
		components:{
			TextSpillover
		}
	}
</script>
<style lang="less" scoped>
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
		overflow: hidden;
	    text-overflow: ellipsis;
	    white-space: nowrap;
	}
}
</style>