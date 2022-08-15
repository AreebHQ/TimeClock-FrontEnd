import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ShiftsComponent } from './shifts/shifts.component';

const routes: Routes = [ { path: ``, component: LoginComponent },
{ path: `home`, component: ShiftsComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
