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

  function ativaScrollSuave(selector) {

    $(selector).click(function(event) {
        
        event.preventDefault();
        var target = $(this).attr('href');
        
        $('html, body').animate({
            scrollTop: $(target).offset().top
        }, 500)
    });
}

ativaScrollSuave('a[href*=img]');
ativaScrollSuave('a[href*=sobre-nos]');
ativaScrollSuave('a[href*=agendamento-online]');
ativaScrollSuave('a[href*=crud]');
ativaScrollSuave('a[href*=colaboradores]');