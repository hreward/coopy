import { Component, OnInit, HostListener, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalDataService } from '../services/global-data.service';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent implements OnInit {
	@ViewChild('HeaderEl', { read: ElementRef, static: false })
	headerView!: ElementRef;
	@ViewChild('mainPage', { read: ElementRef, static: false })
	mainPageView!: ElementRef;
	@ViewChild('FooterEl', { read: ElementRef, static: false })
	footerView!: ElementRef;

	sidebarOpen = false;

	constructor(private renderer: Renderer2, private route:Router, private globalData: GlobalDataService) { }

	ngOnInit(): void {

		//subscribing to the side state value
		this.globalData.getSideBarState().subscribe((value) => {
			this.sidebarOpen = value;
		});
	}


	ngAfterViewInit() {
		this.renderer.setStyle(this.mainPageView.nativeElement, 'padding-top', (this.headerView.nativeElement.offsetHeight + 10) + 'px');
		this.renderer.setStyle(this.mainPageView.nativeElement, 'padding-bottom', (this.headerView.nativeElement.offsetHeight + 10) + 'px');
		this.renderer.setStyle(this.mainPageView.nativeElement, 'min-height', window.outerHeight+'px');
	}

	@HostListener('window:scroll', [])
	onWindowScroll() {
		let header = document.getElementsByTagName('app-headermenu')[0];
		let main = document.getElementsByTagName('html')[0];

		if (main.scrollTop > 15) {
			header.classList.add('active');
		} else {
			header.classList.remove('active');
		}
	}

	//closes sidebar on external(outside click)
	@HostListener('document:click', ['$event'])
	sideBarClose(event:Event){
		
		let sideBar = document.getElementById('sidebar');
		let sideBarBtn = document.getElementById('openmenu');
		
		let source:HTMLElement = <HTMLElement>event.target;
		if(source == (sideBarBtn) || sideBarBtn?.contains(source)){
			event.preventDefault();
			this.globalData.openSidebar(!this.sidebarOpen);
			return;
		}
		if(this.sidebarOpen == true){
			if(!sideBar?.contains(source)){
				event.preventDefault();
				this.globalData.openSidebar(false);
			}
		}
	}
}
