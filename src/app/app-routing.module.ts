import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenueComponent } from './menue/menue.component';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { OrderComponent } from './order/order.component';
import { DetailsComponent } from './details/details.component';

const routes: Routes = [

  
  {

    path:"", component: HomeComponent

  },{

    path: 'menue', component: MenueComponent

  },{

  path: 'about', component: AboutUsComponent

},{

  path: 'order', component: OrderComponent

},{

  path: 'products/:id', component: DetailsComponent

}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
