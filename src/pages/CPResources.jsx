import TopicCard from "../components/TopicCard";
import Heading from "../components/HeadingComponent";
import SectionHeading from "../components/CPTemplateHeading";

const CPResources = () => {
  // Topic arrays for each section with href
  const numberTheoryTopics = [
    { title: "GCD", href: "/gcd" },
    { title: "LCM", href: "/lcm" },
    { title: "Sieve of Eratosthenes", href: "/sieve" },
  ];

  const graphAlgorithmsTopics = [
    {
      title: "Dijkstra's Algorithm",
      href: "https://github.com/Priyansh19077/CP-Templates/blob/master/Graph%20Algorithms/Dijkstra.cpp",
    },
    { title: "Bellman-Ford Algorithm", href: "/bellman-ford" },
    { title: "Floyd-Warshall Algorithm", href: "/floyd-warshall" },
    { title: "Prim's Algorithm", href: "/prim" },
    { title: "Kruskal's Algorithm", href: "/kruskal" },
    { title: "Topological Sorting", href: "/topological-sorting" },
    { title: "Cycle Detection", href: "/cycle-detection" },
  ];

  const modularArithmeticTopics = [
    { title: "Modular Addition", href: "/modular-addition" },
    { title: "Modular Subtraction", href: "/modular-subtraction" },
    { title: "Modular Multiplication", href: "/modular-multiplication" },
    { title: "Modular Division", href: "/modular-division" },
    { title: "Modular Exponentiation", href: "/modular-exponentiation" },
    { title: "Extended GCD", href: "/extended-gcd" },
    { title: "nCr", href: "/ncr" },
    { title: "nPr", href: "/npr" },
    { title: "inverseModulo", href: "/inverse-modulo" },
  ];

  const bitManipulationTopics = [
    { title: "Set Bits", href: "/set-bits" },
    { title: "Bit Parity", href: "/bit-parity" },
    { title: "Leading Zero Bits", href: "/leading-zero-bits" },
    { title: "Trailing Zero Bits", href: "/trailing-zero-bits" },
    { title: "First Set Bit", href: "/first-set-bit" },
    { title: "Last Set Bit", href: "/last-set-bit" },
    { title: "Decimal to Binary Conversion", href: "/decimal-to-binary" },
    { title: "Binary to Decimal Conversion", href: "/binary-to-decimal" },
    { title: "31-Bit Binary String Representation", href: "/31-bit-binary" },
    { title: "Check if Bit is Set", href: "/check-if-bit-set" },
    { title: "Setting a Bit", href: "/setting-a-bit" },
    { title: "Unsetting a Bit", href: "/unsetting-a-bit" },
    { title: "Toggling a Bit", href: "/toggling-a-bit" },
  ];

  const treeAlgorithmsTopics = [
    { title: "Binary Lifting", href: "/binary-lifting" },
    { title: "Heavy-Light Decomposition (HLD)", href: "/hld" },
    { title: "Lowest Common Ancestor (LCA)", href: "/lca" },
    {
      title: "Tree Centroid Decomposition",
      href: "/tree-centroid-decomposition",
    },
  ];

  const rangeQueryTopics = [
    { title: "Segment Tree", href: "/segment-tree" },
    { title: "Fenwick Tree", href: "/fenwick-tree" },
    { title: "Lazy Propagation", href: "/lazy-propagation" },
    { title: "Square Root Decomposition", href: "/square-root-decomposition" },
    { title: "Sparse Table", href: "/sparse-table" },
  ];

  const stringMatchingTopics = [
    { title: "KMP Algorithm", href: "/kmp" },
    { title: "Rabin-Karp Algorithm", href: "/rabin-karp" },
    { title: "Boyer-Moore Algorithm", href: "/boyer-moore" },
    { title: "Z Algorithm", href: "/z-algorithm" },
    { title: "Suffix Array", href: "/suffix-array" },
    { title: "Prefix Function", href: "/prefix-function" },
    { title: "String Hashing", href: "/string-hashing" },
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
            <TopicCard title={topic.title} href={topic.href} />
          </div>
        ))}
      </div>

      {/* Graph Algorithms Section */}
      <SectionHeading title="Graph Algorithms" />
      <div className="flex flex-wrap justify-center">
        {graphAlgorithmsTopics.map((topic, index) => (
          <div key={index} className="w-full sm:w-1/3 p-2">
            <TopicCard title={topic.title} href={topic.href} />
          </div>
        ))}
      </div>

      {/* Modular Arithmetic Section */}
      <SectionHeading title="Modular Arithmetic" />
      <div className="flex flex-wrap justify-center">
        {modularArithmeticTopics.map((topic, index) => (
          <div key={index} className="w-full sm:w-1/3 p-2">
            <TopicCard title={topic.title} href={topic.href} />
          </div>
        ))}
      </div>

      <SectionHeading title="Bit Manipulation" />
      <div className="flex flex-wrap justify-center">
        {bitManipulationTopics.map((topic, index) => (
          <div key={index} className="w-full sm:w-1/3 p-2">
            <TopicCard title={topic.title} href={topic.href} />
          </div>
        ))}
      </div>

      <SectionHeading title="Tree Algorithms" />
      <div className="flex flex-wrap justify-center">
        {treeAlgorithmsTopics.map((topic, index) => (
          <div key={index} className="w-full sm:w-1/3 p-2">
            <TopicCard title={topic.title} href={topic.href} />
          </div>
        ))}
      </div>

      <SectionHeading title="Range Query" />
      <div className="flex flex-wrap justify-center">
        {rangeQueryTopics.map((topic, index) => (
          <div key={index} className="w-full sm:w-1/3 p-2">
            <TopicCard title={topic.title} href={topic.href} />
          </div>
        ))}
      </div>

      <SectionHeading title="String Matching Algorithms" />
      <div className="flex flex-wrap justify-center">
        {stringMatchingTopics.map((topic, index) => (
          <div key={index} className="w-full sm:w-1/3 p-2">
            <TopicCard title={topic.title} href={topic.href} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CPResources;
