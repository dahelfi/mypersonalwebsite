import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { MenuComponent } from './menu/menu.component';
import { FrontSectionComponent } from './front-section/front-section.component';
import { MyskillsComponent } from './myskills/myskills.component';
import { MyprojectsSectionComponent } from './myprojects-section/myprojects-section.component';
import { MystorySectionComponent } from './mystory-section/mystory-section.component';
import { ContactSectionComponent } from './contact-section/contact-section.component';
import { FooterComponent } from './footer/footer.component';
import { ImprintComponent } from './imprint/imprint.component';
import { DataProtectionComponent } from './data-protection/data-protection.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponentComponent,
    MenuComponent,
    FrontSectionComponent,
    MyskillsComponent,
    MyprojectsSectionComponent,
    MystorySectionComponent,
    ContactSectionComponent,
    FooterComponent,
    ImprintComponent,
    DataProtectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
