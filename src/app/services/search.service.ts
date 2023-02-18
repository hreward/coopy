import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const API_BASE = "https://api.icefame.com/apiv1/";

@Injectable({
	providedIn: 'root'
})
export class SearchService {

	constructor(private http:HttpClient) { }

	searchPeople(searchStr:string, page?:number){
        let authtoken = "";
        let task = "search-people";
        if(localStorage.getItem("authtoken")){
            authtoken = localStorage.getItem("authtoken")+'';
        }
       
        const headers = { 'authtoken': authtoken, 'Authorization': 'pkey-fjsdhdfgs', task };
        return this.http.post<any>(API_BASE + "search", {searchStr, page}, {headers});
	}
}
