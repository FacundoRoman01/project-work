// // import { useState, useEffect } from 'react';
// import '../style/heroCarousel.css';

// function HeroCarousel(title, description) {
// //   const [carouselItems, setCarouselItems] = useState([]);
// //   const [currentIndex, setCurrentIndex] = useState(0);

// //   useEffect(() => {
// //     const storedCarouselItems = JSON.parse(localStorage.getItem('carouselItems')) || [];
// //     setCarouselItems(storedCarouselItems);
// //   }, []);

// //   const nextSlide = () => {
// //     setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselItems.length);
// //   };

// //   const prevSlide = () => {
// //     setCurrentIndex((prevIndex) =>
// //       prevIndex === 0 ? carouselItems.length - 1 : prevIndex - 1
// //     );
// //   };

// //   if (carouselItems.length === 0) {
// //     return <div>No hay elementos en el carrusel.</div>;
// //   }

//   return (
//     <section className="hero">
//       <div className="carousel-inner">
//       <div className="hero-content">
//               <h2>{title}</h2>
//               <p>{description}</p>
//               <a href="#" className="btn">Conocé más</a>
//             </div>
//         {/* {carouselItems.map((item, index) => (
//           <div
//             key={item.id}
//             className={`carousel-item ${index === currentIndex ? 'active' : ''}`}
//             style={{ backgroundImage: `url(${item.imageUrl})` }}
//           >
//             <div className="hero-content">
//               <h2>{item.title}</h2>
//               <p>{item.description}</p>
//               <a href="#" className="btn">Conocé más</a>
//             </div>
//           </div>
//         ))} */}
//       </div>
//       {/* <a className="prev" onClick={prevSlide}>&#10094;</a>
//       <a className="next" onClick={nextSlide}>&#10095;</a> */}
//     </section>
//   );
// }

// export default HeroCarousel;