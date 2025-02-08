function toggleSearch() {
    let searchContainer = document.querySelector(".search-container");
    let searchBox = document.getElementsByClassName("search-box");
    let searchIcon = document.getElementsByClassName("search-icon");

    searchContainer.classList.toggle("active");

    if (searchContainer.classList.contains("active")) {
        searchBox.focus();
    } else {
        searchBox.blur();
    }
}

document.addEventListener("click", function(event) {
    let searchContainer = document.querySelector(".search-container");
    let searchIcon = document.getElementsByClassName("search-icon");

    if (!searchContainer.contains(event.target)) {
        searchContainer.classList.remove("active");
    }
});