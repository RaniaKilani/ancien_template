import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Car } from '../models/car';
import { CarService } from '../services/car.service';


@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.css']
})
export class AddCarComponent implements OnInit {

  newCar = new Car();


  constructor(private router:Router, private carService:CarService) { }
  goToListPage( ListPage:string){
    this.router.navigate([`${ListPage}`])

  }


  ngOnInit(): void {
  }
  addCar(){
    console.log(this.newCar);
    this.carService.addCar(this.newCar);

  }


}
