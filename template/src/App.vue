{{#if_eq lang "html"}}
<template>
  <!-- Don't drop "q-app" class -->
  <div id="q-app">
    <router-view />
  </div>
</template>
{{/if_eq}}
{{#if_eq lang "pug"}}
<template lang="pug">
  //- Don't drop "q-app" class
  #q-app
    router-view
</template>
{{/if_eq}}

<script lang="ts">
/*
 * Root component
 */
  import App from './App'
  export default App
</script>

<style></style>
