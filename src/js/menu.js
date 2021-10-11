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
  

   
//function ativaScrollSuave(selector) {

  //$(selector).click(function(event){
    //  event.preventDefault();

    //  var target = $(this).attr('href');

     // $('html, body').animate({
     //     scrollTop: $(target).offset().top
     // }, 1000);  
 // });
//}
//ativaScrollSuave('a[href*=panel-sobre]');
//ativaScrollSuave('a[href*=panel-palestrante]');
//ativaScrollSuave('a[href*=panel-form]');