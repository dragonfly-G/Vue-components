<template>
	<div class="overhome">
		<h3>首页</h3>
    <ul>
      <router-link 
        tag='li'
        v-for='(item,index) in cataloglist'
        :to="{name:'Catalog',params:{ id:item.id ,name:item.name}}" 
        :key='item.id'
      >
          {{item.name}}
          <span class="iconfont">&#xe602;</span>
      </router-link>
    </ul>
	</div>
</template>

<script>
import Catalog from './Catalog'
export default {
  name: 'overhome',
  data () {
    return {
      cataloglist: [
        {
          id:'001',name:'顶部header',
        },
        {
          id:'002',name:'底部footer',
        },
        {
          id:'003',name:'banner样式效果',
        },
        {
          id:'004',name:'transition组件',
        },
        {
          id:'005',name:'检索筛选',
        },
        {
          id:'006',name:'图片列表效果',
        },
      ]
    }
  },
  methods:{

  },
  components: {
  	Catalog
  }
}
</script>

<style scoped lang="less">
li { 
	-webkit-tap-highlight-color:transparent 
}
.overhome{
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