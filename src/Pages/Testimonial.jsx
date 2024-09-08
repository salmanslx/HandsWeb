import React from "react";
import { MDBCol, MDBContainer, MDBIcon, MDBRow, MDBTypography } from "mdb-react-ui-kit";
import './testimonial.css';
import { useLanguage } from '../Components/LanguageContext'; // Import the language context

export default function App() {
  const { language } = useLanguage(); // Access the current language

  return (
    <MDBContainer className="py-5" id="testimonial" dir={language === 'ar' ? 'rtl' : 'ltr'}>
      <MDBRow className="d-flex justify-content-center align-items-center">
        <MDBCol md="10" xl="8" className="text-center">
          <h2 className="mb-5 fw-bold">
            {language === 'en' ? 'TESTIMONIALS' : 'الشهادات'}
          </h2>
        </MDBCol>
      </MDBRow>
      <MDBRow className="text-center d-flex justify-content-center align-items-center">
        <MDBCol md="4" className="mb-5">
          <div className="testimonial ">
            <div className="d-flex  justify-content-center mb-4 mt-2">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp"
                className="rounded-circle shadow-1-strong"
                width="150"
                height="150"
                alt="Maria Smantha"
              />
            </div>
            <h5 className="mb-3">
              {language === 'en' ? 'Maria Smantha' : 'ماريا سماثا'}
            </h5>
            <h6 className="text-primary mb-3">
              {language === 'en' ? 'Web Developer' : 'مطورة ويب'}
            </h6>
            <p className="px-xl-3">
              <MDBIcon fas icon="quote-left" className="pe-2" />
              {language === 'en'
                ? 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eos id officiis hic tenetur quae quaerat ad velit ab hic tenetur.'
                : 'لوريم إيبسوم دولور سيت أميت، كونسيكتيتور أديبيسيكينغ إليت. كود إيوس إيد أوفيكيس هيك تينيتور كوي كوارت أد فيليت أب هيك تينيتور.'
              }
            </p>
            <MDBTypography listUnStyled className="d-flex justify-content-center mb-0">
              <li><MDBIcon fas icon="star" size="sm" className="text-warning" /></li>
              <li><MDBIcon fas icon="star" size="sm" className="text-warning" /></li>
              <li><MDBIcon fas icon="star" size="sm" className="text-warning" /></li>
              <li><MDBIcon fas icon="star" size="sm" className="text-warning" /></li>
              <li><MDBIcon fas icon="star-half-alt" size="sm" className="text-warning" /></li>
            </MDBTypography>
          </div>
        </MDBCol>

        <MDBCol md="4" className="mb-5">
          <div className="testimonial">
            <div className="d-flex justify-content-center mb-4 mt-2">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(2).webp"
                className="rounded-circle shadow-1-strong"
                width="150"
                height="150"
                alt="Lisa Cudrow"
              />
            </div>
            <h5 className="mb-3">
              {language === 'en' ? 'Lisa Cudrow' : 'ليزا كودرو'}
            </h5>
            <h6 className="text-primary mb-3">
              {language === 'en' ? 'Graphic Designer' : 'مصممة جرافيك'}
            </h6>
            <p className="px-xl-3">
              <MDBIcon fas icon="quote-left" className="pe-2" />
              {language === 'en'
                ? 'Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid commodi.'
                : 'أوت إينيم أد مينيمال فينيام، كويز نوستروم إكسرسيسيتاسيونيم ألام كوربوري سوسيبتيت لابوريوسام، نيسي أوت أليكويد كومودي.'
              }
            </p>
            <MDBTypography listUnStyled className="d-flex justify-content-center mb-0">
              <li><MDBIcon fas icon="star" size="sm" className="text-warning" /></li>
              <li><MDBIcon fas icon="star" size="sm" className="text-warning" /></li>
              <li><MDBIcon fas icon="star" size="sm" className="text-warning" /></li>
              <li><MDBIcon fas icon="star" size="sm" className="text-warning" /></li>
              <li><MDBIcon fas icon="star" size="sm" className="text-warning" /></li>
            </MDBTypography>
          </div>
        </MDBCol>

        <MDBCol md="4" className="mb-5">
          <div className="testimonial">
            <div className="d-flex justify-content-center mb-4 mt-2">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(9).webp"
                className="rounded-circle shadow-1-strong"
                width="150"
                height="150"
                alt="John Smith"
              />
            </div>
            <h5 className="mb-3">
              {language === 'en' ? 'John Smith' : 'جون سميث'}
            </h5>
            <h6 className="text-primary mb-3">
              {language === 'en' ? 'Marketing Specialist' : 'أخصائي تسويق'}
            </h6>
            <p className="px-xl-3">
              <MDBIcon fas icon="quote-left" className="pe-2" />
              {language === 'en'
                ? 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti.'
                : 'أت فيرو إيوس إت أكوساموس إت ايستو أوديو ديجنيزيموس دوكيموس كوي بلانديسييس بريسنتيوم فولبتاتوم ديلينتي أتكيو كوربتي.'
              }
            </p>
            <MDBTypography listUnStyled className="d-flex justify-content-center mb-0">
              <li><MDBIcon fas icon="star" size="sm" className="text-warning" /></li>
              <li><MDBIcon fas icon="star" size="sm" className="text-warning" /></li>
              <li><MDBIcon fas icon="star" size="sm" className="text-warning" /></li>
              <li><MDBIcon fas icon="star" size="sm" className="text-warning" /></li>
              <li><MDBIcon far icon="star" size="sm" className="text-warning" /></li>
            </MDBTypography>
          </div>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}
