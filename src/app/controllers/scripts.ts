import { async } from '@angular/core/testing';
import { URLBACKEND } from '../keywords/constants';


 export const cargarEstilo = (styleUrl : string ,atr :string)=>{
    return new Promise((resolve, reject) => {
        const styleElement = document.createElement('link');
        styleElement.setAttribute(atr , 'generado');
        styleElement.href = styleUrl;
        styleElement.rel = "stylesheet";
        styleElement.onload = resolve;
        document.head.appendChild(styleElement);
      });   
 }
 
export interface ScriptModel {
  name: string,
  src: string,
  loaded: boolean
}
 
export let cargarScript = (scriptUrl : string , atr :string)=>{
    return  new Promise( (resolve , reject)=>{
      const scriptElment = document.createElement('script');
      scriptElment.setAttribute(atr , 'generado');
      scriptElment.src = scriptUrl;       
      // scriptElment.onload( )
     document.body.appendChild(scriptElment);
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
          if(src.hasAttribute(atr)){
               body.removeChild(src);
               // console.log('removio el elemnto ' , src);
          }
        }
   });

}
export const elimarPertenencias  = (atr)=>{
      eliminarScript(atr);
      eliminarEstilos(atr);
}
export const eliminarEstilos =  (atr: string)=> {
     return new Promise((resolve , reject)=>{
         let links :any =  document.getElementsByTagName('link');
         let header = document.head;
           for (const link  of links) {    
              let li : HTMLElement =  link;
             if(li.hasAttribute(atr) ) {
               header.removeChild(li);

             }
           }
           resolve;
      });
   
   }

  //convertir una imagen en  base 64

export function imgToBase64(url, callback) {

    var xhr = new XMLHttpRequest();
    xhr.responseType = 'blob';
    xhr.onload = function() {
            var reader = new FileReader();
            reader.onloadend = function() {
                callback(reader.result);
            };
            reader.readAsDataURL(xhr.response);
        };
        xhr.open('GET', url);
        xhr.send();
 }
//convertir un base 64 a archivo 
export function  getArchivo(base64 : any , name :string) : File{
  function fixBinary (bin) {
    var length = bin.length;
    var buf = new ArrayBuffer(length);
    var arr = new Uint8Array(buf);
    for (var i = 0; i < length; i++) {
      arr[i] = bin.charCodeAt(i);
    }
    return buf;
  }
  var png = base64.split(',')[1];
  var binary = fixBinary(window.atob(png));
  var the_file = new Blob([binary], {type: 'image/png'});
  var imagen_firma: File = new File([the_file],  name+'.png', { type: 'image/png' });
  return imagen_firma;
}

//transforma imagenes
export  function  transformarImagenes(imagenes :string[]):  string []{
  let ruta;
  let imgs: string[]   = [];
  for (const image of imagenes) {
     ruta =`${URLBACKEND}/uploads/posts/${image}`
     imgs.push(ruta);
   }
  return imgs;
}

