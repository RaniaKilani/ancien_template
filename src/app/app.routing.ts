import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AddCarComponent } from './layouts/admin-layout/add-car/add-car.component';
import { UpdateCarComponent } from './layouts/admin-layout/update-car/update-car.component';
import { DriverListComponent } from './layouts/admin-layout/driver-list/driver-list.component';
import { AddDriverComponent } from './layouts/admin-layout/add-driver/add-driver.component';
import { UpdateDriverComponent } from './layouts/admin-layout/update-driver/update-driver.component';

const routes: Routes =[
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  }, {
    path: '',
    component: AdminLayoutComponent,
    children: [
        {
      path: '',
      loadChildren: './layouts/admin-layout/admin-layout.module#AdminLayoutModule'
  }]},
  {
    path: '**',
    redirectTo: 'dashboard'
  },

  {
    path: 'addCar',
    component: AddCarComponent,

  },
  {
    path: 'updateCar/:id',
    component: UpdateCarComponent,

  },
  {
    path: 'listDriver',
    component: DriverListComponent,
    loadChildren:
          "./layouts/admin-layout/admin-layout.module#AdminLayoutModule"

  },
  {
    path: 'addDriver',
    component: AddDriverComponent,

  },
  {
    path: 'updateDriver/:id',
    component: UpdateDriverComponent,

  },
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
