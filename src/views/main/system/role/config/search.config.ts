const searchConfig = {
  pageName: 'role',
  formItems: [
    {
      type: 'input',
      prop: 'name',
      label: '角色名称',
      placeholder: '请输入查询的角色名称'
    },
    {
      label: '角色权限',
      type: 'input',
      prop: 'intro',
      placeholder: '请输入角色的权限'
    },
    {
      label: '创建时间',
      prop: 'createAt',
      type: 'date-picker'
    }
  ]
}

export default searchConfig
