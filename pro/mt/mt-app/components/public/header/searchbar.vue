<template>
  <div class="search-panel">
    <el-row  class="m-header-searchbar">
        <el-col
        :span="3"
        class="left">
        <img
          src="//s0.meituan.net/bs/fe-web-meituan/e5eeaef/img/logo.png"
          alt="美团">
      </el-col>
      <el-col :span="15"
        class="center">
        <div class="wrapper">
          <el-input
            v-model="search"
            placeholder="搜索商家或地点"
            @focus="focus"
            @blur="blur"
            @input="input"/>
          <button class="el-button el-button-primary"><i class="el-icon-search"/></button>
          <dl
            v-if="isHotPlace"
            class="hotPlace">
            <dt>热门搜索</dt>
            <dd
              v-for="(item,idx) in hotPlace"
              :key="idx">
              <a :href="'/products?keyword='+encodeURIComponent(item.name)">{{ item }}</a>
            </dd>
          </dl>
          <dl
            v-if="isSearchList"
            class="searchList">
            <dd
              v-for="(item,idx) in searchList"
              :key="idx">
              <a :href="'/products?keyword='+encodeURIComponent(item.name)">{{ item }}</a>
            </dd>
          </dl>
        </div>
        <p class="suggest">
          <a
            v-for="(item,idx) in searchList"
            :key="idx"
            :href="'/products?keyword='+encodeURIComponent(item.name)">{{ item }}</a>
        </p>
          <ul class="nav">
          <li><nuxt-link
            to="/"
            class="takeout">美团外卖</nuxt-link></li>
          <li><nuxt-link
            to="/"
            class="movie">猫眼电影</nuxt-link></li>
          <li><nuxt-link
            to="/"
            class="hotel">美团酒店</nuxt-link></li>
          <li><nuxt-link
            to="/"
            class="apartment">民宿/公寓</nuxt-link></li>
          <li><nuxt-link
            to="/"
            class="business">商家入驻</nuxt-link></li>
        </ul>
        </el-col>
      <el-col
        :span="6"
        class="right">
        <ul class="security">
          <li><i class="refund"/><p class="txt">随时退</p></li>
          <li><i class="single"/><p class="txt">不满意免单</p></li>
          <li><i class="overdue"/><p class="txt">过期退</p></li>
        </ul>
      </el-col>
    </el-row>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  data() {
    return {
      search: '',
      list: ['你好旧时光','耿耿于怀','栀生淮南'],
      isFocus: false,
      searchList: ['你好旧时光','耿耿于怀','栀生淮南'],
      hotPlace: ['你好旧时光','耿耿于怀','栀生淮南']
    }
  },
  computed: {
    isHotPlace:function () {
      return this.isFocus && !this.search
    },
    isSearchList:function (params) {
      return this.isFocus && this.search
    }
  },
  methods: {
    focus(){
      this.isFocus = true
    },
    blur(){
      let self = this;
      setTimeout(() => {
        this.isFocus = false;
      }, 200);
    },
    input(e){
      this.search = e
      console.log(e);
      
    }
  },
  components: {

  }
}
</script>

<style scoped lang="css">
</style>
