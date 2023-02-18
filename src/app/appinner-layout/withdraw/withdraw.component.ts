import { CurrencyPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'app-withdraw',
	templateUrl: './withdraw.component.html',
	styleUrls: ['./withdraw.component.scss']
})
export class WithdrawComponent implements OnInit {
	public isVisited = false;
	checkVisited(){
		this.isVisited = !this.isVisited;
	}
	
	
	currency = "NGN";
	amount:any = "";
	totalAmount:any = "";
	charge:any = "";

	constructor(private route:Router) { }

	ngOnInit(): void {
	}
	currencyPiping(){
		if(this.amount==null || this.amount == ""){
			this.charge = "";
			this.totalAmount = "";
			return;
		};

		let amount = this.amount.replace(/[^\d.-]/g, '');
		let charge = (amount/100)*0; //charge here is 1%
		let totalAmount = parseFloat(amount)+(charge);

		this.amount = new CurrencyPipe("en").transform(amount, "N ");
		this.charge = new CurrencyPipe("en").transform(charge, "N ");
		this.totalAmount = new CurrencyPipe("en").transform(totalAmount, "N ");
	}

	withdraw(){
		this.route.navigateByUrl("/tranx-success/762773883");
	}
}
