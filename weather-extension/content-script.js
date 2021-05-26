console.log("AHOJ, ja som content script")

chrome.runtime.onMessage.addListener(
    function (message, sender, sendResponse) {
        if (message.type === 'color-elements') {
            colorElements(message.color, message.elementName)
        }
        if (message.type === 'function-name') {
            if(message.functionName === 'getAllText'){
                sendResponse(getAllText())
            }        
            if(message.functionName === 'sortAllText'){
                sendResponse(sortAllText())
            }
            if(message.functionName === 'sortTextik'){
                sendResponse(sortTextik())
            }
        }
    }
)

function colorElements (color, elementName){
    const elements = document.getElementsByTagName(elementName)
    for(let e of elements){
        e.style['background-color'] = color
    }
}

function getAllText (){
    return document.body.innerText        
}

function sortTextik(){
    let result = "";
    let whole = document.body.innerText;
    let words = whole.split(" ");
    words.sort();
    for(let i = 0; i < words.length; i++)
        result+=words[i] + "<br>";     
    return result;
}

function sortAllText(){
    let whole = document.body.innerText;
    let words = whole.split(" ");
    words.sort(); 
    let result = words[0];
    for(let i = 1; i < words.length; i++){
        let count=0;
        for(let j=0; j<i; j++){
            if(words[j] == words[i]) count++;
        }
        if(count==0) result+=words[i] +"<br>";
    }
    return result;
}
