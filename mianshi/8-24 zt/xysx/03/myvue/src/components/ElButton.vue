<template>
<button>
    class="el-button"
    :class="[
      type?'el-button'
    ]"
    
    <!-- {{type}} - {{tit}} -->
    <slot></slot>
</button>
</template>
<script>
export default {
    data() {
        return {
            tit: 'hello'
        }
    },
    props: {
        type: {
            type: String,
            default: 'default'
        }
    },
    created() {
        console.log(this.type, this.tit);
    },
    methods:{
        handleClick(evt){
            this.$emit('click',evt)
            
        }
    }
}
</script>
<style>
</style>
