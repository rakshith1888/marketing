

// import React, { useEffect, useState } from 'react';

// const images = [
//   'lovable-uploads/53f2f6ff-5005-4645-8b2a-27912b6007fa.png',
//   'lovable-uploads/79aa1eaf-e1bc-4cb4-8601-27f98e5733d6.png',
//   'lovable-uploads/a3aae564-5196-4ed4-8841-3948ebfd1bfe.png',
//   'lovable-uploads/df438a57-b312-4506-babc-8a4a45c0f4f3.png',
//   'lovable-uploads/df438a57-b312-4506-babc-8a4a45c0f4f3.png',
// ];

// const ZoomGallery = () => {
//   const [activeIndex, setActiveIndex] = useState(0);
//   const [hoverIndex, setHoverIndex] = useState(null);

//   useEffect(() => {
//     if (hoverIndex !== null) return; // pause auto-zoom on hover
//     const timer = setInterval(() => {
//       setActiveIndex((prev) => (prev + 1) % images.length);
//     }, 1000);
//     return () => clearInterval(timer);
//   }, [hoverIndex]);

//   return (
//     <div className="w-full h-[500px] overflow-x-auto no-scrollbar flex items-center justify-center bg-black">
//       <div className="flex gap-6 px-10 relative">
//         {images.map((img, index) => {
//           const isHovered = hoverIndex === index;
//           const isActive = hoverIndex === null && index === activeIndex;
//           const isBehind =
//             index === activeIndex - 1 ||
//             index === activeIndex + 1 ||
//             (activeIndex === 0 && index === images.length - 1) ||
//             (activeIndex === images.length - 1 && index === 0);

//           let transform = 'scale-95';
//           let z = 'z-10';
//           let opacity = 'opacity-60';
//           let translate = 'translate-y-0';

//           if (isHovered) {
//             transform = 'scale-125';
//             z = 'z-50';
//             opacity = 'opacity-100';
//             translate = '-translate-y-8';
//           } else if (isActive) {
//             transform = 'scale-110';
//             z = 'z-30';
//             opacity = 'opacity-100';
//           } else if (isBehind) {
//             transform = 'scale-100';
//             z = 'z-20';
//             opacity = 'opacity-90';
//           }

//           return (
//             <div
//               key={index}
//               className={`transition-all duration-500 ease-in-out relative rounded-xl overflow-hidden shadow-xl ${transform} ${translate} ${z} ${opacity}`}
//               style={{
//                 width: '300px',
//                 height: '200px',
//               }}
//               onMouseEnter={() => setHoverIndex(index)}
//               onMouseLeave={() => setHoverIndex(null)}
//             >
//               <img
//                 src={img}
//                 alt={`Image ${index}`}
//                 className="w-full h-full object-cover rounded-xl"
//               />
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default ZoomGallery;

