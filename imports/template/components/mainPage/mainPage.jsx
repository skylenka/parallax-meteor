import React, {Component} from 'react';
import './mainPage.scss';
import Form from '/imports/template/components/layout/form/form.jsx';
import Gallery from '/imports/template/components/layout/myGallery/myGallery.jsx';
import SimpleMap from '/imports/template/components/layout/myMap/myMap.jsx';

class MainPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            year : ''
        };

        this.state.year = new Date().getFullYear();
    }


    componentDidMount() {
        const elems = document.querySelectorAll('.parallax');
        for(let i=0; i<elems.length; i++) {
            window.M.Parallax.init(elems[i])
        }

        var elem = document.querySelectorAll('.scrollspy');
        for (let i = 0; i < elem.length; i++) {
            window.M.ScrollSpy.init(elem[i])
        }
        
    }


    render() {
        return (
            <div id='mainPage' className="section scrollspy">
                <div id="index-banner" className="parallax-container">
                    <div className="section no-pad-bot">
                        <div className="container">
                            <br /><br />
                            <h1 className="header center teal-text text-lighten-2">create your space</h1>
                            <div className="row center">
                                <h5 className="header col s12 light">how to get noticed in a world full of distractions?</h5>
                            </div>
                            <div className="row center">
                                <a href="#" id="download-button" className="btn-large waves-effect waves-light btn"><i className="material-icons left">airplanemode_active
                                </i>Fly</a>
                            </div>
                            <br /><br />

                        </div>
                    </div>
                    <div className="parallax"><img src="https://skylenka.github.io/parallax/background1.jpg" alt="Unsplashed background img 1" /></div>
                </div>


                <div className="container">
                    <div id="work" className="section scrollspy">

                        {/* <!--   Icon Section   --> */}
                        <div className="row">
                            <div className="col s12 m4">
                                <div className="icon-block">
                                    <h2 className="center brown-text"><i className="material-icons">monochrome_photos</i></h2>
                                    <h5 className="center">Photography</h5>

                                    <p className="light">I capture your special moments when and where ever you want.
                                        I make your products, events of personal lifestyle moments look good. Specialized on extreme sports.</p>
                                </div>
                            </div>

                            <div className="col s12 m4">
                                <div className="icon-block">
                                    <h2 className="center brown-text"><i className="material-icons">switch_video</i></h2>
                                    <h5 className="center">Videography</h5>

                                    <p className="light">I make your story come alive from beginning to an end, or just help you as a camera operator.
                                        I provide everything from aerial footage to high quality steadycam material with my own gear.
                                    </p>
                                </div>
                            </div>

                            <div className="col s12 m4">
                                <div className="icon-block">
                                    <h2 className="center brown-text"><i className="material-icons">developer_mode</i></h2>
                                    <h5 className="center">Programming</h5>

                                    <p className="light">I am an aspiring programmer. Just want to make world a better place.</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>


                <div className="parallax-container valign-wrapper">
                    <div className="section no-pad-bot">
                        <div className="container">
                            <div className="row center">
                                <h5 className="header col s12 light">plenty of sky around me</h5>
                            </div>
                        </div>
                    </div>
                    <div className="parallax"><img src="https://skylenka.github.io/parallax/background2.jpg" alt="Unsplashed background img 2" /></div>
                </div>

                <div className="container">
                    <div id="gallery" className="section scrollspy margin-space">

                        <div className="row">
                            <div className="col s12 center">
                                <h4>Gallery</h4>
                                <Gallery />
                                
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div id="about" className="section scrollspy margin-space">

                        <div className="row">
                            <div className="col s12 center">
                                <h3><i className="mdi-content-send brown-text"></i></h3>
                                <h4>Contact Me</h4>
                                <p className="left-align light">Who is Magdalena Olszewska? Photographer, videographer, tunnelflyer, skydiver, AFF Instructor & Coach. Aspiring Programmer! Send email: magdalena.monika.olszewska@gmail.com Or call: +48696480497 Or CONTACT below.</p>


                                <Form />
                            </div>
                        </div>
                        <div id="map" className="margin-space">
                            <div className="row">
                                <div className="col s12 center">
                                    <h4>Where to find Me?</h4>
                                    <p className="left-align light">My company address:</p>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <SimpleMap />
            

                
                <footer className="page-footer teal brown">
                    <div className="container">
                        <div className="row">
                            <div className="col l6 s12">
                                <h5 className="white-text">My Biography</h5>
                                <p className="grey-text text-lighten-4">We are a team of college students working on this project like it's our full time job. Any amount would help support and continue development on this project and is greatly appreciated.</p>


                            </div>
                            <div className="col l3 s12">
                                <h5 className="white-text">First column</h5>
                                <ul>
                                    <li><a className="white-text" href="#!">Link 1</a></li>
                                    <li><a className="white-text" href="#!">Link 2</a></li>
                                    <li><a className="white-text" href="#!">Link 3</a></li>
                                    <li><a className="white-text" href="#!">Link 4</a></li>
                                </ul>
                            </div>
                            <div className="col l3 s12">
                                <h5 className="white-text">Second column</h5>
                                <ul>
                                    <li><a className="white-text" href="#!">Link 1</a></li>
                                    <li><a className="white-text" href="#!">Link 2</a></li>
                                    <li><a className="white-text" href="#!">Link 3</a></li>
                                    <li><a className="white-text" href="#!">Link 4</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="footer-copyright">
                        <div className="container">
                            {this.state.year} Made by <a className="brown-text text-lighten-3" href="#">Magdalena</a>
                        </div>
                    </div>
                </footer>
            </div>
        )
    }
}


export default MainPage;