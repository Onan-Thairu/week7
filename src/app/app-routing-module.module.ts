import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { LoginComponent } from './login/login.component';
import { ParcelFormComponent } from './parcel-form/parcel-form.component';
import { ParcelListComponent } from './parcel-list/parcel-list.component';

const routes: Routes = [
  { path: '', redirectTo: '/parcels', pathMatch: 'full' },
  {path: 'login', component: LoginComponent},
  { path: 'parcels', component: ParcelListComponent, canActivate: [AuthGuard] },
  { path: 'add-parcel', component: ParcelFormComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModuleModule { }
