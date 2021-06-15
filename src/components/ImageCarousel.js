import {
  CarouselProvider,
  Slide,
  Slider,
  Dot
} from "pure-react-carousel";
import React from "react";
import { Divider, Button, Container } from "semantic-ui-react";

// import CustomDotGroup from "../components/CustomDotGroup";

const CustomDotGroup = (props) => (
  <Container textAlign="center">
    {/* <Button.Group size={size}> */}
    {props.data.map((item, index) => {
      return (
        <Button as={Dot} style={{ borderRadius: 10 }} key={index} icon={props.icon} secondary content={item.name} slide={index}></Button>
      );
    })
    }
    {/* {[...Array(slides).keys()].map(slide => (
      <Button as={Dot} key={slide} icon="circle" slide={slide}></Button>
    ))} */}
    {/* </Button.Group> */}
  </Container>
);

const ImageCarousel = (props) => (
  <CarouselProvider
    naturalSlideWidth={100}
    naturalSlideHeight={50}
    totalSlides={props.data.length}
  >
    {console.log(props.data)}
    <Slider>
      {props.data.map((item, index) => {
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
            {/* <Image src="https://cdn.statically.io/img/9to5mac.com/2018/06/05/macos-mojave-wallpapers-download/mojave-day/" /> */}
          </Slide>
        );
      })}
    </Slider>
    <Divider />
    <CustomDotGroup slides={props.data.length} data={props.data} {...props}/>
  </CarouselProvider>
);

export default ImageCarousel;
