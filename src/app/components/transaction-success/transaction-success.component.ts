import { Component } from '@angular/core';
import { ActivatedRoute, Route, Router, Routes } from '@angular/router';

@Component({
	selector: 'app-transaction-success',
	templateUrl: './transaction-success.component.html',
	styleUrls: ['./transaction-success.component.scss']
})
export class TransactionSuccessComponent {
	tranxRef:any;

	constructor(private route:ActivatedRoute, private router:Router){}

	ngOnInit(): void {
		this.route.paramMap.subscribe((params:any) => {
			this.tranxRef = params.get('ref');
		});
		if(this.tranxRef == null){
			this.router.navigate(["/pagenotfound"]);
		}
	}
}
