import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AngularMaterialDropdownComponent } from './Component/angular-material-dropdown/angular-material-dropdown.component';
import { DropdownComponent } from './Component/dropdown/dropdown.component';

const routes: Routes = [{path:'second', component:AngularMaterialDropdownComponent},
                        {path:'',component:DropdownComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule { }
