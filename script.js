document.getElementById("tabsForm").addEventListener("submit", function(event) {
  event.preventDefault();
  var url = document.getElementById("urlInput").value;
  var tabs = parseInt(document.getElementById("tabsInput").value);
  openTabs(url, tabs);
});

function openTabs(url, tabs) {
  var tabsContainer = document.getElementById("tabsContainer");
  tabsContainer.innerHTML = ""; // Clear previous tabs
  
  for (var i = 0; i < tabs; i++) {
    var tab = document.createElement("div");
    tab.classList.add("tab");
    var iframeContainer = document.createElement("div");
    iframeContainer.classList.add("iframe-container");
    var iframe = document.createElement("iframe");
    iframe.setAttribute("src", url);
    iframeContainer.appendChild(iframe);
    tab.appendChild(iframeContainer);
    
    var overlay = document.createElement("div");
    overlay.classList.add("overlay");
    tab.appendChild(overlay);
    
    tabsContainer.appendChild(tab);
  }
}
