import { Injectable } from '@angular/core';

export interface User {
    id: any,
    username: any,
    firstname: any,
    lastname: any,
    email: any,
    sex: any,
    birthday: any,
    phone: any,
    address: any,
    avatar: any,
    coverphoto: any,
    relationship: any,
    bio: any,
    acct_details:{
		account_bank: "",
		account_bank_code: "",
		account_number: "",
		account_name: ""
    }
}

export const emptyuser:User = {
    id: "",
    username: "",
    firstname: "",
    lastname: "",
    email: "",
    sex: "",
    birthday: "",
    phone: "",
    address: "",
    avatar: "",
    coverphoto: "",
    relationship: "",
    bio: "",
    acct_details:{
		account_bank: "",
		account_bank_code: "",
		account_number: "",
		account_name: ""
    }
}


@Injectable({
    providedIn: 'root'
})
export class CurrentUser {
    currentUser = emptyuser;
    constructor() {}
    
    saveCurrentUser(user:User){
        this.currentUser.id = user.id;
        this.currentUser.username = user.username;
        this.currentUser.firstname = user.firstname;
        this.currentUser.lastname = user.lastname;
        this.currentUser.email = user.email;
        this.currentUser.sex = user.sex;
        this.currentUser.birthday = user.birthday;
        this.currentUser.phone = user.phone;
        this.currentUser.address = user.address;
        this.currentUser.avatar = user.avatar;
        this.currentUser.coverphoto = user.coverphoto;
        this.currentUser.relationship = user.relationship;
        this.currentUser.bio = user.bio;
        this.currentUser.acct_details = user.acct_details;
    }

    getEmptyUser(){
        let eu:User = {
            id: "",
            username: "",
            firstname: "",
            lastname: "",
            email: "",
            sex: "",
            birthday: "",
            phone: "",
            address: "",
            avatar: "",
            coverphoto: "",
            relationship: "",
            bio: "",
            acct_details:{
                account_bank: "",
                account_bank_code: "",
                account_number: "",
                account_name: ""
            }
        }
        return eu;
    }
}