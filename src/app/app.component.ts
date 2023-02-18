import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	title = 'coop';

	ngOnInit(): void {
		// let docBody = document.getElementsByTagName('body')[0];
		// let sideBar = document.getElementById('sidebar');
		// let sideBarBtn = document.getElementById('openMenu');

		// docBody.addEventListener("mouseup", (ev)=>{
		// 	// ev.preventDefault();
		// 	// console.log("Click detected", ev);
		// 	let source:HTMLElement = <HTMLElement>ev.target;
		// 	if(source == (sideBarBtn) || sideBarBtn?.contains(source)){
		// 		ev.preventDefault();
		// 		// this.menuopen();
		// 		// console.log("side btn event: ", source);
		// 		return;
		// 	}
		// 	if(docBody.classList.contains("menu-open")){
		// 		// if(sideBar.has(source))
		// 		if(!sideBar?.contains(source)){
		// 			ev.preventDefault();
		// 			console.log("outside side menu clicked: ", ev);
		// 			console.log(docBody);
		// 			console.log(sideBarBtn);
		// 			console.log(sideBar);
		// 			console.log(source);
		// 			docBody.classList.remove('menu-open');
		// 		}
		// 	}
		// });
	}
}
