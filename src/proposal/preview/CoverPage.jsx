import logo from "../../assets/finetech-logo.png";
import { companyData } from "../../config/companyData";

export default function CoverPage({ form }) {

    return (

        <section className="proposal-page cover-page">

            <div className="cover-logo">

                <img src={logo} alt="Fine Tech Creatives" />

            </div>

            <h1>{companyData.name}</h1>

            <p className="cover-tagline">

                {companyData.slogan}

            </p>

            <div className="cover-divider"></div>

            <h2>PROJECT PROPOSAL</h2>

            <div className="cover-client">

                <small>Prepared For</small>

                <h3>{form.business || "Business Name"}</h3>

            </div>

            <div className="cover-details">

                <div>

                    <strong>Client</strong>

                    <span>{form.client}</span>

                </div>

                <div>

                    <strong>Date</strong>

                    <span>{new Date().toLocaleDateString()}</span>

                </div>

                <div>

                    <strong>Service</strong>

                    <span>{form.service}</span>

                </div>

                <div>

                    <strong>Package</strong>

                    <span>{form.package}</span>

                </div>

            </div>

        </section>

    );

}