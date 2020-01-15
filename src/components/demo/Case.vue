<template>
	<div>
		<div class="header">
			<span class="iconfont" @click="routerGo">&#xe667;</span>
		  	<span class="header_title">工作demo</span>
		</div>
    <div>
      <div>
        <input type='checkbox' class='input-checkbox' :checked="fruitIds.length === fruits.length" @click='checkedAll()'/>全选
        <div v-for='(item, index) in fruits' :key="index">
          <!--判断fruitIds是否包含当前fruit，fruitIds.indexOf(fruit.fruitId)返回包含fruit的下标, 若不包含则返回-1-->
          <input type='checkbox' :checked="fruitIds.indexOf(item.id) >= 0" name='checkboxinput'
                 class='input-checkbox' @click='checkedOne(item.id)'/>{{item.value}}------{{fruitIds.indexOf(item.id) >= 0}}
        </div>
      </div>
    </div>
	</div>
</template>
<script>
  import Clipboard from 'clipboard'
	export default{
		name:"Case",
		data(){
			return {
        fruits:[{
          id:'1',
          value:'苹果'
        },{
          id:'2',
          value:'荔枝'
        },{
          id:'3',
          value:'香蕉'
        },{
          id:'4',
          value:'火龙果'
        }],
        fruitIds:['1','3','4'],
        // 初始化全选按钮, 默认不选
        isCheckedAll: false
			}
		},
		created(){

		},
		mounted(){

		},
		methods:{
			routerGo(){
		  		this.$router.go(-1)
      },
      checkedOne (fruitId) {
        let idIndex = this.fruitIds.indexOf(fruitId)
        if (idIndex >= 0) {
          // 如果已经包含了该id, 则去除(单选按钮由选中变为非选中状态)
          this.fruitIds.splice(idIndex, 1)
        } else {
          // 选中该checkbox
          this.fruitIds.push(fruitId)
        }
      },
      checkedAll () {
        this.isCheckedAll = !this.isCheckedAll
        if (this.isCheckedAll) {
          // 全选时
          this.fruitIds = []
          this.fruits.forEach(function (item) {
            this.fruitIds.push(item.id)
          }, this)
        } else {
          this.fruitIds = []
        }
      }
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

</style>
