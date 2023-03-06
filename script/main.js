var tabLinks = document.getElementsByClassName("tab-links");
var tabContents = document.getElementsByClassName("tab-contents");

function openTab(tabName) {
    
    // Remove the content
    for (tabLink of tabLinks) {
        tabLink.classList.remove("active-link")
    }

    for (tabContent of tabContents) {
        tabContent.classList.remove("active-tab")
    }

    // Show the content
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabName).classList.add("active-tab");

}