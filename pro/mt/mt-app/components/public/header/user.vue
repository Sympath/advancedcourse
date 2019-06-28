<template>
  <div class="m-user">
      <template v-if="user">
          歡迎您：<span class="username">{{user}}</span>
          [<nuxt-link to="/exit">退出</nuxt-link>]
      </template>
       <template v-else>
          <nuxt-link to="/login" class="login">立即登陸</nuxt-link>
          <nuxt-link class="register" to="/register">注冊</nuxt-link>
      </template>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  data() {
    return {
        user: ''
    }
  },
  components: {

  }
}
</script>

<style scoped lang="css">
</style>
