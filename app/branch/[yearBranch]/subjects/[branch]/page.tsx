import CardWithSelect from "@/components/CardSelectComponent";

export default async function SubjectPage({
  params,
}: {
  params: Promise<{ branch: string; yearBranch: string }>;
}) {
  const { branch, yearBranch } = await params;

  const subjectsYearWise: Record<
    string,
    Record<
      string,
      {
        name: string;
        image: string;
        pyqLink: string;
        notesLink: string;
        playlistLink: string;
        roadmap: string;
      }[]
    >
  > = {
    PhysicsCycle: {
      first: [
        {
          name: "Engineering Materials & Mechanics",
          image: "/EMM.png",
          pyqLink:
            "https://drive.google.com/drive/u/0/folders/1w54A2Vd87DQtFwEoUuy8m0nX9rANb4RA",
          notesLink:
            "https://drive.google.com/drive/u/0/folders/1nxBvjZVxG2QL4W_B8skkg4z-VYibmF7n",
          playlistLink:
            "https://www.youtube.com/watch?v=3-4wNORPjXY&list=PLDN15nk5uLiBwwGZKmNzKJIRh4E0G9cfx",
          roadmap:
            "https://res.cloudinary.com/dndyofbi8/image/upload/v1741887269/RoadMaps/lbx5d6voz4tthryaqhmv.png",
        },
        {
          name: "Biology For Engineers",
          image: "/Biology.png",
          pyqLink:
            "https://drive.google.com/drive/u/0/folders/1kNkblB1RDznXNJmehDohPTvMGckCHAfY",
          notesLink:
            "https://drive.google.com/drive/u/0/folders/178MPsfJrZA6TSfvdAbdpcjww1KFAeXiL",
          playlistLink: "",
          roadmap:
            "https://res.cloudinary.com/dndyofbi8/image/upload/v1741887269/RoadMaps/o4vwis57ft48pox5if44.png",
        },
        {
          name: "Engineering Physics",
          image: "/Physics.png",
          pyqLink:
            "https://drive.google.com/drive/u/0/folders/1cdiHPynlmRHmneEPs7P6EV1DB7wzQGsh",
          notesLink:
            "https://drive.google.com/drive/u/0/folders/17txyc5ZmKvQepWdVK1TCnJQgxaoou6Ke",
          playlistLink:
            "https://www.youtube.com/watch?v=mDh7KWFBPXQ&list=PLnU_6InKwomFPUn1k5np6NtnoU38TW2PT",
          roadmap:
            "https://res.cloudinary.com/dndyofbi8/image/upload/v1741887268/RoadMaps/z18vg5vuoqvpp06tqeio.png",
        },
        {
          name: "Computational Mathematics",
          image: "/C&M.png",
          pyqLink:
            "https://drive.google.com/drive/u/0/folders/1wE3l2pM-frCwyFS8DaRIW13-XCbmnAmv",
          notesLink:
            "https://drive.google.com/drive/u/0/folders/17PMTzl-T1TOhnpWUxlVwIkY7OGhDM7TO",
          playlistLink:
            "https://www.youtube.com/watch?v=rWyTk9eubKM&list=PLU6SqdYcYsfLrTna7UuaVfGZYkNo0cpVC",
          roadmap:
            "https://res.cloudinary.com/dndyofbi8/image/upload/v1741887267/RoadMaps/ubzhdxxlucajxgatioal.png",
        },
        {
          name: "MATLAB",
          image: "/MATLAB.png",
          pyqLink:
            "https://drive.google.com/drive/u/0/folders/1d75bxh_L7JvAKNheNZ3c6YOeqikO1CTB",
          notesLink:
            "https://drive.google.com/drive/u/0/folders/1VVt2FfnbjhGTebrL7ditH--K_BfWMJZa",
          playlistLink:
            "https://www.youtube.com/watch?v=7f50sQYjNRA&pp=ygUPbWF0bGFiIG9uZSBzaG90",
          roadmap:
            "https://res.cloudinary.com/dndyofbi8/image/upload/v1741887267/RoadMaps/rvhpz7ufrtmeyawulyxt.png",
        },
      ],
    },
    ChemistryCycle: {
      first: [
        {
          name: "Calculus & Matrices",
          image: "/Calculus&Matrices.png",
          pyqLink:
            "https://drive.google.com/drive/folders/1Pr_H4-fb_80Jo6Du96qIIpa6FIVEDTNm",
          notesLink:
            "https://drive.google.com/drive/folders/1sC2cCnpEBGosunT4snNZf2Y8pUj5-uqV",
          playlistLink:
            "https://www.youtube.com/watch?v=p5rBJj5CKCg&list=PLU6SqdYcYsfLPxjd-k-MaoG7qgRQ-2fKc",
          roadmap:
            "https://res.cloudinary.com/dndyofbi8/image/upload/v1741887267/RoadMaps/ongrvhynp6lryhvrsua5.png",
        },
        {
          name: "Electrical & Electronics System",
          image: "/Electrical&ElectronicsSystem.png",
          pyqLink:
            "https://drive.google.com/drive/folders/1T2KhOCchylff1UyLZ2jyipmGmHtDx1Sd",
          notesLink:
            "https://drive.google.com/drive/folders/1JnVhkK5vg93hTzYq11Cr7NE8seneqdU1",
          playlistLink:
            "https://www.youtube.com/watch?v=Vd2UJiIPbag&list=PL9RcWoqXmzaLTYUdnzKhF4bYug3GjGcEc",
          roadmap:
            "https://res.cloudinary.com/dndyofbi8/image/upload/v1741887269/RoadMaps/bybkj1x0juxncpvtij3m.png",
        },
        {
          name: "Engineering Chemistry",
          image: "/Chemistry.png",
          pyqLink:
            "https://drive.google.com/drive/folders/1pP4zpZHNyD9Zp1peFPRYePpMXvwEWZCV",
          notesLink:
            "https://drive.google.com/drive/folders/1hER7WzvapxKzG4i3pIayLRU3ICTYwjSF",
          playlistLink:
            "https://www.youtube.com/watch?v=XCZakSI-M0I&list=PLLf6O8XdGj03gLo6znlqJbMzgIgt8tSU1",
          roadmap:
            "https://res.cloudinary.com/dndyofbi8/image/upload/v1741887268/RoadMaps/oyi0gutsftteevvthtl3.png",
        },
        {
          name: "Problem Solving using Computers",
          image: "/PSUC.png",
          pyqLink:
            "https://drive.google.com/drive/folders/14E0SRP4X0EbccxY9jMo44E7_zlUEARJb",
          notesLink:
            "https://drive.google.com/drive/folders/1nj16NcCCIgI3kmmkT-eisrKg_BKN2yKA",
          playlistLink:
            "https://www.youtube.com/watch?v=aZb0iu4uGwA&t=8493s&pp=ygUdYyBsYW5ndWFnZSBmb3IgYnRlY2ggMXN0IHllYXI%3D",
          roadmap:
            "https://res.cloudinary.com/dndyofbi8/image/upload/v1741887267/RoadMaps/jkguajp0hhuepbv0mnps.png",
        },
        {
          name: "Technical Writing using Computers",
          image: "/TWC.png",
          pyqLink:
            "https://drive.google.com/drive/folders/1Ka7AT18HKHu_WjIBSoloGI_9VHm-ar5t",
          notesLink:
            "https://drive.google.com/drive/folders/1y-t8alIoH2J7w_f1vBWYTWKcYkpHAIDV",
          playlistLink: "",
          roadmap: "",
        },
      ],
    },
    IT: {
      second: [
        {
          name: "Economics",
          image: "/images/economics.jpg",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
          roadmap: "",
        },
        {
          name: "Engineering Mathematics - 3",
          image: "/images/em3.jpg",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
          roadmap: "",
        },
        {
          name: "Data Communication",
          image: "/images/data-com.jpg",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
          roadmap: "",
        },
        {
          name: "Computer System Architecture",
          image: "/images/csa.jpg",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
          roadmap: "",
        },
        {
          name: "Object-Oriented Programming",
          image: "/images/oop.jpg",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
          roadmap: "",
        },
        {
          name: "Engineering Mathematics - 4",
          image: "/images/em4.jpg",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
          roadmap: "",
        },
        {
          name: "Operating Systems",
          image: "/images/os.jpg",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
          roadmap: "",
        },
        {
          name: "Relational Database Management Systems",
          image: "/images/rdbms.jpg",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
          roadmap: "",
        },
        {
          name: "Web Technologies",
          image: "/images/web-tech.jpg",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
          roadmap: "",
        },
        {
          name: "Data Structures and Algorithms",
          image: "/images/dsa.jpg",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
          roadmap: "",
        },
        {
          name: "Management of Technology",
          image: "/images/mot.jpg",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
          roadmap: "",
        },
      ],
      third: [
        {
          name: "Foundation of Data Science",
          image: "/3_IT/FDS.png",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
          roadmap: "",
        },
        {
          name: "Software Engineering",
          image: "/3_IT/SE.png",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
          roadmap: "",
        },
        {
          name: "Design and Analysis of Algorithms",
          image: "/3_CCE/DAA.png",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
          roadmap: "",
        },
        {
          name: "Computer Networks",
          image: "/3_IT/CN.png",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
          roadmap: "",
        },
        {
          name: "Artificial Intelligence and Machine Learning",
          image: "/3_IT/AI_ML.png",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
          roadmap: "",
        },
        {
          name: "Automata & Compiler Design",
          image: "/3_IT/ACD.png",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
          roadmap: "",
        },
        {
          name: "CIS",
          image: "/3_IT/CIS.png",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
          roadmap: "",
        },
      ],
    },

    CSE: {
      second: [
        {
          name: "Economics",
          image: "/images/economics.jpg",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
          roadmap: "",
        },
        {
          name: "EM-3",
          image: "/images/em3.jpg",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
          roadmap: "",
        },
        {
          name: "Cryptography",
          image: "/images/economics.jpg",
          notesLink: "",
          playlistLink: "",
          roadmap: "",
          pyqLink:
            "https://drive.google.com/drive/folders/1GhfJBD036iUIJBaFPo6JRdy8_n22d2fx",
        },
        {
          name: "Data Com",
          image: "/images/data-com.jpg",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
          roadmap: "",
        },
        {
          name: "CSA",
          image: "/images/csa.jpg",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
          roadmap: "",
        },
        {
          name: "OOP",
          image: "/images/oop.jpg",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
          roadmap: "",
        },
      ],
      third: [
        {
          name: "AISC",
          image: "/3_CSE/AISC.png",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
          roadmap: "",
        },
        {
          name: "Design & Analysis of Algorithms",
          image: "/3_CSE/DAA.png",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
          roadmap: "",
        },
        {
          name: "Automata & Compiler Design",
          image: "/3_CSE/ACD.png",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
          roadmap: "",
        },
        {
          name: "Computer Networks",
          image: "/3_CSE/CN.png",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
          roadmap: "",
        },
        {
          name: "Software Engineering",
          image: "/3_CSE/SE.png",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
          roadmap: "",
        },
        {
          name: "ISS",
          image: "/3_CSE/ISS.png",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
          roadmap: "",
        },
        {
          name: "Data Science & ML",
          image: "/3_CSE/DS&ML.png",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
          roadmap: "",
        },
      ],
    },
    CCE: {
      second: [
        {
          name: "Economics",
          image: "/2_CCE/Economics.png",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
          roadmap: "",
        },
        {
          name: "Engineering Mathematics - 3",
          image: "/2_CCE/EM3.png",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
          roadmap: "",
        },
        {
          name: "Data Communication",
          image: "/2_CCE/DataCom.png",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
          roadmap: "",
        },
        {
          name: "Digital Design and Computer Architecture",
          image: "/2_CCE/DDCA.png",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
          roadmap: "",
        },
        {
          name: "Object-Oriented Programming",
          image: "/2_CCE/OOP.png",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
          roadmap: "",
        },
        {
          name: "Engineering Mathematics - 4",
          image: "/2_CCE/EM4.png",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
          roadmap: "",
        },
        {
          name: "Operating Systems",
          image: "/2_CCE/OS.png",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
          roadmap: "",
        },
        {
          name: "Relational Database Management Systems",
          image: "/2_CCE/RDBMS.png",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
          roadmap: "",
        },
        {
          name: "Computer Networks",
          image: "/2_CCE/CN.png",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
          roadmap: "",
        },
        {
          name: "Data Structures and Algorithms",
          image: "/2_CCE/DSA.png",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
          roadmap: "",
        },
        {
          name: "Management and Organizational Theory",
          image: "/2_CCE/MOT.png",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
          roadmap: "",
        },
      ],
      third: [
        {
          name: "Foundation of Data Science",
          image: "/3_CCE/FDS.png",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
          roadmap: "",
        },
        {
          name: "Software Engineering",
          image: "/3_CCE/SE.png",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
          roadmap: "",
        },
        {
          name: "Design and Analysis of Algorithms",
          image: "/3_CCE/DAA.png",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
          roadmap: "",
        },
        {
          name: "Automata and Compiler Design",
          image: "/3_CCE/ACD.png",
          pyqLink: "",
          roadmap: "",
          notesLink: "",
          playlistLink: "",
        },
        {
          name: "Wirless Communication",
          image: "/3_CCE/WC.png",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
          roadmap: "",
        },
        {
          name: "Aritificial Intelligence & Machine Learning",
          image: "/3_CCE/AL_ML.png",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
          roadmap: "",
        },
      ],
    },
    AIML: {
      second: [
        {
          name: "Design and Analysis of Algorithms",
          image: "/2_AIML/DAA.png",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
          roadmap: "",
        },
        {
          name: "Operating Systems",
          image: "/2_AIML/OS.png",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
          roadmap: "",
        },
        {
          name: "Agile Software Development",
          image: "/2_AIML/ASD.png",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
          roadmap: "",
        },
        {
          name: "Cloud Computing",
          image: "/2_AIML/CC.png",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
          roadmap: "",
        },
        {
          name: "Statistics and Probability",
          image: "/2_AIML/SP.png",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
          roadmap: "",
        },
        {
          name: "Data Structures and Algorithms",
          image: "/2_AIML/DSA.png",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
          roadmap: "",
        },
        {
          name: "Relational Database Management Systems",
          image: "/2_AIML/RDBMS.png",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
          roadmap: "",
        },
        {
          name: "Object-Oriented Programming",
          image: "/2_AIML/OOP.png",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
          roadmap: "",
        },
        {
          name: "Management of Technology",
          image: "/2_AIML/MOT.png",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
          roadmap: "",
        },
        {
          name: "Principles of Artificial Intelligence",
          image: "/2_AIML/PAI.png",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
          roadmap: "",
        },
        {
          name: "Computer Organization and Architecture",
          image: "/2_AIML/COA.png",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
          roadmap: "",
        },
      ],
      third: [
        {
          name: "Soft Computing Methods",
          image: "/3_AIML/SCM.png",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
          roadmap: "",
        },
        {
          name: "Design and Analysis of Algorithms",
          image: "/3_AIML/DAA.png",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
          roadmap: "",
        },
        {
          name: "Computer Networks",
          image: "/3_AIML/CN.png",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
          roadmap: "",
        },
        {
          name: "Foundation of Data Science",
          image: "/3_AIML/FDS.png",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
          roadmap: "",
        },
        {
          name: "Game Theory",
          image: "/3_AIML/GT.png",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
          roadmap: "",
        },
        {
          name: "Machine Learning",
          image: "/3_AIML/ML.png",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
          roadmap: "",
        },
        {
          name: "Computer Vision",
          image: "/3_AIML/CV.png",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
          roadmap: "",
        },
        {
          name: "Natural Language Processing",
          image: "/3_AIML/NLP.png",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
          roadmap: "",
        },
        {
          name: "Data Mining",
          image: "/3_AIML/DM.png",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
          roadmap: "",
        },
        {
          name: "Fundamentals of Automobile Engineering",
          image: "/3_AIML/FAE.png",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
          roadmap: "",
        },
      ],
    },
    IOT: {
      second: [
        {
          name: "Engineering Mathematics - 3",
          image: "/2_AIML/EM3.png",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
          roadmap: "",
        },
        {
          name: "Digital Design and Computer Architecture",
          image: "/2_AIML/DDCA.png",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
          roadmap: "",
        },
        {
          name: "Data Communication",
          image: "/2_AIML/DataCom.png",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
          roadmap: "",
        },
        {
          name: "Data Structures and Algorithms",
          image: "/2_AIML/DSA.png",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
          roadmap: "",
        },
        {
          name: "Object-Oriented Programming",
          image: "/2_AIML/OOP.png",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
          roadmap: "",
        },
        {
          name: "Economics",
          image: "/2_AIML/Economics.png",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
          roadmap: "",
        },
        {
          name: "Engineering Mathematics - 4",
          image: "/2_AIML/EM4.png",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
          roadmap: "",
        },
        {
          name: "Operating Systems",
          image: "/2_AIML/OS.png",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
          roadmap: "",
        },
        {
          name: "Relational Database Management Systems",
          image: "/2_AIML/RDBMS.png",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
          roadmap: "",
        },
        {
          name: "Web Technologies",
          image: "/2_AIML/WebTech.png",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
          roadmap: "",
        },
        {
          name: "Management of Technology",
          image: "/2_AIML/MOT.png",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
          roadmap: "",
        },
        {
          name: "Automata and Compiler Design",
          image: "/2_AIML/ACD.png",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
          roadmap: "",
        },
      ],
      third: [
        {
          name: "Design and Analysis of Algorithms",
          image: "/3_IOT/DAA.png",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
          roadmap: "",
        },
        {
          name: "Artificial Intelligence and Machine Learning",
          image: "/3_IOT/AI_ML.png",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
          roadmap: "",
        },
        {
          name: "Sensors and Microcontrollers",
          image: "/3_IOT/S&M.png",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
          roadmap: "",
        },
        {
          name: "IoT Architecture & Its Protocols",
          image: "/3_IOT/IOTARCH.png",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
          roadmap: "",
        },
        {
          name: "Software Engineering",
          image: "/3_IOT/SE.png",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
          roadmap: "",
        },
        {
          name: "Cyber and Information Security",
          image: "/3_IOT/CIS.png",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
          roadmap: "",
        },
        {
          name: "IoT Design",
          image: "/3_IOT/IOT_DESIGN.png",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
          roadmap: "",
        },
        {
          name: "Deep Learning",
          image: "/3_IOT/DL.png",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
          roadmap: "",
        },
        {
          name: "Computer Networks",
          image: "/3_IOT/CN.png",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
          roadmap: "",
        },
      ],
    },
    DSE: {
      second: [
        {
          name: "MFDS-1",
          image: "/images/mfds1.jpg",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
          roadmap: "",
        },
        {
          name: "Finance & Econometrics",
          image: "/images/finance-econometrics.jpg",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
          roadmap: "",
        },
        {
          name: "Introduction to Data Analytics",
          image: "/images/intro-data-analytics.jpg",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
          roadmap: "",
        },
        {
          name: "Object-Oriented Programming",
          image: "/images/oop.jpg",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
          roadmap: "",
        },
        {
          name: "Data Structures and Algorithms",
          image: "/images/dsa.jpg",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
          roadmap: "",
        },
        {
          name: "Computer System Architecture",
          image: "/images/csa.jpg",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
          roadmap: "",
        },
        {
          name: "MFDS-2",
          image: "/images/mfds2.jpg",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
          roadmap: "",
        },
        {
          name: "Relational Database Management Systems",
          image: "/images/rdbms.jpg",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
          roadmap: "",
        },
        {
          name: "Machine Learning",
          image: "/images/ml.jpg",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
          roadmap: "",
        },
        {
          name: "Design and Analysis of Algorithms",
          image: "/images/daa.jpg",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
          roadmap: "",
        },
        {
          name: "Management of Technology",
          image: "/images/mot.jpg",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
          roadmap: "",
        },
        {
          name: "Data Mining",
          image: "/images/data-mining.jpg",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
          roadmap: "",
        },
        {
          name: "Cloud Computing",
          image: "/images/cloud-computing.jpg",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
          roadmap: "",
        },
        {
          name: "Data Analytics and Visualization",
          image: "/images/data-analytics-visualization.jpg",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
          roadmap: "",
        },
        {
          name: "Data Communication and Networking",
          image: "/images/dcn.jpg",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
          roadmap: "",
        },
        {
          name: "Digital Image Processing",
          image: "/images/dip.jpg",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
          roadmap: "",
        },
        {
          name: "Computer Networks",
          image: "/images/cn.jpg",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
          roadmap: "",
        },
        {
          name: "Statistics and Probability",
          image: "/images/stats-probability.jpg",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
          roadmap: "",
        },
      ],
      third: [
        {
          name: "MFDS-3",
          image: "/3_DSE/MFDS_3.png",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
          roadmap: "",
        },
        {
          name: "Deep Learning",
          image: "/3_DSE/DL.png",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
          roadmap: "",
        },
        {
          name: "Operating Systems",
          image: "/3_DSE/OS.png",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
          roadmap: "",
        },
        {
          name: "Natural Language Processing",
          image: "/3_DSE/NLP.png",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
          roadmap: "",
        },
        {
          name: "Cloud Computing",
          image: "/3_DSE/CC.png",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
          roadmap: "",
        },
        {
          name: "Operations Research",
          image: "/3_DSE/OR.png",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
          roadmap: "",
        },
        {
          name: "Artificial Intelligence",
          image: "/3_DSE/AI.png",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
          roadmap: "",
        },
        {
          name: "Parallel Programming",
          image: "/3_DSE/PP.png",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
          roadmap: "",
        },
        {
          name: "Big Data Analytics",
          image: "/3_DSE/BDA.png",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
          roadmap: "",
        },
        {
          name: "Data Privacy and Security",
          image: "/3_DSE/DPS.png",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
          roadmap: "",
        },
      ],
    },
  };
  console.log(yearBranch + " " + branch);
  const subjects = subjectsYearWise[branch]?.[yearBranch];

  const renderSubjects = (
    subjects:
      | {
        name: string;
        image: string;
        pyqLink: string;
        notesLink: string;
        playlistLink: string;
        roadmap: string;
      }[]
      | undefined
  ) => {
    if (!subjects) return <div>No subjects found</div>;
    return (
      <div className="min-h-screen px-4 py-4  bg-cover bg-center mt-12">
        <div
          className="p-10 text-black 
                  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 
                  gap-8"
        >
          {subjects.map(({ name, image, pyqLink, notesLink, playlistLink, roadmap }) => (
            <CardWithSelect
              key={name}
              subjectName={name}
              subjectImage={image}
              pyqLink={pyqLink}
              notesLink={notesLink}
              playlistLink={playlistLink}
              roadmap={roadmap}
            />
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen px-4 py-4 bg-[url('/heroImage.webp')] bg-cover bg-center mt-12">
      {renderSubjects(subjects)}
    </div>
  );
}
