import { Routes } from '@angular/router';

import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { TableListComponent } from '../../table-list/table-list.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { MapsComponent } from '../../maps/maps.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';
import { CarListComponent } from './car-list/car-list.component';
import { DriverListComponent } from './driver-list/driver-list.component';
import { AddCarComponent } from './add-car/add-car.component';
import { UpdateCarComponent } from './update-car/update-car.component';
import { AddDriverComponent } from './add-driver/add-driver.component';
import { UpdateDriverComponent } from './update-driver/update-driver.component';
import { SupervisorListComponent } from './supervisor-list/supervisor-list.component';
import { AddSupervisorComponent } from './add-supervisor/add-supervisor.component';
import { UpdateSupervisorComponent } from './update-supervisor/update-supervisor.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'listSupervisor', component: SupervisorListComponent },
    { path: 'tables',         component: CarListComponent },
    { path: 'listDriver',     component: DriverListComponent },
    { path: 'icons',          component: IconsComponent },
    { path: 'maps',           component: MapsComponent },
    { path: 'notifications',  component: NotificationsComponent },
    { path: 'upgrade',        component: UpgradeComponent },
    { path: 'addCar',         component: AddCarComponent },
    { path: 'updateCar',      component: UpdateCarComponent },
    { path: 'addDriver',      component: AddDriverComponent },
    { path: 'updateDriver',   component: UpdateDriverComponent },
    { path: 'addSupervisor',  component: AddSupervisorComponent },
    { path: 'updateSupervisor',component: UpdateSupervisorComponent }
];
