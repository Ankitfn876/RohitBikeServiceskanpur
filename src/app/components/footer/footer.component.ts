import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BUSINESS_INFO } from '../../data/business-info.data';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  template: `
    <footer class="site-footer">
      <div class="container footer-content">
        <div class="footer-brand">
          <div class="footer-logo">
            <span class="logo-icon-sm">🏍️</span>
            <span class="brand-title">{{ business.name }}</span>
          </div>
          <p class="brand-desc">
            बाइक रिपेयर • सर्विसिंग • स्पेयर पार्ट्स
          </p>
          <p class="brand-loc">
            📍 {{ business.address }}, {{ business.fullLocation }}
          </p>
        </div>

        <div class="footer-links">
          <h4 class="footer-heading">त्वरित लिंक्स</h4>
          <a href="#home" class="footer-link">होम</a>
          <a href="#services" class="footer-link">हमारी सेवाएँ</a>
          <a href="#spare-parts" class="footer-link">स्पेयर पार्ट्स</a>
          <a href="#about" class="footer-link">हमारे बारे में</a>
          <a href="#contact" class="footer-link">संपर्क करें</a>
        </div>

        <div class="footer-contact">
          <h4 class="footer-heading">डायरेक्ट संपर्क</h4>
          <a [href]="business.callUrl" class="footer-btn">
            📞 {{ business.formattedPhone }}
          </a>
          <a [href]="business.whatsappUrl" target="_blank" rel="noopener noreferrer" class="footer-btn whatsapp">
            💬 WhatsApp पर पूछें
          </a>
          <a [href]="business.googleMapsUrl" target="_blank" rel="noopener noreferrer" class="footer-btn maps">
            📍 Google Maps लोकेशन
          </a>
        </div>
      </div>

      <div class="footer-bottom text-center">
        <div class="container">
          <p class="copyright">
            © 2026 Rohit Bike Service & Spare Parts. सभी अधिकार सुरक्षित।
          </p>
        </div>
      </div>
    </footer>
  `,
  styles: [`
    .site-footer {
      background: #080b10;
      color: #94a3b8;
      border-top: 1px solid rgba(255, 255, 255, 0.08);
      padding-top: 60px;
    }

    .footer-content {
      display: grid;
      grid-template-columns: 1.5fr 1fr 1fr;
      gap: 40px;
      padding-bottom: 50px;
    }

    .footer-logo {
      display: flex;
      align-items: center;
      gap: 10px;
      margin-bottom: 12px;
    }

    .logo-icon-sm {
      font-size: 1.8rem;
    }

    .brand-title {
      font-family: var(--font-heading);
      font-size: 1.5rem;
      font-weight: 700;
      color: #ffffff;
    }

    .brand-desc {
      color: var(--primary-color);
      font-weight: 600;
      font-size: 0.95rem;
      margin-bottom: 8px;
    }

    .brand-loc {
      font-size: 0.88rem;
      color: #64748b;
    }

    .footer-heading {
      font-family: var(--font-heading);
      font-size: 1.25rem;
      color: #ffffff;
      margin-bottom: 16px;
    }

    .footer-links {
      display: flex;
      flex-direction: column;
      gap: 10px;
    }

    .footer-link {
      color: #cbd5e1;
      text-decoration: none;
      font-size: 0.95rem;
      transition: color 0.2s ease;
    }

    .footer-link:hover {
      color: var(--primary-color);
    }

    .footer-contact {
      display: flex;
      flex-direction: column;
      gap: 10px;
    }

    .footer-btn {
      color: #e2e8f0;
      background: rgba(255, 255, 255, 0.05);
      border: 1px solid rgba(255, 255, 255, 0.1);
      padding: 8px 14px;
      border-radius: 10px;
      text-decoration: none;
      font-size: 0.9rem;
      font-weight: 600;
      transition: all 0.2s ease;
    }

    .footer-btn:hover {
      background: var(--primary-color);
      color: #ffffff;
    }

    .footer-btn.whatsapp:hover {
      background: var(--whatsapp-color);
      color: #ffffff;
    }

    .footer-btn.maps:hover {
      background: #3b82f6;
      color: #ffffff;
    }

    .footer-bottom {
      border-top: 1px solid rgba(255, 255, 255, 0.05);
      padding: 20px 0;
      font-size: 0.88rem;
      color: #64748b;
    }

    @media (max-width: 768px) {
      .footer-content {
        grid-template-columns: 1fr;
        gap: 30px;
      }
    }
  `]
})
export class FooterComponent {
  business = BUSINESS_INFO;
}
