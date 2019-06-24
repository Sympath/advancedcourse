<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <counter></counter>
    <borter :count="count"></borter>
    <!-- <router-view></router-view> -->
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld'
import counter from "./components/counter";
import borter from "./components/counterborter";

export default {
  name: 'App',
  components: {
    // HelloWorld,
    counter,
    borter
  },
  data(){
    return {
      count: 0
    }
  },
  methods: {
    increment(e){
     
    }
  }

}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
