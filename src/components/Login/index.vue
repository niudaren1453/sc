<template>
  <div class="login" style="margin-top: 50px;">
    <div>
      <input type="text" placeholder="账号名/手机" class="login_us" />
    </div>
    <div>
      <input type="text" placeholder="请输入您的密码" class="login_ps" />
    </div>
    <div class="login_btn">
      <p>登录</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login'
}
</script>



<style scope>

.login .login_ps,
.login .login_us {
  width: 100%;
  height: 50px;
  border: none;
  border-bottom: 2px solid #e6e6e6;
  padding: 0 10px;
  font-size: 14px;
}
.login .login_btn {
  margin-top: 10px;
  box-sizing: border-box;
  width: 100%;
  height: 50px;
  background: #e54847;
  border-left: 10px solid white;
  border-right: 10px solid white;
  display: block;
  color: white;
  font-size: 20px;
  text-align: center;
  line-height: 50px;
}

</style>