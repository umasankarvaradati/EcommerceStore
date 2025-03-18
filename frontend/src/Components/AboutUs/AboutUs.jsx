import React from 'react'
import './aboutus.css'
import { assets } from '../../assets/assets';
const AboutUs = () => {
  return (
    <div>
        <div className="aboutus-heading">
            <h1>About Us</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, earum enim facilis pariatur iusto dolorum distinctio. Error laboriosam accusantium suscipit dolores officiis modi consequatur voluptatum quam, magni accusamus laborum nesciunt.</p>
        </div>
        <div className="aboutus-container">
            <section className='aboutus-about'>
                <div className="about-image">
                    <img src={assets.shop_image} alt="" />
                </div>
                <div className="about-content">
                    <h2>This is an Heading</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti culpa consequuntur ab recusandae, necessitatibus tempora impedit perferendis ullam nam aperiam temporibus earum expedita animi totam? Nesciunt sint ducimus nisi commodi quas ratione fuga corporis, amet possimus iure magni. Maxime in, quasi a corrupti aliquid porro neque rerum distinctio commodi omnis minus libero perspiciatis voluptatum quod totam iste cupiditate iure. Ad repellat, alias nesciunt itaque blanditiis, maiores recusandae tempore deleniti vel quibusdam voluptatum repudiandae voluptates et mollitia eius velit nulla? Deserunt magni atque iure minus nam aliquid, voluptatum, enim accusamus ab error ullam ea maiores, tenetur odit facilis molestias numquam eligendi?</p>
                    <a href="#" className='read-more'>Read More</a>
                </div>
            </section>
        </div>
    </div>
  )
}

export default AboutUs