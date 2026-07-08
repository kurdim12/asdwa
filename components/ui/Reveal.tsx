"use client";

import { motion, useInView, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface RevealProps {
    children: React.ReactNode;
    width?: "fit-content" | "100%";
    className?: string;
    delay?: number;
}

/**
 * Clean editorial fade-and-rise reveal. Keeps the same API used across the
 * site (width, delay) but drops the old gold wipe bar for a calmer motion
 * suited to the light architectural direction.
 */
export const Reveal = ({
    children,
    width = "fit-content",
    className,
    delay = 0.1,
}: RevealProps) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-10% 0px -10% 0px" });
    const controls = useAnimation();

    useEffect(() => {
        if (isInView) controls.start("visible");
    }, [isInView, controls]);

    return (
        <div
            ref={ref}
            style={{ width }}
            className={cn("relative", className)}
        >
            <motion.div
                variants={{
                    hidden: { opacity: 0, y: 28 },
                    visible: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                animate={controls}
                transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
            >
                {children}
            </motion.div>
        </div>
    );
};
