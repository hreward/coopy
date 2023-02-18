import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TransactionSuccessComponent } from '../components/transaction-success/transaction-success.component';
import { AuthguardGuard } from '../guards/authguard.guard';
import { AddmoneyComponent } from './addmoney/addmoney.component';
import { AppinnerLayoutComponent } from './appinner-layout.component';
import { CoopDetailsComponent } from './coop-details/coop-details.component';
import { CreatecoopComponent } from './createcoop/createcoop.component';
import { SettingsComponent } from './settings/settings.component';
import { WithdrawComponent } from './withdraw/withdraw.component';

// import { PagesComponent } from './pages/pages.component';
// import { SettingsComponent } from './settings/settings.component';
// import { NotificationsComponent } from './notifications/notifications.component';
// import { FaqsComponent } from './faqs/faqs.component';
// import { UserlistComponent } from './userlist/userlist.component';
// import { TimelineComponent } from './timeline/timeline.component';
// import { ContactusComponent } from './contactus/contactus.component';
// import { PricingComponent } from './pricing/pricing.component';
// import { TermsandcoditionComponent } from './termsandcodition/termsandcodition.component';
// import { BlogComponent } from './blog/blog.component';
// import { BlogdetailsComponent } from './blogdetails/blogdetails.component';
// import { WithdrawComponent } from './withdraw/withdraw.component';
// import { AllreceivemoneyComponent } from './allreceivemoney/allreceivemoney.component';
// import { Sendmoney1Component } from './sendmoney1/sendmoney1.component';
// import { Sendmoney2Component } from './sendmoney2/sendmoney2.component';
// import { Sendmoney3Component } from './sendmoney3/sendmoney3.component';
// import { Thankyou3Component } from './thankyou3/thankyou3.component';
// import { Thankyou4Component } from './thankyou4/thankyou4.component';
// import { AddmoneyComponent } from './addmoney/addmoney.component';
// import { AboutusComponent } from './aboutus/aboutus.component';

const routes: Routes = [
	{
		path: '',
		component: AppinnerLayoutComponent, canActivate: [AuthguardGuard],

		children: [
			// {
			//   path: 'sendmoney1',
			//   component: Sendmoney1Component,
			// },
			// {
			//   path: 'allreceivemoney',
			//   component: AllreceivemoneyComponent,
			// },
			{
			  path: 'withdraw',
			  component: WithdrawComponent,
			},
			{
				path: 'addmoney',
				component: AddmoneyComponent,
			},
			{
				path: 'tranx-success/:ref',
				component: TransactionSuccessComponent,
			},
			// {
			//   path: 'thankyou3',
			//   component: Thankyou3Component,
			// },
			// // Other pages        
			// {
			//   path: 'aboutus',
			//   component: AboutusComponent,
			// },
			// {
			//   path: 'notifications',
			//   component: NotificationsComponent,
			// },
			{
				path: 'settings',
				component: SettingsComponent,
			},
			{
				path:'create-coop',
				component: CreatecoopComponent
			},
			{
				path:'coops/:id',
				component: CoopDetailsComponent
			},
			// {
			//   path: 'pages',
			//   component: PagesComponent,
			// },
			// {
			//   path: 'pagenotfound',
			//   component: PagenotfoundComponent,
			// },
			// {
			//   path: 'faqs',
			//   component: FaqsComponent,
			// },
			// {
			//   path: 'userlist',
			//   component: UserlistComponent,
			// },
			// {
			//   path: 'timeline',
			//   component: TimelineComponent,
			// },
			// {
			//   path: 'contactus',
			//   component: ContactusComponent,
			// },
			// {
			//   path: 'pricing',
			//   component: PricingComponent,
			// },
			// {
			//   path: 'termsandconditions',
			//   component: TermsandcoditionComponent,
			// },
			// {
			//   path: 'blog',
			//   component: BlogComponent,
			// },
			// {
			//   path: 'blogdetails',
			//   component: BlogdetailsComponent,
			// }
		]
	}
];

@NgModule({
	imports: [
		RouterModule.forRoot(routes, {scrollPositionRestoration: "enabled"}),    
	],
	exports: [RouterModule]
})
export class AppinnerLayoutRoutingModule { }
