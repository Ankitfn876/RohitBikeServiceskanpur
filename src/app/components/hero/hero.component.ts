import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BUSINESS_INFO } from '../../data/business-info.data';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="home" class="hero-section">
      <div class="hero-bg-overlay"></div>
      
      <div class="container hero-container">
        <!-- Text Column -->
        <div class="hero-text-col">
          <div class="hero-badge">
            <span class="badge-icon">📍</span>
            <span>{{ business.trustMessage }}</span>
          </div>

          <h1 class="hero-title">
            {{ business.tagline }}
          </h1>

          <p class="hero-subtitle">
            {{ business.subTagline }}
          </p>

          <div class="hero-buttons">
            <a [href]="business.callUrl" class="btn btn-call btn-lg">
              <span class="btn-icon">📞</span>
              <span>अभी कॉल करें</span>
            </a>

            <a [href]="business.whatsappUrl" target="_blank" rel="noopener noreferrer" class="btn btn-whatsapp btn-lg">
              <span class="btn-icon">💬</span>
              <span>WhatsApp पर बात करें</span>
            </a>
          </div>

          <!-- Trust highlights row -->
          <div class="hero-stats">
            <div class="stat-card">
              <span class="stat-number">100%</span>
              <span class="stat-label">भरोसेमंद काम</span>
            </div>
            <div class="stat-divider"></div>
            <div class="stat-card">
              <span class="stat-number">उचित</span>
              <span class="stat-label">किफायती रेट्स</span>
            </div>
            <div class="stat-divider"></div>
            <div class="stat-card">
              <span class="stat-number">असली</span>
              <span class="stat-label">स्पेयर पार्ट्स</span>
            </div>
          </div>
        </div>

        <!-- Photograph Column with Rohit's real photo -->
        <div class="hero-image-col">
          <div class="rohit-photo-card">
            <div class="photo-glow"></div>
            <div class="photo-frame">
              <img 
                src="assets/images/rohit-mechanic.jpg" 
                alt="रोहित - मुख्य मैकेनिक, रोहित बाइक सर्विस कानपुर" 
                class="rohit-real-photo"
              />
              <div class="photo-badge">
                <div class="badge-pulse"></div>
                <div class="badge-content">
                  <span class="mechanic-name">रोहित मैकेनिक</span>
                  <span class="mechanic-title">बाइक एक्सपर्ट • कानपुर</span>
                </div>
              </div>
            </div>
            <div class="experience-pill">
              <span class="pill-star">★</span>
              <span>अनुभवी लोकल बाइक मैकेनिक</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .hero-section {
      position: relative;
      background: radial-gradient(circle at 70% 30%, #1e2638 0%, #10141d 70%);
      padding: 60px 0 80px;
      overflow: hidden;
    }

    .hero-bg-overlay {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-image: radial-gradient(rgba(229, 62, 62, 0.12) 1px, transparent 1px);
      background-size: 32px 32px;
      opacity: 0.6;
      pointer-events: none;
    }

    .hero-container {
      position: relative;
      z-index: 2;
      display: grid;
      grid-template-columns: 1.2fr 0.8fr;
      gap: 40px;
      align-items: center;
    }

    .hero-text-col {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
    }

    .hero-badge {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      background: rgba(229, 62, 62, 0.15);
      border: 1px solid rgba(229, 62, 62, 0.4);
      color: #feb2b2;
      padding: 8px 16px;
      border-radius: 30px;
      font-size: 0.92rem;
      font-weight: 600;
      margin-bottom: 20px;
    }

    .hero-title {
      font-family: var(--font-heading);
      font-size: 3rem;
      font-weight: 800;
      color: #ffffff;
      line-height: 1.2;
      margin-bottom: 16px;
      text-shadow: 0 4px 20px rgba(0, 0, 0, 0.6);
    }

    .hero-subtitle {
      font-size: 1.25rem;
      color: #cbd5e1;
      line-height: 1.6;
      margin-bottom: 32px;
      font-weight: 500;
    }

    .hero-buttons {
      display: flex;
      flex-wrap: wrap;
      gap: 16px;
      margin-bottom: 40px;
    }

    .btn-lg {
      padding: 14px 28px;
      font-size: 1.15rem;
      border-radius: 40px;
    }

    .btn-icon {
      font-size: 1.2rem;
    }

    .hero-stats {
      display: flex;
      align-items: center;
      gap: 24px;
      background: rgba(255, 255, 255, 0.04);
      backdrop-filter: blur(10px);
      border: 1px solid rgba(255, 255, 255, 0.08);
      padding: 16px 24px;
      border-radius: 16px;
    }

    .stat-card {
      display: flex;
      flex-direction: column;
    }

    .stat-number {
      font-family: var(--font-heading);
      font-size: 1.5rem;
      font-weight: 700;
      color: var(--accent-color);
    }

    .stat-label {
      font-size: 0.85rem;
      color: #94a3b8;
      font-weight: 500;
    }

    .stat-divider {
      width: 1px;
      height: 32px;
      background: rgba(255, 255, 255, 0.12);
    }

    /* Rohit Photograph Frame */
    .hero-image-col {
      display: flex;
      justify-content: center;
    }

    .rohit-photo-card {
      position: relative;
      width: 100%;
      max-width: 380px;
    }

    .photo-glow {
      position: absolute;
      top: -15px;
      left: -15px;
      right: -15px;
      bottom: -15px;
      background: linear-gradient(135deg, rgba(229, 62, 62, 0.4), rgba(245, 158, 11, 0.3));
      border-radius: 28px;
      filter: blur(20px);
      opacity: 0.7;
    }

    .photo-frame {
      position: relative;
      background: #1a202c;
      border-radius: 24px;
      padding: 8px;
      border: 2px solid rgba(255, 255, 255, 0.15);
      box-shadow: 0 20px 40px rgba(0, 0, 0, 0.7);
      overflow: hidden;
    }

    .rohit-real-photo {
      width: 100%;
      height: 440px;
      object-fit: cover;
      object-position: top center;
      border-radius: 18px;
      display: block;
      transition: transform 0.4s ease;
    }

    .rohit-photo-card:hover .rohit-real-photo {
      transform: scale(1.02);
    }

    .photo-badge {
      position: absolute;
      bottom: 20px;
      left: 20px;
      right: 20px;
      background: rgba(15, 23, 42, 0.92);
      backdrop-filter: blur(12px);
      border: 1px solid rgba(255, 255, 255, 0.15);
      padding: 12px 18px;
      border-radius: 16px;
      display: flex;
      align-items: center;
      gap: 12px;
      box-shadow: 0 8px 24px rgba(0, 0, 0, 0.5);
    }

    .badge-pulse {
      width: 12px;
      height: 12px;
      background: var(--whatsapp-color);
      border-radius: 50%;
      box-shadow: 0 0 10px var(--whatsapp-color);
      animation: pulse 2s infinite;
    }

    @keyframes pulse {
      0% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.7); }
      70% { transform: scale(1); box-shadow: 0 0 0 10px rgba(37, 211, 102, 0); }
      100% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(37, 211, 102, 0); }
    }

    .badge-content {
      display: flex;
      flex-direction: column;
    }

    .mechanic-name {
      color: #ffffff;
      font-weight: 700;
      font-size: 1.05rem;
    }

    .mechanic-title {
      color: var(--accent-color);
      font-size: 0.82rem;
      font-weight: 600;
    }

    .experience-pill {
      position: absolute;
      top: 20px;
      right: -10px;
      background: linear-gradient(135deg, #f59e0b, #d97706);
      color: #1e1b4b;
      padding: 8px 16px;
      border-radius: 20px;
      font-weight: 700;
      font-size: 0.88rem;
      box-shadow: 0 6px 18px rgba(245, 158, 11, 0.4);
      display: flex;
      align-items: center;
      gap: 6px;
    }

    @media (max-width: 992px) {
      .hero-container {
        grid-template-columns: 1fr;
        gap: 40px;
        text-align: center;
      }

      .hero-text-col {
        align-items: center;
      }

      .hero-title {
        font-size: 2.2rem;
      }

      .hero-subtitle {
        font-size: 1.05rem;
      }

      .hero-buttons {
        justify-content: center;
      }

      .hero-stats {
        justify-content: center;
        width: 100%;
      }

      .rohit-real-photo {
        height: 380px;
      }
    }
  `]
})
export class HeroComponent {
  business = BUSINESS_INFO;
}
