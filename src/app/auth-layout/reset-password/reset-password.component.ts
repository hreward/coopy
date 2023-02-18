import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';
import { AuthService } from 'src/app/services/auth.service';
import { DataStorageService } from 'src/app/services/data-storage.service';


interface FormError {
	otp : string|null,
	newpassword : string|null,
	confirmpassword : string|null
}

@Component({
	selector: 'app-reset-password',
	templateUrl: './reset-password.component.html',
	styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent {
	fetchingData = false;
	otp = "";
	newpassword = "";
	confirmpassword = "";
	private email = "";
	
	formError:FormError = {
        otp : null,
        newpassword : null,
        confirmpassword : null
	}
	constructor(private route:Router, private authService: AuthService, private toast: HotToastService, private lds:DataStorageService){}

	ngOnInit(): void {
		this.email = this.lds.get("cauthemail") || ""
	}


	submit(){
		if(!this.checkPassword()) return;
		this.fetchingData = true;
		this.authService.changePassword(this.email, this.otp, this.newpassword).subscribe({
			next: (data)=>{
				if(data.status && data.success){
					this.toast.info("Password successfully changed", {id:"pwdmsg", dismissible:true});
					this.route.navigateByUrl("/auth/signin");
                } else {
                    this.toast.error(data.message, {id:"errmsg"});
                }
				this.fetchingData = false;
			},
			error: (data)=>{
				this.fetchingData = false;
				this.toast.error("Error", {id: "errmsg"});
			}
		});
	}

	
	weakpasswords = [
		'123456',
		'123456789',
		'qwerty',
		'password',
		'1111111',
		'12345678',
		'abc123',
		'1234567',
		'password1',
		'12345',
		'1234567890',
		'123123',
		'000000',
		'Iloveyou',
		'1234',
		'1q2w3e4r5t',
		'Qwertyuiop',
		'123',
		'Monkey',
		'Dragon',
		'123456',
		'12345679',
		'qwerty',
		'12345678',
		'111111',
		'1234567890',
		'password',
		'123123',
		'987654321',
		'qwertyuiop',
		'mynoob',
		'123321',
		'666666',
		'18atcskd2w',
		'7777777',
		'1q2w3e4r',
		'654321',
		'555555',
		'3rjs1la7qe',
		'google',
		'1q2w3e4r5t',
		'123qwe',
		'zxcvbnm',
		'1q2w3e'

	];
	checkPassword (){
		if(this.newpassword.length < 8){
			this.formError.newpassword = `Password must be more than 8 characters`
			return false;
		} else if(this.weakpasswords.includes(this.newpassword.toLowerCase())){
			this.formError.newpassword = `Password is too weak`
			return false;
		} else if(this.newpassword != this.confirmpassword){
			this.formError.newpassword = null;
			this.formError.confirmpassword = `Passwords do not match.`;
			return false;
		} else {
			this.formError.newpassword = null;
			this.formError.confirmpassword = null;
			return true;
		}
	}

}
