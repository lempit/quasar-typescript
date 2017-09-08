{{#if_eq lang "html"}}
<template>
  <div></div>
</template>
{{/if_eq}}
{{#if_eq lang "pug"}}
<template lang="pug">
  div
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
