const responsive =  {
    0 : {
       items  : 1
    },
     320 : { 
      items  : 1
    },
    520 : { 
      items  : 1
    },
    960 : { 
     items : 1
    },
    1090 : { 
        items : 1
    }
  }
$(document).ready(function () {
    //referencias
   var owl =   $('.owl-carousel');
   owl.owlCarousel();
    owl.owlCarousel({
        loop: true,
        autoplay : true,
        autoplayTimeut : 3000,
        dots : false,
        nav : true,
        navText : [$('.owl-navigation .owl-nav-prev') , $('.owl-navigation .owl-nav-next')],
        responsive : responsive
   });
   
   /*=============================================
   =            evento de menu            =
   =============================================*/
    var nav = $('.nav'),
    texto =  $('.nav-fixed .texto'),
    men =  $('.navMen li a');
    toggleCollapse  = $('.toggle-collapse');
  
     toggleCollapse.on('click' , function () {
        //.text-gray
       //setTimeout(()=>{
        nav.toggleClass('text-gray');
        texto.toggleClass('ocultar');
        men.toggleClass('mostrar');
        console.log(men);
        
      // } , 400) 
       nav.toggleClass('agrandar');
      }) 
 
 /*=============================================
 =            animate 1            =
 =============================================*/
 
 var items =  $('#animate1 h3');

 animarSubtitulo();
//   let  intervalo =setInterval( ()=>{
//     animarSubtitulo();
//     console.log('pasando intervalo');
//      clearInterval(intervalo);
//   } , 10000)



 function  animarSubtitulo(){
    $(items).hide(); 
   // $(items).each(function (index, element) {
        //element == 
    var cont = 0;
      setInterval( async function ( ) {  
            $(items[cont]).fadeIn();
            $(items[cont]).addClass('animated bounce'); 
            await pausar(2000);
            await efectoFade(2000)
             $(items[cont]).hide();
           cont++;
           if(cont === items.length ){
             cont = 0;
           }
           $(items[cont]).removeClass('animated bounce');
          // clearInterval(interval);
         } ,  3000); 
    //});
   function pausar(time) {
        return new Promise( resolve => setTimeout(resolve , time));
   }
   function efectoFade(time) {
        return new Promise( resolve => {
          setTimeout( ()=>{
             
                $(items[cont]).addClass('animated fadeOutLeft'); 
            } ,   time  );
                $(items[cont]).removeClass('animated fadeOutLeft');
            resolve();    
        } );
   }
    
   
   /*=============================================
   =            background animate            =
   =============================================*/
   
  //  var header = $('.header');
   
  // //  setTimeout(()=> {
  // //    header.css( {
  // //      'background': 'url("../img/post-1.jpg")',
  // //      'background-repeat': 'no-repeat',
  // //      'background-size': 'cover',
  // //      'background-position': 'center',
  // //      'transition': 'all 3 ease-in-out'
  // //     }, 3000)

  // //    } , 3000);   
   
   
 }
 

 
});