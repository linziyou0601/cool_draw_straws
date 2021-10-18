const state = () => ({
  _alertDialog: {
    show: false,
    title: '',
    content: '',
    iconSet: '',
    iconName: '',
    type: '',
  },
  _loadingDialogShow: false,
  _icdDataDialog: {
    show: false,
    code: '',
    title: '',
    description: '',
    percentage: 0,
  },
})

const getters = {
  alertDialog: (state) => state._alertDialog,
  loadingDialogShow: (state) => state._loadingDialogShow,
  icdDataDialog: (state) => state._icdDataDialog,
}

const actions = {
}

const mutations = {
  fireAlertDialog(state, { title, content, iconSet, iconName, type }) {
    state._alertDialog.title = title
    state._alertDialog.content = content
    state._alertDialog.iconSet = iconSet
    state._alertDialog.iconName = iconName
    state._alertDialog.type = type
    state._alertDialog.show = true
  },
  closeAlertDialog(state) {
    state._alertDialog.title = ''
    state._alertDialog.content = ''
    state._alertDialog.iconSet = ''
    state._alertDialog.iconName = ''
    state._alertDialog.type = ''
    state._alertDialog.show = false
  },
  fireLoadingDialog(state) {
    state._loadingDialogShow = true
  },
  closeLoadingDialog(state) {
    state._loadingDialogShow = false
  },
  fireIcdDataDialog(state, { code, title, description, percentage }) {
    state._icdDataDialog.code = code
    state._icdDataDialog.title = title
    state._icdDataDialog.description = description
    state._icdDataDialog.percentage = percentage
    state._icdDataDialog.show = true
  },
  closeIcdDataDialog(state) {
    state._icdDataDialog.show = false
  },
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
}