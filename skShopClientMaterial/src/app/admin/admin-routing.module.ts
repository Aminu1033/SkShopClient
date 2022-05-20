import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './components/admin/admin.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { OrdersComponent } from './components/orders/orders.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductEditComponent } from './components/product-edit/product-edit.component';
import { UsersComponent } from './components/users/users.component'; 
import { ProductResolveService } from '../services/product-resolve.service'; 
import { CategoryEditComponent } from './components/category-edit/category-edit.component';
const routes: Routes = [
  {
    path: 'admin',  component: AdminComponent, 
    children: [       
      {
        path: 'products', 
        component: ProductsComponent,        
      },
      {
        path: 'products/0/edit', 
        component: ProductEditComponent
      },
      {
        path: 'products/:id/edit', 
        component: ProductEditComponent
      },
      {
        path: 'categories/0/edit', 
        component: CategoryEditComponent
      },
      {
        path: 'categories/:id/edit', 
        component: CategoryEditComponent
      },
      {
        path: ':id/delete', 
        component: ProductEditComponent
      }, 
      {
        path: 'categories', 
        component: CategoriesComponent
      },
      {
        path: 'users', 
        component: UsersComponent
      },
      {
        path: 'orders', 
        component: OrdersComponent
      }
    ], resolve: {productsResponse: ProductResolveService}
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
