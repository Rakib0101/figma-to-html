const loadMore = document.getElementById("load-more-btn");

function loadPosts() {
    fetch("https://rakib0101.github.io/blog_json/blog.json")
        .then((res) => res.json())
        .then((data) => {
            displayTwoColPosts(data);
            displayThreeColPosts(data);
        });
}
loadPosts();


function loadDuePosts() {
    console.log('clicked');
    fetch("https://rakib0101.github.io/blog_json/blog.json")
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            displayDuePosts(data);
            loadMore.style.display = "none";
        });
}
loadMore.addEventListener('click', loadDuePosts)

function displayTwoColPosts(posts) {
    const slicePosts = posts.slice(0, 2);
    const twoColPosts = document.getElementById("two-col-posts");
    for (const post of slicePosts) {
        const div = document.createElement("div");
        div.classList.add("blog-post");
        div.innerHTML = `
            <img src=${post.feature_img} />
            <p class="blog-category">${post.blog_category}</p>
            <h2 class="blog-title">${post.blog_title}</h2>
            <p class="published-date">${post.published_date}</P>
        `;
        twoColPosts.appendChild(div);
    }
}
function displayThreeColPosts(posts) {
    const slicePosts = posts.slice(2, 8);
    const threeColPosts = document.getElementById("three-col-posts");
    for (const post of slicePosts) {
        const div = document.createElement("div");
        div.classList.add("three-blog-post");
        div.innerHTML = `
            <img src=${post.feature_img} />
            <p class="blog-category">${post.blog_category}</p>
            <h2 class="blog-title">${post.blog_title}</h2>
            <p class="published-date">${post.published_date}</P>
        `;
        threeColPosts.appendChild(div);
    }
}
function displayDuePosts(posts) {
    const slicePosts = posts.slice(8, 12);
    console.log(slicePosts);
    const threeColPosts = document.getElementById("load-more-three-col-posts");
    for (const post of slicePosts) {
        const div = document.createElement("div");
        div.classList.add("load-more-three-blog-post");
        div.innerHTML = `
            <img src=${post.feature_img} />
            <p class="blog-category">${post.blog_category}</p>
            <h2 class="blog-title">${post.blog_title}</h2>
            <p class="published-date">${post.published_date}</P>
        `;
        threeColPosts.appendChild(div);
        console.log(post);
    }
}


//Menu
const menu = document.querySelector(".menu");
const menuItems = document.querySelectorAll(".menuItem");
const hamburger = document.querySelector(".hamburger");
const closeIcon = document.querySelector(".closeIcon");
const menuIcon = document.querySelector(".menuIcon");

function toggleMenu() {
    if (menu.classList.contains("showMenu")) {
        menu.classList.remove("showMenu");
        closeIcon.style.display = "none";
        menuIcon.style.display = "block";
        menuItems.style.visibility = "visible";
    } else {
        menu.classList.add("showMenu");
        closeIcon.style.display = "block";
        menuIcon.style.display = "none";
    }
}

hamburger.addEventListener("click", toggleMenu);

menuItems.forEach(function (menuItem) {
    menuItem.addEventListener("click", toggleMenu);
});
