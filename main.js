let form = document.getElementById("form");
let input = document.getElementById("input");
let msg = document.getElementById("msg");
let posts = document.getElementById("posts");
/*we use let because it has no hoisting issue and it 
can be reassignable so it can change values overtime with 
dom element manipulation*/
form.addEventListener("submit",(e) =>{
    e.preventDefault();
    console.log("button clicked");

    formValidation();
});

let formValidation = () => {
    if (input.value === ""){
        msg.innerHTML = "Post cannot be blank";
        console.log("failure");
    }else{
        console.log("success");
        msg.innerHTML = "";
        acceptData();
    }
};

let data = {};

let acceptData = () => {
    data["text"] = input.value;
    console.log(data);
    createPost();
  };

  let createPost = () => {
    posts.innerHTML += `
    <div>
      <p>${data.text}</p>
      <span class="options">
        <i onClick="editPost(this)" class="fas fa-edit"></i>
        <i onClick="deletePost(this)" class="fas fa-trash-alt"></i>
      </span>
    </div>
    `;
    input.value = "";
  };

  let deletePost = (e) => {
    e.parentElement.parentElement.remove();
  };