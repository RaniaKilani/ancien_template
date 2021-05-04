import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { TableListComponent } from '../../table-list/table-list.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { MapsComponent } from '../../maps/maps.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { ChartsModule } from 'ng2-charts';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrModule } from 'ngx-toastr';
import { UpgradeComponent } from '../../upgrade/upgrade.component';
import { CarListComponent } from './car-list/car-list.component';
import { AddCarComponent } from './add-car/add-car.component';
import { UpdateCarComponent } from './update-car/update-car.component';
import { DriverListComponent } from './driver-list/driver-list.component';
import { UpdateDriverComponent } from './update-driver/update-driver.component';
import { AddDriverComponent } from './add-driver/add-driver.component';
import { SupervisorListComponent } from './supervisor-list/supervisor-list.component';
import { AddSupervisorComponent } from './add-supervisor/add-supervisor.component';
import { UpdateSupervisorComponent } from './update-supervisor/update-supervisor.component';



@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    ChartsModule,
    NgbModule,
    ToastrModule.forRoot()
  ],
  declarations: [
    DashboardComponent,
    UserProfileComponent,
    TableListComponent,
    UpgradeComponent,
    TypographyComponent,
    IconsComponent,
    MapsComponent,
    NotificationsComponent,
    CarListComponent,
    AddCarComponent,
    UpdateCarComponent,
    DriverListComponent,
    UpdateDriverComponent,
    AddDriverComponent,
    SupervisorListComponent,
    AddSupervisorComponent,
    UpdateSupervisorComponent,


  ]
})

export class AdminLayoutModule {}
