import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { CarouselComponent } from './carousel/carousel.component';
import { ProductsComponent } from './products/products.component';
import { BannerComponent } from './banner/banner.component';
import { FooterComponent } from './footer/footer.component';
import { BrandsComponent } from './brands/brands.component';
import { AddsComponent } from './adds/adds.component';
import { NewComponent } from './new/new.component';
import { BlogComponent } from './blog/blog.component';
import { FunComponent } from './fun/fun.component';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { CarouselBrandsComponent } from './carousel-brands/carousel-brands.component';
import { SubBlogComponent } from './sub-blog/sub-blog.component';
import { ContactComponent } from './contact/contact.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { NewblogComponent } from './newblog/newblog.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { LoginComponent } from './login/login.component';

import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BannerAreaComponent } from './banner-area/banner-area.component';
import { ClientComponent } from './client/client.component';
import { ShoplistComponent } from './shoplist/shoplist.component';
import { NavbarComponent } from './navbar/navbar.component';


const ROUTES : Routes =[
  
  {path : "", component: HomeComponent},

  {path : "home", component: HomeComponent},

  {path : 'aboutus', component: AboutusComponent},
  {path : 'contact', component: ContactComponent},

  {path : 'productdetails', component: ProductdetailsComponent},

  {path : 'shoplist', component: ShoplistComponent},

  {path : 'checkout', component: CheckoutComponent},

  {path : 'login', component: LoginComponent},





  // { path: '',   redirectTo: '/HomeComponent', pathMatch: 'full' },
 
 
]


@NgModule({
  declarations: [																				
    AppComponent,
    NavComponent,
    BlogComponent,
    CarouselComponent,
    ProductsComponent,
    BannerComponent,
    FooterComponent,
    BrandsComponent,
    AddsComponent,
      NewComponent,
      FunComponent,
      TestimonialComponent,
      CarouselBrandsComponent,
      SubBlogComponent,
      ContactComponent,
      AboutusComponent,
      NewblogComponent,
      ProductdetailsComponent,
      CartComponent,
      CheckoutComponent,
      LoginComponent,
      HomeComponent,
      BannerAreaComponent,
      ClientComponent,
      ShoplistComponent,
      NavbarComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
