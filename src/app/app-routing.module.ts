import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; 
import { AuthLayoutRoutingModule } from './auth-layout/auth-layout-routing.module';
import { AppinnerLayoutRoutingModule } from './appinner-layout/appinner-routing.module';
import { MainLayoutRoutingModule } from './main-layout/main-routing.module';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';

const routes: Routes = [
	{
		path: '',
		pathMatch: "full",
		redirectTo: "/home"
	},
	{
		path: '**', 
		component: PagenotfoundComponent
	},
	{
		path: 'pagenotfound',
		component: PagenotfoundComponent
	},
];
@NgModule({
	imports: [
		RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'}),
		AuthLayoutRoutingModule,
		MainLayoutRoutingModule,
		AppinnerLayoutRoutingModule
	],
	exports: [RouterModule]
})
export class AppRoutingModule { }
