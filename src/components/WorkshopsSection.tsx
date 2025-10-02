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
            color: "bg-[#0F3D3E]",
            span: "row-span-2 col-span-2",
            highlight: true,
        },
        {
            title: "Invite Us",
            desc: "Schools | Colleges | Corporates | Any learning space.",
            color: "bg-[#0F3D3E]",
        },
        {
            title: "Inside the Session",
            desc: "Math stories meet the concepts they shaped.",
            color: "bg-[#0F3D3E]",
        },
        {
            title: "Why It Matters",
            desc: "Uncover math’s creativity, struggles, and human side.",
            color: "bg-[#0F3D3E]",
        },
        {
            title: "Your Experience",
            desc: "Pick themes, formats, and topics that fit your needs.",
            color: "bg-[#0F3D3E]",
        },
    ];

    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-10">
                    Workshops
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[200px]">
                    {workshops.map((item, i) => (
                        <div
                            key={i}
                            className={`rounded-2xl p-6 flex flex-col justify-between text-white ${item.highlight
                                ? `${item.color} relative overflow-hidden`
                                : `${item.color} hover:opacity-90 transition-all duration-300`
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
                                                <span>✔</span>
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
                                                className="px-3 py-1 bg-white/20 rounded-full text-xs font-medium"
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
                                        ? "bg-white text-black hover:bg-gray-200"
                                        : "bg-white text-black hover:bg-gray-100"
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
