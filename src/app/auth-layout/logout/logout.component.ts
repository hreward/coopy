import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { GlobalDataService } from 'src/app/services/global-data.service';

@Component({
	selector: 'app-logout',
	templateUrl: './logout.component.html',
	styleUrls: ['./logout.component.scss']
})
export class LogoutComponent {
	constructor(private route: Router, private globalDataService: GlobalDataService, private authService:AuthService){}
	ngOnInit(): void {
		// check if authtoken is available
        if(localStorage.getItem("cauthtoken")==null || localStorage.getItem("cauthtoken")=="" ){
            this.route.navigate(["/auth/signin"]);
			return;
        } 

		//logout from server
		this.authService.logout().subscribe({
			next: (data)=>{
                //retain theme mode
				localStorage.removeItem("cauthtoken");
				localStorage.removeItem("cauthemail");
				this.globalDataService.isLogin.next(false);
				this.route.navigateByUrl("auth/signin");
			},
			error: (data)=>{
				//
			}
		});
		//check user login sate
		
	}

}
