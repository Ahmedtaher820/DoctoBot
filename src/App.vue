
<script setup lang="ts">
import { computed } from "vue"
import { useRoute } from "vue-router"
const router = useRoute()
const checkRoute = computed(()=>{
  if(router.name == 'Login' || router.name ==="Register")
    return 'Auth'
  return 'default'  
})
</script>

<template>
  <div>
    <div v-if="checkRoute === 'Auth'">
      <router-view />
    </div>
    <div v-else>
      <Navigation />
      <div class="py-8 px-16">
        <router-view/>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>