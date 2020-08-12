<template>
  <Card :bordered="false" class="login_card">
    <p slot="title">Register</p>
    <Form ref="formInline" :model="formInline" :rules="ruleInline">
      <FormItem prop="user">
        <Input type="text" v-model="formInline.user" placeholder="Username">
          <Icon type="ios-person-outline" slot="prepend"></Icon>
        </Input>
      </FormItem>
      <FormItem prop="password">
        <Input type="password" v-model="formInline.password" placeholder="Password">
          <Icon type="ios-lock-outline" slot="prepend"></Icon>
        </Input>
      </FormItem>
      <FormItem prop="password">
        <Input type="password" v-model="formInline.confirm_password" placeholder="confirm_password">
          <Icon type="ios-lock-outline" slot="prepend"></Icon>
        </Input>
      </FormItem>
      <FormItem>
        <Button type="primary" @click="handleSubmit('formInline')" shape="circle" long>注册</Button>
      </FormItem>
      <p style="font-size:14px">
        已有账号?
        <a href @click.prevent="sonclick">登录</a>
      </p>
    </Form>
  </Card>
</template>

<script>
export default {
  data() {
    return {
      formInline: {
        user: "",
        password: "",
        confirm_password: "",
      },
      ruleInline: {
        user: [
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
      view:'Login'
    };
  },
  methods: {
    handleSubmit(name) {
      this.$refs[name].validate((valid) => {
        if (valid) {
          this.$Message.success("Success!");
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
/deep/.ivu-card-head{
  border-bottom:none ;
}
.login_card {
  p {
    text-align: center;
    color: #29282A;
    font-size: 18px;
    a {
      cursor: pointer;
    }
  }
}
</style>