document.addEventListener("DOMContentLoaded", function() {
    const tabs = document.querySelectorAll(".tab-item");
    const tabContents = document.querySelectorAll(".tab-content");

    tabs.forEach(tab => {
        tab.addEventListener("click", function() {
            const tabId = this.getAttribute("data-tab");

            tabs.forEach(tab => tab.classList.remove("active"));
            tabContents.forEach(content => content.classList.remove("active-tab-content"));

            this.classList.add("active");
            document.getElementById(tabId).classList.add("active-tab-content");
        });
    });

    
    tabs[0].click();
});
