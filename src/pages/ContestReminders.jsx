import { useEffect, useState } from "react";
import Spline from "@splinetool/react-spline";

const ContestReminders = () => {
  const [timeLeft, setTimeLeft] = useState("");
  const [contestDetails, setContestDetails] = useState([]);

  // Function to check for contests today
  const checkContests = () => {
    const today = new Date();
    const dayName = today.toLocaleString("en-US", { weekday: "long" });

    // Define contests and their timings
    const contests = [
      {
        name: "LeetCode Contest",
        day: "Sunday",
        time: "08:00:00",
        link: "https://leetcode.com/contest/", // Replace with actual link
      },
      {
        name: "GeeksforGeeks Contest",
        day: "Sunday",
        time: "19:00:00",
        link: "https://www.geeksforgeeks.org/events/rec/gfg-weekly-coding-contest", // Replace with actual link
      },
      {
        name: "AtCoder Beginner Contest",
        day: "Saturday",
        time: "17:30:00",
        link: "https://atcoder.jp/contests/", // Replace with actual link
      },
      {
        name: "CodeChef Contest",
        day: "Wednesday",
        time: "20:00:00",
        link: "https://www.codechef.com/contests", // Replace with actual link
      },
    ];

    // Check for today's contests
    const todayContests = contests.filter((contest) => contest.day === dayName);
    setContestDetails(todayContests);

    // Start countdown for upcoming contests
    todayContests.forEach((contest) => {
      const [hours, minutes] = contest.time.split(":").map(Number);
      const contestDateTime = new Date(
        today.getFullYear(),
        today.getMonth(),
        today.getDate(),
        hours,
        minutes,
        0
      );
      const now = new Date();

      // Calculate the time difference
      const timeDiff = contestDateTime - now;

      if (timeDiff > 0) {
        startCountdown(timeDiff, contest);
      }
    });
  };

  // Function to start the countdown
  const startCountdown = (timeDiff) => {
    const countdownInterval = setInterval(() => {
      setTimeLeft(formatTime(timeDiff));

      // Update timeDiff for next interval
      timeDiff -= 1000; // Decrease by 1 second

      if (timeDiff < 0) {
        clearInterval(countdownInterval);
        setTimeLeft("00:00:00");
      }
    }, 1000);
  };

  // Function to format time in HH:MM:SS
  const formatTime = (time) => {
    const totalSeconds = Math.floor(time / 1000);
    const hours = String(Math.floor(totalSeconds / 3600)).padStart(2, "0");
    const minutes = String(Math.floor((totalSeconds % 3600) / 60)).padStart(
      2,
      "0"
    );
    const seconds = String(totalSeconds % 60).padStart(2, "0");
    return `${hours}:${minutes}:${seconds}`;
  };

  // Use effect to check contests on mount
  useEffect(() => {
    checkContests();
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-black">
      {/* Left: Contest Reminders */}
      <div className="p-5 md:p-10 flex flex-col items-center">
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg mb-8 w-full text-center border border-green-500">
          <h1 className="text-4xl font-bold text-green-400 mb-4">
            Contest Reminders
          </h1>
        </div>

        {contestDetails.length > 0 ? (
          contestDetails.map((contest, index) => {
            const [hours, minutes] = contest.time.split(":").map(Number);
            const contestDateTime = new Date(
              new Date().getFullYear(),
              new Date().getMonth(),
              new Date().getDate(),
              hours,
              minutes,
              0
            );
            const now = new Date();

            // Calculate the time difference for display
            const timeDiff = contestDateTime - now;

            // Only display contests that haven't happened yet
            if (timeDiff > 0) {
              return (
                <div
                  key={index}
                  className="bg-gray-700 p-6 rounded-lg shadow-lg w-full mb-4 text-center transition-transform transform hover:scale-105"
                >
                  <h2 className="text-2xl font-semibold text-white mb-2">
                    {contest.name}
                  </h2>
                  <p className="text-white mb-4">
                    Next Contest: Today at {contest.time}
                  </p>
                  <p className="text-lg text-yellow-400">{timeLeft}</p>
                  <a
                    href={contest.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-600 hover:bg-green-650 text-white p-2 rounded mt-4 inline-block"
                  >
                    Visit Contest Page
                  </a>
                </div>
              );
            }
            return null; // Do not render anything for past contests
          })
        ) : (
          <p className="text-white">No contests are scheduled for today.</p>
        )}
      </div>
    </div>
  );
};

export default ContestReminders;
