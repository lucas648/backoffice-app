
import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

import { UserListComponent } from './users/pages/user-list/user-list.component'; // Ensure this component exists
import { ProductListComponent } from './products/pages/product-list/product-list.component';

const routes: Routes = [
  { path: 'usersList', loadChildren: () => import('./users/users.module').then(m => m.UsersModule) },
  { path: 'productsList', loadChildren: () => import('./products/products.module').then(m => m.ProductsModule) },
];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  
  export class UsersRoutingModule { }