import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/material.module';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { CartComponent } from './components/cart/cart.component';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { AdminRoutingModule } from './admin/admin-routing.module';
import { AdminModule } from './admin/admin.module';
import { BASE_URL } from './services/product.service';
import { MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material/dialog';
import { ErrorComponent } from './error/error.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ProductResolveService } from './services/product-resolve.service';   
import { ReactiveFormsModule } from '@angular/forms';
import { AccessDeniedComponent } from './access-denied/access-denied.component';
import { RegisterComponent } from './components/register/register.component';
import { HttpClientModule } from '@angular/common/http';  
 const routes: Routes = [
  {
    path: '', component: HomeComponent,
    resolve: { productsResponse: ProductResolveService } 
  },
  { path: 'home', pathMatch: 'full', redirectTo: 'home' },
  { path: 'error', component: ErrorComponent },
  { path: '**', component: NotFoundComponent }
]


@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    NavbarComponent,
    HomeComponent,
    NotFoundComponent,
    CartComponent,
    LoginComponent,
    ErrorComponent,
    ProductDetailComponent, 
    AccessDeniedComponent,
    RegisterComponent 
  ],
  imports: [ 
    BrowserModule, 
    AppRoutingModule,
    AdminModule,
    AdminRoutingModule,
    NoopAnimationsModule, 
    MaterialModule,   
    RouterModule.forRoot(routes),
    ReactiveFormsModule, HttpClientModule
  ], 
  providers: [
    {
      provide: BASE_URL, useValue: `https://localhost:5001/`
    },
    {
      provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {
        width: 400, hasBackDrop: true
      }
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }