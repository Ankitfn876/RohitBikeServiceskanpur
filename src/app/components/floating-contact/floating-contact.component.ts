import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BUSINESS_INFO } from '../../data/business-info.data';

@Component({
  selector: 'app-floating-contact',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="floating-bar">
      <a [href]="business.callUrl" class="floating-btn float-call">
        <span class="btn-icon">📞</span>
        <span>अभी कॉल करें</span>
      </a>
      <a [href]="business.whatsappUrl" target="_blank" rel="noopener noreferrer" class="floating-btn float-wa">
        <span class="btn-icon">💬</span>
        <span>WhatsApp</span>
      </a>
    </div>
  `,
  styles: [`
    .floating-bar {
      display: none;
      position: fixed;
      bottom: 12px;
      left: 12px;
      right: 12px;
      z-index: 9999;
      gap: 10px;
    }

    .floating-btn {
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
      padding: 12px;
      border-radius: 30px;
      color: #ffffff;
      font-weight: 700;
      font-size: 1rem;
      text-decoration: none;
      box-shadow: 0 8px 24px rgba(0, 0, 0, 0.6);
      backdrop-filter: blur(8px);
    }

    .float-call {
      background: linear-gradient(135deg, #e53e3e, #b91c1c);
    }

    .float-wa {
      background: linear-gradient(135deg, #25d366, #16a34a);
    }

    @media (max-width: 768px) {
      .floating-bar {
        display: flex;
      }
    }
  `]
})
export class FloatingContactComponent {
  business = BUSINESS_INFO;
}
