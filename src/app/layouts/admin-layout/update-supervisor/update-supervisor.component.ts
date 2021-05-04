import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Supervisor } from '../models/supervisor';


@Component({
  selector: 'app-update-supervisor',
  templateUrl: './update-supervisor.component.html',
  styleUrls: ['./update-supervisor.component.css']
})
export class UpdateSupervisorComponent implements OnInit {
  currentSupervisor = new Supervisor();
  constructor(private router:Router) { }
  goToListPage( ListPage:string){
    this.router.navigate([`${ListPage}`]);}

  ngOnInit(): void {
  }

}
