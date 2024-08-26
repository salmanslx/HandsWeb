import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const data = [
  {
    src: 'https://images.unsplash.com/photo-1502657877623-f66bf489d236',
    title: 'Night view',
    description: '4.21M views',
  },
  {
    src: 'https://images.unsplash.com/photo-1527549993586-dff825b37782',
    title: 'Lake view',
    description: '4.74M views',
  },
  {
    src: 'https://images.unsplash.com/photo-1532614338840-ab30cf10ed36',
    title: 'Mountain view',
    description: '3.98M views',
  },{
    src: 'https://images.unsplash.com/photo-1502657877623-f66bf489d236',
    title: 'Night view',
    description: '4.21M views',
  },
  {
    src: 'https://images.unsplash.com/photo-1527549993586-dff825b37782',
    title: 'Lake view',
    description: '4.74M views',
  },
  {
    src: 'https://images.unsplash.com/photo-1532614338840-ab30cf10ed36',
    title: 'Mountain view',
    description: '3.98M views',
  }
];

export default function TwoColumnCarousel() {
  return (
    <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner p-5">
        {data.map((item, index) => (
          <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={item.title}>
            <div className="container d-flex justify-content-center">
              <div className="row mb-4">
                <div className={`col-md-6 ${index % 2 === 0 ? '' : 'order-md-2'}`}>
                  <img
                    src={item.src}
                    className="img-fluid"
                    alt={item.title}
                    style={{ maxHeight: '400px', objectFit: 'cover', width: '100%' }}
                  />
                </div>
                <div className="col-md-6 d-flex flex-column justify-content-center">
                  <h5>{item.title}</h5>
                  <p>{item.description}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}
