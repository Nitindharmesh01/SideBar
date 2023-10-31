const toggle = document.querySelector(".sidebar-toggle");
const close = document.querySelector(".close-btn");
const sidebar  = document.querySelector(".sidebar");

// toggle.addEventListener("click",function(){

//   console.log(toggle.classList)
//   if(sidebar.classList.contains("show-sidebar")){
//     sidebar.classList.remove("show-sidebar");
//   }
//   else{
//     sidebar.classList.add("show-sidebar");
//   }
// })


// Much fatser way 

toggle.addEventListener("click", function(){
  sidebar.classList.toggle("show-sidebar");
})
close.addEventListener("click", function(){
  sidebar.classList.remove("show-sidebar");
})