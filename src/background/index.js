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

chrome.runtime.onMessageExternal.addListener(req => {
  const { action } = req
  if (action === 'reload') {
    chrome.runtime.reload()
  }
})
