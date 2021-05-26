import {TreeFrog} from './classes/tree-frog.js'

let rosinka;
let contentScriptTabId;
chrome.runtime.sendMessage(
    {type: 'extension-loaded'},//sprava - objekt
    
    (response) =>{
        contentScriptTabId = response.contentScriptTabId
        rosinka = new TreeFrog("Rosinka", 5, "green", "F", contentScriptTabId)
        rosinka.myTabId()
    }
)
