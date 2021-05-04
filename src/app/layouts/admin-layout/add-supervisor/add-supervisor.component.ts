import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Supervisor } from '../models/supervisor';

@Component({
  selector: 'app-add-supervisor',
  templateUrl: './add-supervisor.component.html',
  styleUrls: ['./add-supervisor.component.css']
})
export class AddSupervisorComponent implements OnInit {
  newSupervisor = new Supervisor();

  constructor(private router:Router) { }
  goToListPage( ListPage:string){
    this.router.navigate([`${ListPage}`]);}

  ngOnInit(): void {
  }

}
