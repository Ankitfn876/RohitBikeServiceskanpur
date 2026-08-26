import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SPARE_PARTS_DATA } from '../../data/spare-parts.data';
import { BUSINESS_INFO } from '../../data/business-info.data';

@Component({
  selector: 'app-spare-parts',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="spare-parts" class="spare-parts-section">
      <div class="container">
        <div class="section-header text-center">
          <span class="section-tag">ओरिजिनल पार्ट्स दुकान</span>
          <h2 class="section-title">बाइक के स्पेयर पार्ट्स भी उपलब्ध</h2>
          <p class="section-subtitle">
            आपकी बाइक के लिए जरूरी स्पेयर पार्ट्स और सर्विस से जुड़े सामान उपलब्ध हैं।
          </p>
        </div>

        <div class="parts-grid">
          <div *ngFor="let part of parts" class="part-card">
            <div class="part-icon-box">
              <svg *ngIf="part.icon === 'shield'" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <svg *ngIf="part.icon === 'cog'" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
              </svg>
              <svg *ngIf="part.icon === 'bolt' || part.icon === 'sparkles'" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <svg *ngIf="part.icon === 'drop' || part.icon === 'filter' || part.icon === 'wind' || part.icon === 'link' || part.icon === 'lightbulb' || part.icon === 'adjustments' || part.icon === 'archive'" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
              </svg>
            </div>
            
            <div class="part-content">
              <span class="part-badge">{{ part.badge }}</span>
              <h3 class="part-name">{{ part.name }}</h3>
              <p class="part-subtext">{{ part.subText }}</p>
            </div>
          </div>
        </div>

        <!-- Call CTA for Parts Availability -->
        <div class="parts-cta-card text-center">
          <div class="cta-inner">
            <h3 class="cta-heading">किसी विशेष स्पेयर पार्ट की जरूरत है?</h3>
            <p class="cta-sub">
              अपनी बाइक का मॉडल और पार्ट का नाम बताकर अभी उपलब्धता और सही जानकारी लें।
            </p>
            <div class="cta-buttons">
              <a [href]="business.callUrl" class="btn btn-call btn-lg">
                📞 पार्ट उपलब्ध है या नहीं पूछने के लिए कॉल करें
              </a>
              <a [href]="business.whatsappUrl" target="_blank" rel="noopener noreferrer" class="btn btn-whatsapp btn-lg">
                💬 व्हाट्सएप पर पार्ट की फोटो भेजें
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .spare-parts-section {
      padding: 90px 0;
      background: radial-gradient(circle at 30% 70%, #151b26 0%, #0d1117 100%);
      position: relative;
    }

    .parts-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
      gap: 22px;
      margin-top: 50px;
    }

    .part-card {
      background: rgba(255, 255, 255, 0.03);
      backdrop-filter: blur(8px);
      border: 1px solid rgba(255, 255, 255, 0.07);
      border-radius: 18px;
      padding: 22px;
      display: flex;
      gap: 16px;
      align-items: flex-start;
      transition: all 0.3s ease;
    }

    .part-card:hover {
      background: rgba(255, 255, 255, 0.06);
      border-color: var(--accent-color);
      transform: translateY(-5px);
      box-shadow: 0 12px 30px rgba(0, 0, 0, 0.4);
    }

    .part-icon-box {
      width: 48px;
      height: 48px;
      min-width: 48px;
      background: rgba(245, 158, 11, 0.15);
      border-radius: 14px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--accent-color);
    }

    .part-icon-box svg {
      width: 26px;
      height: 26px;
    }

    .part-content {
      display: flex;
      flex-direction: column;
    }

    .part-badge {
      font-size: 0.72rem;
      color: var(--accent-color);
      font-weight: 700;
      text-transform: uppercase;
      margin-bottom: 4px;
    }

    .part-name {
      font-family: var(--font-heading);
      font-size: 1.35rem;
      font-weight: 700;
      color: #ffffff;
      margin-bottom: 4px;
    }

    .part-subtext {
      font-size: 0.88rem;
      color: #94a3b8;
      line-height: 1.5;
    }

    .parts-cta-card {
      margin-top: 60px;
      background: linear-gradient(135deg, rgba(229, 62, 62, 0.15) 0%, rgba(245, 158, 11, 0.1) 100%);
      border: 1px solid rgba(229, 62, 62, 0.3);
      border-radius: 24px;
      padding: 40px 24px;
    }

    .cta-heading {
      font-family: var(--font-heading);
      font-size: 2rem;
      color: #ffffff;
      margin-bottom: 10px;
    }

    .cta-sub {
      color: #cbd5e1;
      font-size: 1.1rem;
      margin-bottom: 28px;
      max-width: 650px;
      margin-left: auto;
      margin-right: auto;
    }

    .cta-buttons {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      gap: 16px;
    }

    @media (max-width: 768px) {
      .parts-grid {
        grid-template-columns: 1fr;
      }
    }
  `]
})
export class SparePartsComponent {
  parts = SPARE_PARTS_DATA;
  business = BUSINESS_INFO;
}
