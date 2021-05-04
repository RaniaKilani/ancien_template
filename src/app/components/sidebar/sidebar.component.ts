import { Component, OnInit } from '@angular/core';

declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'Dashboard',  icon: 'design_app', class: '' },
    { path: '/tables', title: 'Véhicules',  icon:'now-ui-icons shopping_delivery-fast', class: '' },
    { path: '/listSupervisor', title: 'Superviseurs',  icon:'users_single-02', class: '' },
    { path: '/listDriver', title: 'Chauffeurs',  icon:' now-ui-icons users_circle-08', class: '' },
    { path: '/maps', title: 'Maps',  icon:'now-ui-icons location_pin', class: '' },
    { path: '/notifications', title: 'Réclamations',  icon:'ui-1_bell-53', class: '' },
    { path: '/icons', title: 'Icons',  icon:'education_atom', class: '' },
    { path: '/upgrade', title: 'Upgrade to PRO',  icon:'objects_spaceship', class: 'active active-pro' }

];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ( window.innerWidth > 991) {
          return false;
      }
      return true;
  };
}
