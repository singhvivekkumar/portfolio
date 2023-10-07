import { useMotionValue, useSpring, useInView } from "framer-motion";
import React, { useEffect, useRef } from "react";

const AnimatedNumbers = ({ value }) => {
	const ref = useRef(null);

	const motionValue = useMotionValue(0);
	const springValue = useSpring(motionValue, { duration: 3000 });
	const isInVeiw = useInView(ref,{ once : true});

	useEffect(() => {
		if (isInVeiw) {
			motionValue.set(value);
		}
	}, [isInVeiw, value, motionValue]);

	useEffect(() => {
		springValue.on("change", (latest) => {
			if (ref.current && latest.toFixed(0) <= value) {
				ref.current.textContent = latest.toFixed(0);
			}
		});
	}, [springValue, value]);
	return <span ref={ref}></span>;
};

export default AnimatedNumbers;
