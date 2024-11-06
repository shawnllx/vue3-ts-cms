const contentConfig = {
  pageName: 'goods',
  header: {
    title: '商品列表',
    btnTitle: '新建数据'
  },
  propsList: [
    { type: 'selection', label: '选择', width: '50px' },
    { type: 'index', label: '序号', width: '50px', prop: 'id' },
    { type: 'normal', label: '商品名称', width: '150px', prop: 'name' },
    { type: 'normal', label: '原价格', width: '80px', prop: 'oldPrice' },
    { type: 'normal', label: '新价格', width: '80px', prop: 'newPrice' },
    { type: 'normal', label: '商品描述', width: '150px', prop: 'desc' },
    { type: 'normal', label: '状态', width: '50px', prop: 'status' },
    { type: 'normal', label: '图片', width: '150px', prop: 'imgUrl' },
    { type: 'normal', label: '库存', width: '80px', prop: 'inventoryCount' },
    { type: 'normal', label: '销量', width: '80px', prop: 'saleCount' },
    { type: 'normal', label: '收藏', width: '80px', prop: 'favorCount' },
    { type: 'normal', label: '地址', width: '80px', prop: 'address' },
    { type: 'timer', label: '创建时间', prop: 'createAt' },
    { type: 'timer', label: '更新时间', prop: 'updateAt' },
    { type: 'handler', label: '操作', width: '150px' }
  ]
}

export default contentConfig
