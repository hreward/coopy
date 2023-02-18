import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';

@Injectable({
	providedIn: 'root'
})
export class DataStorageService {
	authtoken: string|null = null;
	constructor() {
	// getAuth() {
		if(localStorage.getItem("authtoken")){
			this.authtoken = localStorage.getItem("authtoken");
		}
	}
	set(key:string, value:any){
		if (this.authtoken === null){
			return false;
		}
		var ciphertext = CryptoJS.AES.encrypt(value, this.authtoken).toString();
		localStorage.setItem(key, ciphertext);
		return true;
	}
	setJSON(key:string, value:any){
		if (this.authtoken === null){
			return false;
		}
		var ciphertext = CryptoJS.AES.encrypt(JSON.stringify(value), this.authtoken).toString();
		localStorage.setItem(key, ciphertext);
		return true;
	}

	get(key:string){
		if (this.authtoken === null){
			return null;
		}
		
		var ciphertext = localStorage.getItem(key);
		if(ciphertext === null){
			return null;
		}
		var bytes  = CryptoJS.AES.decrypt(ciphertext, this.authtoken);
		return bytes.toString(CryptoJS.enc.Utf8);
	}

	getJSON(key:string){
		if (this.authtoken === null){
			return null;
		}
		
		var ciphertext = localStorage.getItem(key);
		if(ciphertext === null){
			return null;
		}
		var bytes  = CryptoJS.AES.decrypt(ciphertext, this.authtoken);
		var decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
		return decryptedData;
	}
}
