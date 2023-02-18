import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';
import { UserService } from './user.service';

const API_BASE = "http://localhost:8000/";

export interface LoginData {
    email:string;
    password:string;
    token:string;
}

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    user:LoginData = {
        email:"",
        password:"",
        token:""
    }

    fetchingData = false;

    constructor(private http: HttpClient, private router: Router, private userService:UserService, private toast:HotToastService) {}

    checkSignupEmail(email:string){
        let task = "check-signup-email";
        const headers = { 'Authorization': 'pkey-fjsdhdfgs', task };
        
        return this.http.post<any>(API_BASE + "auth/newuser/check/email", {email}, {headers});
    }

    checkSignupPhone(phone:string){
        let task = "check-signup-phone";
        const headers = { 'Authorization': 'pkey-fjsdhdfgs', task };
        
        return this.http.post<any>(API_BASE + "auth/newuser/check/phone", {phone}, {headers});
    }

    login(userData:LoginData){
        this.fetchingData = true;
        const headers = { 'Authorization': 'pkey-fjsdhdfgs' };
        
        return this.http.post<any>(API_BASE + "auth/login", {userData}, {headers});
    }

    logout(){
        this.fetchingData = true;
        let authtoken=localStorage.getItem("cauthtoken") || "";
        const headers = { 'authtoken': authtoken, "Authorization":"pkey-ghdgdyfyu"};

        return this.http.get<any>(API_BASE + "auth/logout", {headers});
    }

    signup(userData:any){
        this.fetchingData = true;
        const headers = { 'Authorization': 'pkey-fjsdhdfgs' };
        
        return this.http.put<any>(API_BASE + "auth/newuser/signup", {userData}, {headers});
    }

    verifyOTP(email:any, otp:string){
        this.fetchingData = true;
        const headers = { 'Authorization': 'pkey-fjsdhdfgs' };
        
        return this.http.post<any>(API_BASE + "auth/verify/otp", {email, otp}, {headers});
    }

    requestNewPassword(email:string){
        let task = "reset-password";
        const headers = { 'Authorization': 'pkey-fjsdhdfgs', task };
        
        return this.http.post<any>(API_BASE + "auth/requestnewpassword", {email}, {headers});
    }

    changePassword(email:string, otp:string, newpassword:string){
        //
        let task = "change-password";
        const headers = { 'Authorization': 'pkey-fjsdhdfgs', task };
        
        return this.http.post<any>(API_BASE + "auth/changepassword", {email, otp, newpassword}, {headers});
    }
}
