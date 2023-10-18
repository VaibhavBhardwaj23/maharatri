document.querySelector(".ham_icn").addEventListener("click", () => {
    document.querySelector(".navigation_mobile").classList.remove("hide")
    document.body.classList.toggle('lock-scroll');
  })
  // document.querySelector(".blank").addEventListener("click", () => {
  //   document.querySelector(".navigation_mobile").classList.toggle("hide")
  //   document.body.classList.toggle('lock-scroll');
  // })

  window.onclick = e => {
    if (e.target === document.querySelector(".navigation_mobile")) {
       document.querySelector(".navigation_mobile").classList.toggle("hide")
       document.body.classList.toggle('lock-scroll');
  }
}









  var coll = document.getElementsByClassName("collapsible");
  var i;
  
  for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
      this.classList.toggle("active");
      var content = this.nextElementSibling;
      if (content.style.maxHeight){
        content.style.maxHeight = null;
      } else {
        content.style.maxHeight = content.scrollHeight + "em";
      }
    });
  }