<template>
  <div>
    <h2>注册</h2>
    <el-form :model="form" status-icon :rules="rules" ref="form" label-width="100px" class="demo-ruleForm">
      <el-form-item label="邮箱" prop="email">
        <el-input type="text" v-model="form.email"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input type="password" v-model="form.password"></el-input>
      </el-form-item>
      <el-form-item label="确认密码" prop="checkPass">
        <el-input type="password" v-model="form.checkPass"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('form')">注册</el-button>
        <el-button @click="resetForm('form')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import * as user from '@/api/user.js'
export default {
  data () {
    return {
      form: {
        email: '',
        password: '',
        checkPass: ''
      },
      rules: {
        email: [{ required: true, message: '请输入邮箱', trigger: 'blur' }],
        password: [{ required: true, message: '请输入密码', trigger: 'blur' }],
        checkPass: [{ required: true, message: '请输入确认密码', trigger: 'blur' }]
      }
    }
  },
  methods: {
    submitForm (form) {
      this.$refs[form].validate(async valid => {
        // nprogress 这个包可以在拦截器中增加进度条
        if (valid) {
          try {
            await user.reg(this.form)
            this.$message({
              type: 'success',
              message: '注册成功了，去登录'
            })
            let timer = setTimeout(_ => {
              this.$router.push('/login')
              clearTimeout(timer)
            }, 1000)
          } catch (e) {
            this.$message({
              type: 'error',
              message: e
            })
          }
        } else {
          return false
        }
      })
    },
    resetForm () {}
  }
}
</script>