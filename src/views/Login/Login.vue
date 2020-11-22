<template>
  <Card :bordered="false" class="login_card">
    <p slot="title">Sign in</p>
    <Form ref="loginForm" :model="loginForm" :rules="ruleInline" class="login_form">
      <FormItem prop="username">
        <Input type="text" v-model="loginForm.username" placeholder="用户名">
        <Icon type="ios-person-outline" slot="prepend"></Icon>
        </Input>
      </FormItem>
      <FormItem prop="password">
        <Input type="password" v-model="loginForm.password" placeholder="密码">
        <Icon type="ios-lock-outline" slot="prepend"></Icon>
        </Input>
      </FormItem>
      <FormItem id="checkbox_item">
        <Checkbox v-model="checked">记住我</Checkbox>
        <router-link to="/Login">忘记密码?</router-link>
      </FormItem>
      <FormItem>
        <Button type="primary" @click="handleSubmit('loginForm')" shape="circle" long>登录</Button>
      </FormItem>
      <p style="font-size: 14px">
        New to Here?
        <a href @click.prevent="sonclick">注册</a>
      </p>
    </Form>
  </Card>
</template>

<script>
import api from "../../common/api.js";
import { writeToken, readToken, deleteToken } from "@/common/cookie";
import jwtDecode from "jwt-decode";

export default {
  data() {
    return {
      loginForm: {
        username: "",
        password: "",
      },
      ruleInline: {
        username: [
          {
            required: true,
            message: "Please fill in the user name",
            trigger: "blur",
          },
        ],
        password: [
          {
            required: true,
            message: "Please fill in the password.",
            trigger: "blur",
          },
          {
            type: "string",
            min: 6,
            message: "The password length cannot be less than 6 bits",
            trigger: "blur",
          },
        ],
      },
      checked: window.localStorage.getItem("checked"),
      view: "Register",
    };
  },
  beforeCreate() {
    window.localStorage.setItem("checked", true);
  },
  created() {
    console.log(window.localStorage.getItem("checked"));
    if (readToken()) {
      this.loginForm.username = jwtDecode(readToken()).username;
      this.loginForm.password = jwtDecode(readToken()).password;
    }
  },
  methods: {
    handleSubmit(name) {
      //是否记住登录信息
      window.localStorage.setItem("checked", this.checked);
      console.log(this.loginForm)
      this.$refs[name].validate(async (valid) => {
        if (valid) {
          // console.log(this.loginForm);
          let res = await this.$post({
            url: api.login,
            data: this.loginForm,
          });
          // console.log(res);
          if (res.err_code == 0) {
            this.checked == true
              ? writeToken(res.token)
              : deleteToken(res.token);
            this.$Message.success("登录成功!");
            window.localStorage.setItem("token", res.token);
            this.$router.push({path:'/Community/'})
          }
        } else {
          this.$Message.error("Fail!");
        }
      });
    },
    sonclick() {
      //子组件通过调用事件向父组件传值
      this.$emit("view", this.view);
    },
  },
};
</script>

<style lang="less" scoped>
@d_flex: {
  display: flex;
  justify-content: center;
  align-items: center;
};
.login_form {
  position: relative;
}
.form_bottom {
  position: absolute;
  bottom: 5px;
}
.v-enter,
.v-leave-to {
  opacity: 0;
  transform: translateX(150px);
}

.v-enter-active,
.v-leave-active {
  transition: all 0.5s;
}

/deep/ #checkbox_item .ivu-form-item-content {
  color: #7d7d7d;
  display: flex;
  justify-content: space-between;
}
/deep/.ivu-card-head {
  border-bottom: none;
}
.login_card {
  p {
    text-align: center;
    color: #29282a;
    font-size: 18px;
    a {
      cursor: pointer;
    }
  }
}
</style>