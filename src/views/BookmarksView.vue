<template>
  <div class="about">
    <Bookmarks msg="A page that handle the G2G Brands bookmarked"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Bookmarks from "@/components/Bookmarks.vue"

export default {
  name: "BookmarksView",
  components: {
    Bookmarks,
  },
}
</script>
