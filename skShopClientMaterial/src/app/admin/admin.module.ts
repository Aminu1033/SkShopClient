import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './components/admin/admin.component';
import { ProductsComponent } from './components/products/products.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { OrdersComponent } from './components/orders/orders.component';
import { UsersComponent } from './components/users/users.component';
import { MaterialModule } from '../shared/material.module';
import { RouterModule } from '@angular/router';
import { ProductEditComponent } from './components/product-edit/product-edit.component'; 
import { ReactiveFormsModule } from '@angular/forms';
import { EditCategoryComponent } from './components/edit-category/edit-category.component';
import { EditProductComponent } from './components/edit-product/edit-product.component';
import { CategoryEditComponent } from './components/category-edit/category-edit.component';
import { DeleteProductDialogComponent } from './components/delete-product-dialog/delete-product-dialog.component';


@NgModule({
  declarations: [
    AdminComponent,
    ProductsComponent,
    CategoriesComponent,
    OrdersComponent,
    UsersComponent,
    ProductEditComponent,
    EditCategoryComponent,
    EditProductComponent,
    CategoryEditComponent,
    DeleteProductDialogComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    AdminRoutingModule,
    MaterialModule,
    HttpClientModule,
    ReactiveFormsModule 
  ]
})
export class AdminModule { }
