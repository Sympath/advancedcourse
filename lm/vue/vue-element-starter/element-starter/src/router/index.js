import Vue from "vue";
import Router from "vue-router";
import {login} from "../pages/";
import login2 from "../pages/login2";
Vue.use(Router);

const routes = [{
    path: '/',
    name: 'login',
    component: login,
    children: [{
            path: 'login2',
            name: 'login2',
            component: login2,
    }]
}]

export default new Router({
    routes
})