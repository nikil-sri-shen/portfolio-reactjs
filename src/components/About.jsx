import React from "react";
import { useState, useEffect } from "react";

const About = () => {
  const skillsData = [
    {
      name: "Ethereum",
      icon: "/icons/ethereum.png",
    },
    {
      name: "Web3.js",
      icon: "/icons/web3js.jpg",
    },
    {
      name: "Decentralized Application (DApp) Development",
      icon: "/icons/blockchain.png",
    },
    {
      name: "Consensus Algorithms",
      icon: "/icons/pow.png",
    },
    {
      name: "Hyperledger Fabric Development",
      icon: "/icons/hlf.png",
    },
    {
      name: "InterPlanetary File System (IPFS)",
      icon: "/icons/ipfs.png",
    },
    {
      name: "Solidity Smart Contracts",
      icon: "/icons/sol.png",
    },
    {
      name: "Truffle suite",
      icon: "/icons/truffle.png",
    },
    {
      name: "React js",
      icon: "/icons/react.png",
    },
    {
      name: "Node js",
      icon: "/icons/node.png",
    },
    {
      name: "Tailwindcss",
      icon: "/icons/tailwind.png",
    },
    {
      name: "Hardhat",
      icon: "/icons/hardhat.png",
    },
  ];
  const text = "  Hi! I'm Nikil. ";
  const speed = 100; // Typing speed in milliseconds
  const [typedText, setTypedText] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const [key, setKey] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  useEffect(() => {
    let i = 0;
    let cursorInterval;

    const typingInterval = setInterval(() => {
      if (i < text.length) {
        setTypedText((prevText) => prevText + text.charAt(i));
        i++;
      } else {
        clearInterval(typingInterval);
      }
    }, speed);

    cursorInterval = setInterval(() => {
      setShowCursor((prevShowCursor) => !prevShowCursor); // Toggle cursor visibility
    }, 500); // Toggle cursor every 500ms

    const handleScroll = () => {
      const button = document.getElementById("scrollToTopButton");
      if (button) {
        if (window.pageYOffset > 300) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener

    return () => {
      clearInterval(typingInterval);
      clearInterval(cursorInterval);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [key]);
  const resetComponent = () => {
    setTypedText("");
    setShowCursor(true);
    setKey((prevKey) => prevKey + 1); // Update the key to reset the component
  };

  useEffect(() => {
    resetComponent(); // Reset the component on initial mount
  }, []);
  return (
    <div className="p-16 md:p-24 xl:p-32">
      <p key={key} className="text-4xl md:text-7xl xl:text-9xl text-white">
        {typedText}
        {showCursor ? "|" : null}
      </p>
      <div class="p-8 md:p-24 xl:p-32 text-justify rounded-md">
        <h2 className="text-2xl md:text-3xl xl:text-4xl font-bold text-orange-500 mb-6">
          About Me
        </h2>
        <p className="text-base md:text-xl xl:text-2xl text-white mb-6">
          Hello, I'm Nikil Sri Shen, a passionate Blockchain Developer and
          Frontend Developer. With a strong foundation in blockchain
          technologies and a creative approach to frontend development, I am
          committed to delivering innovative solutions that empower businesses
          and individuals.{" "}
        </p>
        <p className="text-base md:text-xl xl:text-2xl text-white mb-6">
          I hold an undergraduate degree in Computer Science Engineering from
          Mepco Schlenk Engineering College. My academic journey has equipped me
          with a solid understanding of computer science principles, and I
          continue to apply this knowledge in my pursuit of excellence in the
          field.
        </p>
      </div>
      <div class="text-justify rounded-md">
        <h2 className="text-2xl md:text-3xl xl:text-4xl font-bold text-orange-500 mb-6 text-center">
          Projects
        </h2>
        <div className="grid grid-cols-1 grid-rows-2 gap-4 p-8 text-center">
          <div className="">
            <h4 className="text-sm md:text-lg xl:text-xl font-bold text-orange-500 mb-6 text-center">
              WikiChain: An Improved Resilient, Pseudo-Transparent Knowledge
              Base
            </h4>
            <p className="text-xs md:text-sm xl:text-lg text-justify">
              WikiChain is a revolutionary peer-to-peer encyclopedia built on
              the Ethereum blockchain and powered by the InterPlanetary File
              System (IPFS). It prioritizes decentralization, transparency, and
              democracy in collaborative knowledge creation. Unlike traditional
              platforms, WikiChain is resistant to censorship, ensuring
              universal access to knowledge. The platform's secure and scalable
              blockchain infrastructure stores Wikipedia's content, maintaining
              the integrity of encyclopedia entries. WikiChain features a
              user-friendly Decentralized Application (DApp) for article
              creation, editing, voting, and validation, democratizing knowledge
              management. The resilient consensus mechanism safeguards the
              encyclopedia's integrity by verifying transactions and preventing
              malicious activities. WikiChain represents a new era of
              knowledge-sharing, embodying principles of censorship-resistance,
              transparency, and inclusivity, offering a decentralized platform
              where knowledge is freely accessible to the global community.
            </p>
            <br />
            <br />
            <span className="text-xs md:text-sm xl:text-lg text-justify">
              Check out the project at 👇🏼
            </span>
            <br />
            <a
              href="https://wikichain-nikil.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="glow-text text-xs md:text-sm xl:text-lg text-justify"
            >
              WikiChain
            </a>
          </div>
          <div className="">
            <h4 className="text-sm md:text-lg xl:text-xl font-bold text-orange-500 mb-6 text-center">
              Pollution Under Control Certification
            </h4>
            <p className="text-xs md:text-sm xl:text-lg text-justify">
              The project addresses challenges in India's Pollution Under
              Control (PUC) certificate system by proposing a decentralized,
              blockchain-based solution integrated with Internet of Things (IoT)
              technology. The current PUC system faces issues of inconsistency,
              fraud, and security due to its decentralized nature. The proposed
              system utilizes IoT sensors in vehicles to collect real-time
              emission data, securely stored on the Ethereum blockchain to
              ensure immutability and transparency. Smart contracts automate PUC
              certificate issuance based on predefined emission criteria,
              reducing human error and enhancing operational efficiency.
              Ethereum tokens are introduced as incentives for prompt
              certificate renewal. The benefits include improved transparency,
              heightened security, uniform emission standards, and a reduction
              in fraudulent activities. Challenges include ensuring robust
              security, fault tolerance, nationwide consistency in emission
              standards, and user adoption. The project aims to revolutionize
              India's PUC system, making it more transparent, secure, and
              efficient, with cost benefits for vehicle owners.
            </p>
            <br />
            <br />
            <span className="text-xs md:text-sm xl:text-lg text-justify">
              Check out the project at 👇🏼
            </span>
            <br />
            <a
              href="https://puc-certificate.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="glow-text text-xs md:text-sm xl:text-lg text-justify"
            >
              Puc-Certificate
            </a>
          </div>
          <div className="">
            <h4 className="text-sm md:text-lg xl:text-xl font-bold text-orange-500 mb-6 text-center">
              ERC20 Token
            </h4>
            <p className="text-xs md:text-sm xl:text-lg text-justify">
              The NikToken project presents a solution to enhance the
              functionality and transparency of a decentralized token ecosystem,
              specifically addressing challenges associated with ERC20 tokens.
              Named NikToken with the symbol NIK, this project leverages the
              Ethereum blockchain to introduce a secure and efficient framework.
              With a fixed total supply of 1,000,000 tokens, NikToken seeks to
              establish a reliable and transparent token system.
            </p>
            <br />
            <br />
            <span className="text-xs md:text-sm xl:text-lg text-justify">
              Check out the project at 👇🏼
            </span>
            <br />
            <a
              href="https://github.com/nikil-sri-shen/niktoken"
              target="_blank"
              rel="noopener noreferrer"
              className="glow-text text-xs md:text-sm xl:text-lg text-justify"
            >
              NikToken - ERC20 Token
            </a>
          </div>
        </div>
      </div>
      <div className="p-8 md:p-24 xl:p-32 text-center">
        <h2 className="text-2xl md:text-3xl xl:text-4xl font-bold text-orange-500 mb-6">
          Skills
        </h2>
        <div className="md:grid md:grid-cols-2 md:grid-rows2 md:gap-4 xl:grid xl:grid-cols-4 xl:grid-rows-2 xl:gap-4 p-8">
          {skillsData.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col justify-center items-center p-6 rounded-md shadow-3xl transition-all duration-300 hover:shadow-md"
            >
              <img
                src={skill.icon}
                alt={skill.name}
                className="w-20 h-25 mb-2"
              />
              <h3 className="text-sm md:text-lg xl:text-xl font-semibold mb-2">
                {skill.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
      <div className="fixed bottom-0 transform -translate-x-1/2 mb-8 ml-8 md:mb-8 md:ml-2 xl:mb-8 xl:ml-0">
        <a
          href="https://drive.google.com/file/d/1tJ-dsd-t8oK72vO45wJr4wEpfe1yiHQN/view?usp=sharing" // Replace with the actual path to your resume file
          target="_blank"
          rel="noopener noreferrer"
          className="resume text-white px-4 py-2 rounded-full text-xs transition-all duration-300"
        >
          Download Resume 👇🏼
        </a>
      </div>
      <div
        className={`fixed bottom-0 right-0 mb-8 mr-8 ${
          isVisible ? "visible" : "invisible"
        }`}
      >
        <button
          id="scrollToTopButton"
          onClick={scrollToTop}
          className="topbtn text-white px-4 py-2 rounded-full text-xs transition-all duration-300"
        >
          Top 👆🏼
        </button>
      </div>
    </div>
  );
};

export default About;
