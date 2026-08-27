export interface BusinessInfo {
  name: string;
  hindiName: string;
  tagline: string;
  subTagline: string;
  ownerName: string;
  ownerRole: string;
  experienceYears: string;
  address: string;
  landmark: string;
  city: string;
  state: string;
  pincode: string;
  fullLocation: string;
  phone: string;
  formattedPhone: string;
  whatsappNumber: string;
  callUrl: string;
  whatsappUrl: string;
  googleMapsUrl: string;
  workingHours: string;
  workingDays: string;
  trustMessage: string;
  trustPoints: string[];
}

export const BUSINESS_INFO: BusinessInfo = {
  name: 'Rohit Bike Service & Spare Parts',
  hindiName: 'रोहित बाइक सर्विस & स्पेयर पार्ट्स',
  tagline: 'आपकी बाइक की हर समस्या का भरोसेमंद समाधान',
  subTagline: 'कुशल मैकेनिक • भरोसेमंद सर्विस • सही स्पेयर पार्ट्स • उचित कीमत',
  ownerName: 'रोहित',
  ownerRole: 'अनुभवी बाइक मैकेनिक एवं प्रोपराइटर',
  experienceYears: '10+',
  address: 'जीटी रोड, रामादेवी चौराहा के पास',
  landmark: 'कानपुर सेंट्रल क्षेत्र',
  city: 'कानपुर',
  state: 'उत्तर प्रदेश',
  pincode: '208007',
  fullLocation: 'कानपुर, उत्तर प्रदेश',
  phone: '+917380538033',
  formattedPhone: '+91 73805 38033',
  whatsappNumber: '917380538033',
  callUrl: 'tel:+917380538033',
  whatsappUrl: 'https://wa.me/917380538033?text=' + encodeURIComponent('नमस्ते रोहित जी! मुझे अपनी बाइक की सर्विस/रिपेयर के बारे में जानकारी चाहिए।'),
  googleMapsUrl: 'https://maps.google.com/?q=Kanpur+Uttar+Pradesh',
  workingHours: 'सुबह 9:00 बजे से रात 8:30 बजे तक',
  workingDays: 'सोमवार से रविवार (सात दिन सेवा उपलब्ध)',
  trustMessage: 'कानपुर में बाइक रिपेयर और स्पेयर पार्ट्स की भरोसेमंद दुकान',
  trustPoints: [
    'अनुभवी मैकेनिक रोहित द्वारा डायरेक्ट सर्विसिंग व रिपेयर',
    'बाइक की सही समस्या की जांच करके पारदर्शी सलाह',
    'उचित एवं वाजिब कीमत, बिना किसी छिपे शुल्क के',
    'सभी प्रमुख कंपनियों के जरूरी स्पेयर पार्ट्स उपलब्ध',
    'ग्राहक की जरूरत और संतुष्टि को सर्वोच्च प्राथमिकता'
  ]
};
