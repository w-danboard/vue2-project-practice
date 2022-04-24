import { createNamespacedHelpers } from 'vuex'
let { mapState } = createNamespacedHelpers('user')
export default {
  data () {
    return {
      list: []
    }
  },
  computed: {
    ...mapState(['userInfo'])
  },
  methods: {
    getMenuList (authList) {
      let menu = []
      let map = {}
      authList.forEach(m => {
        m.children = []
        map[m.id] = m // {1：菜单，2：菜单}
        if (m.pid == -1) {
          menu.push(m) // 如果是根，直接push到menu中
        } else {
          map[m.pid] && map[m.pid].children.push(m)
        }
      })
      return menu
    },
  },
  mounted () {
    this.list = this.getMenuList(this.userInfo.authList)
    console.log(this.list)
  },
  // react 比 vue 灵活
  render () {
    // return <h1>111</h1>
    let renderChildren = (list) => {
      return list.map(child => {
        if (child.children.length) {
          return <el-submenu index={child.id}>
              <div slot="title">{child.name}</div>
              {renderChildren(child.children)}
          </el-submenu>
        }
        return <el-menu-item index={child.path}>{child.name}</el-menu-item>
      })
    }
    return <el-menu
      background-color="#333"
      text-color="#fff"
      active-text-color="#ffd04b"
      class="menu"
      router={true}>
      {renderChildren(this.list)}
    </el-menu>
  }
}

// {
//   用户管理
//   pid: -1,
//   id: 1,
//   children: {

//   }
// }