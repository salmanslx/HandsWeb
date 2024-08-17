import React from 'react';
import TermsModal from '../Modals/TermsModals';
import PrivacyModal from '../Modals/Privacy';
import UseModals from '../Modals/UseModals';
import Faqmodals from '../Modals/Faqmodals';

function Modals({ show, handleClose, modalType }) {
  const renderModal = () => {
    switch (modalType) {
      case 'terms':
        return <TermsModal show={show} handleClose={handleClose} />;
      case 'privacy':
        return <PrivacyModal show={show} handleClose={handleClose} />;
      case 'howToUse':
        return <UseModals show={show} handleClose={handleClose} />;
        case 'faq':
            return <Faqmodals show={show} handleClose={handleClose} />;
      default:
        return null;
    }
  };

  return renderModal();
}

export default Modals;
