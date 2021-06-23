import React, { useState } from "react";
import { Button, Container, Icon, Popup } from "semantic-ui-react";
import kost from '../../stores/kost';
import styles from './Maps.module.css';
// We will use these things from the lib
// https://react-google-maps-api-docs.netlify.com/
import GoogleMapReact from 'google-map-react';
import UnitCardMini from "../../components/UnitCardMini";


// const CustomDotGroup = (props) => (
//     <Container textAlign="center">
//         {/* <Button.Group size={size}> */}
//         {props.data.map((item, index) => {
//             return (
//                 <Button key={index} style={{ borderRadius: 10, margin: '5px 3px' }} secondary content={item.name}></Button>
//             );
//         })
//         }
//     </Container>
// );

export default function Maps() {
  

    return (
        // Important! Always set the container height explicitly
        <div style={{ height: '100vh', width: '100%' }}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: "AIzaSyBxGhj2Jmv1lVPB9Yu7k_j5WsuBDteP6MI" }}
                //         defaultCenter={{
                //             lat: 59.95,
                //   lng: 30.33
                //         }}
                defaultCenter={{ lat: kost[0].latitude, lng: kost[0].longitude }}
                defaultZoom={15}
                // onGoogleApiLoaded={({ map, maps }) => console.log(maps.getCenter().toJSON())}
                yesIWantToUseGoogleMapApiInternals
            >
                {kost.map((item, index) => {
                    return (

                        <Popup
                            key={index}
                            lat={item.latitude}
                            lng={item.longitude}
                            trigger={
                                <div style={{}} >
                                    <img
                                        className={styles.arrow}
                                        // onMouseEnter={() => setHover(true)}
                                        // onMouseLeave={() => setHover(false)}
                                        style={{ height: 40, marginLeft: 10 }}
                                        src={"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Google_Maps_pin.svg/1200px-Google_Maps_pin.svg.png"} alt="pin" />
                                    {/* <div className={styles.pin} /> */}
                                    {/* <div className={hover ? styles.pulse : ""} /> */}
                                </div>
                            }
                            content={
                                <div>
                                    <UnitCardMini item={item} mini={true} />
                                </div>
                            }
                            on='click'
                        // open={isOpen}
                        // onClose={handleClose}
                        // onOpen={handleOpen}
                        // position='top right'
                        />
                    );
                })
                }
            </GoogleMapReact>
        </div>
    );
}