import React, { Component } from 'react';
import './myGallery.scss';

const imgUrls = ['http://68.media.tumblr.com/49aaa0d59c5cbb21d5773203cad38c70/tumblr_o8u2hbTV7e1suvvy2o1_1280.jpg', 'http://68.media.tumblr.com/30494d70316e2fe7942bb65471e91f08/tumblr_o8u2dayVlY1suvvy2o1_1280.jpg', 'http://68.media.tumblr.com/3ec9a5809bb891aa384e3edd6b03c2c1/tumblr_o8u29sChmR1suvvy2o1_1280.jpg', 'http://68.media.tumblr.com/a518dfe3c4b1c60edecd453926bfe4bb/tumblr_o5wek6yM5b1suvvy2o1_1280.jpg', 'http://68.media.tumblr.com/4d66f4cf42b80c77ec446ef0b202d030/tumblr_o5wdww7Bwn1suvvy2o1_1280.jpg', 'http://68.media.tumblr.com/0f07261bf5a31e10a767a71c8f7384ac/tumblr_o5jiv8acAX1suvvy2o1_1280.jpg'
];

class Gallery extends Component {
    constructor(props) {
        super(props);
        this.state = { currentIndex: null };
        this.closeModal = this.closeModal.bind(this);
        this.findNext = this.findNext.bind(this);
        this.findPrev = this.findPrev.bind(this);
        this.renderImageContent = this.renderImageContent.bind(this);
    }
    renderImageContent(src, index) {
        return (
            <div onClick={(e) => this.openModal(e, index)}>
                <img src={src} key={src} />
            </div>
        )
    }
    openModal(e, index) {
        this.setState({ currentIndex: index });
    }
    closeModal(e) {
        if (e != undefined) {
            e.preventDefault();
        }
        this.setState({ currentIndex: null });
    }
    findPrev(e) {
        if (e != undefined) {
            e.preventDefault();
        }
        this.setState(prevState => ({
            currentIndex: prevState.currentIndex - 1
        }));
    }
    findNext(e) {
        if (e != undefined) {
            e.preventDefault();
        }
        this.setState(prevState => ({
            currentIndex: prevState.currentIndex + 1
        }));
    }
    render() {
        return (
            <div className="gallery-container">
                <div className="gallery-grid">
                    {imgUrls.map(this.renderImageContent)}
                </div>
                <GalleryModal
                    closeModal={this.closeModal}
                    findPrev={this.findPrev}
                    findNext={this.findNext}
                    hasPrev={this.state.currentIndex > 0}
                    hasNext={this.state.currentIndex + 1 < imgUrls.length}
                    src={imgUrls[this.state.currentIndex]}
                />
            </div>
        )
    }
}

class GalleryModal extends Component {
    constructor(props) {
        super(props);
        this.handleKeyDown = this.handleKeyDown.bind(this);
    }
    componentDidMount() {
        document.body.addEventListener('keydown', this.handleKeyDown);
    }
    componentWillUnMount() {
        document.body.removeEventListener('keydown', this.handleKeyDown);
    }
    handleKeyDown(e) {
        if (e.keyCode === 27)
            this.props.closeModal();
        if (e.keyCode === 37 && this.props.hasPrev)
            this.props.findPrev();
        if (e.keyCode === 39 && this.props.hasNext)
            this.props.findNext();
    }
    render() {
        const { closeModal, hasNext, hasPrev, findNext, findPrev, src } = this.props;
        if (!src) {
            console.log('whut')
            return null;
        }
        return (
            <div>
                <div className="modal-overlay-gallery" onClick={closeModal}></div>
                <div isOpen={!!src} className="modal-gallery">
                    <div className='modal-body'>
                        <a href="#" className='modal-close' onClick={closeModal} onKeyDown={this.handleKeyDown}>&times;</a>
                        {hasPrev && <a href="#" className='modal-prev' onClick={findPrev} onKeyDown={this.handleKeyDown}>&lsaquo;</a>}
                        {hasNext && <a href="#" className='modal-next' onClick={findNext} onKeyDown={this.handleKeyDown}>&rsaquo;</a>}
                        <img src={src} />
                    </div>
                </div>
            </div>
        )
    }
}

export default Gallery;