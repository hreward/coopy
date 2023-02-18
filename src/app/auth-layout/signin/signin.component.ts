import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';
import { AuthService } from 'src/app/services/auth.service';
import { DataStorageService } from 'src/app/services/data-storage.service';
import { GlobalDataService } from 'src/app/services/global-data.service';
import { UserService } from 'src/app/services/user.service';

@Component({
	selector: 'app-signin',
	templateUrl: './signin.component.html',
	styleUrls: ['./signin.component.css']
})
export class SigninComponent {

	fetchingData = false;
	email = "";
	password = "";
	
	constructor(private route:Router, private authService: AuthService, private userService:UserService, private toast: HotToastService, private lds:DataStorageService, private globalDataService:GlobalDataService){}

	ngOnInit(): void {
		var tooltiptriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
		tooltiptriggerList.map(function (e:any) {
			return new bootstrap.Tooltip(e)
		});
		
		if(this.globalDataService.isLogin.getValue()){
			this.route.navigateByUrl("/home");
		}
	}

	signin(){
		if(this.email.length < 5 || this.password.length < 1) return;
		this.fetchingData = true;
		this.authService.login({email: this.email, password: this.password, token: ""}).subscribe({
            next: (data:any) => {
                this.fetchingData = false;
                if(data.status && data.success){
                    this.toast.info(data.message, {dismissible:true, autoClose:true, duration: 7000});
					localStorage.setItem("cauthtoken", data.data.token);
					this.lds.set("cauthemail", this.email);
					this.userService.thisUserDetails_full();
					setTimeout(()=>{
						this.route.navigateByUrl("/home");
					}, 1000);
                    
                } else {
                    if(data.message == "account verification needed"){
                        this.toast.info("Your account is not verified yet. Check your inbox (or your spam), we just sent you a mail.", {id:"loginmsg", dismissible:true, autoClose:false});
                    } else {
                        this.toast.error(data.message, {id:"errmsg"});
                    }
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
