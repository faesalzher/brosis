import React from "react";
import { Image } from "semantic-ui-react";

export default function ImageRounded(props) {
    return (
        <Image style={{
            objectFit: "cover",
            width: "100%",
            height: props.height ? props.height : 200,
            borderRadius: 20,
            boxShadow: props.boxShadow ? "1px 1px 1px gray" : '0px'
        }} bordered rounded size='large' src={props.src} />
    )
}