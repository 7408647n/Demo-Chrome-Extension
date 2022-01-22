chrome.action.onClicked.addListener(function(tab) {
  chrome.windows.create({
    url: chrome.runtime.getURL("index.html"),
    type: "popup"
  }, function(win) {
    //Run code after the popup
  });
});