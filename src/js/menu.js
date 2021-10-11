var menu = document.querySelector("#in-menu")
var bottonAbrir  = document.querySelector(".button-menu")
var bottonfechar = document.querySelector("#fecharM")
  
   bottonAbrir.addEventListener( "click", (event)=>{
    event.preventDefault()
    menu.style.width = "18em";

   })

  bottonfechar.addEventListener("click", (event) =>{
    event.preventDefault()
    menu.style.width = "0em";

  })