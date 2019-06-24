<template>
  <div class="page">
    {{count}} times,
    <button @click="increment">+</button>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  data() {
    return {
    };
  },
  computed:{
      count(){
          return this.$store.state.count
      }
  },
  methods: {
    increment() {
     this.$store.dispatch('increment')
    }
  },
  components: {}
};
</script>

<style scoped lang="css">
</style>
