import { Component, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { IProducto } from '../productos';

@Component({
  selector: 'app-agregar-producto',
  templateUrl: './agregar-producto.component.html',
  styleUrls: ['./agregar-producto.component.css']
})
export class AgregarProductoComponent {
  producto: IProducto = {} as IProducto;

  constructor(private http: HttpClient, private router: Router, @Inject('BASE_URL') private baseUrl: string) { }

  onSubmit() {
    this.http.post<IProducto>(this.baseUrl + 'productos', this.producto).subscribe(() => {
      this.router.navigate(['/productos']);
    }, error => console.error(error));
  }
}
