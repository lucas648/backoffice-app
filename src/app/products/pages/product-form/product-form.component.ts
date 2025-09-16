import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService, Product } from '../../services/product.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {
  form!: FormGroup;
  productId!: number | null;

  constructor(
    private fb: FormBuilder,
    private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      name: ['', Validators.required],
      price: [0, [Validators.required, Validators.min(0.01)]]
    });

    this.productId = this.route.snapshot.params['id'] ? +this.route.snapshot.params['id'] : null;

    if (this.productId) {
      this.productService.getProduct(this.productId).subscribe(product => this.form.patchValue(product));
    }
  }

  save(): void {
    if (this.form.invalid) return;

    const product: Product = { id: this.productId ?? 0, ...this.form.value };

    if (this.productId) {
      this.productService.updateProduct(product).subscribe(() => this.router.navigate(['/products']));
    } else {
      this.productService.addProduct(this.form.value).subscribe(() => this.router.navigate(['/products']));
    }
  }

  cancel(): void {
    this.router.navigate(['/products']);
  }
}
