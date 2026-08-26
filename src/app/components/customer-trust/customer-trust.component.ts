import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-customer-trust',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="trust-banner-section">
      <div class="container">
        <div class="trust-card">
          <div class="trust-card-overlay"></div>
          <div class="trust-card-content text-center">
            <div class="trust-badge-pill">
              <span>🤝 हमारा मुख्य संकल्प</span>
            </div>
            
            <h2 class="trust-heading">आपकी बाइक, हमारी जिम्मेदारी</h2>

            <p class="trust-statement">
              “हमारा उद्देश्य सिर्फ बाइक रिपेयर करना नहीं, बल्कि ग्राहक को सही जानकारी और भरोसेमंद सेवा देना है।”
            </p>

            <div class="mechanic-sign">
              <span class="sign-name">— रोहित (मुख्य मैकेनिक)</span>
              <span class="sign-loc">रोहित बाइक सर्विस, कानपुर</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .trust-banner-section {
      padding: 60px 0;
      background: #0f131a;
    }

    .trust-card {
      position: relative;
      background: linear-gradient(135deg, #1e2638 0%, #171d2b 100%);
      border: 1px solid rgba(255, 255, 255, 0.12);
      border-radius: 28px;
      padding: 55px 30px;
      overflow: hidden;
      box-shadow: 0 20px 45px rgba(0, 0, 0, 0.5);
    }

    .trust-card-overlay {
      position: absolute;
      top: -50%;
      left: -50%;
      width: 200%;
      height: 200%;
      background: radial-gradient(circle, rgba(229, 62, 62, 0.08) 0%, transparent 60%);
      pointer-events: none;
    }

    .trust-card-content {
      position: relative;
      z-index: 2;
      max-width: 800px;
      margin: 0 auto;
    }

    .trust-badge-pill {
      display: inline-block;
      background: rgba(245, 158, 11, 0.15);
      border: 1px solid rgba(245, 158, 11, 0.3);
      color: var(--accent-color);
      padding: 6px 18px;
      border-radius: 20px;
      font-size: 0.9rem;
      font-weight: 700;
      margin-bottom: 20px;
    }

    .trust-heading {
      font-family: var(--font-heading);
      font-size: 2.8rem;
      font-weight: 800;
      color: #ffffff;
      margin-bottom: 20px;
    }

    .trust-statement {
      font-size: 1.28rem;
      color: #e2e8f0;
      line-height: 1.7;
      font-style: italic;
      margin-bottom: 30px;
      font-weight: 500;
    }

    .mechanic-sign {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 2px;
    }

    .sign-name {
      font-family: var(--font-heading);
      font-size: 1.4rem;
      color: var(--primary-color);
      font-weight: 700;
    }

    .sign-loc {
      font-size: 0.88rem;
      color: #94a3b8;
    }

    @media (max-width: 768px) {
      .trust-card {
        padding: 40px 20px;
      }
      .trust-heading {
        font-size: 2.1rem;
      }
      .trust-statement {
        font-size: 1.1rem;
      }
    }
  `]
})
export class CustomerTrustComponent {}
