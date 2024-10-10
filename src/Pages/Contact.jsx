import React from 'react';
import './contact.css';
import cnct from '../Assets/contact.png';
import { useLanguage } from '../Components/LanguageContext'; // Import the language context

export default function App() {
  const { language } = useLanguage(); // Access the current language

  return (
    <div className='contact d-flex justify-content-center align-items-center mt-5 mb-5' id='contact'>
      <div className="contact3 py-5">
        <div className="row no-gutters">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="card-shadow mt-5">
                  <img
                    src={cnct}
                    className="img-fluid rounded w-75"
                    alt={language === 'en' ? "Contact" : "اتصال"} // Alt text in the current language
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="contact-box ml-3">
                  <h1 className="font-weight-dark text-light mt-2">
                    {language === 'en' ? 'Get In Touch' : 'اتصل بنا'}
                  </h1>
                  <form className="mt-4">
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="form-group mt-2">
                          
                          <input
                            className="form-control"
                            type="text"
                            id="name"
                            placeholder={language === 'en' ? "Name" : "اسم"}
                          />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="form-group mt-2">
                          
                          <input
                            className="form-control"
                            type="email"
                            id="email"
                            placeholder={language === 'en' ? "Email Address" : "عنوان البريد الإلكتروني"}
                          />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="form-group mt-2">
                          
                          <input
                            className="form-control"
                            type="text"
                            id="phone"
                            placeholder={language === 'en' ? "Phone" : "هاتف"}
                          />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="form-group mt-2">
                          
                          <textarea
                            className="form-control"
                            id="message"
                            rows={3}
                            placeholder={language === 'en' ? "Message" : "رسالة"}
                          />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <button
                          type="submit"
                          className="btn1"
                        >
                          <span>
                            {language === 'en' ? 'SUBMIT' : 'إرسال'}
                          </span>
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
