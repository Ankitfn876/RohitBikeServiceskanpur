import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BUSINESS_INFO } from '../../data/business-info.data';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="about" class="about-section">
      <div class="container">
        <div class="about-grid">
          <!-- Photo Column -->
          <div class="about-photo-col">
            <div class="about-photo-frame">
              <div class="photo-glow-border"></div>
              <img 
                src="assets/images/rohit-mechanic.jpg" 
                alt="रोहित - मुख्य मैकेनिक एवं प्रोपराइटर" 
                class="about-real-photo"
              />
              <div class="about-experience-badge">
                <span class="exp-num">10+</span>
                <span class="exp-txt">वर्षों का बाइक सर्विस अनुभव</span>
              </div>
            </div>
          </div>

          <!-- Content Column -->
          <div class="about-content-col">
            <span class="section-tag">अनुभवी मैकेनिक</span>
            <h2 class="about-title">रोहित के बारे में</h2>
            
            <p class="about-intro">
              रोहित बाइक रिपेयर और सर्विसिंग का काम करते हैं और ग्राहकों की बाइक की समस्या को समझकर सही समाधान देने पर ध्यान देते हैं। यहां बाइक सर्विसिंग के साथ-साथ जरूरी स्पेयर पार्ट्स भी उपलब्ध कराए जाते हैं।
            </p>

            <div class="trust-list">
              <div *ngFor="let point of trustPoints" class="trust-item">
                <div class="check-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span class="trust-text">{{ point }}</span>
              </div>
            </div>

            <div class="about-actions">
              <a [href]="business.callUrl" class="btn btn-call btn-lg">
                📞 रोहित मैकेनिक से बात करें
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .about-section {
      padding: 95px 0;
      background: #12161f;
      position: relative;
    }

    .about-grid {
      display: grid;
      grid-template-columns: 0.9fr 1.1fr;
      gap: 50px;
      align-items: center;
    }

    .about-photo-frame {
      position: relative;
      background: #1a202c;
      border-radius: 24px;
      padding: 8px;
      border: 1px solid rgba(255, 255, 255, 0.1);
      box-shadow: 0 20px 40px rgba(0, 0, 0, 0.5);
    }

    .photo-glow-border {
      position: absolute;
      top: -10px;
      left: -10px;
      right: -10px;
      bottom: -10px;
      background: linear-gradient(135deg, var(--primary-color), var(--accent-color));
      border-radius: 28px;
      filter: blur(15px);
      opacity: 0.35;
    }

    .about-real-photo {
      width: 100%;
      height: 480px;
      object-fit: cover;
      object-position: top center;
      border-radius: 18px;
      display: block;
      position: relative;
      z-index: 1;
    }

    .about-experience-badge {
      position: absolute;
      bottom: -20px;
      right: 20px;
      z-index: 2;
      background: linear-gradient(135deg, #e53e3e, #9b2c2c);
      color: #ffffff;
      padding: 14px 22px;
      border-radius: 20px;
      display: flex;
      flex-direction: column;
      align-items: center;
      box-shadow: 0 10px 25px rgba(229, 62, 62, 0.5);
    }

    .exp-num {
      font-family: var(--font-heading);
      font-size: 2rem;
      font-weight: 800;
      line-height: 1;
    }

    .exp-txt {
      font-size: 0.8rem;
      font-weight: 600;
    }

    .about-content-col {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
    }

    .about-title {
      font-family: var(--font-heading);
      font-size: 2.8rem;
      color: #ffffff;
      font-weight: 800;
      margin-bottom: 20px;
    }

    .about-intro {
      font-size: 1.18rem;
      color: #cbd5e1;
      line-height: 1.7;
      margin-bottom: 30px;
      background: rgba(255, 255, 255, 0.03);
      padding: 20px 24px;
      border-radius: 16px;
      border-left: 4px solid var(--primary-color);
    }

    .trust-list {
      display: flex;
      flex-direction: column;
      gap: 14px;
      margin-bottom: 35px;
      width: 100%;
    }

    .trust-item {
      display: flex;
      align-items: center;
      gap: 14px;
      background: rgba(255, 255, 255, 0.02);
      border: 1px solid rgba(255, 255, 255, 0.05);
      padding: 12px 18px;
      border-radius: 12px;
    }

    .check-icon {
      width: 28px;
      height: 28px;
      min-width: 28px;
      background: rgba(37, 211, 102, 0.2);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #25d366;
    }

    .check-icon svg {
      width: 18px;
      height: 18px;
    }

    .trust-text {
      color: #e2e8f0;
      font-weight: 600;
      font-size: 1.05rem;
    }

    @media (max-width: 992px) {
      .about-grid {
        grid-template-columns: 1fr;
        gap: 40px;
      }

      .about-real-photo {
        height: 380px;
      }
    }
  `]
})
export class AboutComponent {
  business = BUSINESS_INFO;
  trustPoints = [
    'अनुभवी मैकेनिक द्वारा प्रत्यक्ष जांच और रिपेयर',
    'सही समस्या की जांच',
    'उचित कीमत पर गुणवत्तापूर्ण काम',
    'जरूरी स्पेयर पार्ट्स की तुरंत उपलब्धता',
    'ग्राहक की जरूरत के अनुसार सही सलाह'
  ];
}
