import { useEffect, useState } from "react";
import Heading from "../components/HeadingComponent";

const ContestReminders = () => {
  const [timeLeft, setTimeLeft] = useState({});
  const [contestDetails, setContestDetails] = useState([]);

  // Function to check for contests today
  const checkContests = () => {
    const today = new Date();
    const dayName = today.toLocaleString("en-US", { weekday: "long" });
    const date = today.getDate();

    // Define contests and their timings
    const contests = [
      {
        name: "LeetCode Contest",
        day: "Sunday",
        time: "08:00:00",
        link: "https://leetcode.com/contest/",
      },
      {
        name: "LeetCode Biweekly Contest",
        day: "Saturday",
        time: "20:00:00",
        link: "https://leetcode.com/contest/",
        condition: (date) => [2, 4].includes(Math.ceil(date / 7)), // Check if it's the 2nd or 4th Saturday
      },
      {
        name: "GeeksforGeeks Contest",
        day: "Sunday",
        time: "19:00:00",
        link: "https://www.geeksforgeeks.org/events/rec/gfg-weekly-coding-contest",
      },
      {
        name: "AtCoder Beginner Contest",
        day: "Saturday",
        time: "17:30:00",
        link: "https://atcoder.jp/contests/",
      },
      {
        name: "CodeChef Contest",
        day: "Wednesday",
        time: "20:00:00",
        link: "https://www.codechef.com/contests",
      },
    ];

    // Filter today's contests and special 2nd/4th Saturday LeetCode contests
    const todayContests = contests.filter(
      (contest) =>
        contest.day === dayName &&
        (!contest.condition || contest.condition(date))
    );

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
        startCountdown(timeDiff, contest.name);
      }
    });
  };

  // Function to start the countdown
  const startCountdown = (timeDiff, contestName) => {
    const countdownInterval = setInterval(() => {
      setTimeLeft((prevTime) => ({
        ...prevTime,
        [contestName]: formatTime(timeDiff),
      }));

      // Update timeDiff for next interval
      timeDiff -= 1000; // Decrease by 1 second

      if (timeDiff < 0) {
        clearInterval(countdownInterval);
        setTimeLeft((prevTime) => ({
          ...prevTime,
          [contestName]: "00:00:00",
        }));
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
    <div className="flex flex-col min-h-screen bg-black w-full">
      <Heading title="Contest Reminders" />

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
                <p className="text-lg text-yellow-400">
                  {timeLeft[contest.name]}
                </p>
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
        <p className="text-white font-bold text-2xl text-center">
          No contests are scheduled for today.
        </p>
      )}
    </div>
  );
};

export default ContestReminders;
