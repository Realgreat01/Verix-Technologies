// footer Date 
let currentDate = new Date;
let currentYear = currentDate.getFullYear();
document.getElementById('currentYear').innerText = currentYear;

// 

let navbar = document.getElementById("nav-bar");
console.log(navbar);
let navtag = document.getElementById("nav-tag");
console.log(navtag);

const toggleNav = () =>{
   if(navbar.style.display==="none"){
    navbar.style.display="block";
    navtag.style.transition="2s";
   }
   else{
    navbar.style.display="none"
   };

}

setInterval(console.log(window.innerWidth),100)