<template>
  <div class="user">
    <user-search
      @queryClick="handleQueryClick"
      @resetClick="handleResetClick"
    />
    <user-content
      ref="contentRef"
      @newClick="handleNewClick"
      @edit-click="handleEditClick"
    />
    <user-modal ref="modalRef" />
  </div>
</template>

<script setup lang="ts">
import UserSearch from './c-cpns/user-search.vue'
import UserContent from './c-cpns/user-content.vue'
import UserModal from './c-cpns/user-modal.vue'
import { ref } from 'vue'

// 对content组件的操作
const contentRef = ref<InstanceType<typeof UserContent>>()
//查询逻辑
function handleQueryClick(formData: any) {
  contentRef.value?.fetchUserListData(formData)
}
// 重置逻辑
function handleResetClick() {
  contentRef.value?.fetchUserListData()
}

// 对modal组件的操作
const modalRef = ref<InstanceType<typeof UserModal>>()
function handleNewClick() {
  modalRef.value?.setModalVisible()
}
function handleEditClick(itemData: any) {
  modalRef.value?.setModalVisible(false, itemData)
}
</script>

<style lang="less" scoped>
.user {
  border-radius: 8px;
  overflow: hidden;
}
</style>
