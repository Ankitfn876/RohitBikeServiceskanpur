import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-why-choose-us',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="why-choose-us" class="why-section">
      <div class="container">
        <div class="section-header text-center">
          <span class="section-tag">हमारी खासियत</span>
          <h2 class="section-title">हमें क्यों चुनें?</h2>
          <p class="section-subtitle">
            कानपुर के लोकल बाइक मालिक Rohit Bike Service पर ही क्यों भरोसा करते हैं?
          </p>
        </div>

        <div class="features-grid">
          <div *ngFor="let item of features" class="feature-card">
            <div class="feature-icon-wrap">
              <span class="feature-emoji">{{ item.emoji }}</span>
            </div>
            <h3 class="feature-title">{{ item.title }}</h3>
            <p class="feature-desc">{{ item.desc }}</p>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .why-section {
      padding: 90px 0;
      background: #0d1117;
    }

    .features-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
      gap: 28px;
      margin-top: 50px;
    }

    .feature-card {
      background: linear-gradient(145deg, #161c26 0%, #111620 100%);
      border: 1px solid rgba(255, 255, 255, 0.07);
      border-radius: 20px;
      padding: 32px 26px;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      transition: all 0.3s ease;
      position: relative;
      overflow: hidden;
    }

    .feature-card::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 4px;
      height: 100%;
      background: linear-gradient(to bottom, var(--primary-color), var(--accent-color));
      opacity: 0;
      transition: opacity 0.3s ease;
    }

    .feature-card:hover {
      transform: translateY(-6px);
      box-shadow: 0 15px 35px rgba(0, 0, 0, 0.5);
      border-color: rgba(229, 62, 62, 0.3);
    }

    .feature-card:hover::before {
      opacity: 1;
    }

    .feature-icon-wrap {
      width: 56px;
      height: 56px;
      background: rgba(229, 62, 62, 0.12);
      border: 1px solid rgba(229, 62, 62, 0.25);
      border-radius: 16px;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 20px;
    }

    .feature-emoji {
      font-size: 1.8rem;
    }

    .feature-title {
      font-family: var(--font-heading);
      font-size: 1.5rem;
      font-weight: 700;
      color: #ffffff;
      margin-bottom: 10px;
    }

    .feature-desc {
      color: #94a3b8;
      font-size: 0.98rem;
      line-height: 1.6;
    }
  `]
})
export class WhyChooseUsComponent {
  features = [
    {
      emoji: '🛡️',
      title: 'भरोसेमंद काम',
      desc: 'आपकी बाइक की सुरक्षा और परफॉर्मेंस के साथ कोई समझौता नहीं। हर रिपेयरिंग पूरे ध्यान और ईमानदारी से की जाती है।'
    },
    {
      emoji: '💰',
      title: 'उचित कीमत',
      desc: 'बाजार के मुकाबले उचित और वाजिब रेट। बिना किसी छिपे शुल्क के पारदर्शी बिलिंग।'
    },
    {
      emoji: '👨‍🔧',
      title: 'अनुभवी मैकेनिक',
      desc: 'रोहित मैकेनिक को 10 से अधिक वर्षों का अनुभव है, जिससे बाइक की कठिन से कठिन समस्या चुटकियों में सुलझ जाती है।'
    },
    {
      emoji: '⚙️',
      title: 'स्पेयर पार्ट्स की सुविधा',
      desc: 'सर्विसिंग के दौरान लगने वाले सभी जरूरी असली पार्ट्स एक ही छत के नीचे तुरंत मिल जाते हैं।'
    },
    {
      emoji: '💡',
      title: 'ग्राहक की समस्या समझकर समाधान',
      desc: 'अनावश्यक खर्चा कराए बिना केवल वही रिपेयर की सलाह दी जाती है जो बाइक के लिए बेहद जरूरी हो।'
    },
    {
      emoji: '📍',
      title: 'स्थानीय और आसान सेवा',
      desc: 'कानपुर के स्थानीय ग्राहकों के लिए आसानी से पहुंचने योग्य वर्कशॉप और तुरंत कॉल/व्हाट्सएप सहायता।'
    }
  ];
}
