<template>
  <div class="home">
    <G2gApi msg="A page that search and bookmark the G2G Brands" />
    <div class="flex flex-col w-full p-10 bg-green-300 rounded-sm">
      <div class="flex flex-row justify-between">
        <span class="italic">
          <input
            class="rounded-xl pl-5 py-1"
            placeholder="Search Brand"
            type="text"
            v-model="search">
        </span>
        <Dropdown animation="slide-in-up" color="success"/>
      </div>

      <div class="flex flex-row flex-wrap my-3 border-2 p-2 justify-center">
        <Brand :brand="brand"  v-for="(brand, index) in brands" :key="index"/>
      </div>
      
    </div>

  </div>
</template>

<script>
// @ is an alias to /src
import G2gApi from "@/components/G2gApi.vue"
import api from "../utils/api"
import Brand from "./Brand.vue"
import Dropdown from "../components/Dropdown.vue"

export default {
  name: "HomeView",
  components: {
    G2gApi,
    Brand,
    Dropdown,
    Dropdown
},
  data(){
    return {
      brands: null,
      reservedBrands: null,
      search:'',
      displayBookMarks: false
    }
  },
  watch:{
    search(value){
      if (value.length > 0) {
        let main = this.reservedBrands
        this.brands = main.filter(([x,y],i)=>{
          let name = y.default_name.split(" ")
          return name.find(v => v.startsWith(value))
        })
      }else{
        this.brands = this.reservedBrands
      }
    }
  },
  created(){
    api.getBrands().then(({data}) =>{
      this.brands = Object.entries(data)
      this.reservedBrands = Object.entries(data)
    })
  }
}
</script>
