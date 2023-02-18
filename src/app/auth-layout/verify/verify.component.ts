import { Component } from '@angular/core';
import * as dayjs from 'dayjs';
import { Router } from '@angular/router';
import { DataStorageService } from 'src/app/services/data-storage.service';
import { AuthService } from 'src/app/services/auth.service';
import { HotToastService } from '@ngneat/hot-toast';

@Component({
	selector: 'app-verify',
	templateUrl: './verify.component.html',
	styleUrls: ['./verify.component.css']
})
export class VerifyComponent {

	constructor(private route:Router, private lds:DataStorageService, private authService: AuthService, private toast: HotToastService){}
	otp = "";
	setTime = dayjs().add(3, 'minutes');
	nowTime = dayjs();
	displayTime = "03:00";
	canResend = false;
	fetchingData = false;

	signupEmail:string|null = null;
	ngOnInit(): void {
		let diff = this.setTime.diff();
		let timer = setInterval(()=>{
			diff = this.setTime.diff();
			this.displayTime = dayjs(diff).format("mm:ss");
			if(1>diff){
				clearInterval(timer);
				this.canResend = true;
				this.displayTime = "00:00";
			}
		}, 1000);

		this.signupEmail = this.lds.get("signupemail");
	}

	resendotp(){
		//
	}

	submitOTP(){
		this.fetchingData = true;
		this.authService.verifyOTP(this.signupEmail, this.otp).subscribe({
            next: (data:any) => {
                this.fetchingData = false;
                if(data.status && data.success){
                    this.toast.info(data.message, {id:"signupmsg", dismissible:true, autoClose:true, duration: 7000});
					localStorage.removeItem("signupemail");
                    this.route.navigateByUrl("/auth/signup-thankyou");
                } else {
                    this.toast.error(data.message, {id:"errmsg"});
                }
            },
            error: (data:any) => {
                this.fetchingData = false;
                if(data.name == "HttpErrorResponse"){
                    this.toast.error("Error", {id:"errmsg", autoClose:true});
                }
            }
        });
	}
}
