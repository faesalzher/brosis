import React from "react";
import { Image } from "semantic-ui-react";

export default function ImageRounded(props) {
    return (
        <Image style={{
            objectFit: "cover",
            width: "100%",
            height: props.height ? props.height : 200,
            borderRadius: 20,
            boxShadow: props.boxShadow ? "0 2px 4px 0 rgba(34,36,38,.12),0 2px 10px 0 rgba(34,36,38,.15)" : '0px'
        }} rounded size='large' src={props.src} />
    )
}