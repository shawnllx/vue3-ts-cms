<template>
  <div class="goods">
    <page-search
      :search-config="searchConfig"
      @query-click="handleQueryClick"
      @reset-click="handleResetClick"
    />
    <page-content
      :content-config="contentConfig"
      ref="contentRef"
      @new-click="handleNewClick"
      @edit-click="handleEditClick"
    />
    <page-modal :modal-config="modalConfig" ref="modalRef" />
  </div>
</template>

<script setup lang="ts" name="category">
import pageSearch from '@/components/page-search/page-search.vue'
import searchConfig from './config/search.config'

import pageContent from '@/components/page-content/page-content.vue'
import usePageContent from '@/hooks/usePageContent'
import usePageModal from '@/hooks/usePageModal'
import contentConfig from './config/content.config'
import modalConfig from './config/modal.config'

//逻辑关系
const { contentRef, handleQueryClick, handleResetClick } = usePageContent()
const { modalRef, handleNewClick, handleEditClick } = usePageModal()
</script>

<style scoped></style>
