import { Component, ElementRef, ViewChild } from '@angular/core';
import { FullCalendarComponent } from '@fullcalendar/angular';
import { CalendarOptions, Calendar,  } from "@fullcalendar/core";
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import { GlobalDataService } from 'src/app/services/global-data.service';

@Component({
	selector: 'app-coop-details',
	templateUrl: './coop-details.component.html',
	styleUrls: ['./coop-details.component.scss']
})
export class CoopDetailsComponent {
	@ViewChild('calendarEl') calendarComponent!: FullCalendarComponent;
	calendar!: Calendar;
	calView = "month";

	constructor(private globalData: GlobalDataService){}

	ngOnInit(): void {
		//Called after the constructor, initializing input properties, and the first call to ngOnChanges.
		//Add 'implements OnInit' to the class.
		this.globalData.setTitle("Coop Details");
	}
	calendarOptions: CalendarOptions = {
		plugins: [dayGridPlugin, interactionPlugin],
		initialView: 'dayGridMonth',
		weekends: true,
		events: [
			{date: new Date(), allDay: true, backgroundColor: "#f34", className: "bg-success"}
		],
		selectable: false,
		dateClick: this.handleDateClick.bind(this),
		eventClick : (event)=>{
			console.log(event);
		},
		customButtons: {
			"monthViewButton":{text: "Month", icon:"calendar", click: this.resetCalendar.bind(this)}
		},
		headerToolbar: {
			right: "today prev,next",
		}
	};

	handleDateClick(arg:any){
		// this.calendar.changeView("dayGridWeek");
		this.calendar.zoomTo(arg.date, "dayGridWeek");
		this.calendarOptions.headerToolbar = {right: "today,dayGridMonth prev,next"}
		this.calView = "week";
	}

	resetCalendar(){
		this.calendar.changeView("dayGridMonth");
		this.calendarOptions.headerToolbar = {right: "today prev,next"}
		this.calView = "month";
	}

	ngAfterViewInit(): void {
		this.calendar =  this.calendarComponent.getApi();
	}

}
