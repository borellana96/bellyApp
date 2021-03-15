import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ShowsComponent } from './shows/shows.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ShopComponent } from './shop.component';


const shopRoutes: Routes = [
  {
    path: '',
    component: ShopComponent
  },
  {
    path: ':id',
    component: ShopComponent
  },
  {
    path: 'shows',
    component: ShowsComponent
  },
  {
    path: 'sidebar',
    component: SidebarComponent
  }

]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(shopRoutes)
  ],
})
export class ShopRoutingModule { }
