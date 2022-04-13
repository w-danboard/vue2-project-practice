<template>
  <div>
    <el-carousel :interval="4000" type="card" height="200px">
      <el-carousel-item v-for="item in sliders" :key="item._id">
        <h3>{{ item.url }}</h3>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import * as types from '../store/action-types'

export default {
  computed: {
    ...mapState(['sliders'])
  },
  methods: {
    ...mapActions([types.SET_SLIDERS])
  },
  mounted () {
    if (this.sliders.length) {
      this[types.SET_SLIDERS]()
    }
    this[types.SET_SLIDERS]()
  }
}
</script>

<style>
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>
