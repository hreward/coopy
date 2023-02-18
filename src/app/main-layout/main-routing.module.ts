import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthguardGuard } from '../guards/authguard.guard';
import { HomeComponent } from './home/home.component';
import { InCoopsComponent } from './in-coops/in-coops.component';
// import { StatsComponent } from './stats/stats.component';
import { MainLayoutComponent } from './main-layout.component';
import { ProfileComponent } from './profile/profile.component';
import { WalletComponent } from './wallet/wallet.component';
// import { ProfileComponent } from '../appinnerlayout/profile/profile.component';
// import { StyleComponent } from '../appinnerlayout/style/style.component';
// import { ReceivemoneyComponent } from './receivemoney/receivemoney.component';
// import { BillsComponent } from './bills/bills.component';
// import { SendmoneyComponent } from './sendmoney/sendmoney.component';
// import { PayComponent } from './pay/pay.component';
// import { RewardsComponent } from './rewards/rewards.component';
// import { WalletComponent } from './wallet/wallet.component';

const routes: Routes = [
	{
		path:'',
		component: MainLayoutComponent, canActivate: [AuthguardGuard],

		children:[
			{
				path:'',
				pathMatch: "full",
				redirectTo: "home"
			},
			{
				path:'home',
				component: HomeComponent
			},
			{
				path:'coops',
				component: InCoopsComponent
			},
			{
				path:'profile',
				component: ProfileComponent
			},
			// {
			// 	path:'pay',
			// 	component: PayComponent
			// },     
			// {
			// 	path:'sendmoney',
			// 	component: SendmoneyComponent
			// },     
			// {
			// 	path:'bills',
			// 	component: BillsComponent
			// },     
			// {
			// 	path:'receivemoney',
			// 	component: ReceivemoneyComponent
			// },
			// {
			// 	path:'rewards',
			// 	component: RewardsComponent
			// },   
			{
				path:'wallet',
				component: WalletComponent
			}, 
			// {
			// 	path:'style',
			// 	component: StyleComponent
			// },   
		]
	}
];

@NgModule({
	imports: [
		RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'}),
		
	],
	exports: [RouterModule]
})
export class MainLayoutRoutingModule { }
