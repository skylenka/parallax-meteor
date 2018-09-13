import React, {Component} from 'react';
import NavBar from '/imports/template/components/layout/navBar/navBar.jsx';
import './layout.scss';


class Layout extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id='layout'>
                <header> 
                     <NavBar />
                </header> 
                {this.props.content}
            </div>
        )
    }
}


export default Layout;