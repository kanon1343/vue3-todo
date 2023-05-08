<script setup lang="ts">
// // import axios from 'axios';
// import router from '@/router';
import { useLoginStore } from '@/stores/login';
import { useRouter } from 'vue-router';
  // data () {
  //   return {
  //     showPassword : false,
  //     msg : 'userIDとpasswordを入力して下さい',
  //     authId : '',
  //     authPass : ''
  //   }
  // },
// data部分.
const router = useRouter();
const store = useLoginStore();
// const showPassword: boolean = false;
const msg: string = 'userIDとpasswordを入力して下さい';
const authName: string = '';
const authPass: string = '';

  // method部分.
function post() {
    // const data = { id : authName, pass : authPass };
    // msg = await axios.post('/fnclogin', data)    // axiosの書き方.
    // .then(function (response) {
    //   console.log(response);
    //   return response.data.message;
    // })
    // .catch(function (error) {
    //   console.log(error);
    //   return error.message;
    // });
    
  const check: boolean = store.login(authName, authPass);
  if(!check){
    console.log('認証成功');
    router.push('/home');
  } else {
    alert(msg);
  }
}
</script>
<template>
  <div class="login">
    <h2>Sign in</h2>
    <div class="container" style="width:500px">
      <div class="row align-items-center">
        <div class="col-md-4">アカウント名</div>
        <div class="col-md-3">
          <input v-model="authName" type="text" placeholder="Username">
        </div>
      </div>
      <div class="row align-items-center">
        <div class="col-md-4">パスワード</div>
        <div class="col-md-3">
          <input v-model="authPass" type="password" placeholder="Password">
        </div>
      </div>
      <div class="row align-items-center">
        <div class="col-md-12">
          {{ msg }}
        </div>
      </div>
      <div class="row align-items-center">
        <div class="col-md-12">
          <button class="btn btn-info btn-block login" v-on:click="post">ログイン</button>
        </div>
      </div>
    </div>
  </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.login {
  margin-top: 20px;

  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
}
input {
  margin: 10px 0;
  padding: 10px;
}
</style>