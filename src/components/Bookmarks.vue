<template>
  <div class="hello">
    <em class="text-sm text-green-500">{{ msg }}</em>
    <div class="flex flex-col w-full p-10 bg-green-300 rounded-sm">
      <div class="flex flex-row justify-between">
        
      </div>
      <ul>
        <li v-for="(bookmark, index) in bookmarks" :key="index" class="flex flex-row justify-between py-2 px-4 transition duration-300">
          <span class="text-left text-xl">{{bookmark.default_name}} </span>
          <span class="cursor-pointer bg-red-600 h-6 w-6 rounded text-white" @click="remove(bookmark)">x</span>
        </li>
      </ul>
      
    </div>
  </div>
</template>

<script>
export default {
  name: "Bookmarks",
  props: {
    msg: String,
  },
  methods:{
    remove(bookmark){
        this.$store.dispatch('removeBookmark', bookmark)
    },
  },
  computed:{
    bookmarks(){
        return this.$store.state.bookmarks
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
