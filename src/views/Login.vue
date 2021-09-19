<template>
<div class="container">
<div class="middle">
 <div class="form">
      <h3 @click="changeRegist">创建账户</h3>
     <transition name="slide">  
      <div :class="{show:isRegist}" class="register" @click="onRegister"   >
      <input type="text" placeholder="用户名" v-model="register.username" > 
      <input type="password" placeholder="密码" v-model="register.password">
      <p :class="{error:register.isError}">{{register.notice}}</p>
      <div class="button" @click="registerSubmmit">注册账号</div>
      </div>
     </transition>
      <h3 @click="changeLogin">登录</h3>
     <transition name="slide"> 
      <div :class="{show:isLogin}" class="login" @click="onLogin" >           
      <input type="text"  placeholder="输入用户名" v-model="login.username" > 
      <input type="password"  placeholder="输入密码" v-model="login.password">
      <p :class="{error:login.isError}">{{login.notice}}</p>
      <div class="button" @click="loginSubmmit">登录</div>
      </div>
     </transition>
  </div>
  </div>
 </div>
</template>

<script>
import Auth from '../apis/auth'

 Auth.getInfo()
    .then(data => {
      console.log(data)
    })

export default {
  data(){
    return{
        isRegist:false,
        isLogin:true,
        register:{
         username: '',
         password: '',
         notice: '请记住用户名和密码',
         isError: false
        },
        login:{
         username: '',
         password: '',
         notice: '请输入用户名和密码',
         isError: false
        }
    }
  },
  methods:{
    changeRegist(){
      this.isRegist=true
      this.isLogin =false
  },
    changeLogin(){
      this.isRegist=false
      this.isLogin =true
  },
   onRegister(){
         let result1 = this.validUsername(this.register.username)
         if(!result1.isValid){
           this.register.isError = true
           this.register.notice = result1.notice
            return
         }
         let result2 = this.validPassword(this.register.password)
          if(!result2.isValid){
           this.register.isError = true
           this.register.notice = result2.notice
            return
        }
         this.register.isError = false
         this.register.notice = ''
         console.log(`start register..., username: ${this.register.username} , password: ${this.register.password}`)


      },
    registerSubmmit(){
      Auth.register({
        username: this.register.username,
        password: this.register.password
      }).then(data => {
        console.log(data)
        alert('注册成功')
      }).catch(data=>{
        alert('用户已存在')
      })
    },
     onLogin(){
        let result1 =this.validUsername(this.login.username)
        if(!result1.isValid){
          this.login.isError = true
          this.login.notice = result1.notice
          return
        }
        let result2 = this.validPassword(this.login.password)
        if(!result2.isValid){
          this.login.isError = true
          this.login.notice = result2.notice
          return
        }
        this.login.isError = false
        this.login.notice = ''
        console.log(`start login..., username: ${this.login.username} , password: ${this.login.password}`)

     },
    loginSubmmit(){
      Auth.login({
        username: this.login.username,
        password: this.login.password
      }).then(data => {
        console.log(data)
        alert('登陆成功')
        window.location = '#home'
      }).catch(data=>{
        alert('用户名或密码错误')
      })


    },
    
    validUsername(username){
     return{
         isValid:/^[\w\u4e00-\u9fa5]{3,15}$/.test(username),
         notice:'用户名3~15个字符，仅限于字母数字下划线中文'
     }
    },
    validPassword(password){
        return{
         isValid:/^.{6,16}$/.test(password),
         notice:'密码长度为6~16个字符'
     }
    }
  }

};
</script>
<style lang="scss" scoped>
.container{
    display: flex;
    justify-content: center;
    align-items:center ;
    height: 100vh;
    background: linear-gradient(180deg, rgba(2,0,36,1) 0%, rgba(249,253,255,1) 0%, rgba(208,242,254,1) 100%);
.middle{
    margin-top: 80px;
.form {
    width: 270px;
    overflow: hidden;
    h3 {
      padding: 10px 20px;
      margin-top: -1px;
      font-weight: normal;
      font-size: 16px;
      border-top: 1px solid #eee;
      cursor: pointer;
      &:nth-of-type(2){
        border-bottom: 1px solid #eee;
      }
    }
    .button {
      background-color: #2bb964;
      height: 36px;
      line-height: 36px;
      text-align: center;
      font-weight: bold;
      color: #fff;
      border-radius: 4px;
      margin-top: 18px;
      cursor: pointer;
    }
    .login,.register {
      padding: 0px 20px;
      border-top: 1px solid #eee;
       height: 0;
       overflow: hidden;
       transition: height .4s;
       &.show {
        height: 193px;
       }
      input {
        display: block;
        width: 100%;
        height: 35px;
        line-height: 35px;
        padding: 0 6px;
        border-radius: 4px;
        border: 1px solid #ccc;
        outline: none;
        font-size: 14px;
        margin-top: 10px;
      }
      input:focus {
        border: 3px solid #9dcaf8;
      }
      p {
        font-size: 12px;
        margin-top: 10px;
        color: #444;
      }
      .error {
        color: red;
      }
    }
    .login {
      border-top: 0;
    } 
  }
}
}
</style>