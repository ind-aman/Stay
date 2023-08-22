import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TempComponent } from './temp/temp.component';
import { DropdownComponent } from './dropdown/dropdown.component';

const routes: Routes = [{path:'second', component:TempComponent},
                        {path:'',component:DropdownComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule { }
