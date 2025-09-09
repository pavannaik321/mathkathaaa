import { ArrowRight } from "lucide-react";

export default function Workshops() {
    const workshops = [
        {
            title: "Book a Workshop",
            desc: "Engaging, story-driven math sessions for your audience.",
            extra:
                "Our workshops bring math to life through immersive storytelling, interactive activities, and problem-solving games. Learners not only understand concepts, but also experience the journey of discovery behind them.",
            bullets: [
                "Tailored for age group & audience",
                "Hands-on activities & stories",
                "Break fear & spark curiosity",
                "Perfect for classrooms, colleges, or teams"
            ],
            tags: ["Schools", "Colleges", "Corporates", "Learning Spaces"],
            promise: "Every session is designed to make math memorable & joyful.",
            cta: "Book Now",
            color: "bg-white",
            span: "row-span-2 col-span-2",
            highlight: true,
        }
        ,
        {
            title: "Invite Us",
            desc: "Schools | Colleges | Corporates | Any learning space.",
            color: "bg-purple-400",
        },
        {
            title: "Inside the Session",
            desc: "Math stories meet the concepts they shaped.",
            color: "bg-red-400",
        },
        {
            title: "Why It Matters",
            desc: "Uncover math’s creativity, struggles, and human side.",
            color: "bg-blue-400",
        },
        {
            title: "Your Experience",
            desc: "Pick themes, formats, and topics that fit your needs.",
            color: "bg-green-400",
        },
    ];

    return (
        <section className="py-20 bg-[#0F3D3E]">
            <div className="max-w-7xl mx-auto px-6">
                <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-10">
                    Workshops
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[200px]">
                    {workshops.map((item, i) => (
                        <div
                            key={i}
                            className={`rounded-2xl p-6 flex flex-col justify-between ${item.highlight
                                    ? `${item.color} text-black relative overflow-hidden`
                                    : "bg-white text-black"
                                } ${item.span || ""}`}
                        >
                            <div>
                                <h3 className="text-2xl font-bold">{item.title}</h3>
                                <p className="mt-3 text-sm leading-relaxed">{item.desc}</p>

                                {item.extra && (
                                    <p className="mt-4 text-sm leading-relaxed opacity-90">
                                        {item.extra}
                                    </p>
                                )}
                                {item.bullets && (
                                    <ul className="mt-4 space-y-2 text-sm">
                                        {item.bullets.map((point, idx) => (
                                            <li key={idx} className="flex items-start gap-2">
                                                <span className="text-black">✔</span>
                                                <span>{point}</span>
                                            </li>
                                        ))}
                                    </ul>
                                )}

                                {item.tags && (
                                    <div className="mt-4 flex flex-wrap gap-2">
                                        {item.tags.map((tag, idx) => (
                                            <span
                                                key={idx}
                                                className="px-3 py-1 bg-black/10 rounded-full text-xs font-medium"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                )}


                            </div>

                            <div className="mt-6 flex items-center gap-3">
                                <button
                                    className={`px-4 py-2 rounded-full font-semibold text-sm flex items-center gap-2 transition ${item.highlight
                                            ? "bg-black text-white hover:bg-gray-800"
                                            : "bg-black text-white hover:bg-black/30 hover:text-black"
                                        }`}
                                >
                                    {item.cta || "Learn More"}
                                    <ArrowRight className="w-4 h-4" />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
