import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { fadeIn } from "@/lib/Animations";

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

  return (
    <>
      <AnimatePresence>
        {loaded && (
          <motion.div
            className="absolute right-[35px] top-[48px] z-10 hidden w-fit justify-center text-white lg:flex xl:top-[43px]"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              ease: fadeIn,
            }}
          >
            <div className="flex gap-2">
              <h5>{time.hours} :</h5>
              <h5>{time.minutes} :</h5>
              <h5 className="min-w-[25px]">{time.seconds}</h5>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Clock;
