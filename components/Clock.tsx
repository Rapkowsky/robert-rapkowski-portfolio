import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CiClock1 } from "react-icons/ci";

const Clock = () => {
  const [time, setTime] = useState({
    hours: "00",
    minutes: "00",
    seconds: "00",
  });
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const hours =
        now.getHours() < 10 ? "0" + now.getHours() : now.getHours().toString();
      const minutes =
        now.getMinutes() < 10
          ? "0" + now.getMinutes()
          : now.getMinutes().toString();
      const seconds =
        now.getSeconds() < 10
          ? "0" + now.getSeconds()
          : now.getSeconds().toString();
      setTime({ hours, minutes, seconds });
    }, 1000);

    const timeout = setTimeout(() => {
      setLoaded(true);
    }, 1000);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, []);

  const rrClockIconIn = [0.45, 0, 0.55, 1];
  const rrClockIconOut = [0.33, 1, 0.68, 1];
  const rrTime = [0.76, 0, 0.24, 1];

  const iconVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: { duration: 0.7, ease: rrClockIconIn },
    },
    exit: { opacity: 0, transition: { duration: 1, ease: rrClockIconOut } },
  };

  const clockVariants = {
    initial: { opacity: 0, y: 70 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 1.3, delay: 0.2, ease: rrTime },
    },
  };

  return (
    <>
      <AnimatePresence>
        {!loaded && (
          <motion.div
            className="absolute top-1/4 z-10 flex h-12 w-full items-center justify-center text-white"
            variants={iconVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <CiClock1 className="h-full w-full" />
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {loaded && (
          <motion.div
            className="absolute top-1/4 z-10 flex h-12 w-full justify-center text-4xl font-bold text-white"
            variants={clockVariants}
            initial="initial"
            animate="animate"
            exit="initial"
          >
            <div className="flex gap-2">
              <h5>{time.hours} :</h5>
              <h5>{time.minutes} :</h5>
              <h5 className="min-w-[65px]">{time.seconds}</h5>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Clock;
