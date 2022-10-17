import { ModuleWithProviders } from '@angular/core';
import { RouterModule }        from '@angular/router';

import { UsersComponent }    from './users/users.component';
import {AccountModule} from "./account.module";

export const routing: ModuleWithProviders<AccountModule> = RouterModule.forChild([
  { path: 'user', component: UsersComponent},
]);
