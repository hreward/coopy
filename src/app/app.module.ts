import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { SwiperModule } from 'swiper/angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { AuthLayoutComponent } from './auth-layout/auth-layout.component';
import { ForgotpasswordComponent } from './auth-layout/forgotpassword/forgotpassword.component';
import { LandingComponent } from './components/landing/landing.component';
import { SigninComponent } from './auth-layout/signin/signin.component';
import { SignupComponent } from './auth-layout/signup/signup.component';
import { SignupThankyouComponent } from './components/signup-thankyou/signup-thankyou.component';
import { VerifyComponent } from './auth-layout/verify/verify.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ResetPasswordComponent } from './auth-layout/reset-password/reset-password.component';
import { AppinnerLayoutComponent } from './appinner-layout/appinner-layout.component';
import { HeaderbackComponent } from './appinner-layout/partials/headerback/headerback.component';
import { FooterinfoComponent } from './appinner-layout/partials/footerinfo/footerinfo.component';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { HomeComponent } from './main-layout/home/home.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { HeadermenuComponent } from './main-layout/helpers/headermenu/headermenu.component';
import { SidebarComponent } from './main-layout/helpers/sidebar/sidebar.component';
import { StaticfooterComponent } from './main-layout/helpers/staticfooter/staticfooter.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { InCoopsComponent } from './main-layout/in-coops/in-coops.component';
import { ProfileComponent } from './main-layout/profile/profile.component';
import { SettingsComponent } from './appinner-layout/settings/settings.component';
import { WalletComponent } from './main-layout/wallet/wallet.component';
import { DoughnutchartwalletComponent } from './main-layout/wallet/doughnutchartwallet/doughnutchartwallet.component';
import { CoopDetailsComponent } from './appinner-layout/coop-details/coop-details.component';
import { FullCalendarModule } from '@fullcalendar/angular';
import { LogoutComponent } from './auth-layout/logout/logout.component';
import { CreatecoopComponent } from './appinner-layout/createcoop/createcoop.component';
import { AddmoneyComponent } from './appinner-layout/addmoney/addmoney.component';
import { TransactionSuccessComponent } from './components/transaction-success/transaction-success.component';
import { WithdrawComponent } from './appinner-layout/withdraw/withdraw.component';
import { HttpClientModule } from '@angular/common/http';
import { HotToastModule } from '@ngneat/hot-toast';
import { VerifyPasswordChangeComponent } from './auth-layout/verify-password-change/verify-password-change.component';

@NgModule({
	declarations: [
		AppComponent,
		AuthLayoutComponent,
		ForgotpasswordComponent,
		ResetPasswordComponent,
		LandingComponent,
		SigninComponent,
		SignupComponent,
		SignupThankyouComponent,
		VerifyComponent,
		ProfileComponent,
		SettingsComponent,
		AppinnerLayoutComponent,
		HeaderbackComponent,
		FooterinfoComponent,
		AppinnerLayoutComponent,
		MainLayoutComponent,
		HomeComponent,
		HeadermenuComponent,
		SidebarComponent,
		StaticfooterComponent,
		PagenotfoundComponent,
		WalletComponent,
		DoughnutchartwalletComponent,
		AddmoneyComponent,
		WithdrawComponent,
		InCoopsComponent,
		CoopDetailsComponent,
		LogoutComponent,
		CreatecoopComponent,
  TransactionSuccessComponent,
  VerifyPasswordChangeComponent,
	],
	imports: [
		BrowserModule,
		SwiperModule,
		AppRoutingModule,
		FormsModule,
		ReactiveFormsModule,
		HttpClientModule,
		FullCalendarModule,
		HotToastModule.forRoot(),
		NgCircleProgressModule.forRoot(),
		ServiceWorkerModule.register('ngsw-worker.js', {
			enabled: !isDevMode(),
			// Register the ServiceWorker as soon as the application is stable
			// or after 30 seconds (whichever comes first).
			registrationStrategy: 'registerWhenStable:30000'
		})
	],
	providers: [NgCircleProgressModule],
	bootstrap: [AppComponent]
})
export class AppModule { }
