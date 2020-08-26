<template>
  <div class="hello">
    <el-button-group>
        <el-button type="primary" icon="el-icon-edit"></el-button>
        <el-button type="primary" icon="el-icon-share"></el-button>
        <el-button type="primary" icon="el-icon-delete"></el-button>
    </el-button-group>
    
  </div>
</template>

<script>
// el-button? components 手写element-ui  
import ElButton from './ElButton.vue'; // react 
import ElButtonGroup from '@/components//ElButtonGroup.vue';
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  methods:{
    doLogin(evt){
      console.log(evt)
    }
  },
  components: {
    ElButton,
    'el-button-group':ElButtonGroup
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
h3
  margin 40px 0 0

ul
  list-style-type none
  padding 0

li
  display inline-block
  margin 0 10px

a
  color #42b983
</style>
