import { NgModule } from '@angular/core';  
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './components/cart/cart.component';
import { LoginComponent } from './components/login/login.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component'; 
import { RegisterComponent } from './components/register/register.component';
import { ProductDetailResolveService } from './services/product-detail-resolve.service';
 
const routes: Routes = [
  { path: 'cart', component: CartComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'access-denied', component: LoginComponent },
  { 
    path: 'detail/:id', component: ProductDetailComponent,
    resolve: {productResult: ProductDetailResolveService}
  }
]


@NgModule({
  imports: [ 
    RouterModule.forChild(routes)
  ],
  exports: [ 
  ]
})
export class AppRoutingModule { }