import { Component } from '@angular/core';

@Component({
	selector: 'app-splash',
	templateUrl: './splash.component.html',
	styleUrls: ['./splash.component.css']
})
export class SplashComponent {

	constructor(){}
	ngOnInit(): void {
		//Called after the constructor, initializing input properties, and the first call to ngOnChanges.
		//Add 'implements OnInit' to the class.
		
		setTimeout(function () {
			// window.location.replace("landing");
		}, 10000);
	}

}
