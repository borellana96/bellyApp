import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ShowsComponent } from './shows/shows.component';
import { ShopComponent } from './shop.component';
import { ShopRoutingModule } from './shop-routing.module';


@NgModule({
  declarations: [SidebarComponent, ShowsComponent, ShopComponent],
  imports: [
    CommonModule,
    ShopRoutingModule
  ]
})
export class ShopModule { }
