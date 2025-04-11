let navlinks = document.querySelectorAll('.nav-links')
let bars = document.querySelector(".hamburger");
let ul = document.querySelector(".ul");

bars.onclick = function(){
if (ul.classList.contains("motion")) {
  ul.classList.remove('motion')

}else{
  ul.classList.add('motion')
}
}
navlinks.forEach( links => {
  links.onclick = function(){
    ul.classList.remove("motion")
    console.log(123)
  }
})