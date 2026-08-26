export interface SparePartCategory {
  id: string;
  name: string;
  subText: string;
  badge: string;
  icon: string;
}

export const SPARE_PARTS_DATA: SparePartCategory[] = [
  {
    id: 'brake-parts',
    name: 'ब्रेक पार्ट्स',
    subText: 'ब्रेक शू, ब्रेक पैड, ब्रेक लीवर व केबल',
    badge: 'उपलब्ध',
    icon: 'shield'
  },
  {
    id: 'clutch-parts',
    name: 'क्लच पार्ट्स',
    subText: 'असली क्लच प्लेट, सेंटर हब व असेंबली',
    badge: 'ओरिजिनल',
    icon: 'cog'
  },
  {
    id: 'cables',
    name: 'बाइक केबल',
    subText: 'एक्सीलेटर, क्लच, स्पीडोमीटर व ब्रेक केबल',
    badge: 'सभी मॉडल',
    icon: 'adjustments'
  },
  {
    id: 'spark-plug',
    name: 'स्पार्क प्लग',
    subText: 'NGK, Bosch व Bosch हाई-परफॉर्मेंस प्लग',
    badge: 'ब्रांडेड',
    icon: 'sparkles'
  },
  {
    id: 'air-filter',
    name: 'एयर फिल्टर',
    subText: 'इंजन सुरक्षा के लिए डस्ट-फ्री एयर फ़िल्टर',
    badge: 'उपलब्ध',
    icon: 'wind'
  },
  {
    id: 'oil-filter',
    name: 'ऑयल फिल्टर',
    subText: 'इंजन की लम्बी लाइफ के लिए ऑयल फ़िल्टर',
    badge: 'उपलब्ध',
    icon: 'filter'
  },
  {
    id: 'bulbs-lights',
    name: 'बल्ब और लाइट',
    subText: 'हेडलाइट LED/हैलोजन, इंडिकेटर व टेल लाइट',
    badge: 'सुपर ब्राइट',
    icon: 'lightbulb'
  },
  {
    id: 'battery',
    name: 'बैटरी',
    subText: 'Exide, Amaron बाइक बैटरी व वारंटी फिटिंग',
    badge: 'वारंटी के साथ',
    icon: 'bolt'
  },
  {
    id: 'chain-sprocket',
    name: 'चेन-स्प्रोकेट',
    subText: 'मजबूत रोलर चेन किट व स्प्रोकेट सेट',
    badge: 'हाई ड्यूरेबिलिटी',
    icon: 'link'
  },
  {
    id: 'engine-oil',
    name: 'इंजन ऑयल',
    subText: 'Castrol, Motul, Servo 4T इंजन ऑयल',
    badge: '100% असली',
    icon: 'drop'
  },
  {
    id: 'other-parts',
    name: 'अन्य जरूरी पार्ट्स',
    subText: 'साइड मिरर, हॉर्न, लॉक सेट, गास्केट आदि',
    badge: 'ऑन-डिमांड',
    icon: 'archive'
  }
];
