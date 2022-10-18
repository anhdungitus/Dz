import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users/users.component';
import {MatTableModule} from "@angular/material/table";
import { MatTableFilterComponent } from './mat-table-filter/mat-table-filter.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatSelectModule} from "@angular/material/select";
import {MatCardModule} from "@angular/material/card";



@NgModule({
  declarations: [
    UsersComponent,
    MatTableFilterComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatFormFieldModule,
    MatSelectModule,
    MatCardModule
  ]
})
export class AccountModule { }
