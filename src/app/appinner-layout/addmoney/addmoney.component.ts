import { CurrencyPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'app-addmoney',
	templateUrl: './addmoney.component.html',
	styleUrls: ['./addmoney.component.scss']
})
export class AddmoneyComponent implements OnInit {
	public isVisited = false;

	currency = "NGN";
	amount:any = "";

	constructor(private route:Router) { }

	ngOnInit(): void {
	}

	checkVisited(){
		this.isVisited = !this.isVisited;
	}
	currencyPiping(){
		this.amount = new CurrencyPipe("en").transform((this.amount.replace(/[^\d.-]/g, '')), "N ");
	}

	addFund(){
		this.route.navigateByUrl("/tranx-success/948749904");
	}
}
