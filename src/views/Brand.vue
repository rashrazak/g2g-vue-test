<template>
    <div class="bg-zinc-200 w-1/6 m-1 p-2 h-20 rounded-xl flex flex-col justify-between cursor-pointer">
        <span class="text-center text-sm text-green-700">{{brand[1].default_name}}</span>
        <span class="text-center text-sm text-red-700 hover:bg-red-200" @click="addBookMark(brand[1])">Bookmark</span>
    </div>
    
</template>

<script>
    export default {
        name:"Brand",
        props:{
            brand:Array
        },
        data(){
            return{
                hover:false
            }
        },
        methods:{
            addBookMark(data){
                this.$store.dispatch('addBookmark', data)
            }
        }
    }
</script>