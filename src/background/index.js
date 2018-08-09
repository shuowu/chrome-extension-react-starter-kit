chrome.runtime.onInstalled.addListener(() => {
  console.log('installed')
  chrome.tabs.query({ active: true }, tabs => {
    const tab = tabs[0]
    const { id, url } = tab
    if (id && url.indexOf('localhost') === -1) {
      chrome.tabs.reload(id)
    }
  })
})

window.addEventListener(
  'message',
  msg => {
    const { data } = msg
    if (data && JSON.stringify(data).indexOf('webpackHotUpdate') > -1) {
      chrome.runtime.reload()
    }
  },
  false
)
