import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-car',
  templateUrl: './update-car.component.html',
  styleUrls: ['./update-car.component.css']
})
export class UpdateCarComponent implements OnInit {

  constructor(private router:Router) { }
  //navigate to list car page
  goToListCarPage(ListPage:string):void{
    this.router.navigate([`${ListPage}`]);
  }
    ngOnInit(): void {
    }

}
