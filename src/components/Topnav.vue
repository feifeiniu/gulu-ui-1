<template>
  <div class="topnav" >
    <router-link to="/home" class="logo" >
      <svg class="icon" >
        <use xlink:href="#icon-bal"></use>
      </svg>
    </router-link>
  <ul class="menu">
    <li>
      <a href="https://www.yuque.com/fanyingmanxingren/kb64cm/zb91w9">我的博客</a>
    </li>
    <li>
      <router-link to="/" @click="logout">登录</router-link>
    </li>
  </ul>
    <span v-if="toggleMenuButtonVisible" class="toggleAside" @click="toggleMenu">
       <svg class="icon" >
        <use xlink:href="#icon-launch"></use>
      </svg>
    </span>
  </div>
</template>
<script lang="ts">
import {inject} from "vue";
import Auth from "../apis/auth.js"


export default {
  props:{
    toggleMenuButtonVisible:{
      type:Boolean,
      default:false
    }
  },
  setup() {
   const menuVisible = inject<Ref<boolean>>('menuVisible')
    const logout = async () => await Auth.logout()
    const toggleMenu = ()=>{
     menuVisible.value = !menuVisible.value
    }
    return { toggleMenu, logout }
  }
}
</script>
<style lang="scss" scoped>

.topnav {
  height: 68.27px;
  background: #f1ede9;
  display: flex;
  padding: 16px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 20;
  justify-content: center;
  align-items: center;
  > .logo {
    max-width: 6em;
    margin-right: auto;
    >svg{
      height: 32px;
      width: 32px;
    }
  }
  > .menu {
    display: flex;
    white-space: nowrap;
    flex-wrap: nowrap;
    > li {
      margin: 0 1em;
    }
  }
  .toggleAside{
    width: 32px;
    height:32px;
    position: absolute;
    left: 16px;
    top: 50%;
    transform: translateY(-50%);
    display: none;
  }
  @media (max-width: 500px) {
    //> .menu{display: none}
    > .topnav{
      display: flex;
      align-items: center;
    }
    > .menu{
      margin-left: auto;
    }
    > .logo{
      display: none;
    }
    > .toggleAside{
      display: inline-block;
    }
  }
}
</style>