import "./DashboardCard.css";

export default function DashboardCard({
    className,
    icon,
    title,
    subtitle
}) {

    return (

        <div className={`dashboard-card ${className}`}>

            <div className="dashboard-icon">

                {icon}

            </div>

            <h3>

                {title}

            </h3>

            <p>

                {subtitle}

            </p>

            <div className="dashboard-status">

                <span className="status-light"></span>

                ONLINE

            </div>

        </div>

    );

}