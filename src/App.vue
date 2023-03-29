
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
      <AppGrid>
        <template #left-part>
          <navigation />
        </template>
        <template #center-part>
          <router-view/>
        </template>
        <template #right-part>
            <h2>welcomne</h2>
        </template>
      </AppGrid>
    </div>
  </div>
</template>

<style scoped>
</style>