<template>
    <div class="header_main">
        <div class="header_list">
            {{msg}}
        </div>
    </div>
</template>
<script>
export default {
    name:'header_main',
    data(){
        return{
            msg:'待办事项'
        }
    },
    methods:{

    },
    mounted(){

    }

    
}
</script>
<style lang="scss" scoped>
.header_main{


    .header_list{
        font-size: 25px;
        font-weight: bold;
        background: black;
        color: aliceblue;
        text-align: center;
        padding: 15px 0px;
    }
}
</style>