function loadPosts() {
    fetch("https://rakib0101.github.io/blog_json/blog.json")
        .then(res => res.json())
        .then(data => {
            displayTwoColPosts(data)
            displayThreeColPosts(data)
        })
}

function displayTwoColPosts(posts) {
    const slicePosts = posts.slice(0, 2)
    const twoColPosts = document.getElementById('two-col-posts')
    for (const post of slicePosts) {
        const div = document.createElement('div');
        div.classList.add('blog-post')
        div.innerHTML = `
            <img src=${post.feature_img} />
            <p class="blog-category">${post.blog_category}</p>
            <h2 class="blog-title">${post.blog_title}</h2>
            <p class="published-date">${post.published_date}</P>
        `;
        twoColPosts.appendChild(div)
        console.log(post);
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
        console.log(post);
    }
}
loadPosts()