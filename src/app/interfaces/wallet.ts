import { Injectable } from '@angular/core';

export interface Wallet {
    id: any,
    name: any,
    email: any,
    status: any,
    balance: any,
    currency: any,
    recenttranx: Transaction[]
}
export interface Transaction {
    reference: any,
    walletid: any,
    type: any,
    status: any,
    amount: any,
    mastpal_fee: any;
    merchant_fee: any,
    narration: any,
    created_at: any,
}

export const emptywallet:Wallet = {
    id: "",
    name: "",
    email: "",
    status: "",
    balance: "",
    currency: "",
    recenttranx: []
}


@Injectable({
    providedIn: 'root'
})
export class CurrentUser {
    currentUser = emptywallet;
    constructor() {}
    
    // saveCurrentUser(user:User){
    //     this.currentUser.id = user.id;
    //     this.currentUser.username = user.username;
    //     this.currentUser.firstname = user.firstname;
    //     this.currentUser.lastname = user.lastname;
    //     this.currentUser.email = user.email;
    //     this.currentUser.sex = user.sex;
    //     this.currentUser.birthday = user.birthday;
    //     this.currentUser.phone = user.phone;
    //     this.currentUser.currentcity = user.currentcity;
    //     this.currentUser.avatar = user.avatar;
    //     this.currentUser.coverphoto = user.coverphoto;
    //     this.currentUser.relationship = user.relationship;
    //     this.currentUser.bio = user.bio;

    //     this.currentUser.interests = user.interests;
    //     this.currentUser.hobbies = user.hobbies;

    //     this.currentUser.star_count = user.star_count;
    //     this.currentUser.fan_count = user.fan_count;
    //     this.currentUser.trophies = user.trophies;
    // }

    getWallet(){
        let eu:Wallet = {
            id: "",
            balance: "",
            currency: "",
            email: "",
            name: "",
            status: "",
            recenttranx: []
        }
        return eu;
    }
}