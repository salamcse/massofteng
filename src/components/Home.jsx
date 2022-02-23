import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

class Home extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="common-card">
                    <div className="aboutme" uk-scrollspy="cls: uk-animation-slide-right;">
                        <div className="about-info">
                            <h3>Md Abdus Salam </h3>
                            <h5>Address: House#16/2-A, Commissionar road, Kallayanpur, Dhaka</h5>
                            <h5>Email:  salam.pustcse@gmail.com, abdus.salam@selise.ch.</h5>
                            <h5>Mobile: +8801924663948</h5>
                            <h5>Blog: https://massofteng.blogspot.com/</h5>
                            <h5>Skype: mas.softeng</h5>
                            <h5>LinkedIn: https://www.linkedin.com/in/mascse/</h5>
                            <h5>Hacker Rank Profile: https://www.hackerrank.com/massofteng/</h5>
                        </div>
                    </div>
                </div>
                <div className="common-card" uk-grid uk-scrollspy="cls: uk-animation-slide-left; target: .uk-card; delay: 300; repeat: true">
                    <div className="about">
                        <span className="lftBorder"></span>
                        <h1>Working Experience</h1>
                        <div className="aboutCont uk-card uk-card-default uk-card-body">
                            <div className="aboutHdr"><span>1 Jun, 2020 - Present</span></div>
                            <div className="aboutItem">
                                <h4>Software engineer</h4>
                                <h5>Selise Digital Platform</h5>
                                <p>SELISE is a fast growing digital platform developer with innovation, consulting & IT delivery centers across Europe, Middle East and Asia.</p>
                            </div>
                        </div>
                        <div className="aboutCont uk-card uk-card-default uk-card-body">
                            <div className="aboutHdr"><span>2 February, 2017 - 15 June, 2020</span></div>
                            <div className="aboutItem">
                                <h4>Sr. Software Engineer</h4>
                                <h5>Pride Group</h5>
                                <p>Since the introduction of our retail brand in the Bangladeshi market in 1991, Pride Limited has strived to build upon it’s commitment of delighting Bangladeshi consumers with the best quality textile products, at the most affordable prices, and manufactured in our own facilities with highest quality assurance and compliance. Thus, by 2018 the Pride Limited network has expanded to around a 100 stores and has been established as a pioneer and top lifestyle retailer in Bangladesh.</p>
                            </div>
                        </div>
                        <div className="aboutCont uk-card uk-card-default uk-card-body">
                            <div className="aboutHdr"><span>16 April, 2016 - 14 January, 2017</span></div>
                            <div className="aboutItem">
                                <h4>Software Engineer</h4>
                                <h5>Mars Solution Ltd(a Pandughar Concern)</h5>
                                <p>MARS Solutions Limited is a multifaceted company having strong footprint in Information Technology and allied fields. From it's inception, the company has been rigorously working to create an IT savvy workforce in the country by extending hands-on training on software, hardware and various world-class ERPs including SAP. MARS has also successfully developed numerous innovative IT products and technology-driven logistics services. Some of which are already operative in the market and some are in the queue to be launched officially.</p>
                            </div>
                        </div>
                        <div className="aboutCont uk-card uk-card-default uk-card-body">
                            <div className="aboutHdr"><span>1 November, 2014 - 14 April, 2016 </span></div>
                            <div className="aboutItem">
                                <h4>Software Enginner</h4>
                                <h5>Sofrworks Ltd.</h5>
                                <p> SARE Apon Heights, Flat- 9D & 9E, (9th Floor).
                                    House-27/1/B, Road-03.
                                    Shyamoli, Dhaka-1207, Bangladesh
                                    Phone: +8809612779988, +8801701771820
                                    E-mail: info@softworksbd.com
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default withRouter(Home)