import React, { Component }from 'react';
import { Link } from 'react-router'

class Header extends Component {
    render () {
        return(
            <div className="header" >
                <p>TEST PROJECT</p>
                <div className="Link"><Link to="/">Home</Link></div>
                <div className="Link"><Link to="/second">Second</Link></div>
            </div>
        )
    }
}

export default Header;