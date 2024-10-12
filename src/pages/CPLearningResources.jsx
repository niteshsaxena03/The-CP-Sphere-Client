import Heading from "../components/HeadingComponent";
import ResourceCard from "../components/ResourceCard";

const CPLearningResources = () => {
  // Resources for each topic
  const graphAlgorithmsResources = [
    {
      name: "Striver",
      href: "https://www.youtube.com/playlist?list=PLgUwDviBIf0rGEWe64KWas0Nryn7SCRWw",
    },
    {
      name: "Shayan",
      href: "https://www.youtube.com/playlist?list=PL_NW-shW0NSDG1qOkGpbeTAyaOYP8Jum4e",
    },
  ];

  const numberTheoryResources = [
    {
      name: "Utkarsh Gupta",
      href: "https://www.youtube.com/watch?v=tDM6lT-qjys&t=13s",
    },
    {
      name: "Shayan",
      href: "https://www.youtube.com/playlist?list=PL_NW-shW0NSC9-5HvA8ExSXnSMANv7usA",
    },
    {
      name: "Vivek Gupta",
      href: "https://www.youtube.com/playlist?list=PL_NW-shW0NSAhIXsA56LKA117kJ-ZK-yR",
    },
  ];

  const modularArithmeticResources = [
    {
      name: "Luv",
      href: "https://www.youtube.com/watch?v=RCq5TYMZEwg&list=PLauivoElc3giVROwL-6g9hO-LlSen_NaV",
    },
    {
      name: "Errichto",
      href: "https://www.youtube.com/watch?v=-OPohCQqi_E",
    },
  ];

  const greedyAlgoResources = [
    {
      name: "Algorithms Live",
      href: "https://www.youtube.com/watch?v=Oq1seKJvfQU",
    },
    {
      name: "Errichto",
      href: "https://www.youtube.com/watch?v=7hFWrKa6yRM&t=138s",
    },
  ];

  const segmentTreeResources = [
    {
      name: "Striver",
      href: "https://www.youtube.com/playlist?list=PL_NW-shW0NSD3i5VfSlR9eiDgnbArknm9",
    },
    {
      name: "Vivek Gupta",
      href: "https://www.youtube.com/playlist?list=PL_NW-shW0NSAPC9G0YPZ3lusD0m5caMX7",
    },
  ];
  const TreeResources = [
    {
      name: "Priyansh Agarwal",
      href: "https://youtu.be/HL5ouhfxlgk?si=QO6utYJVsliGcPKB",
    },
  ];
  const BinarySearchResources = [
    {
      name: "Priyansh Agarwal",
      href: "https://www.youtube.com/watch?v=TiQ_W2qG3kU",
    },
    {
      name: "Vivek Gupta",
      href: "https://maang.in/courses/Binary-Search-85?tab=chapters",
    },
  ];

  const DPResources = [
    {
      name: "Vivek Gupta",
      href: "https://www.youtube.com/playlist?list=PLqf9emQRQrnKA_EeveiXQj_uP25w8_5qL",
    },
    {
      name: "Priyansh Agarwal",
      href: "https://www.youtube.com/playlist?list=PLAj_13N2fk-RA6wvOUmWOyUeL9zmWFJoI",
    },
  ];

  const bitsResources = [
    {
      name: "Striver",
      href: "https://www.youtube.com/playlist?list=PL_NW-shW0NSD7Xi2-RGpGQ8dMD-4x_OGD",
    },
  ];

  const prefixSumResources = [
    {
      name: "Vivek Gupta",
      href: "https://maang.in/courses/MasterPrefixPartialSums-71?tab=chapters",
    },
  ];

  const CSES = [
    {
      name: "Topic Wise Practice",
      href: "https://cses.fi/problemset/",
    },
  ];

  const askSenior = [
    {
      name: "Topic Wise Practice",
      href: "https://asksenior.in/learn",
    },
  ];

  const progVar = [
    {
      name: "Topic Wise Practice",
      href: "https://progvar.fun/problemsets",
    },
  ];

  const TLE = [
    {
      name: "Rating Wise Practice",
      href: "https://www.tle-eliminators.com/cp-sheet",
    },
  ];
  const a2OJ = [
    {
      name: "Rating Wise Practice",
      href: "https://earthshakira.github.io/a2oj-clientside/server/Ladders.html",
    },
  ];

  return (
    <div className="bg-black min-h-screen p-5">
      <Heading title="CP Learning Resources" />

      <ResourceCard topic="Bit Manipulation" resources={bitsResources} />
      <ResourceCard topic="Prefix Sum" resources={prefixSumResources} />
      <ResourceCard topic="Number Theory" resources={numberTheoryResources} />

      <ResourceCard
        topic="Modular Arithmetic"
        resources={modularArithmeticResources}
      />

      <ResourceCard topic="Greedy Algorithms" resources={greedyAlgoResources} />
      <ResourceCard topic="Binary Search" resources={BinarySearchResources} />
      <ResourceCard topic="Dynammic Programming" resources={DPResources} />
      <ResourceCard
        topic="Graph Algorithms"
        resources={graphAlgorithmsResources}
      />
      <ResourceCard topic="Segment Trees" resources={segmentTreeResources} />
      <ResourceCard topic="Trees" resources={TreeResources} />

      <Heading title="CP Practice Resources" />
      <ResourceCard topic="CSES" resources={CSES} />
      <ResourceCard topic="ProgVar" resources={progVar} />
      <ResourceCard topic="TLE 31" resources={TLE} />
      <ResourceCard topic="Ask Senior" resources={askSenior} />
      <ResourceCard topic="A2OJ" resources={a2OJ} />
    </div>
  );
};

export default CPLearningResources;
