import { cargarEstilos, cargarScripts } from '../controllers/scripts';
export interface ScriptModel {
    name: string,
    src: string,
    loaded: boolean
}
export interface LinkModel {
    name : string,
    href: string,
    loaded : boolean,
}  
export const URLBACKEND = "http://localhost:8888";

export const scriptsAdminPro: ScriptModel[] = 
    [
        {src : "assets/plugins/jquery/jquery.min.js", name : 'login' ,loaded : false},
        {src : "assets/plugins/bootstrap/js/popper.min.js", name : 'login' ,loaded : false},
        {src : "assets/plugins/bootstrap/js/bootstrap.min.js", name : 'login' ,loaded : false},
        {src : "assets/js/sidebarmenu.js", name : 'private' ,loaded : false},
        {src : "assets/js/waves.js", name : 'private' ,loaded : false},
        {src : "assets/plugins/styleswitcher/jQuery.style.switcher.js", name : 'private' ,loaded : false},
        {src : "assets/plugins/sticky-kit-master/dist/sticky-kit.min.js", name : 'private' ,loaded : false},
        {src : "assets/plugins/sparkline/jquery.sparkline.min.js", name : 'private' ,loaded : false},
        {src : "assets/plugins/Magnific-Popup-master/dist/jquery.magnific-popup.min.js", name : 'private' ,loaded : false},
        {src : "assets/plugins/Magnific-Popup-master/dist/jquery.magnific-popup-init.js", name : 'private' ,loaded : false},
        {src : "assets/plugins/dropify/dist/js/dropify.min.js", name : 'private' ,loaded : false},
       {src : "assets/js/perfect-scrollbar.jquery.min.js", name : 'private' ,loaded : false},
    ]

export const estilosAdminPro:LinkModel[] =  [
        { href : "assets/plugins/bootstrap/css/bootstrap.min.css" , name :'login' , loaded : false},
        { href : "assets/css/pages/login-register-lock.css", name :'login' , loaded : false},
        { href : "assets/css/colors/default-dark.css", name :'private' , loaded : false},
        { href : "assets/css/style.css", name :'login' , loaded : false}
]
export const scriptsPublic: ScriptModel[] = 
    [

    ]

export const estilosPublic:LinkModel[] =  [
    { href:  "assets/plugins/bootstrap/css/bootstrap.min.css", name :'principal' ,loaded : false},
    { href:  "assets/css/estilos.css", name :'principal' ,loaded : false},
    { href:  "assets/css/stylePublic.css", name :'principal' ,loaded : false},
]

    
//cargar estilos nokwmbre 

