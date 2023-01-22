function setup() {
    noCanvas();
    let userinput = select("#pass");
    userinput.input(function() {
        let params = {
            active: true,
            currentWindow: true
        }
        chrome.tabs.query(params, function(tab) {
            console.log("hello");
            let msg = {
                txt: userinput.value(),
                background: false
            }
            chrome.tabs.sendMessage(tab[0].id, msg);
        });
    });
    
}

/*function sub() {
    const password = "test";
    const pass = document.getElementById("pass");
    console.log(pass);
    if (pass == password) {
        let params = {
            active: true,
            currentWindow: true
        }
        document.getElementById("test").innerHTML = pass;
        function tabs(tab) {
            chrome.tabs.sendMessage(tab[0].id, "hello");
        }
        chrome.tabs.query(params, tabs);
    }
}*/
