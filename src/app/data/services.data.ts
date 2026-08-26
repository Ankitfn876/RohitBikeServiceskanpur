export interface BikeServiceItem {
  id: string;
  title: string;
  description: string;
  icon: string;
  image: string;
  highlightTag?: string;
}

export const SERVICES_DATA: BikeServiceItem[] = [
  {
    id: 'general-servicing',
    title: 'बाइक सर्विसिंग',
    description: 'बाइक की सामान्य और पूरी सर्विसिंग, ताकि आपकी बाइक बेहतर चले।',
    icon: 'wrench-screwdriver',
    image: 'assets/images/bike-service.jpg',
    highlightTag: 'सबसे लोकप्रिय'
  },
  {
    id: 'engine-repair',
    title: 'इंजन रिपेयर',
    description: 'इंजन से जुड़ी समस्या की जांच और अनुभवी तरीके से मरम्मत।',
    icon: 'cog',
    image: 'assets/images/engine-repair.jpg',
    highlightTag: 'विशेषज्ञ रिपेयर'
  },
  {
    id: 'brake-service',
    title: 'ब्रेक सर्विस',
    description: 'ब्रेक की जांच, रिपेयर और आवश्यक पार्ट्स की फिटिंग।',
    icon: 'shield-check',
    image: 'assets/images/spare-parts.jpg',
    highlightTag: 'सुरक्षा सेवा'
  },
  {
    id: 'clutch-repair',
    title: 'क्लच रिपेयर',
    description: 'क्लच प्लेट और क्लच सिस्टम से जुड़ी समस्याओं की जांच एवं मरम्मत।',
    icon: 'adjustments-horizontal',
    image: 'assets/images/engine-repair.jpg'
  },
  {
    id: 'oil-change',
    title: 'ऑयल चेंज',
    description: 'इंजन ऑयल की जांच और समय पर ऑयल बदलने की सुविधा।',
    icon: 'beaker',
    image: 'assets/images/spare-parts.jpg',
    highlightTag: 'फास्ट सर्विस'
  },
  {
    id: 'electrical-work',
    title: 'इलेक्ट्रिकल काम',
    description: 'बाइक की वायरिंग, बैटरी, लाइट और अन्य इलेक्ट्रिकल समस्याओं की जांच।',
    icon: 'bolt',
    image: 'assets/images/workshop.jpg'
  },
  {
    id: 'tyre-puncture',
    title: 'टायर और पंचर',
    description: 'टायर, ट्यूब और पंचर से जुड़ी सामान्य सेवाएं।',
    icon: 'arrow-path',
    image: 'assets/images/bike-service.jpg'
  },
  {
    id: 'general-inspection',
    title: 'बाइक की सामान्य जांच',
    description: 'बाइक में आ रही समस्या की जांच करके उचित समाधान की सलाह।',
    icon: 'clipboard-document-check',
    image: 'assets/images/workshop.jpg',
    highlightTag: 'फ्री सलाह'
  }
];
