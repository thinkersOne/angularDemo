import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductListComponent } from './product-list/product-list/product-list.component';
import { BrowserModule } from '@angular/platform-browser';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';


const routes: Routes = [
  { path: '', component: ProductListComponent, },
  { path: 'first-component', component: FirstComponent },
  { path: 'second-component', component: SecondComponent },
  { path: '',   redirectTo: '/first-component', pathMatch: 'full' }, // redirect to `first-component`
  // { path: '**', component: FirstComponent },

];

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
