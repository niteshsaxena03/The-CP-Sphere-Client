import TopicCard from "../components/TopicCard";
import Heading from "../components/HeadingComponent";
import SectionHeading from "../components/CPTemplateHeading";

const CPResources = () => {
  // Topic arrays for each section
  const numberTheoryTopics = ["GCD", "LCM", "Sieve of Eratosthenes"];

  // Graph Algorithms Topics
  const graphAlgorithmsTopics = [
    "Dijkstra's Algorithm",
    "Bellman-Ford Algorithm",
    "Floyd-Warshall Algorithm",
    "Prim's Algorithm",
    "Kruskal's Algorithm",
    "Topological Sorting",
    "Cycle Detection",
  ];

  // Modular Arithmetic Topics
  const modularArithmeticTopics = [
    "Modular Addition",
    "Modular Subtraction",
    "Modular Multiplication",
    "Modular Division",
    "Modular Exponentiation",
    "Extended GCD",
    "nCr",
    "nPr",
    "inverseModulo",
  ];

  // Bit Manipulation Topics
  const bitManipulationTopics = [
    "Set Bits",
    "Bit Parity",
    "Leading Zero Bits",
    "Trailing Zero Bits",
    "First Set Bit",
    "Last Set Bit",
    "Decimal to Binary Conversion",
    "Binary to Decimal Conversion",
    "31-Bit Binary String Representation",
    "Check if Bit is Set",
    "Setting a Bit",
    "Unsetting a Bit",
    "Toggling a Bit",
  ];

  const treeAlgorithmsTopics = [
    "Binary Lifting",
    "Heavy-Light Decomposition (HLD)",
    "Lowest Common Ancestor (LCA)",
    "Tree Centroid Decomposition",
  ];

  // Range Query Topics
  const rangeQueryTopics = [
    "Segment Tree",
    "Fenwick Tree",
    "Lazy Propagation",
    "Square Root Decomposition",
    "Sparse Table"
  ];

  const stringMatchingTopics = [
    "KMP Algorithm",
    "Rabin-Karp Algorithm",
    "Boyer-Moore Algorithm",
    "Z Algorithm",
    "Suffix Array",
    "Prefix Function",
    "String Hashing",

  ];

  return (
    <div className="bg-black min-h-screen p-5">
      {/* Heading Section */}
      <Heading title="CP Templates" />

      {/* Number Theory Section */}
      <SectionHeading title="Number Theory" />
      <div className="flex flex-wrap justify-center">
        {numberTheoryTopics.map((topic, index) => (
          <div key={index} className="w-full sm:w-1/3 p-2">
            <TopicCard title={topic} />
          </div>
        ))}
      </div>

      {/* Graph Algorithms Section */}
      <SectionHeading title="Graph Algorithms" />
      <div className="flex flex-wrap justify-center">
        {graphAlgorithmsTopics.map((topic, index) => (
          <div key={index} className="w-full sm:w-1/3 p-2">
            <TopicCard title={topic} />
          </div>
        ))}
      </div>

      {/* Modular Arithmetic Section */}
      <SectionHeading title="Modular Arithmetic" />
      <div className="flex flex-wrap justify-center">
        {modularArithmeticTopics.map((topic, index) => (
          <div key={index} className="w-full sm:w-1/3 p-2">
            <TopicCard title={topic} />
          </div>
        ))}
      </div>

      <SectionHeading title="Bit Manipulation" />
      <div className="flex flex-wrap justify-center">
        {bitManipulationTopics.map((topic, index) => (
          <div key={index} className="w-full sm:w-1/3 p-2">
            <TopicCard title={topic} />
          </div>
        ))}
      </div>

      <SectionHeading title="Tree Algorithms" />
      <div className="flex flex-wrap justify-center">
        {treeAlgorithmsTopics.map((topic, index) => (
          <div key={index} className="w-full sm:w-1/3 p-2">
            <TopicCard title={topic} />
          </div>
        ))}
      </div>

      <SectionHeading title="Range Query" />
      <div className="flex flex-wrap justify-center">
        {rangeQueryTopics.map((topic, index) => (
          <div key={index} className="w-full sm:w-1/3 p-2">
            <TopicCard title={topic} />
          </div>
        ))}
      </div>

      <SectionHeading title="String Matching Algorithms" />
      <div className="flex flex-wrap justify-center">
        {stringMatchingTopics.map((topic, index) => (
          <div key={index} className="w-full sm:w-1/3 p-2">
            <TopicCard title={topic} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CPResources;
