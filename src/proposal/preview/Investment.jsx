import { serviceTemplates } from "../../data/services";

export default function Investment({ form }) {

    const service = serviceTemplates[form.service];
    const pkg = service?.packages?.[form.package];

    if (!service || !pkg) {

        return (

            <section className="proposal-page">

                <h2>Investment</h2>

                <p>Select a package to view pricing.</p>

            </section>

        );

    }

    return (

        <section className="proposal-page">

            <h2>Project Investment</h2>

            <p>

                The investment below covers the complete implementation
                of the selected package including planning,
                design, development, deployment, training and support.

            </p>

            <div className="price-card">

                <small>Total Investment</small>

                <h1>

                    KES {Number(pkg.price).toLocaleString()}

                </h1>

                <p>

                    {form.package} Package

                </p>

            </div>

            <h3>Payment Schedule</h3>

            <div className="payment-grid">

                {pkg.paymentTerms.map((term,index)=>(

                    <div
                        className="payment-card"
                        key={index}
                    >

                        <div className="payment-number">

                            {index+1}

                        </div>

                        <span>{term}</span>

                    </div>

                ))}

            </div>

            <h3>What's Included</h3>

            <div className="includes-grid">

                <div className="include-card">
                    Planning & Consultation
                </div>

                <div className="include-card">
                    Professional Design
                </div>

                <div className="include-card">
                    Development
                </div>

                <div className="include-card">
                    Testing & QA
                </div>

                <div className="include-card">
                    Deployment
                </div>

                <div className="include-card">
                    Training & Support
                </div>

            </div>

            <div className="proposal-highlight-box">

                <h3>Quotation Validity</h3>

                <p>

                    This proposal remains valid for

                    <strong> 30 Days </strong>

                    from the proposal date.

                </p>

            </div>

        </section>

    );

}