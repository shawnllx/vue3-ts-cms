<template>
  <div class="role">
    <page-search
      :search-config="searchConfig"
      @query-click="handleQueryClick"
      @reset-click="handleResetClick"
    />
    <page-content
      :contentConfig="contentConfig"
      ref="contentRef"
      @new-click="handleNewClick"
      @edit-click="handleEditClick"
    />
    <page-modal
      :modalConfig="modalConfig"
      :other-info="otherInfo"
      ref="modalRef"
    >
      <template #menulist>
        <el-tree
          ref="treeRef"
          :data="entireMenus"
          show-checkbox
          node-key="id"
          :props="{ children: 'children', label: 'name' }"
          @check="handleElTreeCheck"
      /></template>
    </page-modal>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { ref, nextTick } from 'vue'
import type { ElTree } from 'element-plus'

import PageSearch from '@/components/page-search/page-search.vue'
import searchConfig from './config/search.config'

import PageContent from '@/components/page-content/page-content.vue'
import contentConfig from './config/content.config'

import PageModal from '@/components/page-modal/page-modal.vue'
import modalConfig from './config/modal.config'

import usePageContent from '@/hooks/usePageContent'
import usePageModal from '@/hooks/usePageModal'
import useMainStore from '@/store/main/main'
import { mapMenuListToIds } from '@/utils/map-menus'

// 逻辑关系
const { contentRef, handleQueryClick, handleResetClick } = usePageContent()
const { modalRef, handleNewClick, handleEditClick } = usePageModal(
  newCallback,
  editCallback
)

// 获取完整的菜单
const mainStore = useMainStore()
const { entireMenus } = storeToRefs(mainStore)
const otherInfo = ref({})
function handleElTreeCheck(data1: any, data2: any) {
  const menuList = [...data2.checkedKeys, ...data2.halfCheckedKeys]
  //  对象的增强
  otherInfo.value = { menuList: menuList }
}

const treeRef = ref<InstanceType<typeof ElTree>>()
function newCallback() {
  nextTick(() => {
    treeRef.value?.setCheckedKeys([])
  })
}
function editCallback(itemData: any) {
  // console.log('点击了编辑', itemData)
  nextTick(() => {
    const menuIds = mapMenuListToIds(itemData.menuList)
    // console.log(menuIds)
    treeRef.value?.setCheckedKeys([1, 2, 3, 4])
  })
}
</script>

<style lang="less" scoped></style>
