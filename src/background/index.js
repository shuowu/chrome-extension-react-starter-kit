/* DEV-START */
chrome.runtime.onInstalled.addListener(() => {
  chrome.tabs.query({ active: true }, tabs => {
    const tab = tabs[0]
    const { id } = tab
    if (id) {
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
/* DEV-END */
