import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/layout/navbar/navbar.component';
import { BannerComponent } from './components/layout/banner/banner.component';
import { HomeComponent } from './pages/home/home.component';
import { StyleWorkStatsComponent } from './components/style-work-stats/styleWork-stats.component';
import { WhyCoWorkingComponent } from './components/why-co-working/why-co-working.component';
import { StyleWorkBenefitsComponent } from './components/style-work-benefits/style-work-benefits.component';
import { UnconventionalBenefitsComponent } from './components/style-work-benefits/unconventional-benefits/unconventional-benefits.component';
import { WorkspaceFiltersComponent } from './components/workspace-filters/workspace-filters.component';
import { StyleWorkCitiesComponent } from './components/style-work-cities/style-work-cities.component';
import { WorkspacesComponent } from './components/workspaces/workspaces.component';
import { StyleWorkSpaceComponent } from './components/style-work-space/style-work-space.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { WorkspaceListComponent } from './components/workspace-list/workspace-list.component';
import { GetStartedComponent } from './components/get-started/get-started.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BannerComponent,
    HomeComponent,
    StyleWorkStatsComponent,
    WhyCoWorkingComponent,
    StyleWorkBenefitsComponent,
    UnconventionalBenefitsComponent,
    WorkspaceFiltersComponent,
    StyleWorkCitiesComponent,
    WorkspacesComponent,
    StyleWorkSpaceComponent,
    WorkspaceListComponent,
    GetStartedComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSlideToggleModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
