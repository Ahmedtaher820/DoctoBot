
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
      <div class="md:py-8 md:px-16 px-8 py-4">                  
        <router-view/>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Climate+Crisis&family=Red+Hat+Display:wght@300;400;600;700;800;900&family=Tilt+Prism&display=swap');@import url('https://fonts.googleapis.com/css2?family=Climate+Crisis&family=Red+Hat+Display:wght@300;400;600;700;800;900&family=Tilt+Prism&display=swap');
</style>