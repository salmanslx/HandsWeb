import React from 'react';
import './feature.css';
import f1 from '../Assets/f1.png';
import f2 from '../Assets/f2.png';
import f3 from '../Assets/f3.png';
import f4 from '../Assets/f4.png';
import f5 from '../Assets/f5.png';
import f6 from '../Assets/f6.png';
import f7 from '../Assets/f7.png';
import f8 from '../Assets/f8.png';
import f9 from '../Assets/f9.png';
import { useLanguage } from '../Components/LanguageContext'; // Import useLanguage hook

const featuresData = [
  // Uncomment and update these if needed
  // {
  //   title: 'Mission',
  //   description: 'To empower individuals within the UAE community by facilitating connections, fostering mutual support, and promoting a culture of kindness and collaboration through our innovative platform.',
  //   imgSrc: f1
  // },
  // {
  //   title: 'Vision ',
  //   description: 'To create thriving, interconnected communities across the UAE where every individual feels empowered to offer help, seek assistance, and contribute positively to the well-being and growth of their neighborhood.',
  //   imgSrc: f2
  // },
  {
    title: {
      en: 'Request Assistance',
      ar: 'طلب مساعدة'
    },
    description: {
      en: 'Users can post requests for various types of help, such as running errands, household tasks, transportation, and more. Requests are visible to nearby users who can respond and offer their support.',
      ar: 'يمكن للمستخدمين نشر طلبات لمساعدات مختلفة، مثل القيام بالأعمال المنزلية، والنقل، والمزيد. الطلبات تكون مرئية للمستخدمين القريبين الذين يمكنهم الرد وتقديم دعمهم.'
    },
    imgSrc: f3
  },
  {
    title: {
      en: 'Offer Help',
      ar: 'عرض المساعدة'
    },
    description: {
      en: 'Users can offer their skills, time, and resources to assist others in their community. Browse through open requests and choose opportunities that match your abilities and availability.',
      ar: 'يمكن للمستخدمين عرض مهاراتهم ووقتهم ومواردهم لمساعدة الآخرين في مجتمعهم. تصفح الطلبات المفتوحة واختر الفرص التي تتناسب مع قدراتك وتوفر وقتك.'
    },
    imgSrc: f4
  },
  {
    title: {
      en: 'Volunteer Opportunities',
      ar: 'فرص التطوع'
    },
    description: {
      en: 'Discover local volunteer events and initiatives organized by community groups and organizations. Connect with causes that matter to you and contribute to making a positive impact.',
      ar: 'اكتشف أحداث التطوع المحلية والمبادرات التي تنظمها مجموعات ومؤسسات المجتمع. تواصل مع القضايا التي تهمك وساهم في إحداث تأثير إيجابي.'
    },
    imgSrc: f5
  },
  {
    title: {
      en: 'Secure Messaging',
      ar: 'الرسائل الآمنة'
    },
    description: {
      en: "Communicate directly with other users through the app's secure messaging features. Coordinate details and arrangements for assistance and volunteering.",
      ar: 'تواصل مباشرة مع المستخدمين الآخرين من خلال ميزات الرسائل الآمنة في التطبيق. نسق التفاصيل والترتيبات للمساعدة والتطوع.'
    },
    imgSrc: f6
  },
  {
    title: {
      en: 'Resource Sharing',
      ar: 'مشاركة الموارد'
    },
    description: {
      en: "Share and borrow items like tools, books, and other household goods with your neighbors. Reduce waste and promote sustainability through community sharing.",
      ar: 'شارك واستعير عناصر مثل الأدوات والكتب والبضائع المنزلية الأخرى مع جيرانك. قلل من الفاقد وادعم الاستدامة من خلال المشاركة المجتمعية.'
    },
    imgSrc: f7
  },
  {
    title: {
      en: 'Community Events',
      ar: 'الأحداث المجتمعية'
    },
    description: {
      en: "Stay informed about local events, gatherings, and activities happening in your area. Participate in community-building events to meet new people and strengthen local ties.",
      ar: 'ابقَ على اطلاع بالأحداث المحلية والتجمعات والأنشطة التي تحدث في منطقتك. شارك في الأحداث التي تبني المجتمع لتلتقي بأناس جدد وتعزز الروابط المحلية.'
    },
    imgSrc: f8
  },
  {
    title: {
      en: 'User Profiles and Reviews',
      ar: 'ملفات المستخدمين والتقييمات'
    },
    description: {
      en: "Create a personalized profile to showcase your skills and interests. Leave and receive reviews based on interactions, building trust within the community.",
      ar: 'أنشئ ملفًا شخصيًا مخصصًا لعرض مهاراتك واهتماماتك. اترك واستقبل التقييمات بناءً على التفاعلات، لبناء الثقة ضمن المجتمع.'
    },
    imgSrc: f9
  }
];

function Feature() {
  const { language } = useLanguage(); // Access the current language

  return (
    <div id='features' className={language === 'ar' ? 'rtl' : 'ltr'}>
      <h1 className="features-title fw-bold text-white">
        {language === 'en' ? 'FEATURES' : 'الميزات'}
      </h1>
      <div className="card1">
        {featuresData.map((feature, index) => (
          <div className="card" key={index}>
            <div className="circle1">
              <img src={feature.imgSrc} alt="Icon" />
            </div>
            <h4>{language === 'en' ? feature.title.en : feature.title.ar}</h4>
            <p>{language === 'en' ? feature.description.en : feature.description.ar}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Feature;
