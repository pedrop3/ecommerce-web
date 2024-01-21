import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductService } from '../product.service';
import { catchError, map, tap } from 'rxjs';
import { CartService } from 'src/app/cart/cart.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {


  products: Product[] = [];

  constructor(private productService: ProductService,
    private cartService: CartService,
    private sncakBar: MatSnackBar) {

  }

  ngOnInit(): void {

    this.productService.getProducts().pipe(
      map((products: Product[]) => {
        this.products = products;
      })
    ).subscribe();


  }

  addToCart(product: Product) {


    this.cartService.addToCart(product).pipe(
      tap(() => {
        this.sncakBar.open("Add to cart", "", {
          duration: 2000,
          horizontalPosition: 'right',
          verticalPosition: 'top'
        });

      }),
      catchError(err => {
        this.sncakBar.open("Error", "", {
          duration: 2000,
          horizontalPosition: 'right',
          verticalPosition: 'top'
        });
        return err;
      })
    ).subscribe();
  }

}
