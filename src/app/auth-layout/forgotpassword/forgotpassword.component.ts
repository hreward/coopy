import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';
import { AuthService } from 'src/app/services/auth.service';
import { DataStorageService } from 'src/app/services/data-storage.service';

@Component({
	selector: 'app-forgotpassword',
	templateUrl: './forgotpassword.component.html',
	styleUrls: ['./forgotpassword.component.scss']
})
export class ForgotpasswordComponent {
	constructor(private route: Router, private authService: AuthService, private toast: HotToastService, private lds:DataStorageService){}
	email = "";
	fetchingData = false;
	submit(){
		this.fetchingData = true;
		this.authService.requestNewPassword(this.email).subscribe({
			next: (data)=>{
				if(data.status && data.success){
					this.lds.set("cauthemail", this.email);
					this.toast.info("We sent an OTP to your email address. Check your inbox (or your spam).", {id:"pwdmsg", dismissible:true, autoClose:false});
					this.route.navigateByUrl("/auth/resetpassword");
                } else {
                    // this.toast.error(data.message, {id:"errmsg"});
                }
				this.fetchingData = false;
			},
			error: (data)=>{
				this.fetchingData = false;
				this.toast.error("Error", {id: "errmsg"});
			}
		});
	}
}
