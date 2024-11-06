import {
  deleteUserById,
  newUserData,
  postUsersListData,
  editUserData,
  postPageListData,
  deletePageById,
  newPageData,
  editPageData
} from '@/service/main/system/ststem'
import { defineStore } from 'pinia'
import type { ISystemState } from './type'
import useMainStore from '../main'
// import hyRequest from '@/service'

const useSystemStore = defineStore('system', {
  state: (): ISystemState => ({
    usersList: [],
    userTotalCount: 0,

    pageList: [],
    pageTotalCount: 0
  }),
  // 用户的网络请求
  actions: {
    async postUsersListAction(queryInfo: any) {
      const usersListResult = await postUsersListData(queryInfo)
      const { totalCount, list } = usersListResult.data
      this.userTotalCount = totalCount
      this.usersList = list
    },
    async deleteUserByIdAction(id: number) {
      // 1.删除数据的操作
      const deleteResult = await deleteUserById(id)

      // 2.重新请求新的数据
      this.postUsersListAction({ offset: 0, size: 10 })
    },
    async newUserDataAction(userInfo: any) {
      // 1.创建新的用户
      const newResult = await newUserData(userInfo)
      console.log(newResult)

      // 2.重新请求新的数据
      this.postUsersListAction({ offset: 0, size: 10 })
    },
    async editUerDataAction(id: number, userInfo: any) {
      // 1.编辑用户的数据
      const editResult = await editUserData(id, userInfo)
      console.log(editResult)

      // 2.重新请求新的数据
      this.postUsersListAction({ offset: 0, size: 10 })
    },

    /** 针对页码的数据：增删改查 */
    async postPageListAction(pageName: string, queryInfo: any) {
      const pageListResult = await postPageListData(pageName, queryInfo)
      const { totalCount, list } = pageListResult.data
      this.pageList = list
      this.pageTotalCount = totalCount

      // 获取完整的数据
      const mainStore = useMainStore()
      mainStore.fetEntireDataAction()
    },
    async deletePageByIdAction(pageName: string, id: number) {
      const deleteResult = await deletePageById(pageName, id)
      console.log(deleteResult)
      this.postPageListAction(pageName, { offset: 0, size: 10 })

      // 获取完整的数据
      const mainStore = useMainStore()
      mainStore.fetEntireDataAction()
    },
    async newPageDataAction(pageName: string, pageInfo: any) {
      const newResult = await newPageData(pageName, pageInfo)
      console.log(newResult)
      this.postPageListAction(pageName, { offset: 0, size: 10 })

      // 获取完整的数据
      const mainStore = useMainStore()
      mainStore.fetEntireDataAction()
    },
    async editPageDataAction(pageName: string, id: number, pageInfo: any) {
      const editResult = await editPageData(pageName, id, pageInfo)
      console.log(editResult)
      this.postPageListAction(pageName, { offset: 0, size: 10 })

      // 获取完整的数据
      const mainStore = useMainStore()
      mainStore.fetEntireDataAction()
    }
  }
})

export default useSystemStore
