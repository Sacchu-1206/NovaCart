import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const FlashSale = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 2,
    minutes: 14,
    seconds: 45,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        let { hours, minutes, seconds } = prev;

        if (hours === 0 && minutes === 0 && seconds === 0) {
          clearInterval(timer);
          return prev;
        }

        if (seconds > 0) {
          seconds--;
        } else {
          seconds = 59;

          if (minutes > 0) {
            minutes--;
          } else {
            minutes = 59;

            if (hours > 0) {
              hours--;
            }
          }
        }

        return {
          hours,
          minutes,
          seconds,
        };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const format = (value) => value.toString().padStart(2, "0");

  return (
    <section className="max-w-7xl mx-auto px-6 py-12">

      <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-3xl p-10 flex flex-col lg:flex-row justify-between items-center text-white">

        <div>

          <p className="uppercase tracking-widest font-semibold">
            Limited Time Offer
          </p>

          <h2 className="text-5xl font-bold mt-4">
            Flash Sale
          </h2>

          <p className="text-xl mt-5">
            Get up to <strong>60% OFF</strong> on selected products.
          </p>

          <Link
            to="/products"
            className="inline-block mt-8 bg-white text-orange-600 font-semibold px-8 py-3 rounded-xl hover:scale-105 transition"
          >
            Shop Now
          </Link>

        </div>

        <div className="mt-10 lg:mt-0 text-center">

          <p className="text-lg">
            Offer Ends In
          </p>

          <h3 className="text-5xl font-bold mt-3">
            {format(timeLeft.hours)} :
            {format(timeLeft.minutes)} :
            {format(timeLeft.seconds)}
          </h3>

          <p className="mt-3">
            Hours : Minutes : Seconds
          </p>

        </div>

      </div>

    </section>
  );
};

export default FlashSale;