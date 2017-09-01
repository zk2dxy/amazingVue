<template>
  <div class="index">
    <el-button>{{userInfo.name}}</el-button>
    <i class="sceoIcon sceoIcon-truck"></i>
    <el-button @click="next" ref="nexts" icon="edit">
      {{username}}
    </el-button>
  </div>
</template>
<script>
  import {userInfoService} from '@/api'

  export default {
    name: `index`,
    mounted () {
      // 返回用户数据
      userInfoService.getUserInfo().then(data => {
        this.userInfo = data
      })
      // 返回用户列表
      /*
      import {userInfoService, userService} from '@/api'
      userService.queryUserList(this.queryData).then(data => {
        console.log(data)
      })
      */
      // console.log(this.UTILS.validate('zk2dxy@vip.qq.com', 'email'))
    },
    methods: {
      next () {
        console.log(this.$el)
        console.log(this.$refs['nexts'])
        // this.$set(this, 'username', 'Mr.Zack')
        setTimeout(() => {
          // this.$delete(this.userInfo, 'name')
        }, 1000)
      }
    },
    data () {
      return {
        username: 'Zack',
        userInfo: {},
        queryData: {
          name: '',
          sex: '',
          pageSize: this.CONFIG.page.defaultPageSize,
          pageNum: 1
        },
        pageData: {
          totalCount: 0,
          pageSize: this.CONFIG.page.defaultPageSize,
          pageNum: 1
        }
      }
    }
  }
</script>
<style scoped>
  .soubox {
    position: relative;
    width: 300px;
    margin: 0 auto;
  }

  .sou {
    position: absolute;
    left: 0;
    top: 100%;
    width: 100%;
  }

  .closesou {
    font-size: 30px;
    color: red;
    cursor: pointer;
  }
</style>
