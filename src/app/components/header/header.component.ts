import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BUSINESS_INFO } from '../../data/business-info.data';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  template: `
    <header [class.scrolled]="isScrolled" class="site-header">
      <div class="top-bar">
        <div class="container top-bar-content">
          <div class="top-left">
            <span>📍 {{ business.fullLocation }}</span>
            <span class="divider">•</span>
            <span>⏰ {{ business.workingHours }}</span>
          </div>
          <div class="top-right">
            <a [href]="business.callUrl" class="top-link">📞 {{ business.formattedPhone }}</a>
          </div>
        </div>
      </div>

      <nav class="navbar container">
        <a href="#" class="brand-logo">
          <div class="logo-icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
              <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 6a.75.75 0 0 0-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 0 0 0-1.5h-3.75V6Z" clip-rule="evenodd" />
            </svg>
          </div>
          <div class="logo-text">
            <span class="brand-name">Rohit Bike Service</span>
            <span class="brand-sub">& Spare Parts • कानपुर</span>
          </div>
        </a>

        <div class="desktop-menu">
          <a href="#home" class="nav-link" (click)="closeMenu()">होम</a>
          <a href="#services" class="nav-link" (click)="closeMenu()">हमारी सेवाएँ</a>
          <a href="#spare-parts" class="nav-link" (click)="closeMenu()">स्पेयर पार्ट्स</a>
          <a href="#about" class="nav-link" (click)="closeMenu()">हमारे बारे में</a>
          <a href="#why-choose-us" class="nav-link" (click)="closeMenu()">क्यों चुनें हमें</a>
          <a href="#contact" class="nav-link" (click)="closeMenu()">संपर्क करें</a>
        </div>

        <div class="header-actions">
          <a [href]="business.callUrl" class="btn btn-call-header">
            <span class="icon">📞</span>
            <span>अभी कॉल करें</span>
          </a>

          <button (click)="toggleMenu()" class="mobile-toggle" aria-label="Toggle navigation menu">
            <svg *ngIf="!menuOpen" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
            <svg *ngIf="menuOpen" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </nav>

      <!-- Mobile Dropdown Menu -->
      <div class="mobile-menu" [class.open]="menuOpen">
        <a href="#home" class="mobile-nav-link" (click)="closeMenu()">होम</a>
        <a href="#services" class="mobile-nav-link" (click)="closeMenu()">हमारी सेवाएँ</a>
        <a href="#spare-parts" class="mobile-nav-link" (click)="closeMenu()">स्पेयर पार्ट्स</a>
        <a href="#about" class="mobile-nav-link" (click)="closeMenu()">हमारे बारे में</a>
        <a href="#why-choose-us" class="mobile-nav-link" (click)="closeMenu()">क्यों चुनें हमें</a>
        <a href="#contact" class="mobile-nav-link" (click)="closeMenu()">संपर्क करें</a>

        <div class="mobile-actions">
          <a [href]="business.callUrl" class="btn btn-call w-full" (click)="closeMenu()">
            📞 अभी कॉल करें
          </a>
          <a [href]="business.whatsappUrl" target="_blank" rel="noopener noreferrer" class="btn btn-whatsapp w-full" (click)="closeMenu()">
            💬 WhatsApp पर बात करें
          </a>
        </div>
      </div>
    </header>
  `,
  styles: [`
    .site-header {
      position: sticky;
      top: 0;
      z-index: 1000;
      background: rgba(18, 22, 31, 0.95);
      backdrop-filter: blur(12px);
      border-bottom: 1px solid rgba(255, 255, 255, 0.08);
      transition: all 0.3s ease;
    }

    .site-header.scrolled {
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
      border-bottom-color: var(--primary-color);
    }

    .top-bar {
      background: #0f131a;
      color: #94a3b8;
      font-size: 0.85rem;
      padding: 6px 0;
      border-bottom: 1px solid rgba(255, 255, 255, 0.05);
    }

    .top-bar-content {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .top-left, .top-right {
      display: flex;
      align-items: center;
      gap: 8px;
    }

    .divider {
      color: var(--primary-color);
    }

    .top-link {
      color: #e2e8f0;
      font-weight: 600;
      text-decoration: none;
    }

    .top-link:hover {
      color: var(--primary-color);
    }

    .navbar {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 12px 1.5rem;
    }

    .brand-logo {
      display: flex;
      align-items: center;
      gap: 10px;
      text-decoration: none;
    }

    .logo-icon {
      width: 42px;
      height: 42px;
      background: linear-gradient(135deg, var(--primary-color), #c53030);
      border-radius: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #ffffff;
      box-shadow: 0 4px 15px rgba(229, 62, 62, 0.4);
    }

    .logo-icon svg {
      width: 26px;
      height: 26px;
    }

    .logo-text {
      display: flex;
      flex-direction: column;
    }

    .brand-name {
      font-family: var(--font-heading);
      font-size: 1.5rem;
      font-weight: 700;
      color: #ffffff;
      line-height: 1.1;
      letter-spacing: 0.5px;
    }

    .brand-sub {
      font-size: 0.78rem;
      color: var(--primary-color);
      font-weight: 600;
    }

    .desktop-menu {
      display: flex;
      gap: 20px;
    }

    .nav-link {
      color: #cbd5e1;
      text-decoration: none;
      font-weight: 500;
      font-size: 0.98rem;
      transition: color 0.2s ease;
      position: relative;
      padding: 4px 0;
    }

    .nav-link:hover {
      color: var(--primary-color);
    }

    .nav-link::after {
      content: '';
      position: absolute;
      bottom: -2px;
      left: 0;
      width: 0%;
      height: 2px;
      background: var(--primary-color);
      transition: width 0.3s ease;
    }

    .nav-link:hover::after {
      width: 100%;
    }

    .header-actions {
      display: flex;
      align-items: center;
      gap: 12px;
    }

    .btn-call-header {
      background: linear-gradient(135deg, #e53e3e, #b91c1c);
      color: #ffffff;
      font-weight: 600;
      padding: 8px 18px;
      border-radius: 30px;
      text-decoration: none;
      display: inline-flex;
      align-items: center;
      gap: 6px;
      box-shadow: 0 4px 14px rgba(229, 62, 62, 0.35);
      transition: transform 0.2s ease, box-shadow 0.2s ease;
    }

    .btn-call-header:hover {
      transform: translateY(-2px);
      box-shadow: 0 6px 20px rgba(229, 62, 62, 0.5);
    }

    .mobile-toggle {
      display: none;
      background: transparent;
      border: none;
      color: #ffffff;
      cursor: pointer;
      padding: 6px;
    }

    .mobile-toggle svg {
      width: 28px;
      height: 28px;
    }

    .mobile-menu {
      display: none;
      flex-direction: column;
      background: #12161f;
      border-bottom: 2px solid var(--primary-color);
      padding: 16px 1.5rem 24px;
      gap: 12px;
    }

    .mobile-menu.open {
      display: flex;
    }

    .mobile-nav-link {
      color: #e2e8f0;
      text-decoration: none;
      font-size: 1.1rem;
      font-weight: 600;
      padding: 8px 0;
      border-bottom: 1px solid rgba(255, 255, 255, 0.05);
    }

    .mobile-actions {
      display: flex;
      flex-direction: column;
      gap: 10px;
      margin-top: 10px;
    }

    @media (max-width: 992px) {
      .top-bar {
        display: none;
      }

      .desktop-menu {
        display: none;
      }

      .mobile-toggle {
        display: block;
      }
    }
  `]
})
export class HeaderComponent {
  business = BUSINESS_INFO;
  isScrolled = false;
  menuOpen = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 30;
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu() {
    this.menuOpen = false;
  }
}
