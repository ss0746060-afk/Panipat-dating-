function addPost(){
  let name = document.getElementById("name").value;
  let img = document.getElementById("image").value;
  let cap = document.getElementById("caption").value;

  if(!name || !img || !cap){
    alert("Fill all fields!");
    return;
  }

  let post = document.createElement("div");
  post.className = "post";

  post.innerHTML = `
    <h3>${name}</h3>
    <img src="${img}">
    <p>${cap}</p>
    <button onclick="likePost(this)">❤️ Like</button>
    <button onclick="commentPost(this)">💬 Comment</button>
  `;

  document.getElementById("feed").prepend(post);

  document.getElementById("name").value="";
  document.getElementById("image").value="";
  document.getElementById("caption").value="";
}

function likePost(btn){
  btn.innerHTML = "❤️ Liked";
}

function commentPost(btn){
  let text = prompt("Write comment:");
  if(text){
    alert("💬 Comment added: " + text);
  }
}

function toggleTheme(){
  document.body.classList.toggle("dark");
}