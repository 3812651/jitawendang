<template>
  <Card :bordered="false" class="login_card">
    <p slot="title">Sign in</p>
    <Form ref="formInline" :model="formInline" :rules="ruleInline" class="login_form">
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
      <FormItem id="checkbox_item">
        <Checkbox :checked.sync="single">记住我</Checkbox>
        <router-link to="/Login">忘记密码?</router-link>
      </FormItem>
      <FormItem>
        <Button type="primary" @click="handleSubmit('formInline')" shape="circle" long>登录</Button>
      </FormItem>
      <p style="font-size:14px">
        New to Here?
        <a href @click.prevent="sonclick">注册</a>
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
      single: true,
      view:'Register'
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
      this.$emit('view', this.view);
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