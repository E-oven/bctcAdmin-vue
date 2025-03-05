<template>
  <div>
    <basic-container>
      <avue-form :option="option"
                 v-model="form"
                 @tab-click="handleTabClick"
                 @submit="handleSubmit"></avue-form>
    </basic-container>
  </div>
</template>

<script>
  import option from "@/option/user/info";
  import {getUserInfo, updateInfo, updatePassword} from "@/api/system/user";
  import md5 from 'js-md5';
  import func from "@/util/func";


  export default {
    data() {
      return {
        index: 0,
        option: option,
        form: {
          newPassword1:'',
          newPassword:'',
          oldPassword:''
        }
      };
    },
    created() {
      this.handleWitch();
    },
    methods: {
      handleSubmit(form, done) {
        if (this.index === 0) {
          updateInfo(form).then(res => {
            if (res.data.success) {
              this.$message({
                type: "success",
                message: "修改信息成功!"
              });
            } else {
              this.$message({
                type: "error",
                message: res.data.msg
              });
            }
            done();
          }, error => {
            window.console.log(error);
            done();
          })
        } else {
          if(this.form.oldPassword.trim() == '' || this.form.newPassword.trim() == '' || this.form.newPassword1.trim() == ''){
              this.$message({
                type: "error",
                message: "请输入原密码与新密码"
              });
              done();
              return
          }
          if(!isValidPassword(form.newPassword)){
              this.$message({
                type: "error",
                message: "请输入：数字+大小字母+特殊字符的8位密码"
              });
              done();
              return
          }
          updatePassword(md5(form.oldPassword), md5(form.newPassword), md5(form.newPassword1)).then(res => {
            if (res.data.success) {
              this.$message({
                type: "success",
                message: "修改密码成功!"
              });
            } else {
              this.$message({
                type: "error",
                message: res.data.msg
              });
            }
            done();
          }, error => {
            window.console.log(error);
            done();
          })
        }
      },
      handleWitch() {
        if (this.index === 0) {
          getUserInfo().then(res => {
            const user = res.data.data;
            this.form = {
              id: user.id,
              avatar: user.avatar,
              name: user.name,
              realName: user.realName,
              phone: user.phone,
              email: user.email,
            }
          });
        }
      },
      handleTabClick(tabs) {
        this.index = func.toInt(tabs.index);
        this.handleWitch();
      }
    }
  };


  function isValidPassword(password) {  
      console.log('isValidPassword', password)
      if (!password || password.length < 8) {  
          return false;  
      }  
      const hasNumber = /\d/.test(password);  
      const hasLowerCase = /[a-z]/.test(password);  
      const hasUpperCase = /[A-Z]/.test(password);  
      const hasSpecialChar = /[^A-Za-z0-9]/.test(password);  
      return hasNumber && hasLowerCase && hasUpperCase && hasSpecialChar;  
  }  
  
</script>

<style>
</style>
