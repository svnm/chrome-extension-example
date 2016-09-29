function injectTheScript() {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.executeScript(tabs[0].id, {file: "content_script.js"});
  });
}

/* on click the icon popup */
document.addEventListener("DOMContentLoaded", function(event) {
  injectTheScript()
});

/* on click of the popups test_button  */
document.getElementById('test_button').addEventListener('click', injectTheScript);
