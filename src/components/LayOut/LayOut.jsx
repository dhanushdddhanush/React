import React from "react";
import { Carousel, Container } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

const images = [
  "https://www.fnp.com/assets/images/custom/new-home-2025/hero-banners/Bkirthday_Desk_copy_02-04-2025.jpg",
  "https://www.fnp.com/assets/images/custom/new-home-2025/hero-banners/Navratri_Desk-bnr-29-03.jpg",
  "https://www.fnp.com/assets/images/custom/new-home-2025/hero-banners/Hatke-i_Homepage-Banner_NEW-UI-25-03-2025.jpg",
  "https://www.fnp.com/assets/images/custom/new-home-2025/hero-banners/Luxe_HomepageBanner_Desk_140125.jpg",
  "https://www.fnp.com/assets/images/custom/new-home-2025/hero-banners/Plants_Homepage_Banner_Desk_07-03-2025.jpg",
  "https://www.fnp.com/assets/images/custom/new-home-2025/hero-banners/Flowers_Homepage_Banner_Desk_07-03-2025.jpg",
  "https://www.fnp.com/assets/images/custom/new-home-2025/hero-banners/Back_to_school_Desk_02-04-25.jpg",
  "https://www.fnp.com/assets/images/custom/new-home-2025/hero-banners/Bkirthday_Desk_copy_02-04-2025.jpg"
];


const chunkArray = (arr, size) => {
  return arr.reduce((acc, _, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), []);
};

const LayOut = () => {
  const groupedImages = chunkArray(images, 3); 

  return (
    <Container className="mt-4 overflow-hidden">
      <Carousel indicators={false} interval={3000}>
        {groupedImages.map((group, index) => (
          <Carousel.Item key={index}>
            <div className="d-flex align-items-center" style={{ overflow: "hidden", gap: "15px" }}>
              {group.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt={`Slide ${i}`}
                  className="rounded shadow-sm"
                  style={{
                    width: i < 2 ? "45%" : "10%", 
                    height: "270px",
                    objectFit: "cover",
                    marginRight: i < 2 ? "15px" : "0" 
                  }}
                />
              ))}
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </Container>
  );
};

export default LayOut;
