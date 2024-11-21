import { Satellite, Rocket, Globe2, Binary } from 'lucide-react';

const services = [
  {
    icon: Satellite,
    title: 'Satellite Systems',
    description: 'Advanced satellite technology for communication, navigation, and Earth observation.'
  },
  {
    icon: Rocket,
    title: 'Launch Services',
    description: 'Reliable and cost-effective launch solutions for various payload requirements.'
  },
  {
    icon: Globe2,
    title: 'Space Research',
    description: 'Cutting-edge research in space science and exploration technologies.'
  },
  {
    icon: Binary,
    title: 'Data Analytics',
    description: 'Comprehensive space data analysis and insights for informed decision-making.'
  }
];

export default function Services() {
  return (
    <div id="services" className="bg-gray-900 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">Our Services</h2>
          <p className="mt-4 text-xl text-gray-400">
            Comprehensive space solutions for the modern age
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative group bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition-colors duration-300"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg blur opacity-0 group-hover:opacity-100 transition duration-300"></div>
              <div className="relative flex flex-col items-center">
                <service.icon className="h-12 w-12 text-blue-500" />
                <h3 className="mt-6 text-xl font-semibold text-white">{service.title}</h3>
                <p className="mt-4 text-gray-400 text-center">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}