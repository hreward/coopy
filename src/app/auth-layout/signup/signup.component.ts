import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';
import { AuthService } from 'src/app/services/auth.service';
import { DataStorageService } from 'src/app/services/data-storage.service';

interface SignupError {
	email : string|null,
	username : string|null,
	phone : string|null,
	firstname : string|null,
	lastname : string|null,
	password : string|null,
	password2 : string|null,
	sex : string|null,
	dob : string|null,
	country: string|null;
	token : string|null,
	terms : string|null,
}

@Component({
	selector: 'app-signup',
	templateUrl: './signup.component.html',
	styleUrls: ['./signup.component.css']
})
export class SignupComponent {
	fetchingData = true;

	terms = false;
    user = {
        email : "hall@g.vom",
        username : "",
        phone : "08127122234",
        firstname : "Great",
        lastname : "Great",
        password : "qazwsxedc",
        password2 : "qazwsxedc",
        sex : "",
        dob : "",
		country: "Nigeria",
        token : "",
    }
	
	signupError:SignupError = {
        email : null,
        username : null,
        phone : null,
        firstname : null,
        lastname : null,
        password : null,
        password2 : null,
        sex : null,
        dob : null,
		country: null,
        token : null,
        terms : null,
	}

	constructor(private authService:AuthService, private toast:HotToastService, private router:Router, private lds: DataStorageService){}
	ngOnInit(): void {
		//Called after the constructor, initializing input properties, and the first call to ngOnChanges.
		//Add 'implements OnInit' to the class.
	}

	async signup(){
		// check if these are valid
		if(await this.checkParams() == false) return;

		this.authService.signup(this.user).subscribe({
            next: (data:any) => {
                this.fetchingData = false;
                if(data.status && data.success){
                    this.toast.info(data.message, {id:"signupmsg", dismissible:true, autoClose:true, duration: 7000});
					this.lds.set("signupemail", this.user.email);
                    this.router.navigate(["/auth/verify"]);
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

	private async checkParams(){
		let returnable = true;

		if(!this.checkPassword() == true){
			returnable = false;
			console.log("pass failed");
		}
		if(!this.checkFirstname() == true){
			returnable = false;
			console.log("first name failed");
		}
		if(!this.checkLastname() == true){
			returnable = false;
			console.log("last name failed");
		}
		if(!await this.checkEmail() == true){
			returnable = false;
			console.log("email failed");
		}
		if(!await this.checkPhone() == true){
			returnable = false;
			console.log("phone failed");
		}
		return returnable;
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
		this.weakpasswords.push(this.user.firstname.toLowerCase());
		this.weakpasswords.push(this.user.lastname.toLowerCase());
		this.weakpasswords.push(this.user.username.toLowerCase());
		if(this.user.password.length < 8){
			this.signupError.password = `Password must be more than 8 characters`
			return false;
		} else if(this.weakpasswords.includes(this.user.password.toLowerCase())){
			this.signupError.password = `Password is too weak or it's your username, first name or last name`
			return false;
		} else if(this.user.password != this.user.password2){
			this.signupError.password = null;
			this.signupError.password2 = `Passwords do not match.`;
			return false;
		} else {
			this.signupError.password = null;
			this.signupError.password2 = null;
			return true;
		}
	}


	async checkEmail(){
		let returnable = false;
		if(this.user.email == ""){
			this.signupError.email = "Email can't be empty";
			returnable = false;
		} else {
			returnable = await new Promise<boolean>((resolve, reject)=>{
				this.authService.checkSignupEmail(this.user.email).subscribe({
					next: (data:any)=>{
						console.log("checked email");
						if(data.status && data.success){
							this.signupError.email = `Email already exists`;
							resolve(false);
						} else {
							this.signupError.email = null;
							resolve(true);
						}
					},
					error: ()=>{
						//Error occurred
						this.signupError.email = "error";
						resolve(false);
					}
				});
			});
			
		}
		return returnable;
	}

	async checkPhone(){
		let returnable = false;
		
		if(this.user.phone == ""){
			this.signupError.phone = "Phone number is empty";
			returnable = false;
		} else if(this.user.phone.length < 11){
			this.signupError.phone = "Phone number is invalid";
			returnable = false;
		} else {
			returnable = await new Promise((resolve, reject)=>{
				this.authService.checkSignupPhone(this.user.username).subscribe({
					next: (data:any) => {
						console.log("checked phone");
						if (data.status && data.success) {
							this.signupError.phone = "Phone number already exists";
							resolve(false);
						} else {
							this.signupError.phone = null;
							resolve(true);
						}
					},
					error: () => {
						//Error occurred
						this.signupError.phone = "error";
						resolve(false);
					}
				});
			});
			
		}
		return returnable;
	}

	checkFirstname(){
		if(this.user.firstname === ""){
			this.signupError.firstname = "First name is empty";
			return false;
		} else {
			this.signupError.firstname = null
			return true
		}
	}

	checkLastname(){
		if(this.user.lastname === ""){
			this.signupError.lastname = "Last name is empty";
			return false;
		} else {
			this.signupError.lastname = null
			return true;
		}
	}

}
