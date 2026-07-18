import "./NetworkConnections.css";

export default function NetworkConnections() {

    return (

        <svg
            className="network-svg"
            viewBox="0 0 1000 700"
            preserveAspectRatio="none"
        >
            
            {/* Top Left */}

            <path
                id="line-one"
                d="
                M500 350
                C420 250,
                330 180,
                240 160
                "
            />

            {/* Top Right */}

            <path
                id="line-two"
                d="
                M500 350
                C580 250,
                670 180,
                760 160
                "
            />

            {/* Bottom Left */}

            <path
                id="line-three"
                d="
                M500 350
                C420 450,
                330 520,
                240 540
                "
            />

            {/* Bottom Right */}

            <path
                id="line-four"
                d="
                M500 350
                C580 450,
                670 520,
                760 540
                "
            />

        </svg>

    );

}