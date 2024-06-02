import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { IProducto } from '../productos';

@Component({
  selector: 'app-editar-producto',
  templateUrl: './editar-producto.component.html',
  styleUrls: ['./editar-producto.component.css']
})
export class EditarProductoComponent implements OnInit {
  producto: IProducto = {} as IProducto;

  constructor(private route: ActivatedRoute, private http: HttpClient, private router: Router, @Inject('BASE_URL') private baseUrl: string) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.http.get<IProducto>(this.baseUrl + 'productos/' + id).subscribe(result => {
      this.producto = result;
    }, error => console.error(error));
  }

  onSubmit() {
    this.http.put(this.baseUrl + 'productos/' + this.producto.id, this.producto).subscribe(() => {
      this.router.navigate(['/productos']);
    }, error => console.error(error));
  }
}
