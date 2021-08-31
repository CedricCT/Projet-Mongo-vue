<template>

<TopHeader></TopHeader>
<router-view/>
</template>

<script>

import TopHeader from './components/topHeader';

export default {
  name: 'App',
  components:{
    TopHeader,
  }
  }
</script>

<style>
body{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  /*background-color: #2F4372;*/
  background-color: #1F273A;
}
</style>
