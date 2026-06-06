const feed = document.getElementById('feed');

// पोस्ट का डेटा
const postData = { user: "Chef_Priya", content: "आज का स्पेशल!" };

function createPost() {
    feed.innerHTML = `
        <div class="post">
            <div class="post-header">${postData.user}</div>
            <div class="post-img"></div>
            <div class="post-actions">
                <i class="fa-regular fa-heart" onclick="this.style.color='red'"></i>
                <i class="fa-regular fa-comment"></i>
                <i class="fa-regular fa-paper-plane"></i>
            </div>
            <p style="padding: 0 10px;"><b>${postData.user}</b> ${postData.content}</p>
        </div>
    `;
}

createPost();
