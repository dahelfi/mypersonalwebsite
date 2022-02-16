import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactSectionComponent } from './contact-section/contact-section.component';
import { DataProtectionComponent } from './data-protection/data-protection.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { ImprintComponent } from './imprint/imprint.component';
import { SuccessComponentComponent } from './success-component/success-component.component';

const routes: Routes = [

  {path: '', component: HomeComponentComponent},
  {path: 'data-protection', component: DataProtectionComponent},
  {path: 'imprint', component:  ImprintComponent},
  {path: 'success', component: SuccessComponentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
