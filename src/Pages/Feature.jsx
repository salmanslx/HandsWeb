import React from 'react';
import './feature.css';
import { useLanguage } from '../Components/LanguageContext'; // Import useLanguage hook

const featuresData = [
  {
    title: {
      en: 'Request Assistance',
      ar: 'طلب مساعدة'
    },
    description: {
      en: 'Users can post requests for various types of help, such as running errands, household tasks, transportation, and more. Requests are visible to nearby users who can respond and offer their support.',
      ar: 'يمكن للمستخدمين نشر طلبات لمساعدات مختلفة، مثل القيام بالأعمال المنزلية، والنقل، والمزيد. الطلبات تكون مرئية للمستخدمين القريبين الذين يمكنهم الرد وتقديم دعمهم.'
    },
    icon: 'fas fa-hands-helping' // Font Awesome icon class
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
    icon: 'fas fa-hands' // Font Awesome icon class
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
    icon: 'fas fa-users' // Font Awesome icon class
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
    icon: 'fas fa-lock' // Font Awesome icon class
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
    icon: 'fas fa-share-alt' // Font Awesome icon class
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
    icon: 'fas fa-calendar-alt' // Font Awesome icon class
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
    icon: 'fas fa-user-circle' // Font Awesome icon class
  }
];

function Feature() {
  const { language } = useLanguage(); // Access the current language

  return (
    <div id='features' className={language === 'ar' ? 'rtl' : 'ltr'}>
      <h1 className="features-title fw-bold ">
        {language === 'en' ? 'FEATURES' : 'الميزات'}
      </h1>
      <div className="card1">
        {featuresData.map((feature, index) => (
          <div className="card" key={index}>
            <div className="circle1">
            <i className={feature.icon} style={{ fontSize: '30px', color: '#ffff' }}></i>
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
