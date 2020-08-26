<template>
<button
    @click="handleClick"
    class="el-button"
    :disabled="loading"
    :type="nativeType"
    :autofocus="autofocus"
    :class="[
    type?'el-button--'+type:'',
    {
        'is-round':round,
        'is-circle':circle,
        'is-loading':loading,
        'is-disabled':buttonDisabled,
        'is-plain':plain
    }
    ]"
    >
    <i class="el-icon-loading" v-if="loading"></i>
    <i :class="icon" v-if="icon"></i>
    <!-- {{type}} - {{tit}} -->
    <slot></slot>
    <!-- 
        
     -->
</button>
</template>
<script>
export default {
    data() {      
        return {
            tit: 'hello',
            // loading: true
        }
    },
    computed:{
        buttonDisabled() {
            return this.disabled
        }
    },
    props: {
        nativeType:{
          type:String,
          default:"button"
        },
        type: {
            type: String,
            default: 'default'
        },
        round:Boolean,
        circle:Boolean,
        autofocus:Boolean,
        icon:{
            type:String,
            default:''
        },
        loading:Boolean
    },
    created() {
        console.log(this.type, this.tit);
    },
    methods:{
        handleClick(evt){
            this.$emit('click',evt);
        }
    }
}
</script>
<style>
</style>