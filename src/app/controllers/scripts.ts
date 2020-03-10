
 export const cargarEstilo = (styleUrl : string)=>{
    return new Promise((resolve, reject) => {
        const styleElement = document.createElement('link');
        styleElement.href = styleUrl;
        styleElement.rel = "stylesheet";
        styleElement.onload = resolve;
        document.head.appendChild(styleElement);
      });   
 }
 
export let cargarScript = (scriptUrl : string , atr :string)=>{
    return  new Promise( (resolve , reject)=>{
      const scriptElment = document.createElement('script');
      scriptElment.setAttribute(atr , 'generado');
      scriptElment.src = scriptUrl;       
     let elemento  =document.getElementById('arriba');
     
     document.body.insertBefore(scriptElment , elemento);
      resolve();
    }); 
}

export let cargarScripts = (scripts : string[] , atr: string) =>{
     return new Promise(async (resolve , reject)=>{
          for (const script  of scripts){
               await cargarScript(script , atr);
        }
        resolve(scripts);
     });
} 

export const eliminarScript =  (atr: string)=> {
  return new Promise((resolve , reject)=>{
      let scripts :any =  document.getElementsByTagName('script');
      let body = document.body;
        for (const script of scripts) {
              
           let src : HTMLElement = script;
          if(src.getAttribute(atr)){
               body.removeChild(src);
               // console.log('removio el elemnto ' , src);
          }
        }
   });

}
