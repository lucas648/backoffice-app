import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'usersList', loadChildren: () => import('./users/users.module').then(m => m.UsersModule) },
  { path: 'productsList', loadChildren: () => import('./products/products.module').then(m => m.ProductsModule) },
  { path: '', redirectTo: 'usersList', pathMatch: 'full' }, // Rota padrão
  { path: '**', redirectTo: 'usersList' } // Rota fallback para URLs inválidas
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], // Certifique-se de usar forRoot aqui
  exports: [RouterModule]
})
export class AppRoutingModule {}