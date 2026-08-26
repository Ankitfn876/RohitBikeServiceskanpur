import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { HeroComponent } from './components/hero/hero.component';
import { ServicesComponent } from './components/services/services.component';
import { SparePartsComponent } from './components/spare-parts/spare-parts.component';
import { AboutComponent } from './components/about/about.component';
import { WhyChooseUsComponent } from './components/why-choose-us/why-choose-us.component';
import { HowItWorksComponent } from './components/how-it-works/how-it-works.component';
import { CustomerTrustComponent } from './components/customer-trust/customer-trust.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';
import { FloatingContactComponent } from './components/floating-contact/floating-contact.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    HeroComponent,
    ServicesComponent,
    SparePartsComponent,
    AboutComponent,
    WhyChooseUsComponent,
    HowItWorksComponent,
    CustomerTrustComponent,
    ContactComponent,
    FooterComponent,
    FloatingContactComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Rohit Bike Service & Spare Parts | कानपुर';
}
