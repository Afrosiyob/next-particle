import React, { Component } from 'react';
import $ from 'jquery';
import './nextstyle.scss';
import { MDBCarousel, MDBCarouselCaption, MDBCarouselInner, MDBCarouselItem, MDBView, MDBMask, MDBContainer } from
"mdbreact";


export default class nextparticle extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
    
        }
    }


    
    
    

    componentDidMount(){
    

      $(document).ready(function(){
        
      });

    }
    

    render() {

        
      
        return (
            <div className="slider">
                  <MDBContainer>
                  <MDBCarousel
                  activeItem={1}
                  length={5}
                  showControls={true}
                  showIndicators={true}
                  className="z-depth-1"
                >
                  <MDBCarouselInner>
                    <MDBCarouselItem itemId="1">
                      <MDBView>
                        <img
                          className="d-block w-100"
                          src="https://mdbootstrap.com/img/Photos/Slides/img%20(68).jpg"
                          alt="First slide"
                        />
                      <MDBMask overlay="black-light" />
                      </MDBView>
                      <MDBCarouselCaption>
                        <h3 className="h3-responsive">Light mask</h3>
                        <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem vel dolor at, consequatur, voluptate labore nostrum iure error totam harum voluptas debitis cum aspernatur accusantium similique nulla eos, veritatis aut. </p>
                      </MDBCarouselCaption>
                    </MDBCarouselItem>
                    <MDBCarouselItem itemId="2">
                      <MDBView>
                        <img
                          className="d-block w-100"
                          src="https://mdbootstrap.com/img/Photos/Slides/img%20(6).jpg"
                          alt="Second slide"
                        />
                      <MDBMask overlay="black-strong" />
                      </MDBView>
                      <MDBCarouselCaption>
                        <h3 className="h3-responsive">Strong mask</h3>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt nobis neque quidem debitis. Accusantium maxime beatae tenetur architecto eaque explicabo ab aliquid. Natus corrupti earum quo amet sequi nihil eligendi.</p>
                      </MDBCarouselCaption>
                    </MDBCarouselItem>
                    <MDBCarouselItem itemId="3">
                      <MDBView>
                        <img
                          className="d-block w-100"
                          src="https://mdbootstrap.com/img/Photos/Slides/img%20(9).jpg"
                          alt="Third slide"
                        />
                      <MDBMask overlay="black-slight" />
                      </MDBView>
                      <MDBCarouselCaption>
                        <h3 className="h3-responsive">Slight Mast</h3>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita pariatur iure aperiam natus, id molestiae, ad facere ipsa, dolorum est nihil cumque nisi atque veniam inventore animi! Itaque, voluptate. Eveniet.</p>
                      </MDBCarouselCaption>
                    </MDBCarouselItem>
                    <MDBCarouselItem itemId="4">
                      <MDBView>
                        <img
                          className="d-block w-100"
                          src="https://mdbootstrap.com/img/Photos/Slides/img%20(9).jpg"
                          alt="Third slide"
                        />
                      <MDBMask overlay="black-slight" />
                      </MDBView>
                      <MDBCarouselCaption>
                        <h3 className="h3-responsive">Slight Mast</h3>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic inventore ea, reiciendis cupiditate assumenda dolorum distinctio recusandae aliquam obcaecati ipsa aut eligendi! Enim aut, soluta vel officiis animi at repellat.</p>
                      </MDBCarouselCaption>
                    </MDBCarouselItem>
                    <MDBCarouselItem itemId="5">
                      <MDBView>
                        <img
                          className="d-block w-100"
                          src="https://mdbootstrap.com/img/Photos/Slides/img%20(9).jpg"
                          alt="Third slide"
                        />
                      <MDBMask overlay="black-slight" />
                      </MDBView>
                      <MDBCarouselCaption>
                        <h3 className="h3-responsive">Slight Mast</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint exercitationem accusamus quisquam totam illum, eaque cupiditate dolore, perferendis tempora ipsam nisi consequatur numquam ullam similique nesciunt ad omnis. Architecto, repellat.</p>
                      </MDBCarouselCaption>
                    </MDBCarouselItem>
                  </MDBCarouselInner>
                </MDBCarousel>
                </MDBContainer>

               
                
            </div>
            
        )
    }
}
