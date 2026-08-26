import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-how-it-works',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="how-it-works" class="how-section">
      <div class="container">
        <div class="section-header text-center">
          <span class="section-tag">आसान प्रक्रिया</span>
          <h2 class="section-title">सर्विस प्रक्रिया</h2>
          <p class="section-subtitle">
            आपकी बाइक को ठीक करने के 3 आसान कदम
          </p>
        </div>

        <div class="steps-grid">
          <div *ngFor="let step of steps; let i = index" class="step-card">
            <div class="step-num-badge">0{{ i + 1 }}</div>
            <div class="step-icon">{{ step.icon }}</div>
            <h3 class="step-title">{{ step.title }}</h3>
            <p class="step-desc">{{ step.desc }}</p>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .how-section {
      padding: 90px 0;
      background: #12161f;
      position: relative;
    }

    .steps-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 30px;
      margin-top: 50px;
      position: relative;
    }

    .step-card {
      background: #181e29;
      border: 1px solid rgba(255, 255, 255, 0.08);
      border-radius: 20px;
      padding: 36px 28px;
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      position: relative;
      transition: transform 0.3s ease;
    }

    .step-card:hover {
      transform: translateY(-8px);
      border-color: var(--accent-color);
    }

    .step-num-badge {
      position: absolute;
      top: -18px;
      background: linear-gradient(135deg, var(--accent-color), #d97706);
      color: #12161f;
      font-family: var(--font-heading);
      font-size: 1.2rem;
      font-weight: 800;
      padding: 4px 14px;
      border-radius: 20px;
      box-shadow: 0 4px 12px rgba(245, 158, 11, 0.4);
    }

    .step-icon {
      font-size: 2.8rem;
      margin-bottom: 16px;
      margin-top: 10px;
    }

    .step-title {
      font-family: var(--font-heading);
      font-size: 1.6rem;
      font-weight: 700;
      color: #ffffff;
      margin-bottom: 12px;
    }

    .step-desc {
      color: #94a3b8;
      font-size: 0.98rem;
      line-height: 1.6;
    }

    @media (max-width: 992px) {
      .steps-grid {
        grid-template-columns: 1fr;
        gap: 40px;
      }
    }
  `]
})
export class HowItWorksComponent {
  steps = [
    {
      icon: '🛵',
      title: 'बाइक लेकर आएं',
      desc: 'कानपुर स्थित हमारे वर्कशॉप पर अपनी बाइक लाएं या आने से पहले फोन / व्हाट्सएप करके समय तय करें।'
    },
    {
      icon: '🔍',
      title: 'समस्या की जांच',
      desc: 'रोहित मैकेनिक स्वयं बाइक चलाकर और इंजन/पार्ट्स की बारीकी से जांच करके सही खराबी का पता लगाते हैं।'
    },
    {
      icon: '🔧',
      title: 'सही रिपेयर और सर्विस',
      desc: 'जरूरी असली स्पेयर पार्ट्स और गुणवत्तापूर्ण सर्विसिंग के साथ आपकी बाइक को नया जैसा बनाकर हैंडओवर करते हैं।'
    }
  ];
}
