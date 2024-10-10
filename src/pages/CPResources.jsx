import TopicCard from "../components/TopicCard";
import Heading from "../components/HeadingComponent";
import SectionHeading from "../components/CPTemplateHeading";

const CPResources = () => {
  // Topic arrays for each section with href
  const numberTheoryTopics = [
    {
      title: "GCD",
      href: "https://github.com/niteshsaxena03/CP/blob/main/Number%20Thoery/GCD",
    },
    {
      title: "LCM",
      href: "https://github.com/niteshsaxena03/CP/blob/main/Number%20Thoery/LCM",
    },
    {
      title: "Sieve of Eratosthenes",
      href: "https://github.com/niteshsaxena03/CP/blob/main/Number%20Thoery/Sieve%20of%20Eratosthenes",
    },
    {
      title: "nCr",
      href: "https://github.com/niteshsaxena03/CP/blob/main/Modular%20Arithmetic/nCr",
    },
    {
      title: "nPr",
      href: "https://github.com/niteshsaxena03/CP/blob/main/Modular%20Arithmetic/nPr",
    },
    {
      title: "Binary exponentiation",
      href: "https://github.com/niteshsaxena03/CP/blob/main/Number%20Thoery/Binary%20Exponentiation",
    },
   
  ];

  const graphAlgorithmsTopics = [
    {
      title: "Dijkstra's Algorithm",
      href: "https://github.com/Priyansh19077/CP-Templates/blob/master/Graph%20Algorithms/Dijkstra.cpp",
    },
    {
      title: "Bellman-Ford Algorithm",
      href: "https://github.com/Priyansh19077/CP-Templates/blob/master/Graph%20Algorithms/BellmanFord.cpp",
    },
    {
      title: "Floyd-Warshall Algorithm",
      href: "https://github.com/Priyansh19077/CP-Templates/blob/master/Graph%20Algorithms/FloydWarshall.cpp",
    },
    {
      title: "Prim's Algorithm",
      href: "https://github.com/Priyansh19077/CP-Templates/blob/master/Graph%20Algorithms/Prims.cpp",
    },
    {
      title: "Kruskal's Algorithm",
      href: "https://github.com/striver79/Competitive_Codes-/blob/master/kruskal.cpp",
    },
    {
      title: "Topological Sorting",
      href: "https://github.com/striver79/Competitive_Codes-/blob/master/toposort.cpp",
    },
    {
      title: "Cycle Detection",
      href: "https://github.com/striver79/Competitive_Codes-/blob/master/toposort.cpp",
    },
    {
      title: "Kosaraju Algorithm",
      href: "https://github.com/Priyansh19077/CP-Templates/blob/master/Graph%20Algorithms/4.KosaRaju_Algo_SCC.cpp",
    },
    {
      title: "Disjoint Set Union",
      href: "https://github.com/Priyansh19077/CP-Templates/blob/master/Graph%20Algorithms/4.KosaRaju_Algo_SCC.cpp",
    },
  ];

  const modularArithmeticTopics = [
    {
      title: "Modular Addition",
      href: "https://github.com/niteshsaxena03/CP/blob/main/Modular%20Arithmetic/Modular%20addition",
    },
    {
      title: "Modular Subtraction",
      href: "https://github.com/niteshsaxena03/CP/blob/main/Modular%20Arithmetic/Modular%20Substraction",
    },
    {
      title: "Modular Multiplication",
      href: "https://github.com/niteshsaxena03/CP/blob/main/Modular%20Arithmetic/Modular%20multiplication",
    },
    {
      title: "Modular Division",
      href: "https://github.com/niteshsaxena03/CP/blob/main/Modular%20Arithmetic/Modular%20Division",
    },
    {
      title: "Modular Exponentiation",
      href: "https://github.com/niteshsaxena03/CP/blob/main/Modular%20Arithmetic/Modular%20Exponentiation",
    },
    {
      title: "Extended GCD",
      href: "https://github.com/niteshsaxena03/CP/blob/main/Modular%20Arithmetic/Extended%20GCD",
    },
    {
      title: "Inverse Modulo",
      href: "https://github.com/niteshsaxena03/CP/blob/main/Modular%20Arithmetic/Inverse%20Modulo",
    },
    {
      title: "nCr using MOD",
      href: "https://github.com/niteshsaxena03/CP/blob/main/Modular%20Arithmetic/nCr%20using%20mod",
    },
  ];

  const bitManipulationTopics = [
    {
      title: "Set Bits",
      href: "https://github.com/niteshsaxena03/CP/blob/main/Bit%20Manipulation/Set%20Bits",
    },
    {
      title: "Bit Parity",
      href: "https://github.com/niteshsaxena03/CP/blob/main/Bit%20Manipulation/Bit%20Parity",
    },
    {
      title: "Leading Zero Bits",
      href: "https://github.com/niteshsaxena03/CP/blob/main/Bit%20Manipulation/Leading%20Zero%20Bits",
    },
    {
      title: "Trailing Zero Bits",
      href: "https://github.com/niteshsaxena03/CP/blob/main/Bit%20Manipulation/Trailing%20Zero%20Bits",
    },
    {
      title: "First Set Bit",
      href: "https://github.com/niteshsaxena03/CP/blob/main/Bit%20Manipulation/First%20Set%20Bit",
    },
    {
      title: "Last Set Bit",
      href: "https://github.com/niteshsaxena03/CP/blob/main/Bit%20Manipulation/Last%20Set%20Bit",
    },
    {
      title: "Decimal to Binary Conversion",
      href: "https://github.com/niteshsaxena03/CP/blob/main/Bit%20Manipulation/Decimal%20to%20Binary",
    },
    {
      title: "Binary to Decimal Conversion",
      href: "https://github.com/niteshsaxena03/CP/blob/main/Bit%20Manipulation/Binary%20to%20Decimal",
    },
    {
      title: "Check power of 2",
      href: "https://github.com/niteshsaxena03/CP/blob/main/Bit%20Manipulation/Check%20Power%20of%20Two",
    },

    {
      title: "31-Bit Binary String Representation",
      href: "https://github.com/niteshsaxena03/CP/blob/main/Bit%20Manipulation/Decimal%20to%20Binary%2031%20bits",
    },
    {
      title: "Check if Bit is Set",
      href: "https://github.com/niteshsaxena03/CP/blob/main/Bit%20Manipulation/Check%20if%20a%20bit%20is%20set%20or%20not",
    },
    {
      title: "Setting a Bit",
      href: "https://github.com/niteshsaxena03/CP/blob/main/Bit%20Manipulation/Setting%20a%20particular%20bit",
    },
    {
      title: "Unsetting a Bit",
      href: "https://github.com/niteshsaxena03/CP/blob/main/Bit%20Manipulation/Unsetting%20a%20bit",
    },
    {
      title: "Toggling a Bit",
      href: "https://github.com/niteshsaxena03/CP/blob/main/Bit%20Manipulation/Toggling%20a%20bit",
    },
  ];

  const treeAlgorithmsTopics = [
    {
      title: "Binary Lifting",
      href: "https://github.com/Priyansh19077/CP-Templates/blob/master/Tree%20Algorithms/Binary_Lifting.cpp",
    },
    {
      title: "Heavy-Light Decomposition (HLD)",
      href: "https://github.com/Priyansh19077/CP-Templates/blob/master/Tree%20Algorithms/HLD.cpp",
    },
    {
      title: "Lowest Common Ancestor (LCA)",
      href: "https://github.com/Priyansh19077/CP-Templates/blob/master/Tree%20Algorithms/LCA_tree.cpp",
    },
    {
      title: "Tree Centroid Decomposition",
      href: "https://github.com/Priyansh19077/CP-Templates/blob/master/Tree%20Algorithms/Centroid_Tree.cpp",
    },
  ];

  const rangeQueryTopics = [
    {
      title: "Segment Tree",
      href: "https://github.com/Priyansh19077/CP-Templates/blob/master/Range%20Queries/Segment_tree.cpp",
    },
    {
      title: "Lazy Propagation",
      href: "https://github.com/Priyansh19077/CP-Templates/blob/master/Range%20Queries/Lazy_SGT.cpp",
    },
    {
      title: "Mo's Algorithm",
      href: "https://github.com/Priyansh19077/CP-Templates/blob/master/Range%20Queries/Mo_algo.cpp",
    },
    {
      title: "Sparse Table",
      href: "https://github.com/Priyansh19077/CP-Templates/blob/master/Range%20Queries/Sparse_Table.cpp",
    },
  ];

  const stringMatchingTopics = [
    {
      title: "KMP Algorithm",
      href: "https://github.com/striver79/Competitive_Codes-/blob/master/kmp.cpp",
    },
    {
      title: "Rabin-Karp Algorithm",
      href: "https://github.com/striver79/Competitive_Codes-/blob/master/rabin_karp.cpp",
    },
    {
      title: "Z Algorithm",
      href: "https://github.com/Priyansh19077/CP-Templates/blob/master/String%20Algorithms/ZAlgirthm.cpp",
    },
    {
      title: "Suffix Array",
      href: "https://github.com/Priyansh19077/CP-Templates/blob/master/String%20Algorithms/Suffix_array.cpp",
    },
    {
      title: "Prefix Function",
      href: "https://github.com/Priyansh19077/CP-Templates/blob/master/String%20Algorithms/Prefix_Function.cpp",
    },
    {
      title: "String Hashing",
      href: "https://github.com/Priyansh19077/CP-Templates/blob/master/String%20Algorithms/String_Hashing.cpp",
    },
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
