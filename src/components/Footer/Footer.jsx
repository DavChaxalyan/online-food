import React from 'react';
import "./footer.css";
import { assets } from '../../assets/assets';

const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <img src={assets.logo} alt="" />
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur hic laboriosam officia cumque sed tempora officiis eaque veritatis inventore, atque quaerat. Quos labore recusandae quas fugit blanditiis at accusantium nemo, veritatis, ex quisquam nihil possimus aspernatur tempore placeat sint mollitia!</p>
                <div className="footer-social-icons">
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                </div>
            </div>
            <div className="footer-content-center">
                <h2>Company</h2>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
            <div className="footer-content-right">
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>+1-238-294-5849</li>
                    <li>contact@tomato.com</li>
                </ul>
            </div>
        </div>
        <hr /><p className="footer-copyright">Copyright 2024 @ DavFood.com -All Right Reserved</p>
    </div>
  )
}

export default Footer