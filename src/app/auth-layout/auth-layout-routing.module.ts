import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from '../components/landing/landing.component';
import { SignupThankyouComponent } from '../components/signup-thankyou/signup-thankyou.component';
import { SplashComponent } from '../components/splash/splash.component';
import { AuthguardGuard } from '../guards/authguard.guard';
import { AuthLayoutComponent } from './auth-layout.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { LogoutComponent } from './logout/logout.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { VerifyPasswordChangeComponent } from './verify-password-change/verify-password-change.component';
import { VerifyComponent } from './verify/verify.component';

const routes: Routes = [
    {
        path: 'auth',
        component: AuthLayoutComponent,
        children: [
            {
                path: '',
                component: SplashComponent,
            },
            {
                path: 'landing',
                component: LandingComponent,
            },
            {
                path: 'signin',
                component: SigninComponent,
            },
            {
                path: 'signup',
                component: SignupComponent,
            },
            {
                path: 'resetpassword',
                component: ResetPasswordComponent,
            },
            {
                path: 'verifyresetpassword',
                component: VerifyPasswordChangeComponent,
            },
            {
                path: 'forgotpassword',
                component: ForgotpasswordComponent,
            },
            {
                path: 'verify',
                component: VerifyComponent,
            },
            {
                path: 'signup-thankyou',
                component: SignupThankyouComponent,
            },
            {
                path: 'logout',
                component: LogoutComponent,
            }
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})
    ],
    exports: [RouterModule]
})
export class AuthLayoutRoutingModule { }
