import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../product.service';
import { map, filter } from 'rxjs/operators';
import { pipe } from 'rxjs';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnInit {
  products;
  filteredProducts;

  constructor(private productService: ProductService) {
    // this.filteredProducts$ = this.products$ = this.productService.getAll().pipe(
    //   map(products => {
    //     return products.map(product => ({
    //       key: product.key,
    //       value: product.payload.val()
    //     }));
    //   })
    // );
    this.productService
      .getAll()
      .subscribe(
        products => (this.products = this.filteredProducts = products)
      );
  }

  search(query: string) {
    if (query) {
      this.filteredProducts = this.products.map(product => ({
        key: product.key,
        value: product.payload.val()
      }));
    }
  }

  ngOnInit() {}
}
