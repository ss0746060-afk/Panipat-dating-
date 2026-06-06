const feed = document.getElementById('feed');

// बड़े लेवल का डेटा
const posts = [
    { user: "Priya_Foodie", img: "image1.jpg", likes: "1,200" },
    { user: "Rahul_Travels", img: "image2.jpg", likes: "890" }
];

function renderPosts() {
    posts.forEach(post => {
        const postDiv = document.createElement('div');
        postDiv.className = 'post-card';
        postDiv.innerHTML = `
            <div class="post-header"><b>${post.user}</b></div>
            <div class="post-img"></div>
            <div class="actions">
                <i class="fa-regular fa-heart" onclick="this.style.color='red'"></i>
                <i class="fa-regular fa-comment"></i>
                <i class="fa-regular fa-paper-plane"></i>
            </div>
            <p style="padding-left:15px; padding-bottom:15px;">${post.likes} Likes</p>
        `;
        feed.appendChild(postDiv);
    });
}

renderPosts();
