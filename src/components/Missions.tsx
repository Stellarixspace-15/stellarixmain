const missions = [
  {
    image: "https://drive.google.com/file/d/1Ef6W1yad8AVfJ3TxVVbZULoQtIfzUAT7/view?usp=drive_link",
    title: "Earth Based Module",
    date: "2025",
    description: "Earth Based Module for Re-Generative Agriculture"
  },
  {
    image: "https://images.unsplash.com/photo-1454789548928-9efd52dc4031?auto=format&fit=crop&q=80",
    title: "Project SSPC1",
    date: "2025",
    description: "Space Based Module for Controlled Environment Agriculture"
  },
  {
    image: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?auto=format&fit=crop&q=80",
    title: "Mars Initiative",
    date: "2026",
    description: "Pioneering missions for Mars exploration and colonization"
  }
];

export default function Missions() {
  return (
    <div id="missions" className="bg-black py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">Our Missions</h2>
          <p className="mt-4 text-xl text-gray-400">
            Pushing the boundaries of space exploration
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-12 lg:grid-cols-3">
          {missions.map((mission, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-lg"
            >
              <div className="aspect-w-16 aspect-h-9">
                <img
                  src={mission.image}
                  alt={mission.title}
                  className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent">
                <div className="absolute bottom-0 p-6">
                  <div className="text-blue-400 font-semibold">{mission.date}</div>
                  <h3 className="text-xl font-bold text-white mt-2">{mission.title}</h3>
                  <p className="text-gray-300 mt-2">{mission.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
