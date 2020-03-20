import { Component, OnInit } from '@angular/core';
import { Categoria } from '../../../../models/categoria';
import { CateriaService } from '../../../../services/cateria.service';
import Swal from 'sweetalert2';
import { UsuariosService } from '../../../../services/usuarios.service';
declare var $:any;

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})
export class CategoriaComponent implements OnInit {
   categorias:Categoria[] = [];
  id:string = null;
  tags  : string[] = [];
  nombre: string;
  descripcion :string ;
  boton : string = "crear";
  constructor(
    private _catgorias: CateriaService,
    private _us:UsuariosService
  ) {
    _catgorias.listarCategorias().subscribe( (data  : any)  =>{
       this.categorias = data.docs;
       
    })
   }

  ngOnInit() {
  }
  agregarTag(tag:HTMLInputElement){
    if(tag.value.length === 0){
      return;
   }
    this.tags.push(tag.value);
    tag.value ="";
  }
  eliminarTag(tag:string){
    
    this.tags = this.tags.filter( tagP =>{
       return tagP != tag ;
    })
  }
  guardarCategoria(){
    let categoria = new Categoria(this.nombre,this.tags , this.descripcion );
    if(this.id){
      categoria._id = this.id;
      this._catgorias.actulizarCategoria(categoria).subscribe( ( data  :any )  =>{       
        this.categorias = data.docs;
         Swal.fire( {
             icon :'success',
           text :'categoria actualizada correctamente'
         })
        this.id = null;
        this.tags = [];
        this.descripcion = "";
        this.nombre = "";
        this.boton = "crear";
      })
    }else{
      this._catgorias.crearCategoria(categoria).subscribe( (data :any ) =>{  
        let cat: Categoria = data.cat;   
        this.categorias.push(cat); 
        Swal.fire( {
          icon :'success',
        text :'categoria creada correctamente'
      })
     this.id = null;
     this.tags = [];
     this.descripcion = "";
     this.nombre = "";
     this.boton = "crear";
       })    
    }

  }
  editarCategoria(id:string){
    console.log(id);
    
    this._catgorias.listarCategoria(id).subscribe( (data: any ) =>{
      $('html, body').animate({scrollTop:0}, 'slow'); 
      this.boton = 'editar';
      let cat: Categoria = data.doc;   
       this.id = cat._id;
       this.tags= cat.tags;
       this.nombre = cat.nombre;
       this.descripcion= cat.descripcion;
    })
  }
  async eliminarCategoria(id:string){
    // const InputPass =async ()=>{
    //   const { value : password } = await Swal.fire({
    //     title: 'Por favor ingrese su contraseña',
    //     input: 'password',
    //     inputPlaceholder: 'contraseña',
    //     inputAttributes: {
    //       maxlength: '10',
    //       autocapitalize: 'off',
    //       autocorrect: 'off'
    //     }
    //   })
    //  return  password;
    // }
    Swal.fire({
      title: '¿desea eliminar esta categoria?',
      text: "se borraran todos los blogs ligados a esta",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then( async (result) => {
      if (result.value) {
       let  resp= this._us.isAuthenticate();
       if(resp)
       {
        this._catgorias.eliminarCategoria(id).subscribe( (data :any ) =>{
         this.categorias = data.docs;
          Swal.fire(
            'borrado',
            'la categoria se ha eliminado correctamente',
            'success'
          )

        }) 
       }
        else 
         Swal.fire( {icon : 'error' , text :'su secion ha vencido'})
      }
    })

    
    

  }
}
