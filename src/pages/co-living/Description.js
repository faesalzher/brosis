import React, { Fragment } from "react";
import { Card, Grid, Segment } from "semantic-ui-react";
import about from "../../stores/about";
import AboutSegment from '../../components/AboutSegment';
export default
    function Description() {
    return (
            <Grid container stackable verticalAlign='middle'>
                    <AboutSegment data={about.about_location} />
            </Grid>
    )
}