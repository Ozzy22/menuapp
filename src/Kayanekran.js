import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';


const items  = [
  {
    src: 'https://cdn.motor1.com/images/mgl/AbQo9/s1/mercedes-amg-gt-coupe4.jpg',
    altText: '',
    caption: ''
    
  },
  {
    src: 'https://www.mercedes-benz.com.tr/passengercars/mercedes-benz-cars/models/amg-gt/4-door-coupe/design/interior/_jcr_content/highlightcontainer/image.MQ6.0.20191008161017.jpeg',
    altText: '',
    caption: ''
  },
  {
    src: 'https://www.otokokpit.com/wp-content/uploads/2018/03/2019-mercedes-benz-amg-gt63-s-8.jpg',
    altText: '',
    caption: ''
  }
];

const Example1 = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img width="100%" height="100%"  src={item.src} alt={item.altText} />
        <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
      </CarouselItem>
    );
  });

  return (
    <Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous}
    >
      <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
      {slides}
      <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
      <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
    </Carousel>
  );
}

export default Example1;
