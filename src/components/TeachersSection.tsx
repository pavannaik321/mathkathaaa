// src/components/TeachersSection.tsx
import Image from "next/image";

type Teacher = {
  name: string;
  subject: string;
  image: string;
};

const teachers: Teacher[] = [
  {
    name: "Dr. Ananya Sharma",
    subject: "Mathematics",
    image: "/About/Teachers/teacher-1.jpg",
  },
  {
    name: "Mr. Rajesh Kumar",
    subject: "Physics",
    image: "/About/Teachers/teacher-2.jpg",
  },
  {
    name: "Ms. Priya Mehta",
    subject: "Chemistry",
    image: "/About/Teachers/teacher-3.jpg",
  },
  {
    name: "Mr. Arvind Rao",
    subject: "Biology",
    image: "/About/Teachers/teacher-4.png",
  },
  {
    name: "Ms. Kavya Nair",
    subject: "English",
    image: "/About/Teachers/teacher-1.jpg",
  },
  {
    name: "Mr. Suresh Patil",
    subject: "History",
    image: "/About/Teachers/teacher-2.jpg",
  },
  {
    name: "Dr. Neha Kapoor",
    subject: "Computer Science",
    image: "/About/Teachers/teacher-3.jpg",
  },
  {
    name: "Mr. Rohit Deshmukh",
    subject: "Economics",
    image: "/About/Teachers/teacher-4.png",
  },
];

export default function TeachersSection() {
  return (
    <section className="py-16 px-6 md:px-16 bg-white">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
          Meet Our Teachers
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-10">
          {teachers.map((teacher, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="w-28 h-28 md:w-32 md:h-32 relative mb-4">
                <Image
                  src={teacher.image}
                  alt={teacher.name}
                  fill
                  className="rounded-full object-cover"
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">
                {teacher.name}
              </h3>
              <p className="text-sm text-gray-600">{teacher.subject}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
