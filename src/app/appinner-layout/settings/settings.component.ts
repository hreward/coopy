import { Component, OnInit } from '@angular/core';
import { GlobalDataService } from 'src/app/services/global-data.service';

@Component({
	selector: 'app-settings',
	templateUrl: './settings.component.html',
	styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

	constructor(private globalData: GlobalDataService) { }

	ngOnInit(): void {
		this.globalData.setTitle("Update profile");
	}

	updateSettings(){
		alert("Settings updated");
	}
}
