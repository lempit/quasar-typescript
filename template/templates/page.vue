{{#if_eq lang "html"}}
<template>
  <!-- if you want automatic padding use "layout-padding" class -->
  <div class="layout-padding">
    <!-- your content -->
  </div>
</template>
{{/if_eq}}
{{#if_eq lang "pug"}}
<template lang="pug">
  //- if you want automatic padding use "layout-padding" class
  .layout-padding
  //- your content
</template>
{{/if_eq}}

<script lang="ts">
import Vue from "vue"
import { Component } from "vue-typed"

@Component()
export default class Index extends Vue {
	
}

/*
// You may move code above into something like Foo.ts file and replace the code above with:

import Foo from './Foo'
export default Foo

*/
</script>

<style>
</style>