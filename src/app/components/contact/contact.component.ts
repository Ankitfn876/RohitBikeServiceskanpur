import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BUSINESS_INFO } from '../../data/business-info.data';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="contact" class="contact-section">
      <div class="container">
        <div class="section-header text-center">
          <span class="section-tag">लोकेशन व फोन</span>
          <h2 class="section-title">हमसे संपर्क करें</h2>
          <p class="section-subtitle">
            कानपुर में अपनी बाइक की सर्विस या स्पेयर पार्ट्स के लिए रोहित मैकेनिक से तुरंत संपर्क करें
          </p>
        </div>

        <div class="contact-grid">
          <!-- Info Column -->
          <div class="contact-info-card">
            <h3 class="info-title">वर्कशॉप की जानकारी</h3>

            <div class="contact-details-list">
              <div class="contact-detail-item">
                <div class="detail-icon">📍</div>
                <div class="detail-text">
                  <span class="detail-label">दुकान का पता</span>
                  <span class="detail-val">{{ business.address }}</span>
                  <span class="detail-sub">{{ business.landmark }}, {{ business.fullLocation }}</span>
                </div>
              </div>

              <div class="contact-detail-item">
                <div class="detail-icon">📞</div>
                <div class="detail-text">
                  <span class="detail-label">फोन नंबर</span>
                  <a [href]="business.callUrl" class="detail-link">{{ business.formattedPhone }}</a>
                  <span class="detail-sub">डायरेक्ट मैकेनिक कॉल</span>
                </div>
              </div>

              <div class="contact-detail-item">
                <div class="detail-icon">💬</div>
                <div class="detail-text">
                  <span class="detail-label">WhatsApp सहायता</span>
                  <a [href]="business.whatsappUrl" target="_blank" rel="noopener noreferrer" class="detail-link">
                    {{ business.formattedPhone }}
                  </a>
                  <span class="detail-sub">मैसेज या फोटो भेजें</span>
                </div>
              </div>

              <div class="contact-detail-item">
                <div class="detail-icon">⏰</div>
                <div class="detail-text">
                  <span class="detail-label">खुलने का समय</span>
                  <span class="detail-val">{{ business.workingHours }}</span>
                  <span class="detail-sub">{{ business.workingDays }}</span>
                </div>
              </div>
            </div>

            <div class="contact-action-btns">
              <a [href]="business.callUrl" class="btn btn-call w-full">
                📞 अभी कॉल करें
              </a>
              <a [href]="business.whatsappUrl" target="_blank" rel="noopener noreferrer" class="btn btn-whatsapp w-full">
                💬 WhatsApp पर पूछें
              </a>
              <a [href]="business.googleMapsUrl" target="_blank" rel="noopener noreferrer" class="btn btn-maps w-full">
                📍 Google Maps पर रास्ता देखें
              </a>
            </div>
          </div>

          <!-- Maps & Quick Notice Box -->
          <div class="contact-map-card">
            <div class="map-placeholder">
              <div class="map-bg-pattern"></div>
              <div class="map-pin-box">
                <div class="pin-pulse"></div>
                <span class="pin-emoji">🏍️</span>
                <span class="pin-title">Rohit Bike Service</span>
                <span class="pin-city">कानपुर, उत्तर प्रदेश</span>
              </div>
              <a [href]="business.googleMapsUrl" target="_blank" rel="noopener noreferrer" class="map-overlay-btn">
                <span>Google Maps पर लोकेशन खोलें</span>
                <span class="ext-icon">↗</span>
              </a>
            </div>

            <div class="kanpur-trust-note">
              <h4>कानपुर शहर के बाइक मालिकों के लिए स्पेशल सेवा:</h4>
              <p>
                यदि आपकी बाइक रास्ते में अचानक बंद हो गई है या स्टार्ट नहीं हो रही, तो तुरंत हमें फोन करें। हम आपको सही सलाह देंगे।
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .contact-section {
      padding: 95px 0;
      background: #0d1117;
    }

    .contact-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 36px;
      margin-top: 50px;
    }

    .contact-info-card, .contact-map-card {
      background: #161c26;
      border: 1px solid rgba(255, 255, 255, 0.08);
      border-radius: 24px;
      padding: 36px;
      display: flex;
      flex-direction: column;
    }

    .info-title {
      font-family: var(--font-heading);
      font-size: 1.8rem;
      font-weight: 700;
      color: #ffffff;
      margin-bottom: 24px;
      padding-bottom: 12px;
      border-bottom: 2px solid var(--primary-color);
    }

    .contact-details-list {
      display: flex;
      flex-direction: column;
      gap: 20px;
      margin-bottom: 30px;
    }

    .contact-detail-item {
      display: flex;
      gap: 16px;
      align-items: flex-start;
    }

    .detail-icon {
      width: 44px;
      height: 44px;
      min-width: 44px;
      background: rgba(255, 255, 255, 0.05);
      border-radius: 12px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.3rem;
    }

    .detail-text {
      display: flex;
      flex-direction: column;
    }

    .detail-label {
      font-size: 0.8rem;
      color: #94a3b8;
      font-weight: 600;
      text-transform: uppercase;
    }

    .detail-val {
      font-size: 1.05rem;
      color: #ffffff;
      font-weight: 600;
    }

    .detail-link {
      font-size: 1.15rem;
      color: var(--accent-color);
      font-weight: 700;
      text-decoration: none;
    }

    .detail-link:hover {
      text-decoration: underline;
    }

    .detail-sub {
      font-size: 0.85rem;
      color: #64748b;
    }

    .contact-action-btns {
      display: flex;
      flex-direction: column;
      gap: 12px;
      margin-top: auto;
    }

    .btn-maps {
      background: linear-gradient(135deg, #3b82f6, #1d4ed8);
      color: #ffffff;
      font-weight: 600;
      border-radius: 30px;
      padding: 12px;
      text-align: center;
      text-decoration: none;
      box-shadow: 0 4px 15px rgba(59, 130, 246, 0.3);
      transition: all 0.2s ease;
    }

    .btn-maps:hover {
      transform: translateY(-2px);
      box-shadow: 0 6px 20px rgba(59, 130, 246, 0.5);
    }

    /* Map card styles */
    .map-placeholder {
      position: relative;
      height: 260px;
      background: linear-gradient(135deg, #1e2638 0%, #111620 100%);
      border-radius: 18px;
      border: 1px solid rgba(255, 255, 255, 0.1);
      overflow: hidden;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      margin-bottom: 24px;
    }

    .map-bg-pattern {
      position: absolute;
      inset: 0;
      background-image: radial-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px);
      background-size: 20px 20px;
    }

    .map-pin-box {
      position: relative;
      z-index: 2;
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .pin-pulse {
      position: absolute;
      top: -10px;
      width: 50px;
      height: 50px;
      background: rgba(229, 62, 62, 0.3);
      border-radius: 50%;
      animation: pulse 2s infinite;
    }

    .pin-emoji {
      font-size: 2.5rem;
      position: relative;
      z-index: 3;
    }

    .pin-title {
      font-family: var(--font-heading);
      font-size: 1.4rem;
      color: #ffffff;
      font-weight: 700;
      margin-top: 8px;
    }

    .pin-city {
      color: var(--accent-color);
      font-size: 0.9rem;
      font-weight: 600;
    }

    .map-overlay-btn {
      position: absolute;
      bottom: 16px;
      z-index: 3;
      background: rgba(15, 23, 42, 0.9);
      color: #ffffff;
      border: 1px solid rgba(255, 255, 255, 0.2);
      padding: 8px 18px;
      border-radius: 20px;
      text-decoration: none;
      font-size: 0.88rem;
      font-weight: 600;
      display: flex;
      align-items: center;
      gap: 6px;
      backdrop-filter: blur(8px);
    }

    .map-overlay-btn:hover {
      background: var(--primary-color);
    }

    .kanpur-trust-note {
      background: rgba(245, 158, 11, 0.08);
      border: 1px dashed rgba(245, 158, 11, 0.3);
      border-radius: 16px;
      padding: 20px;
      margin-top: auto;
    }

    .kanpur-trust-note h4 {
      font-family: var(--font-heading);
      color: var(--accent-color);
      font-size: 1.2rem;
      margin-bottom: 6px;
    }

    .kanpur-trust-note p {
      color: #cbd5e1;
      font-size: 0.92rem;
      line-height: 1.5;
    }

    @media (max-width: 992px) {
      .contact-grid {
        grid-template-columns: 1fr;
      }
    }
  `]
})
export class ContactComponent {
  business = BUSINESS_INFO;
}
