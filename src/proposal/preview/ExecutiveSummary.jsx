import { companyData } from "../../config/companyData";

export default function ExecutiveSummary({ form }) {

    return (

        <section className="proposal-page">

            <h2>Executive Summary</h2>

            <p>

                Dear <strong>{form.client || "Client"}</strong>,

            </p>

            <p>

                Thank you for considering <strong>{companyData.name}</strong> as
                your digital solutions partner.

            </p>

            <p>

                After reviewing your requirements, we recommend the

                <strong> {form.package}</strong> package under our

                <strong> {form.service}</strong> solution.

            </p>

            <p>

                This proposal outlines our recommended strategy,
                project scope, timeline, investment and ongoing support
                designed specifically for

                <strong> {form.business}</strong>.

            </p>

            <div className="snapshot-grid">

                <div className="snapshot-card">

                    <small>Business</small>

                    <h4>{form.business}</h4>

                </div>

                <div className="snapshot-card">

                    <small>Service</small>

                    <h4>{form.service}</h4>

                </div>

                <div className="snapshot-card">

                    <small>Package</small>

                    <h4>{form.package}</h4>

                </div>

                <div className="snapshot-card">

                    <small>Investment</small>

                    <h4>

                        {form.price
                            ? `KES ${Number(form.price).toLocaleString()}`
                            : "--"}

                    </h4>

                </div>

                <div className="snapshot-card">

                    <small>Timeline</small>

                    <h4>{form.timeline}</h4>

                </div>

            </div>

            <div className="proposal-highlight-box">

                <h3>Project Objective</h3>

                <p>

                    Our objective is to provide a professional solution
                    that strengthens your brand, increases visibility,
                    improves customer engagement and supports long-term
                    business growth.

                </p>

            </div>

        </section>

    );

}