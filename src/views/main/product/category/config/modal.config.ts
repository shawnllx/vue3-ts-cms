import type { IModalConfig } from '@/components/page-modal/type'

const modalConfig: IModalConfig = {
  pageName: 'goods',
  header: {
    newTitle: '新建类别',
    editTitle: '编辑类别'
  },
  formItems: [
    {
      type: 'input',
      label: '角色名称',
      prop: 'name',
      placeholder: '请输入角色名称'
    }
  ]
}

export default modalConfig
