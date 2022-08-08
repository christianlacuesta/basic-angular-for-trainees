import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SampleFormComponent } from './sample-crud/sample-form/sample-form.component';
import { SamplePunishmentComponent } from './sample-crud/sample-punishment/sample-punishment.component';
import { SampleTableComponent } from './sample-crud/sample-table/sample-table.component';

const routes: Routes = [
  {path: '', component: SampleFormComponent},
  {path: 'table', component: SampleTableComponent},
  {path: 'punishment', component: SamplePunishmentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
