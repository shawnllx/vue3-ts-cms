const contentConfig = {
  pageName: 'goods',
  header: {
    title: '类别列表',
    btnTitle: '新建数据'
  },
  propsList: [
    { type: 'selection', label: '选择', width: '150px' },
    { type: 'index', label: '序号', width: '150px', prop: 'id' },
    { type: 'normal', label: '角色名称', width: '150px', prop: 'name' },
    { type: 'timer', label: '创建时间', prop: 'createAt' },
    { type: 'timer', label: '更新时间', prop: 'updateAt' },
    { type: 'handler', label: '操作', width: '150px' }
  ]
}

export default contentConfig
