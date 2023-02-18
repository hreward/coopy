import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { GlobalDataService } from 'src/app/services/global-data.service';

@Component({
	selector: 'app-headerback',
	templateUrl: './headerback.component.html',
	styleUrls: ['./headerback.component.scss']
})
export class HeaderbackComponent implements OnInit {  
	
	constructor(private globalDataService: GlobalDataService) { }
	pageTitle = "";
	titleSub!:Subscription;
	ngOnInit(): void {
		this.titleSub = this.globalDataService.getTitle().subscribe((value) => {
			this.pageTitle = value;
		});
	}

	backnav() {
		window.history.back();
		return false;
	}
	ngOnDestroy(): void {
		//Called once, before the instance is destroyed.
		//Add 'implements OnDestroy' to the class.
		this.titleSub.unsubscribe();
	}
}
