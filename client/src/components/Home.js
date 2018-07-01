import React, { Component } from 'react';
import SiteOpen from './styleComponents/SiteOpen';
import {Link} from 'react-router-dom'

class Home extends Component {
    render() {
        return (
            <SiteOpen>
                <h1>Helicon</h1>
                <h4>The home of inspiration</h4>
                <div>About Helicon</div>
                <p>Mt. Helicon was the home of the nine muses of Greek and Roman myhtology. Historically <br/>
                    thought of as the symbols of inspiration and success in the arts, the muses, for many,<br/>
                    represent the embodiments of the beauties and joys of artful pursuits. The Greek <br/>
                    poet Pindar famously quoted, that to "carry a muse" is to achieve a success in the arts. <br/>
                    Helicon was created with this sentiment in mind. Musical inspiration often comes at the most <br/>
                    unlikely of times, in the most unlikely of places. This application is intended to be a home for <br/>
                    you, as a user, to easily record and house those thoughts on the go. Be specific. Be vague. <br/>
                    Be what you want, but most importantly, be inspired, and build your own Helicon</p>
                    <Link to='/users/new'>Get Started</Link>
            </SiteOpen>
        );
    }
}

export default Home;