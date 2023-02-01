import { AboutUsComponent } from './about-us/about-us.component';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { BrowserModule } from '@angular/platform-browser';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { FooterComponent } from './footer/footer.component';
import { MdbAccordionModule } from "mdb-angular-ui-kit/accordion";
import { MdbCarouselModule } from "mdb-angular-ui-kit/carousel";
import { MdbCheckboxModule } from "mdb-angular-ui-kit/checkbox";
import { MdbCollapseModule } from "mdb-angular-ui-kit/collapse";
import { MdbDropdownModule } from "mdb-angular-ui-kit/dropdown";
import { MdbFormsModule } from "mdb-angular-ui-kit/forms";
import { MdbModalModule } from "mdb-angular-ui-kit/modal";
import { MdbPopoverModule } from "mdb-angular-ui-kit/popover";
import { MdbRadioModule } from "mdb-angular-ui-kit/radio";
import { MdbRangeModule } from "mdb-angular-ui-kit/range";
import { MdbRippleModule } from "mdb-angular-ui-kit/ripple";
import { MdbScrollspyModule } from "mdb-angular-ui-kit/scrollspy";
import { MdbTabsModule } from "mdb-angular-ui-kit/tabs";
import { MdbTooltipModule } from "mdb-angular-ui-kit/tooltip";
import { MdbValidationModule } from "mdb-angular-ui-kit/validation";
import { NavbarComponent } from './navbar/navbar.component';
import { NgImageSliderModule } from 'ng-image-slider';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PosterComponent } from './poster/poster.component';
import { ProductsComponent } from './products/products.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ContactUsComponent,
    AboutUsComponent,
    FooterComponent,
    ProductsComponent,
    PosterComponent
  ],
  imports: [
    BrowserModule,
    NgImageSliderModule,
    NgbModule,
    ReactiveFormsModule,
    MdbAccordionModule,
    MdbCarouselModule,
    MdbCheckboxModule,
    MdbCollapseModule,
    MdbDropdownModule,
    MdbFormsModule,
    MdbModalModule,
    MdbPopoverModule,
    MdbRadioModule,
    MdbRangeModule,
    MdbRippleModule,
    MdbScrollspyModule,
    MdbTabsModule,
    MdbTooltipModule,
    MdbValidationModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
