import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './pages/contact/contact.component';
import { NavbarComponent } from './shared/navbar/navbar.component';

const routes: Routes = [
  {
    path: '',
    component: NavbarComponent,
    children: [
      {
        path: 'home',
        loadChildren: () =>
          import('./pages/home/home.module').then(
            m => m.HomeModule
          ),
      },
      {
        path: 'shop',
        loadChildren: () =>
          import('./pages/shop/shop.module').then(
            m => m.ShopModule
          ),
      },
      { path: 'contact', component: ContactComponent },
      { path: 'contact/:id', component: ContactComponent }
    ],
  },
  /*{
    path: 'navbar',
    component: NavbarComponent,
    children: [
      {
        path: 'home',
        loadChildren: () =>
          import('./pages/home/home.module').then(
            m => m.HomeModule
          ),
      }
    ],
    canActivate: []
  },*/
  {
    path: '', redirectTo: 'home', pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
