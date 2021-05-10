import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/layout/navbar/navbar.component';
import { BannerComponent } from './components/layout/banner/banner.component';
import { HomeComponent } from './pages/home/home.component';
import { StyleWorkStatsComponent } from './components/style-work-stats/styleWork-stats.component';
import { WhyCoWorkingComponent } from './components/why-co-working/why-co-working.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BannerComponent,
    HomeComponent,
    StyleWorkStatsComponent,
    WhyCoWorkingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
