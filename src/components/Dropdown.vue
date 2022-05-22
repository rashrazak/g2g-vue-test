<template>
    <div class="dropdown-wrapper relative">
    <button v-on:click="show = !show" :class="'theme-'+color" class="text-white text-center font-bold py-1 px-4 whitespace-no-wrap rounded-xl transition duration-300">BOOKMARKS<i class="fas fa-chevron-down ml-2"></i></button>
    <transition :name="animation">
      <div :class="'theme-'+color" class="dropdown-menu text-white mt-1 rounded-xl absolute z-10 shadow-lg w-36 max-w-xs" v-if="show">
        <ul class="list-none overflow-hidden rounded-xl">
          <template v-for="(bookmark, index) in bookmarks" >
            <span v-if="index < 5"  :key="index" class="flex flex-row justify-between py-2 px-4 transition duration-300" :class="'theme-'+color">
                <span class="text-left text-xs">{{bookmark.default_name}} </span>
                <span class="cursor-pointer bg-red-600 h-6 w-6 rounded" @click="remove(bookmark)">x</span>
            </span>
          </template>
          <li><span class="flex py-2 px-4 transition duration-300" @click="viewMore">VIEW MORE</span></li>
        </ul>
      </div>
    </transition>
  </div>
    
</template>

<script>
    export default {
        name:"Dropdown",
        props:{
            brand:Array
        },
        data: function() {
            return{
                show: false,
            }
        },
        methods:{
            remove(bookmark){
                this.$store.dispatch('removeBookmark', bookmark)
            },
            viewMore(){
                this.$router.push('/bookmarks')
            }
        },
        props: {
            color: String,
            animation: String
        },
        computed:{
            bookmarks(){
                return this.$store.state.bookmarks
            }
        }
    }
</script>

<style scoped>

button {
    cursor: pointer;
}

button:focus {
    outline: none;
}

/* Animations */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

/* Slide-in-up animation*/
.slide-in-up-enter-active,
.slide-in-up-leave-active {
  transition: all 0.5s;
  transform: translateY(0);
}
.slide-in-up-enter,
.slide-in-up-leave-to {
  opacity: 0;
  transform: translateY(20px);
}

/* Slide-in-right animation*/
.slide-in-right-enter-active,
.slide-in-right-leave-active {
  transition: all 0.5s;
  transform: translateX(0);
}
.slide-in-right-enter,
.slide-in-right-leave-to {
  opacity: 0;
  transform: translateX(20px);
}

/* Slide-in-left animation*/
.slide-in-left-enter-active,
.slide-in-left-leave-active {
  transition: all 0.5s;
  transform: translateX(0);
}
.slide-in-left-enter,
.slide-in-left-leave-to {
  opacity: 0;
  transform: translateX(-20px);
}

/* Scale animation*/
.scale-enter-active,
.scale-leave-active {
  transition: all 0.5s;
  transform: scale(1);
}
.scale-enter,
.scale-leave-to {
  opacity: 0;
  transform: scale(0);
}

/* Rotate animation*/
.rotate-enter-active,
.rotate-leave-active {
  transition: all 0.5s;
  transform: scale(1) rotate(-360deg);
}
.rotate-enter,
.rotate-leave-to {
  opacity: 0;
  transform: scale(0) rotate(360deg);
}

.theme-success {
  background-color: #54cb6c;
}





</style>