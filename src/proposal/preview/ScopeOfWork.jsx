import { serviceTemplates } from "../../data/services";

export default function ScopeOfWork({ form }) {

    const service = serviceTemplates[form.service];
    const pkg = service?.packages?.[form.package];

    if (!service || !pkg) {

        return (

            <section className="proposal-page">

                <h2>Scope of Work</h2>

                <p>Please select a service and package.</p>

            </section>

        );

    }

    return (

        <section className="proposal-page">

            <h2>Scope of Work</h2>

            <p>

                The following deliverables and project specifications are
                included within the selected package.

            </p>

            <div className="features-grid">

                {pkg.deliverables.map((item) => (

                    <div
                        className="feature-card"
                        key={item}
                    >

                        <div className="feature-icon">

                            ✓

                        </div>

                        <span>{item}</span>

                    </div>

                ))}

            </div>

            <h3>Project Information</h3>

            <div className="info-grid">

                <div className="info-card">

                    <small>Pages</small>

                    <h4>{pkg.pages}</h4>

                </div>

                <div className="info-card">

                    <small>Timeline</small>

                    <h4>{pkg.timeline}</h4>

                </div>

                <div className="info-card">

                    <small>Revisions</small>

                    <h4>{pkg.revisions}</h4>

                </div>

                <div className="info-card">

                    <small>Support</small>

                    <h4>{pkg.support}</h4>

                </div>

                <div className="info-card">

                    <small>Warranty</small>

                    <h4>{pkg.warranty}</h4>

                </div>

                <div className="info-card">

                    <small>Training</small>

                    <h4>{pkg.training}</h4>

                </div>

            </div>

            <div className="proposal-highlight-box">

                <h3>Recommended For</h3>

                <p>{pkg.recommendedFor}</p>

            </div>

        </section>

    );

}