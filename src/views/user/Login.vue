<template>
  <div>
    <h2>登录</h2>
    <el-form :model="form" status-icon :rules="rules" ref="form" label-width="100px" class="demo-ruleForm">
      <el-form-item label="账号" prop="userName">
        <el-input type="text" v-model="form.userName"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input type="password" v-model="form.password"></el-input>
      </el-form-item>
      <el-form-item label="验证码" prop="code">
        <el-input type="code" v-model="form.code"></el-input>
        <div v-html="verify"></div>
        <el-button type="text" @click="getCode">获取验证码</el-button>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('form')">登录</el-button>
        <el-button @click="resetForm('form')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { v4 } from 'uuid'
import { getLocal, setLocal } from '@/utils/local'
import { getCaptcha } from '@/api/public.js'
import { createNamespacedHelpers } from  'vuex'
let { mapActions } = createNamespacedHelpers('user') // 相当于函数颗粒化
import * as types from '../../store/action-types'
export default {
  data () {
    return {
      form: {
        userName: '',
        password: '',
        code: ''
      },
      rules: {
        userName: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
        password: [{ required: true, message: '请输入密码', trigger: 'blur' }],
        code: [{ required: true, message: '请输入验证码', trigger: 'blur' }],
      },
      verify: ''
    }
  },
  methods: {
    ...mapActions([types.USER_LOGIN]),
    getCode () {},
    submitForm (form) {
      this.$refs[form].validate(async valid => {
        // nprogress 这个包可以在拦截器中增加进度条
        if (valid) {
          try {
            this[types.USER_LOGIN]({ ...this.form, uid: this.uid })
          } catch (e) {
            this.$message({ type: 'error', message: e })
          }
        } else {
          return false
        }
      })
    },
    resetForm () {},
    async getCaptcha () {
      let { data } = await getCaptcha()
      this.verify = data
    }
  },
  created () {
    this.uid = getLocal('uuid')
    if (!this.uid) {
      setLocal('uuid', v4())
    }
    this.getCaptcha()
  }
}
</script>