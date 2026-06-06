function addPost(){
  let name = document.getElementById("username").value;
  let img = document.getElementById("image").value;
  let caption = document.getElementById("caption").value;

  if(!name || !img || !caption){
    alert("Fill all fields!");
    return;
  }

  let post = document.createElement("div");
  post.className = "post";

  post.innerHTML = `
    <h3>${name}</h3>
    <img src="${img}">
    <p>${caption}</p>
    <button onclick="likePost(this)">❤️ Like</button>
  `;

  document.getElementById("posts").prepend(post);

  document.getElementById("username").value = "";
  document.getElementById("image").value = "";
  document.getElementById("caption").value = "";
}

function likePost(btn){
  btn.innerHTML = "❤️ Liked";
}

/* SIMPLE THEME TOGGLE */
function toggleTheme(){
  let body = document.body;

  if(body.style.background === "black"){
    body.style.background = "#fafafa";
    body.style.color = "black";
  }else{
    body.style.background = "black";
    body.style.color = "white";
  }
}