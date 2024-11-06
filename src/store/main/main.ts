import {
  getEntireDepartments,
  getEntireRoles,
  getEntireMenus
} from '@/service/main/main'
import { defineStore } from 'pinia'

interface IMainState {
  entireRoles: any[]
  entireDepartments: any[]
  entireMenus: any[]
}

// 新建用户Dialog的操作
const useMainStore = defineStore('main', {
  state: (): IMainState => ({
    entireRoles: [],
    entireDepartments: [],
    entireMenus: []
  }),
  actions: {
    async fetEntireDataAction() {
      const rolesResult = await getEntireDepartments()
      const departmentsResult = await getEntireRoles()
      const menuResult = await getEntireMenus()

      // 保存数据
      this.entireRoles = rolesResult.data.list
      this.entireDepartments = departmentsResult.data.list
      this.entireMenus = menuResult.data.list
    }
  }
})

export default useMainStore
