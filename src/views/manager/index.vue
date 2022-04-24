<template>
  <el-container>
    <el-aside width="200px">
      <my-menu></my-menu>
      <!-- <el-menu
        background-color="#333"
        text-color="#fff"
        active-text-color="#ffd04b"
        class="menu"
        :router=true>
        <el-submenu index="personal" :key="1">
          <template slot="title">
            <span>用户管理</span>
          </template>
          <el-menu-item>用户权限</el-menu-item>
        </el-submenu>
        <el-menu-item>个人中心</el-menu-item>
      </el-menu> -->
    </el-aside>
    <el-main>
      <router-view/>
    </el-main>
  </el-container>
</template>

<script>
import MyMenu from '../../components/MyMenu.jsx'
export default {
  components: { MyMenu }
}
</script>
