import React, { Component } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators
} from 'reactstrap';
import Layout from '../components/layout';
import image_0 from '../images/gallery/dojo.jpg';
import image_1 from '../images/gallery/kids-training.jpg';
import image_2 from '../images/gallery/kids-training-2.jpg';
import image_3 from '../images/gallery/kids-training-3.jpg';
import image_4 from '../images/gallery/simon.jpg';
import image_5 from '../images/gallery/chicken-soup.jpg';
import image_6 from '../images/gallery/training.jpg';
import image_7 from '../images/gallery/training-2.jpg';
import image_8 from '../images/gallery/training-3.jpg';
import image_9 from '../images/gallery/training-4.jpg';
import image_10 from '../images/gallery/dojo-1.jpg';

const images = [
  image_0,
  image_1,
  image_2,
  image_3,
  image_4,
  image_5,
  image_6,
  image_7,
  image_8,
  image_9,
  image_10
];

class Gallery extends Component {
  constructor(props) {
    super(props);
    this.state = { activeIndex: 0 };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
  }

  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === images.length - 1 ? 0 : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === 0 ? images.length - 1 : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }

  render() {
    const { activeIndex } = this.state;

    const slides = images.map((image, i) => {
      return (
        <CarouselItem
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={`${image}-${i}`}
        >
          <div className="image" style={{ backgroundImage: `url(${image})` }} />
        </CarouselItem>
      )
    });

    return (
      <Layout>
        <Carousel
          activeIndex={activeIndex}
          next={this.next}
          previous={this.previous}
        >
          <CarouselIndicators items={images} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
          {slides}
          <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
          <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
        </Carousel>
      </Layout>
    )
  }
}

export default Gallery;
