import React from 'react';
import { Icon } from 'antd';
import FooterContainerAbstract from './FooterContainerAbstract';
import Header from '../Header';

class FooterContainer extends FooterContainerAbstract {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div style = {{borderTop: '2px solid #eee',boxSizing : 'border-box',  marginTop: '50px'}}>
                <Header />
                <footer  className="footer footerSiteLogos" id="FooterWraper" itemscope="" itemtype="" data-track-component="Footer">
                    <nav className="footer_Nav">
                        <div className="gsc_container">
                            <div  style={{ display: 'flex', justifyContent: 'space-around', textAlign: 'left' }} className="gsc_row">
                                <div className="gsc_col-sm-3">
                                    <div className="title" style = {{ marginLeft: '15px', color: '#000'}}>OVERVIEW</div>
                                    <ul className="list-group">
                                        <li className="list-group-item" style = {{border: '0px'}}><span>About us</span></li>
                                        <li className="list-group-item" style = {{border: '0px'}}><span>FAQs</span></li>
                                        <li className="list-group-item" style = {{border: '0px'}}><a href="" title="Privacy Policy">Privacy Policy</a></li>
                                        <li className="list-group-item" style = {{border: '0px'}}><a href="" title="Terms &amp; Conditions">Terms &amp; Conditions</a></li>
                                    </ul>
                                </div>
                                <div className="gsc_col-sm-3">
                                    <div className="title" style = {{ marginLeft: '15px', color: '#000'}}>OTHERS</div>
                                    <ul className="list-group">
                                        <li className="list-group-item" style = {{border: '0px'}}><span>Trustmarked used cars</span></li>
                                        <li className="list-group-item" style = {{border: '0px'}}><span>Advertise with Us</span></li>
                                        <li className="list-group-item" style = {{border: '0px'}}><span>Careers</span></li>
                                        <li className="list-group-item" style = {{border: '0px'}}><span>Customer Care</span></li>
                                    </ul>
                                </div>
                                <div className="gsc_col-sm-3">
                                    <div className="title" style = {{ marginLeft: '15px', color: '#000'}}>CONNECT WITH US</div>
                                    <ul className="list-group">
                                        <li className="list-group-item" style = {{border: '0px'}}><span>1800 200 3012 (Toll-Free)</span></li>
                                        <li className="list-group-item" style = {{border: '0px'}}><span>support@triping.com</span></li>
                                        <li className="list-group-item" style = {{border: '0px'}}><span>Contact Us</span></li>
                                        <li className="list-group-item" style = {{border: '0px'}}><span>Feedback</span></li>
                                    </ul>
                                </div>
                                <div className="gsc_col-sm-3" className="list-group" style = {{ display: 'flex', flexDirection: 'column'}}>
                                    <div className="title" style = {{ color: '#000'}}>EXPERIENCE WITH TRIPING APP</div>
                                    <ul className="list-group" style = {{ display: 'flex', flexDirection: 'row'}}>
                                        <li className="list-group-item" style = {{border: '0px'}}>
                                            <a href="" title="Download CarDekho's Free iOS App" target="_blank" rel="noopener"><img data-servewebp="true" data-lazy="true" data-gsll-src="" alt="Download CarDekho’s Free iOS App" src="https://stimg.cardekho.com/pwa/img/appstore.png" /></a>
                                        </li>
                                        <li className="list-group-item" style = {{border: '0px'}}>
                                            <a href="" title="Download CarDekho's Free Android App" target="_blank" rel="noopener"><img data-servewebp="true" data-lazy="true" data-gsll-src="" alt="Download CarDekho’s Free Android App" src="https://stimg.cardekho.com/pwa/img/playstore.png" /></a>
                                        </li>
                                    </ul>
                                    <div className="title" style = {{ marginLeft: '15px', color: '#000'}}>Follow us</div>
                                    <ul className="list-group" style = {{ display: 'flex', flexDirection: 'row'}}>
                                        <li className="list-group-item" style = {{border: '0px'}}><a href="" target="_blank" title="Facebook" rel="noopener"><Icon type="facebook"/></a></li>
                                        <li className="list-group-item" style = {{border: '0px'}}><a href="" target="_blank" title="Twitter" rel="noopener"><Icon type="twitter" /></a></li>
                                        <li className="list-group-item" style = {{border: '0px'}}><a href="" target="_blank" title="Youtube" rel="noopener"><Icon type="youtube" /></a></li>
                                        <li className="list-group-item" style = {{border: '0px'}}><a href="" target="_blank" title="Instagram" rel="noopener"><Icon type="instagram" /></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </nav>
                </footer>
            </div>
        )
    }
}

export default FooterContainer;