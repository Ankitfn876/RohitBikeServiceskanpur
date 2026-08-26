import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SERVICES_DATA } from '../../data/services.data';
import { BUSINESS_INFO } from '../../data/business-info.data';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="services" class="services-section">
      <div class="container">
        <div class="section-header text-center">
          <span class="section-tag">उत्कृष्ट सेवाएं</span>
          <h2 class="section-title">हमारी बाइक सर्विस</h2>
          <p class="section-subtitle">
            कानपुर में आपकी मोटरसाइकिल के लिए सभी प्रकार की रिपेयर और मेंटेनेंस सेवाएं
          </p>
        </div>

        <div class="services-grid">
          <div *ngFor="let service of services" class="service-card">
            <div class="card-image-wrap">
              <img [src]="service.image" [alt]="service.title" class="service-img" />
              <div class="card-overlay"></div>
              <span *ngIf="service.highlightTag" class="service-tag">
                {{ service.highlightTag }}
              </span>
            </div>

            <div class="card-body">
              <div class="service-title-row">
                <h3 class="service-title">{{ service.title }}</h3>
              </div>
              <p class="service-desc">{{ service.description }}</p>

              <div class="card-footer">
                <a [href]="business.callUrl" class="service-btn">
                  <span>जानकारी लें</span>
                  <span class="arrow">→</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <!-- Section CTA Callout -->
        <div class="service-cta-banner">
          <div class="banner-content">
            <h3>आपकी बाइक में कोई दूसरी समस्या है?</h3>
            <p>बेझिझक रोहित मैकेनिक से फोन पर बात करें या वर्कशॉप लेकर आएं।</p>
          </div>
          <div class="banner-actions">
            <a [href]="business.callUrl" class="btn btn-call">
              📞 अभी कॉल करें
            </a>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .services-section {
      padding: 90px 0;
      background: #0f131a;
      position: relative;
    }

    .services-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
      gap: 28px;
      margin-top: 50px;
    }

    .service-card {
      background: #181e29;
      border-radius: 20px;
      border: 1px solid rgba(255, 255, 255, 0.08);
      overflow: hidden;
      display: flex;
      flex-direction: column;
      transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
    }

    .service-card:hover {
      transform: translateY(-8px);
      box-shadow: 0 20px 40px rgba(0, 0, 0, 0.6);
      border-color: rgba(229, 62, 62, 0.4);
    }

    .card-image-wrap {
      position: relative;
      height: 180px;
      overflow: hidden;
    }

    .service-img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.5s ease;
    }

    .service-card:hover .service-img {
      transform: scale(1.08);
    }

    .card-overlay {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: linear-gradient(to top, #181e29 0%, transparent 60%);
    }

    .service-tag {
      position: absolute;
      top: 14px;
      right: 14px;
      background: var(--primary-color);
      color: #ffffff;
      font-size: 0.78rem;
      font-weight: 700;
      padding: 4px 12px;
      border-radius: 20px;
      box-shadow: 0 4px 10px rgba(229, 62, 62, 0.4);
    }

    .card-body {
      padding: 24px;
      display: flex;
      flex-direction: column;
      flex-grow: 1;
    }

    .service-title {
      font-family: var(--font-heading);
      font-size: 1.5rem;
      font-weight: 700;
      color: #ffffff;
      margin-bottom: 10px;
    }

    .service-desc {
      color: #94a3b8;
      font-size: 0.95rem;
      line-height: 1.6;
      margin-bottom: 20px;
      flex-grow: 1;
    }

    .card-footer {
      border-top: 1px solid rgba(255, 255, 255, 0.06);
      padding-top: 16px;
    }

    .service-btn {
      color: var(--primary-color);
      font-weight: 600;
      text-decoration: none;
      display: flex;
      align-items: center;
      justify-content: space-between;
      transition: color 0.2s ease;
    }

    .service-card:hover .service-btn {
      color: #ff6b6b;
    }

    .arrow {
      font-size: 1.2rem;
      transition: transform 0.2s ease;
    }

    .service-card:hover .arrow {
      transform: translateX(4px);
    }

    .service-cta-banner {
      margin-top: 60px;
      background: linear-gradient(135deg, #1e2638 0%, #151b27 100%);
      border: 1px solid rgba(255, 255, 255, 0.12);
      border-radius: 24px;
      padding: 36px 40px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 30px;
      box-shadow: 0 15px 35px rgba(0, 0, 0, 0.4);
    }

    .banner-content h3 {
      font-family: var(--font-heading);
      font-size: 1.8rem;
      color: #ffffff;
      margin-bottom: 6px;
    }

    .banner-content p {
      color: #cbd5e1;
      font-size: 1.05rem;
    }

    @media (max-width: 768px) {
      .service-cta-banner {
        flex-direction: column;
        text-align: center;
        padding: 28px 20px;
      }
    }
  `]
})
export class ServicesComponent {
  services = SERVICES_DATA;
  business = BUSINESS_INFO;
}
