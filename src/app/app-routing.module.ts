import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './users/pages/user-list/user-list.component';
import { ProductListComponent } from './products/pages/product-list/product-list.component';
import { UserFormComponent } from './users/pages/user-form/user-form.component';
import { ProductFormComponent } from './products/pages/product-form/product-form.component';

const routes: Routes = [
  { path: 'usersList', component: UserListComponent},
  { path: 'productsList', component: ProductListComponent},
  { path: 'newUser', component: UserFormComponent },
  { path: 'edit/:id', component: UserFormComponent },
  { path: 'newProduct', component: ProductFormComponent },
  { path: 'edit/:id', component: ProductFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], // Alterado para forRoot
  exports: [RouterModule]
})
export class AppRoutingModule {}