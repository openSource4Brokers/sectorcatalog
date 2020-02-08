import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BtTabsComponent } from './_helpers/bt-tabs/bt-tabs.component';
import { BtTabComponent } from './_helpers/bt-tabs/bt-tab/bt-tab.component';

import { NavbarComponent } from './components/navbar/navbar.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AboutComponent } from './components/about/about.component';
import { CatalogsCardListComponent } from './components/catalogs-card-list/catalogs-card-list.component';
import { CatalogDetailsComponent } from './components/catalog-details/catalog-details.component';

@NgModule({
  declarations: [
    AppComponent,
    BtTabsComponent,
    BtTabComponent,
    DashboardComponent,
    AboutComponent,
    NotFoundComponent,
    NavbarComponent,
    CatalogsCardListComponent,
    CatalogDetailsComponent
  ],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
