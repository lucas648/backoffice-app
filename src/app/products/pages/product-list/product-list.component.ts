import { Component, OnInit } from '@angular/core';
import { Product, ProductService } from '../../services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'price', 'actions'];
  products: Product[] = [];

  constructor(private productService: ProductService, private router: Router) {}

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts(): void {
    this.productService.getProducts().subscribe(data => this.products = data);
  }

  editProduct(product: Product): void {
    this.router.navigate(['/products/edit', product.id]);
  }

  deleteProduct(product: Product): void {
    if (confirm(`Deseja excluir ${product.name}?`)) {
      this.productService.deleteProduct(product.id).subscribe(() => this.loadProducts());
    }
  }

  addProduct(): void {
    this.router.navigate(['/products/new']);
  }
}

