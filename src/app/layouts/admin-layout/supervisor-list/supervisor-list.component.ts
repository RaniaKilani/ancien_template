import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-supervisor-list',
  templateUrl: './supervisor-list.component.html',
  styleUrls: ['./supervisor-list.component.css']
})
export class SupervisorListComponent implements OnInit {

  constructor(private router:Router) { }
  goToAddPage(AddPage:string):void{
    this.router.navigate([`${AddPage}`]);
}
goToUpdatePage(UpdatePage:string, id:number):void{
  this.router.navigate([`${UpdatePage}/${id}`]);
}


  ngOnInit(): void {
  }

}
