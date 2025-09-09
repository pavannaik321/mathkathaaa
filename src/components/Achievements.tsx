import Image from "next/image";

export default function AchievementsSection() {
  const achievements = [
    {
      title: "Research Fellow at Siemens",
      icon: "/About/Achievements/research.png", // microscope / research icon
    },
    {
      title: "JRF funded by Central Govt.",
      icon: "/About/Achievements/jfr.jpg", // govt funding / scholarship icon
    },
    {
      title: "PhD",
      icon: "/About/Achievements/phd.png", // graduation cap / degree icon
    },
    {
      title: "Multiple Research Papers",
      icon: "/About/Achievements/research_paper.webp", // papers / documents icon
    },
    {
      title: "GATE Qualified",
      icon: "/About/Achievements/gate.webp", // certificate / award icon
    },
    {
      title: "KSET Qualified",
      icon: "/About/Achievements/kset.png", // qualification icon
    },
    {
      title: "Olympiad Gold Medal",
      icon: "/About/Achievements/olympiad.png", // medal / trophy icon
    },
    {
      title: "Nature Portfolio Publication",
      icon: "/About/Achievements/nature.jpg", // journal / book icon
    },
  ];

  return (
    <div className="bg-white py-16">
      <div className="max-w-6xl mx-auto px-6">
        <h3 className="text-3xl font-bold text-center text-gray-900">
          Achievements & Highlights
        </h3>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
          {achievements.map((item, idx) => (
            <div
              key={idx}
              className="bg-gray-50 border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-lg transition duration-300 flex flex-col items-center"
            >
              <div className="w-16 h-16 relative mb-4">
                <Image
                  src={item.icon}
                  alt={item.title}
                  layout="fill"
                  objectFit="contain"
                />
              </div>
              <p className="text-gray-800 font-medium">{item.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
