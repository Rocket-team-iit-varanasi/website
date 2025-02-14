import HeroSection from '@/app/events/solidboost/home_page_card';
import Solidboost from '@/app/events/solidboost/home_page_card'

export default function Home() {
  return (
      <div>
      {/* Main Content */}
      <main className="flex-grow">
        {/* Hero Section */}
        <section>
          <div className="container mx-auto px-4 py-20 text-center">
            <h2 className="text-6xl font-extrabold text-gray-800 mb-2 text-left">
              Rocket Team
            </h2>
            <h3 className="text-xl text-gray-600 text-left">
              IIT BHU
            </h3>
          </div>
        </section>

        <HeroSection />

        {/* Features Section */}
        <section id="features" className="container mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-800">Our Projects</h3>
            <p className="text-gray-600 mt-4">
              Discover what we do and how we do it.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-white rounded-lg shadow">
              <h4 className="text-xl font-semibold mb-2">Engines</h4>
                <p className="text-gray-600">
                  Developing high performance optimized rocket engines.
                </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow">
              <h4 className="text-xl font-semibold mb-2">Aerodynamics</h4>
                <p className="text-gray-600">
                Optimizing design for maximum efficiency and performance.
                </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow">
              <h4 className="text-xl font-semibold mb-2">Avionics</h4>
                <p className="text-gray-600">
                Pioneering the future of flight with cutting-edge technology.
                </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
