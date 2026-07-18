import "./ConnectionLines.css";

export default function DashboardConnections() {

    return (

        <svg
            className="dashboard-connections-svg"
            viewBox="0 0 900 760"
            preserveAspectRatio="none"
        >

            <defs>

                {/* Moving Glow */}

                <circle id="packet" r="4" fill="#C8FF00" />

            </defs>

            {/* ======================
                CONNECTION PATHS
            ======================= */}

            <path
                id="line1"
                className="connection-line"
                d="M180 145 C240 220 330 255 450 320"
            />

            <path
                id="line2"
                className="connection-line"
                d="M720 145 C660 220 570 255 450 320"
            />

            <path
                id="line3"
                className="connection-line"
                d="M180 615 C250 540 330 480 450 440"
            />

            <path
                id="line4"
                className="connection-line"
                d="M720 615 C650 540 570 480 450 440"
            />

            {/* ======================
                DATA PARTICLES
            ======================= */}

            <use href="#packet">

                <animateMotion
                    dur="3s"
                    repeatCount="indefinite"
                    rotate="auto"
                >
                    <mpath href="#line1"/>
                </animateMotion>

            </use>

            <use href="#packet">

                <animateMotion
                    dur="3.8s"
                    repeatCount="indefinite"
                    rotate="auto"
                >
                    <mpath href="#line2"/>
                </animateMotion>

            </use>

            <use href="#packet">

                <animateMotion
                    dur="3.4s"
                    repeatCount="indefinite"
                    rotate="auto"
                >
                    <mpath href="#line3"/>
                </animateMotion>

            </use>

            <use href="#packet">

                <animateMotion
                    dur="2.8s"
                    repeatCount="indefinite"
                    rotate="auto"
                >
                    <mpath href="#line4"/>
                </animateMotion>

            </use>

        </svg>

    );

}