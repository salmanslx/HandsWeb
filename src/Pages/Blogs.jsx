import React from 'react';
import './blogs.css';
import { useState } from 'react';

function Blogs() {
  const [currentCard, setCurrentCard] = useState(0);

  const cards = [
    {
      image: 'https://images.unsplash.com/photo-1502657877623-f66bf489d236',
      title: 'How to Plan and Architect a Project?',
      content: 'Bringing a website or application from concept to completion can be a complex journey...',
      date: '2024-08-09',
      authorImage: 'https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png',
      authorName: 'Faisal',
      authorTitle: 'CTO, Co-Founder',
    },
    {
      image: 'https://images.unsplash.com/photo-1527549993586-dff825b37782',
      title: 'Another Project Planning Guide',
      content: 'Explore different methodologies to plan your projects effectively...',
      date: '2024-09-10',
      authorImage: 'https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png',
      authorName: 'Jane Doe',
      authorTitle: 'Project Manager',
    },
    {
      image: 'https://images.unsplash.com/photo-1532614338840-ab30cf10ed36',
      title: 'Tips for Successful Project Execution',
      content: 'Learn the secrets to execute your projects with precision and success...',
      date: '2024-10-11',
      authorImage: 'https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png',
      authorName: 'John Smith',
      authorTitle: 'Lead Developer',
    },
  ];

  const handleCardChange = (index) => {
    setCurrentCard(index);
  };

  return (
    <div className="blogs-container" id='blogs'>
      <h1 className="blogs-title">LATEST BLOGS</h1>
      <div className="carousel">
        <div className="cardb">
          <div className="card-leftb">
            <img src={cards[currentCard].image} alt="Card" className="card-imageb" />
          </div>
          <div className="card-rightb">
            <div className="card-share">
              <button className="share-button"><i class="fa-solid fa-share-nodes"></i></button>
            </div>
            <div className="card-contentb">
              <h2>{cards[currentCard].title}</h2>
              <p>{cards[currentCard].content}</p>
              <div className="card-footerb">
                <span>📅 {cards[currentCard].date}</span>
                <div className="author-info">
                  <img src={cards[currentCard].authorImage} alt="Author" className="author-image" />
                  <div>
                    {cards[currentCard].authorName}<br />
                    <small>{cards[currentCard].authorTitle}</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="carousel-buttons">
          {cards.map((_, index) => (
            <button
              key={index}
              className={`carousel-button ${currentCard === index ? 'active' : ''}`}
              onClick={() => handleCardChange(index)}
            >
              {currentCard === index ? '•' : '◦'}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Blogs;
