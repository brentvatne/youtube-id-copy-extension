function copyIdToClipboard(data) {
  var page = chrome.extension.getBackgroundPage();
  var linkUrl = data.linkUrl;
  var id = linkUrl.match(/watch\?v=[^&]+/)[0].replace('watch?v=', '');
  copyTextToClipboard(id);
}

function copyTextToClipboard(text) {
  var copyFrom = document.createElement("textarea");
  copyFrom.textContent = text;
  var body = document.getElementsByTagName('body')[0];
  body.appendChild(copyFrom);
  copyFrom.select();
  document.execCommand('copy');
  body.removeChild(copyFrom);
}

chrome.contextMenus.create({
 title: "Copy YouTube ID",
 contexts: ["link"],
 onclick: copyIdToClipboard
});
