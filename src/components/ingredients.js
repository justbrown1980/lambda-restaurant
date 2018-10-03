import React from 'react';

import WheatImg from '../images/wheat-husks.png'
import ChilliImg from '../images/chilli-flakes.png'
import BreadImg from '../images/loaf-of-bread.png'


const Ingredients = () => (
    <section className="l-ingredients">
        <div className="content">
            <h3>fine ingredients</h3>
            <hr className="fancy-hr" />
            <p>If you’ve been to one of our restaurants, you’ve seen – and tasted – what keeps our customers coming back for more. Perfect materials and freshly baked food, delicious Lambda cakes,  muffins, and gourmet coffees make us hard to resist! Stop in today and check us out!</p>

            <ul className="ingredients-list">
                <li><img src={WheatImg} alt="" /></li>
                <li><img src={ChilliImg} alt="" /></li>
                <li><img src={BreadImg} alt="" /></li>
            </ul>
        </div>
    </section>
)

export default Ingredients;