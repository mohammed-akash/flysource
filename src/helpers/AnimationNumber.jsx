'use client'
import { useInView, useMotionValue, useSpring } from "framer-motion";
import React, { useEffect, useRef } from "react";
const AnimatedNumber = ({ value, className }) => {
    const ref = useRef(null);
    const motionValue = useMotionValue(0);
    const spring = useSpring(motionValue, {
        duration: 3000,
    });
    const isInView = useInView(ref, { once: true });
    useEffect(() => {
        if (isInView) {
            motionValue.set(value);
        }
    }, [isInView, value, motionValue]);
    useEffect(() => {
        spring.on("change", (latest) => {
            if (ref.current && latest.toFixed(0) <= value) {
                ref.current.textContent = latest.toFixed(0);
            }
        });
    }, [spring]);
    return <span className={className} ref={ref}></span>;
};
export default AnimatedNumber