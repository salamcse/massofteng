import React, { Component } from 'react'

class Project extends Component {
    render() {
        return (
            <React.Fragment>  
            <div className="project-div">
                <div className="project-card">
                    <img className="projectCardImg zoom" height="100%" width="100%" src={process.env.PUBLIC_URL + '/wet.png'} alt={"project"}/> 
                    <div className="project-card-content">
                        <h2 className="project-card-content-header"> We talents Portal</h2>
                        <p>
                        WeTalents is the first talent and job matchmaking platform in Switzerland. Our matching algorithm ensures that
                        the right person with the right skill set is always matched with the right job. Everything that recruiters and job seekers
                        need is built right into the platform.
                        My contributions in this project include the development of core features such as job flow, real-time chat integration using
                        pusher, talent skill and portfolio integration, invoice and billing management, talent marketing features, integration of
                        third-party payrolling service (PayrollPlus), etc.
                        </p>
                       
                    </div>
                </div> 
                <div className="project-card">
                    <img className="projectCardImg zoom" height="100%" width="100%" src={process.env.PUBLIC_URL + '/sa_ndoh_dashboard.jpg'} alt={"project"}/> 
                    <div className="project-card-content">
                        <h2 className="project-card-content-header"> NDOH Pharmaceutical Service Management Dashboard </h2>
                        <p>
                            SA NDOH Dashboard:
                            The National Department of Health (NDOH) in South Africa identified the need to implement a systematic method of monitoring aspects of pharmaceutical service delivery at a provincial level that support patients’ access to medicines. NDOH Pharmaceutical Service Management Dashboard is designed to display a set of norms and standards, thus providing a framework to foster transparency and accountability within pharmaceutical services at a provincial level. The dashboard was developed utilizing USAID fund supported by SIAPS South Africa.
                            Client: MSH/SIAPS South Africa
                            End-User: National Department of Health, South Africa
                            Technology: PHP, MySQL, Wordpress, JavaScript, JQuery, JSON, XML, D3, HighCharts
                        </p>
                       
                    </div>
                </div> 
                <div className="project-card">
                    <img className="projectCardImg zoom" height="100%" width="100%" src={process.env.PUBLIC_URL + '/bdtender.png'} alt={"project"}/> 
                    <div className="project-card-content">
                        <h2 className="project-card-content-header"> BD Tender </h2>
                        <p>
                            BDTender is a tender notification service portal that keeps you updated with the latest information or notices related to government tenders and auctions published in newspapers or websites or e-GP from government and non-government organizations all over Bangladesh.
                            We are also publishing Private tender notice to help the client in one platform.
                            For the last 19 years, the organization has been helping you to grow up your business with confidence by daily alert services of tenders.
                        </p>
                    </div>
                </div>
                <div className="project-card">
                    <img className="projectCardImg zoom" height="100%" width="100%" src={process.env.PUBLIC_URL + '/pride_new.png'} alt={"project"}/> 
                    <div className="project-card-content">
                        <h2 className="project-card-content-header"> Pride Group E-Commerce</h2>
                        <p>
                            <b>Overview: </b>Pride limited is an e-commerce based online software/web 
                            application (http://www.pride-limited.com) contains front end gorgeous design, menu management and 
                            back end dashboard for products management. Front end contains products show as row, product photo quick view, details view, photo zooming and add to cart option, product color selection option, size selection option and product quantity selection option based on available product quantity, Selection area,  city(if city is in inside Dhaka delivery charge 70 and payment method cash on delivery and bkash both are available for inside Dhaka city  and 150 for outside Dhaka city and payment method only bkash available(using bkash api calling) ), set promotion code(if available) .If any customer purchase above 3000/= then his/her delivery charge is free. Cart edit option available for customers. Secure registration and login option available for customer with email verification. Saving customer shipping and billing area and view both customer and for administrator. Product reduce automatically after order confirmation and added same quantity automatically if someone disagree to get product. Back end contains product add with a lot of image based on color, size, quantity. Views all products, edit, delete and active-inactive option. Order maintenance with pathao api intrigation.
                            DEVELOPMENT TOOLS/ENVIRONMENT: Laravel 5.5, My-SQL, JavaScript, Ajax, HTML, CSS, JQuery.
                        </p>
                       
                    </div>
                </div> 
                <div className="project-card">
                    <img className="projectCardImg zoom" height="100%" width="100%" src={process.env.PUBLIC_URL + '/urban.png'} alt={"project"}/> 
                    <div className="project-card-content">
                        <h2 className="project-card-content-header"> Urban Truth E-Commerce </h2>
                        <p>
                            <b>Overview:</b> Urban Truth is an e-commerce based online software/web application (http://www.urban-truth.com) contains front end gorgeous design, menu management and back end dashboard for products management. Front end contains products show as row, product photo quick view, details view, 
                            photo zooming and add to cart option, product color selection option, size selection option and product quantity selection option based on available product quantity, Selection area,  city(if city is in inside Dhaka delivery charge 70 and payment method cash on delivery and bkash both are available for inside Dhaka city  and 150 for outside Dhaka city and payment method only bkash available(using bkash api calling) ), 
                            set promotion code(if available) .If any customer purchase above 3000/= then his/her delivery charge is free. Cart edit option available for customers. Secure registration and login option available for customer with email verification. Saving customer shipping and billing area and view both customer and for administrator. Product reduce automatically after order confirmation and added same quantity automatically if someone disagree to get product. Back end contains product add with a lot of image based on color, size, quantity. Views all products, edit, delete and active-inactive option. Order maintenance with pathao api intrigation.
                            DEVELOPMENT TOOLS/ENVIRONMENT:	Laravel 5.5, My-SQL, JavaScript, Ajax, HTML, CSS, JQuery.
                        </p>
                       
                    </div>
                </div> 
                <div className="project-card">
                    <img className="projectCardImg zoom" height="100%" width="100%" src={process.env.PUBLIC_URL + '/nrb.png'} alt={"project"}/> 
                    <div className="project-card-content">
                        <h2 className="project-card-content-header"> NRB Jobs Portal </h2>
                        <p>
                            NRBJobs.com is the first Bangladeshi global job portal in the international job market. 
                            Our unique job portal and its pioneering ideas are designed in such a way that it will change the ways of our thinking regarding any jobsite. NRB jobs.com is the only platform where jobseekers, employers, students, learners, trainers and trainees/internees from all background regularly visit to keep in touch with the global job market. This is the place where you have the opportunity to know each-other better, which also indicates that NRB Jobs Limited provides varieties of services. NRB Jobs also identifies the opportunities to formulate and implement effective policies for the economic development of Bangladesh. 
                            Besides offering all types of jobs beyond political boundaries
                            NRB Jobs Limited is an ISO 9001:2015 certified company which is a product of MARS Solutions Limited and a concern of 
                            Pandughar Limited.
                        </p>
                       
                    </div>
                </div> 
            </div>
            </React.Fragment>
        )
    }
}

export default Project