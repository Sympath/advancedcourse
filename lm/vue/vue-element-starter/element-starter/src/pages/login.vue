<template>
  <div class="login_page">
    <!-- login {{list[0]}}
      <router-link to="/login2">login2</router-link>
    <router-view></router-view>-->
    <transition name="form-fade" mode="in-out">
      <section class="form_container" v-show="showLogin">
        <div class="manage_tip">
          <span class="title">后台管理系统</span>
        </div>
        <el-form :model="loginForm" :rules="rules" ref="loginForm" class="loginForm">
          <el-form-item prop="username">
            <span class="fa-tips">
              <i class="fa fa-user"></i>
            </span>
            <el-input class="area" type="text" placeholder="用户名" v-model="loginForm.username"/>
          </el-form-item>
          <el-form-item prop="password">
            <span class="fa-tips">
              <i class="fa fa-local"></i>
            </span>
            <el-input class="area" type="password" placeholder="密码" v-model="loginForm.password"/>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('loginForm')" class="submit_btn">
              登录
            </el-button>
          </el-form-item>
        </el-form>
      </section>
    </transition>
  </div>
</template>

<script type="text/ecmascript-6">
import { mapState } from "vuex";
import axios from "../utils/axios";
export default {
  data() {
    return {
      showLogin:false,
      loginForm: {
        username: "",
        password: ""
      },
      rules: {
        username: [
          {
            required: true,
            message: "请输入用户名",
            trigger: "blur"
          },
          {
            min: 2,
            max: 8,
            message: "长度在2到8个字符",
            trigger: "blur"
          }
        ],
        password: [
          {
            required: true,
            message: "请输入密码",
            trigger: "blur"
          },
          {
            min: 2,
            max: 8,
            message: "长度在2到8个字符",
            trigger: "blur"
          }
        ]
      }
    };
  },
  methods: {
    submitForm(form){
      this.$refs.loginForm.validate(valid=>{
        if(valid){
          let userinfo = this.loginForm;
          let data = {
            url: ''
          }
          let userData = Object.assign(userinfo,data)
          console.log(userData);
          
        }
      })
    }
  },
  mounted () {
    this.showLogin = true;
  },
  components: {},
  computed: {
    // ...mapState({
    //     list: state => state.list
    //   })
    ...mapState(["list"])
  }
};
</script>

<style scoped lang="less">
.form-fade-enter-active,
.form-fade-leave-active {
  transition: all 1s;
}
.form-fade-enter,
.form-fade-leave-active {
  opacity: 0;
  transform: translate3d(0, -50px, 0);
}
</style>
