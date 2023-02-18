import { Injectable } from '@angular/core';

export interface Coop {
    id: any,
    name: string,
    coopId: string,
    startDate: any,
    regId: any,
    country: any,
    state: any,
    city: any,
    address: any,
    coopBio: any,
    coreMission: any,
    status: any,
    executives: any[],
    member: []
}

export interface OtherUser {
    firstname: any,
    lastname: any,
    sex: any,
    avatar: any,
    coverphoto: any
}

export interface CoopExecutive {
    firstname: any,
    lastname: any,
    sex: any,
    avatar: any,
    coverphoto: any,
    verified: boolean
}

// export const emptywallet:Wallet = {
//     id: "",
//     name: "",
//     email: "",
//     status: "",
//     balance: "",
//     currency: "",
//     recenttranx: []
// }


@Injectable({
    providedIn: 'root'
})
export class CurrentCoop {
    // currentUser = emptywallet;
    // constructor() {}
    // getWallet(){
    //     let eu:Wallet = {
    //         id: "",
    //         balance: "",
    //         currency: "",
    //         email: "",
    //         name: "",
    //         status: "",
    //         recenttranx: []
    //     }
    //     return eu;
    // }
}