export default function Timeline({ form }) {

    const phases = [

        {
            title: "Discovery & Planning",
            duration: "Day 1",
            description: "Requirement gathering, project planning and strategy."
        },

        {
            title: "Design",
            duration: "20%",
            description: "UI/UX concepts, branding and client approval."
        },

        {
            title: "Development",
            duration: "60%",
            description: "Building, testing and feature implementation."
        },

        {
            title: "Testing & Review",
            duration: "80%",
            description: "Quality assurance, revisions and optimization."
        },

        {
            title: "Deployment",
            duration: "100%",
            description: "Launch, training and project handover."
        }

    ];

    return (

        <section className="proposal-page">

            <h2>Project Timeline</h2>

            <p>

                Below is the estimated workflow for your project.
                Each milestone is designed to ensure quality,
                transparency and timely delivery.

            </p>

            <div className="timeline">

                {phases.map((phase,index)=>(

                    <div
                        className="timeline-item"
                        key={index}
                    >

                        <div className="timeline-dot">

                            {index+1}

                        </div>

                        <div className="timeline-content">

                            <h4>{phase.title}</h4>

                            <small>{phase.duration}</small>

                            <p>{phase.description}</p>

                        </div>

                    </div>

                ))}

            </div>

            <div className="proposal-highlight-box">

                <h3>Estimated Completion</h3>

                <p>

                    <strong>{form.timeline}</strong>

                    {" "}from project commencement,
                    subject to timely feedback and approvals.

                </p>

            </div>

        </section>

    );

}