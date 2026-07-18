export default function WhyChooseUs() {

    const reasons = [

        {
            title: "Business-Driven Strategy",
            body: "Every solution is designed to increase visibility, generate enquiries and support measurable business growth."
        },

        {
            title: "Professional Design",
            body: "Modern, responsive and visually appealing designs that build trust with your customers."
        },

        {
            title: "SEO Ready",
            body: "All projects are developed following search engine optimization best practices."
        },

        {
            title: "Fast Delivery",
            body: "Efficient project management ensures timely delivery without compromising quality."
        },

        {
            title: "Dedicated Support",
            body: "We continue supporting your business after project delivery."
        },

        {
            title: "Long-Term Partnership",
            body: "Our goal is to become your trusted digital partner as your business grows."
        }

    ];

    return (

        <section className="proposal-page">

            <h2>Why Choose Fine Tech Creatives?</h2>

            <p>

                We don't simply build websites—we build digital
                solutions that help businesses attract customers,
                strengthen their brands and grow confidently.

            </p>

            <div className="features-grid">

                {reasons.map((reason) => (

                    <div
                        className="feature-card"
                        key={reason.title}
                    >

                        <div className="feature-icon">

                            ✓

                        </div>

                        <div>

                            <h4>{reason.title}</h4>

                            <p>{reason.body}</p>

                        </div>

                    </div>

                ))}

            </div>

            <div className="proposal-highlight-box">

                <h3>Our Promise</h3>

                <p>

                    We are committed to delivering high-quality,
                    innovative and scalable digital solutions that
                    provide real value for your business.

                </p>

            </div>

        </section>

    );

}
