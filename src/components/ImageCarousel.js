
import React from "react";
import { Divider, Button, Container } from "semantic-ui-react";
// import CustomDotGroup from "../components/CustomDotGroup";
import {
  CarouselProvider,
  Slide,
  Slider,
  Dot
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

const CustomDotGroup = (props) => (
  <Container textAlign="center">
    {/* <Button.Group size={size}> */}
    {props.data.map((item, index) => {
      return (
        <Button as={Dot} style={{ borderRadius: 10, margin: '5px 3px' }} key={index} icon={props.icon} secondary content={item.name} slide={index}></Button>
      );
    })
    }
    {/* {[...Array(slides).keys()].map(slide => (
      <Button as={Dot} key={slide} icon="circle" slide={slide}></Button>
    ))} */}
    {/* </Button.Group> */}
  </Container>
);

function ImageCarousel(props) {
  const { data } = props;
  return (
    <CarouselProvider
      naturalSlideWidth={100}
      naturalSlideHeight={50}
      totalSlides={data.length}
    >
      <Slider>
        {data.map((item, index) => {
          return (
            <Slide index={index} key={index} style={{
            }}>
              <Container
                style={{
                  borderRadius: 20,
                  height: 'inherit',
                  // padding: "0em",
                  backgroundImage: `url(${item.image})`,
                  backgroundSize: "cover"
                }}
              />
              {/* <Image src="https://cdn-0.idownloadblog.com/wp-content/uploads/2018/06/macOS-Mojave-Day-wallpaper.jpg" /> */}
            </Slide>
          );
        })}
      </Slider>
      <Divider />
      <CustomDotGroup slides={props.data.length} data={props.data} {...props} />
    </CarouselProvider>
  );
}

export default ImageCarousel;
