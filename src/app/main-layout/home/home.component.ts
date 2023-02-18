import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
	isChecked: boolean = false;

	constructor() { }
	ngOnInit(): void {

	}

	ngAfterInit(){
		

	}
	darkModeSwitch() {
		let html = document.getElementsByTagName('html')[0];
		this.isChecked = !this.isChecked;
		if (this.isChecked == true) {
			html.classList.add('dark-mode');
		} else {
			html.classList.remove('dark-mode');
		}
	}
}
