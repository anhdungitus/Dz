import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UsersComponent} from "./account/users/users.component";
import {MatTableFilterComponent} from "./account/mat-table-filter/mat-table-filter.component";

const routes: Routes = [{ path: 'user', component: UsersComponent }, { path: 'mat', component: MatTableFilterComponent } ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
