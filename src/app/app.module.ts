import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { InfoBoxComponent } from './info-box/info-box.component';
import { SearchTripComponent } from './search-trip/search-trip.component';
import { PackageBoxComponent } from './package-box/package-box.component';
import { PopularDestinationsComponent } from './popular-destinations/popular-destinations.component';
import { DestinationPopupComponent } from './destination-popup/destination-popup.component';
import { ReviewBoxComponent } from './review-box/review-box.component';
import { TravelStateBoxComponent } from './travel-state-box/travel-state-box.component';
import { TourGuidBoxComponent } from './tour-guid-box/tour-guid-box.component';
import { RewardSectionComponent } from './reward-section/reward-section.component';
import { FooterComponent } from './footer/footer.component';
import { ContainerComponent } from './container/container.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    InfoBoxComponent,
    SearchTripComponent,
    PackageBoxComponent,
    PopularDestinationsComponent,
    DestinationPopupComponent,
    ReviewBoxComponent,
    TravelStateBoxComponent,
    TourGuidBoxComponent,
    RewardSectionComponent,
    FooterComponent,
    ContainerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
