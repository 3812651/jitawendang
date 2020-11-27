<template>
  <Card :bordered="false" class="login_card">
    <p slot="title">注册</p>
    <Form ref="registerForm" :model="registerForm" :rules="ruleInline">
      <FormItem prop="username">
        <Input type="text" v-model="registerForm.username" placeholder="用户名" clearable>
          <Icon type="ios-person-outline" slot="prepend"></Icon>
        </Input>
      </FormItem>
      <FormItem prop="password">
        <Input type="password" v-model="registerForm.password" placeholder="密码" password>
          <Icon type="ios-lock-outline" slot="prepend"></Icon>
        </Input>
      </FormItem>
      <FormItem prop="password">
        <Input type="password" v-model="confirm_password" placeholder="重复密码" password>
          <Icon type="ios-lock-outline" slot="prepend"></Icon>
        </Input>
      </FormItem>
      <FormItem>
        <Button type="primary" @click="handleSubmit('registerForm')" shape="circle"  long>注册</Button>
      </FormItem>
      <p style="font-size: 14px">
        已有账号?
        <a href @click.prevent="sonclick">登录</a>
      </p>
    </Form>
  </Card>
</template>

<script>
import api from "../../common/api.js";

export default {
  data() {
    return {
      registerForm: {
        username: "",
        password: "",
      },
      confirm_password: "",
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
      view: "Login",
    };
  },
  methods: {
    handleSubmit(name) {
      this.$refs[name].validate(async (valid) => {
        if (valid) {
          if (this.registerForm.password == this.confirm_password) {
            let res = await this.$post({
              url: api.register,
              data: this.registerForm,
            });
            if (res) {
              this.$Message.success("注册成功!");
              this.$emit("view", this.view);
            }
          } else {
            this.$Message.error("两次密码不一致!");
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
/deep/.ivu-card-head {
  border-bottom: none;
}
/deep/.ivu-input-suffix{
   z-index: 10;
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