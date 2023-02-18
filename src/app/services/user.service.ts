import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';
import { CurrentUser, emptyuser, User } from '../interfaces/user';
import { DataStorageService } from './data-storage.service';
import { GlobalDataService } from './global-data.service';

const API_BASE = "http://localhost:8000";

//const thisUser:User = 
// const currentUser:User = emptyuser;


@Injectable({
    providedIn: 'root'
})
export class UserService {

    // thisUser:User = this.emptyUser.getEmptyUser();
    constructor(private http:HttpClient, private toast:HotToastService, private emptyUser: CurrentUser, private lds:DataStorageService, private globalDataService: GlobalDataService, private route:Router){}

    thisUserDetails_full(){
        // let authtoken = "";
        let authtoken = localStorage.getItem("cauthtoken") || "";
        if(authtoken === null || authtoken == ""){
            alert("No session found. Should redirect to login");
        }
        console.log(authtoken);

        
        //retriving data from local data storage
        try {
            var tufd = this.lds.getJSON("tufd");
            if(tufd){
                this.globalDataService.thisUser.next(tufd);
            }
        } catch (error) { }

        const headers = { "authtoken": authtoken, 'Authorization': 'pkey-dsffkgde' };
        this.http.get<any>(API_BASE + "/user", {headers}).subscribe({
            next: (data:any) => {
                    console.log(data);
                if(data.status && data.success){
                    let userDetails:User = emptyuser;
                    userDetails.id = data.data.id;
                    userDetails.username = data.data.username;
                    userDetails.firstname = data.data.firstname;
                    userDetails.lastname = data.data.lastname;
                    userDetails.email = data.data.email;
                    userDetails.sex = data.data.sex;
                    userDetails.birthday = data.data.birthday;
                    userDetails.phone = data.data.phone;
                    userDetails.address = data.data.address;
                    userDetails.avatar = data.data.avatar;
                    userDetails.coverphoto = data.data.coverphoto;
                    userDetails.relationship = data.data.relationship;
                    userDetails.bio = data.data.bio;
                    userDetails.acct_details = data.data.acct_details;

                    this.globalDataService.thisUser.next(userDetails);
                    this.globalDataService.isLogin.next(true);

                    //save details to lds
                    // this.lds.setJSON("tufd", userDetails);
                } else if(data.message.toLowerCase() == "no session found"){
                    this.toast.error("You need to login.");
                    this.route.navigateByUrl("/auth/signin");
                } else {
                    this.toast.error(data.message);
                }
            },
            error: () => {
                // this.toast.error("Check internet connection");
            }
        });
    }
    
    getUserStars(userID?:string){
        let authtoken = "";
        let task = "get-user-stars";
        if(localStorage.getItem("cauthtoken")){
            authtoken = localStorage.getItem("cauthtoken")+'';
        }
       
        const headers = { "authtoken": authtoken, 'Authorization': 'pkey-dsffkgde', task };
        return this.http.post<any>(API_BASE + "user", {userID}, {headers});
    }
    
    updateProfile(user:any){
        //removing image data from usr object
        user.avatar = "";
        user.coverphoto = "";

        let authtoken = "";
        let task = "update-profile";
        let sdata = {user};
        if(localStorage.getItem("cauthtoken")){
            authtoken = localStorage.getItem("cauthtoken")+'';
        }
       
        const headers = { "authtoken": authtoken, 'Authorization': 'pkey-dsffkgde', task };
        return this.http.post<any>(API_BASE + "user", sdata, {headers});
        
    }

    updateAvatar(file:any){
        
        let formData = new FormData(); 
        formData.append("avatar", file);
        
        let authtoken = "";
        let task = "update-avatar";
        if(localStorage.getItem("cauthtoken")){
            authtoken = localStorage.getItem("cauthtoken")+'';
        }
       
        const headers = { "authtoken": authtoken, 'Authorization': 'pkey-dsffkgde', task };
        return this.http.post<any>(API_BASE + "user", formData, {headers});
        
    }

    updateCoverPhoto(file:any){
        
        let formData = new FormData(); 
        formData.append("coverphoto", file);
        
        let authtoken = "";
        let task = "update-coverphoto";
        if(localStorage.getItem("cauthtoken")){
            authtoken = localStorage.getItem("cauthtoken")+'';
        }
       
        const headers = { "authtoken": authtoken, 'Authorization': 'pkey-dsffkgde', task };
        return this.http.post<any>(API_BASE + "user", formData, {headers});
        
    }
    
}