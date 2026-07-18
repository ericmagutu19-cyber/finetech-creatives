import { motion } from "framer-motion";

export default function DataPacket({
    pathId,
    delay = 0
}) {

    return (

        <motion.circle
            r="5"
            fill="#C8FF00"
            filter="url(#packetGlow)"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 1, 0] }}
            transition={{
                duration: 3,
                repeat: Infinity,
                delay
            }}
        >

            <animateMotion
                dur="3s"
                repeatCount="indefinite"
                begin={`${delay}s`}
            >
                <mpath href={`#${pathId}`} />
            </animateMotion>

        </motion.circle>

    );

}