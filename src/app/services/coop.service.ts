import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';
import { Coop } from '../interfaces/coop.interface';
import { UserService } from './user.service';

const API_BASE = "http://localhost:8000/";

@Injectable({
    providedIn: 'root'
})
export class CoopService {

    constructor(private http: HttpClient, private router: Router, private userService:UserService, private toast:HotToastService) {}

    createCoop(coop:Coop){
        let authtoken=localStorage.getItem("cauthtoken") || "";
        const headers = { 'authtoken': authtoken, "Authorization":"pkey-ghdgdyfyu"};
        
        return this.http.put<any>(API_BASE + "coop/create", {coop}, {headers});
    }
}
