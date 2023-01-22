var html = document.getElementsByClassName("notecard").item(0).innerHTML;
var imgs = document.getElementsByClassName("notecard");
for(var i = 0; i < imgs.length; i++) {
    imgs[i].innerHTML = "<tbody>enter the password you bozo</tbody>";
}

var pass = "hello123";//todo save pass on a server
chrome.runtime.onMessage.addListener(receive);

function receive(req, send, sendRes) {
    console.log(req);
    fetch("global.json").then((res) => res.json)
    if (pass == req.txt) {
        document.getElementsByClassName("notecard").item(0).innerHTML = html;
    }
}
