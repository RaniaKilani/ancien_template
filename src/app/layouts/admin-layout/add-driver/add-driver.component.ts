import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Driver } from '../models/driver';
import { DriverService } from '../services/driver.service';

@Component({
  selector: 'app-add-driver',
  templateUrl: './add-driver.component.html',
  styleUrls: ['./add-driver.component.css']
})
export class AddDriverComponent implements OnInit {
  newDriver = new Driver();

  constructor(private driverService:DriverService, private router:Router) { }
  goToListPage( ListPage:string){
    this.router.navigate([`${ListPage}`]);}

  ngOnInit(): void {
  }
 /* addDriver(){
    console.log(this.newDriver);
    this.driverService.addDriver(this.newDriver);

  }*/
  addDriver(){
    this.driverService.addDriver(this.newDriver).subscribe(drv => {
    console.log(drv);
    });
    this.router.navigate(['listDriver']).then(() => {

      });
}

}
