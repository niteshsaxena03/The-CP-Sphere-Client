import Heading from "../components/HeadingComponent";
import ResourceCard from "../components/ResourceCard";

const CPLearningResources = () => {
  // Resources grouped by topics
  const resourceTopics = [
    {
      title: "Bit Manipulation",
      resources: [
        {
          name: "Striver",
          href: "https://www.youtube.com/playlist?list=PL_NW-shW0NSD7Xi2-RGpGQ8dMD-4x_OGD",
        },
      ],
    },
    {
      title: "Prefix Sum",
      resources: [
        {
          name: "Vivek Gupta",
          href: "https://maang.in/courses/MasterPrefixPartialSums-71?tab=chapters",
        },
      ],
    },
    {
      title: "Number Theory",
      resources: [
        {
          name: "Utkarsh Gupta",
          href: "https://www.youtube.com/watch?v=tDM6lT-qjys&t=13s",
        },
        {
          name: "Shayan",
          href: "https://www.youtube.com/playlist?list=PL_NW-shW0NSC9-5HvA8ExSXnSMANv7usA",
        },
      ],
    },
    {
      title: "Modular Arithmetic",
      resources: [
        {
          name: "Luv",
          href: "https://www.youtube.com/watch?v=RCq5TYMZEwg&list=PLauivoElc3giVROwL-6g9hO-LlSen_NaV",
        },
        {
          name: "Errichto",
          href: "https://www.youtube.com/watch?v=-OPohCQqi_E",
        },
      ],
    },
    {
      title: "Greedy Algorithms",
      resources: [
        {
          name: "Algorithms Live",
          href: "https://www.youtube.com/watch?v=Oq1seKJvfQU",
        },
        {
          name: "Errichto",
          href: "https://www.youtube.com/watch?v=7hFWrKa6yRM&t=138s",
        },
      ],
    },
    {
      title: "Binary Search",
      resources: [
        {
          name: "Priyansh Agarwal",
          href: "https://www.youtube.com/watch?v=TiQ_W2qG3kU",
        },
        {
          name: "Vivek Gupta",
          href: "https://maang.in/courses/Binary-Search-85?tab=chapters",
        },
      ],
    },
    {
      title: "Dynamic Programming",
      resources: [
        {
          name: "Vivek Gupta",
          href: "https://www.youtube.com/playlist?list=PLqf9emQRQrnKA_EeveiXQj_uP25w8_5qL",
        },
        {
          name: "Priyansh Agarwal",
          href: "https://www.youtube.com/playlist?list=PLAj_13N2fk-RA6wvOUmWOyUeL9zmWFJoI",
        },
      ],
    },
    {
      title: "Graph Algorithms",
      resources: [
        {
          name: "Striver",
          href: "https://www.youtube.com/playlist?list=PLgUwDviBIf0rGEWe64KWas0Nryn7SCRWw",
        },
        {
          name: "Shayan",
          href: "https://www.youtube.com/playlist?list=PL_NW-shW0NSDG1qOkGpbeTAyaOYP8Jum4e",
        },
      ],
    },
    {
      title: "Segment Trees",
      resources: [
        {
          name: "Striver",
          href: "https://www.youtube.com/playlist?list=PL_NW-shW0NSD3i5VfSlR9eiDgnbArknm9",
        },
        {
          name: "Vivek Gupta",
          href: "https://www.youtube.com/playlist?list=PL_NW-shW0NSAPC9G0YPZ3lusD0m5caMX7",
        },
      ],
    },
    {
      title: "Trees",
      resources: [
        {
          name: "Priyansh Agarwal",
          href: "https://youtu.be/HL5ouhfxlgk?si=QO6utYJVsliGcPKB",
        },
      ],
    },
    // CP Practice Resources
    {
      title: "CSES",
      resources: [
        {
          name: "Topic Wise Practice",
          href: "https://cses.fi/problemset/",
        },
      ],
    },
    {
      title: "ProgVar",
      resources: [
        {
          name: "Topic Wise Practice",
          href: "https://progvar.fun/problemsets",
        },
      ],
    },
    {
      title: "TLE 31",
      resources: [
        {
          name: "Rating Wise Practice",
          href: "https://www.tle-eliminators.com/cp-sheet",
        },
      ],
    },
    {
      title: "Ask Senior",
      resources: [
        {
          name: "Topic Wise Practice",
          href: "https://asksenior.in/learn",
        },
      ],
    },
    {
      title: "A2OJ",
      resources: [
        {
          name: "Rating Wise Practice",
          href: "https://earthshakira.github.io/a2oj-clientside/server/Ladders.html",
        },
      ],
    },
  ];

  return (
    <div className="bg-black min-h-screen p-5">
      <Heading title="CP Learning Resources" />
      {resourceTopics.slice(0, 10).map((topic, index) => (
        <ResourceCard
          key={index}
          topic={topic.title}
          resources={topic.resources}
        />
      ))}

      <Heading title="CP Practice Resources" />
      {resourceTopics.slice(10).map((topic, index) => (
        <ResourceCard
          key={index}
          topic={topic.title}
          resources={topic.resources}
        />
      ))}
    </div>
  );
};

export default CPLearningResources;
