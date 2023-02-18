import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FullCalendarComponent } from '@fullcalendar/angular';

@Component({
	selector: 'app-headermenu',
	templateUrl: './headermenu.component.html',
	styleUrls: ['./headermenu.component.scss']
})
export class HeadermenuComponent implements OnInit {
	@ViewChild('body', { static: true }) docBody!: HTMLElement;
	@ViewChild('sidebar', { static: true }) sideBar!: HTMLElement;
	@ViewChild('openmenu', { static: true }) sideBarBtn!: HTMLElement;
	constructor() { }

	ngOnInit(): void {
		
	}

	menuopen() {
		const body = document.getElementsByTagName('body')[0];
		body.classList.toggle('menu-open');
	}

}
