import FeatureCard from "./FeatureCard";

const featureData = [
  {
    subtitle: "ADOBE PHOTOSHOP",
    title: "Work faster in Photoshop.",
    descriptions: [
      "Now with precise selections, instant color adjustments, and more.",
    ],
    buttonText: "Learn more",
    extraClasses: "bg-[#3b6efb] text-white",
  },
  {
    title: "Meet Acrobat AI Assistant.",
    descriptions: [
      "Ask your document questions. Get one-click summaries for fast insights, even on contracts.",
    ],
    buttonText: "Learn more",
    extraClasses: "bg-[#e42414] text-white",
  },
  {
    title: "Creative Cloud",
    descriptions: [
      "Creative Cloud Pro free trial.",
      "Creative Cloud for business.",
    ],
    buttonText: "Student pricing",
    contentSections: [
      {
        title: "Acrobat",
        items: ["Acrobat free trial", "Online PDF tools"],
      },
      {
        title: "Explore",
        items: ["View all products", "See all plans and pricing"],
      },
    ],
    extraClasses: "bg-[#8611e0] text-white",
  },
  {
    subtitle: "ADOBE EXPRESS",
    title: "Enhance your creative content. Even faster.",
    descriptions: [
      "Stand out even more with one-click animations, quick social clips, and effortless on-brand designs.",
    ],
    buttonText: "Get Adobe Express free",
    extraClasses:
      "bg-gradient-to-br from-[#f857a6] to-[#ff5858] text-white col-span-2",
  },
  {
    subtitle: "ADOBE FIREFLY",
    title: "The ultimate creative AI solution.",
    descriptions: [
      "Create images, video, audio, and vector graphics in the Firefly app.",
    ],
    buttonText: "Learn more",
    extraClasses: "bg-black text-white col-start-3",
  },
  {
    title: "Amazing apps. Endless possibilities.",
    descriptions: [
      "Create something beautiful, boost productivity, and deliver engaging experiences with Adobe software.",
    ],
    buttonText: "View all products",
    extraClasses: "bg-[#eeeeee] text-black",
  },
  {
    subtitle: "ADOBE GENSTUDIO FOR PERFORMANCE MARKETING",
    title: "Empower marketing teams.",
    descriptions: ["Generate high-performing on-brand campaign content."],
    buttonText: "Learn more",
    extraClasses: "bg-[#9376ff] text-white",
  },
  {
    subtitle: "In the news",
    extraClasses: "bg-[#eeeeee] text-black text-sm",
    descriptions: [],
    buttonText: null,
    contentSections: [
      {
        title: "Photoshop arrives on Android.",
        items: [
          "Create where inspiration strikes with the all-new Android app.",
        ],
      },
      {
        title: "Enter to win an Adobe MAX Creativity Award.",
        items: ["Share your best work. Submissions open until June 26."],
      },
      {
        title: "Introducing Firefly AI and Creative Cloud upgrades.",
        items: [
          "Adobe MAX London unveils new AI tools and performance boosts.",
        ],
      },
    ],
  },
];

const Features = () => {
  return (
    <div className="grid grid-cols-1 gap-5 p-10">
      {featureData.map((card, index) => (
        <FeatureCard key={index} {...card} />
      ))}
    </div>
  );
};

export default Features;
