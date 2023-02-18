import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalDataService } from 'src/app/services/global-data.service';
import {NgForm} from '@angular/forms';
import { Coop } from 'src/app/interfaces/coop.interface';
import { CoopService } from 'src/app/services/coop.service';
import { HotToastService } from '@ngneat/hot-toast';

interface FormError {
	name : string|null,
	logo : string|null,
	regId : string|null,
	coremission : string|null,
	country : string|null,
	state : string|null,
	city : string|null,
	address : string|null,
	regApproval : string|null,
	withdrawalApproval: string|null;
	exitApproval : string|null,
	visibility : string|null,
}

@Component({
	selector: 'app-createcoop',
	templateUrl: './createcoop.component.html',
	styleUrls: ['./createcoop.component.scss']
})
export class CreatecoopComponent {
	constructor(private route:Router, private globalData: GlobalDataService, private toast: HotToastService, private coopService:CoopService){}

	firstStage = true;
	secondStage = false;
	thirdStage = false;

    // formError:{[key:string]:string|null} = {
    formError:Record<string, string|null> = {
		name : null,
		logo : null,
		regId : null,
		coremission : null,
		country : null,
		state : null,
		city : null,
		address : null,
		regApproval : null,
		withdrawalApproval: null,
		exitApproval : null,
		visibility : null,
    }

	ngOnInit(): void {
		this.globalData.setTitle("Create a co-operative");
	}

	save(f:NgForm){
		let values:Coop = f.value;
		let allValid = true;
		let coopData:Record<string, string|null> = {}

		Object.keys(f.controls).forEach((val, idx)=>{
			if(f.controls[val].invalid){
				this.formError[val]= "This field is required";
				allValid = false
			} else {
				this.formError[val]= null;
				coopData[val]= f.controls[val].value;
			}
		});
		if(allValid != true) return;

		"rewrt".split("").reverse().concat()

		this.coopService.createCoop(values).subscribe({
			next: (data)=>{
				if(data.status==true && data.success==true){
					if(data.message) this.toast.info(data.message);
					console.log(data);
					this.firstStage = false;
					this.thirdStage = false;
					this.secondStage = true;
					this.globalData.setTitle("Upload Documents");
				} else {
					this.toast.error(data.message);
				}
				
			},
			error: (err)=>{
				this.toast.error(err.message);
			},
		});
		
	}

	continue(f:NgForm){
		let values:Coop = f.value;
		console.log(values);
		if(f.invalid){
			alert("Something is not right.");
			return;
		}
		this.firstStage = false;
		this.secondStage = false;
		this.thirdStage = true;
		this.globalData.setTitle("Invite Executives");
	}

	submit(f:NgForm){
		let values:Coop = f.value;
		console.log(values);
		if(f.invalid){
			alert("Something is wrong.");
			return;
		}
		// this.firstStage = false;
		// this.secondStage = false;
		// this.thirdStage = false;
		// this.route.navigateByUrl("/auth/signup-thankyou");
	}

	// ngOnDestroy(): void {
	// 	//Called once, before the instance is destroyed.
	// 	//Add 'implements OnDestroy' to the class.
	// 	this.globalData.setTitle("");
	// }
}
