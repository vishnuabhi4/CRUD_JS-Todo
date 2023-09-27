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
    }
};