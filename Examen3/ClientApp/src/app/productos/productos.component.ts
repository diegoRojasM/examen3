// import { Component, Inject } from '@angular/core';
// import { IProducto } from './productos';
// import { HttpClient } from '@angular/common/http';


// @Component({
//   selector: 'app-productos',
//   templateUrl: './productos.component.html',
//   styleUrls: ['./productos.component.css']
// })
// export class ProductosComponent {
//   public productos: IProducto[] = [];


//   constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
//     http.get<IProducto[]>(baseUrl + 'productos').subscribe(result => {
//       this.productos = result;
//     }, error => console.error(error));


//   }

// }



























// import { Component, Inject } from '@angular/core';
// import { IProducto } from './productos';
// import { HttpClient } from '@angular/common/http';

// @Component({
//   selector: 'app-productos',
//   templateUrl: './productos.component.html',
//   styleUrls: ['./productos.component.css']
// })
// export class ProductosComponent {
//   public productos: IProducto[] = [];

//   constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) {
//     this.loadProductos();
//   }

//   loadProductos() {
//     this.http.get<IProducto[]>(this.baseUrl + 'productos').subscribe(result => {
//       this.productos = result;
//     }, error => console.error(error));
//   }

//   agregarProducto() {
//     // Implementa la lógica para agregar un producto.
//     console.log('Agregar producto');
//   }

//   editarProducto(producto: IProducto) {
//     // Implementa la lógica para editar un producto.
//     console.log('Editar producto', producto);
//   }

//   borrarProducto(id: number) {
//     // Implementa la lógica para borrar un producto.
//     this.http.delete(this.baseUrl + 'productos/' + id).subscribe(() => {
//       this.loadProductos(); // Recargar la lista de productos después de borrar uno
//     }, error => console.error(error));
//   }
// }





import { Component, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { IProducto } from './productos';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent {
  public productos: IProducto[] = [];

  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string, private router: Router) {
    this.loadProductos();
  }

  loadProductos() {
    this.http.get<IProducto[]>(this.baseUrl + 'productos').subscribe(result => {
      this.productos = result;
    }, error => console.error(error));
  }

  agregarProducto() {
    this.router.navigate(['/agregar']);
  }

  editarProducto(producto: IProducto) {
    this.router.navigate(['/editar', producto.id]);
  }

  confirmarBorrarProducto(producto: IProducto) {
    this.router.navigate(['/borrar', producto.id]);
  }
}
