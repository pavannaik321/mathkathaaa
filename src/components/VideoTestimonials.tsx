// src/components/VideoTestimonials.tsx
export default function VideoTestimonials() {
    return (
      <section className="py-16 bg-gray-50 text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-8">
          Hear Directly From Our Students
        </h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto px-6">
          {[1, 2, 3].map((video) => (
            <div
              key={video}
              className="bg-white rounded-xl shadow overflow-hidden aspect-video"
            >
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="Video Testimonial"
                allowFullScreen
              />
            </div>
          ))}
        </div>
      </section>
    );
  }
  