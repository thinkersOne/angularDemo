import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ChildAComponent } from './child-a/child-a.component';
import { ChildBComponent } from './child-b/child-b.component';


const routes: Routes = [
  { 
    path: 'first-component', 
    component: FirstComponent,
    // loadChildren: () => import('./first/first.component').then(m => m.FirstComponent),
    children: [
      {path: 'child-a',component: ChildAComponent,},
      {path: 'child-b',component: ChildBComponent,}
    ]
   },
  { path: 'second-component', component: SecondComponent },
  // { path: '',   redirectTo: '/first-component', pathMatch: 'full' }, // redirect to `first-component`
  { path: '**', component: PageNotFoundComponent },// 用来 指定 当用户随便输入不存在的地址时，显示 组件1的路由地址。

];

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
