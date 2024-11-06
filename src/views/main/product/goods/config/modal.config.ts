import type { IModalConfig } from '@/components/page-modal/type'

const modalConfig: IModalConfig = {
  pageName: 'goods',
  header: {
    newTitle: '新建商品',
    editTitle: '编辑商品'
  },
  formItems: [
    {
      type: 'input',
      label: '商品名称',
      prop: 'name',
      placeholder: '请输入商品名称'
    },
    {
      type: 'input',
      label: '原价格',
      prop: 'oldPrice',
      placeholder: '请输入商品价格'
    },
    {
      type: 'input',
      label: '新价格',
      prop: 'newPrice',
      placeholder: '请输入商品价格'
    },
    {
      type: 'input',
      label: '商品描述',
      prop: 'desc',
      placeholder: '商品描述'
    },
    { type: 'input', label: '状态', prop: 'status', placeholder: '状态描述' },

    {
      type: 'input',
      label: '图片',
      prop: 'imgURL',
      placeholder: '图片'
    },
    {
      type: 'input',
      label: '商品库存',
      prop: 'inventoryCount',
      placeholder: '库存'
    },
    {
      type: 'input',
      label: '销量',
      prop: 'saleCount',
      placeholder: '销量'
    },
    {
      type: 'input',
      label: '收藏',
      prop: 'favorCount',
      placeholder: '收藏'
    },
    {
      type: 'input',
      label: '地址',
      prop: 'address',
      placeholder: '地址'
    }
  ]
}

export default modalConfig
