let imgs = document.getElementsByTagName('img');
//imgs[4].src = chrome.extension.getURL("/images/incog.jpeg");
//for(elt in imgs) {
    if (imgs[4].offsetParent.classList == "cellCenter") {
        imgs[4].src = chrome.extension.getURL("/images/incog.jpeg");
    } else {
        imgs[5].src = chrome.extension.getURL("/images/incog.jpeg");
    }
//}
chrome.runtime.onMessage.addListener(received)
function received(message, sender, sendResponse) {
    console.log(message);
}