

import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
// import "./TopCrousal.css"
class DemoCarousel extends Component {
    
    render() {
        return (
            <div >
            <Carousel>
                <div>
                    <img src="https://cdn.shopify.com/s/files/1/0449/5225/6667/files/mango_bannerArtboard_1.jpg?v=1648103694" alt="img-1" />
                </div>
                <div>
                    <img src="https://cdn.shopify.com/s/files/1/0449/5225/6667/files/desktop_img.jpg?v=1646218677" alt="img-1" />
                </div>
                <div>
                    <img src="https://cdn.shopify.com/s/files/1/0449/5225/6667/files/desktop_img_040a98cf-db3f-444d-8bec-b0e4e7788605.jpg?v=1646219195" alt="img-1" />
                </div>
                <div>
                    <img src="https://cdn.shopify.com/s/files/1/0449/5225/6667/files/desktop_img_71d78df9-5f49-4e85-9de5-9e0cbc13a8a5.jpg?v=1646219505" alt="img-1" />
                </div>
                <div>
                    <img src="https://cdn.shopify.com/s/files/1/0449/5225/6667/files/desktop_img.jpg?v=1646218677" alt="img-1" /> 
                </div>
               
            </Carousel>
            </div>
        );
    }
};




export default DemoCarousel