import React from 'react';

import LambImg from '../images/cooked-lamb-on-white-plate.png'

const About = () => (
    <div className="l-about pattern-bg">
        <div className="l-container">
            <ul className="l-list-two-col">
                <li>
                    <h3>Just the right food</h3>
                    <hr className="fancy-hr fancy-hr-alt" />
                    <p className="l-align-center">If you’ve been to one of our restaurants, you’ve seen – and tasted – what keeps our customers coming back for more. Perfect materials and freshly baked food, delicious Lambda cakes,  muffins, and gourmet coffees make us hard to resist! Stop in today and check us out!</p>

                </li>
                <li><img src={LambImg} alt="" className="l-align-center"/></li>

            </ul>

        </div>
    </div>

)

export default About