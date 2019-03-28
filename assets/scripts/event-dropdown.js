let eventArray = document.querySelectorAll(".event__minimized");

eventArray.forEach(element => {
    element.addEventListener("click", () => { 
        if (getComputedStyle(element.parentNode.querySelector(".event__dropdown")).maxHeight === "0px")
            openDropdown(element);
        else
            closeDropdown(element);
    })
});

function openDropdown(event) {
    event.parentNode.querySelector(".event__dropdown").style.maxHeight = "900px";
}

function closeDropdown(event) {
    event.parentNode.querySelector(".event__dropdown").style.maxHeight = "0px";
}