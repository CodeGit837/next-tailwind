export default function Hero() {
  return (
    <section
      id="home"
      className="pt-24 pb-16 bg-gradient-to-b from-orange-50 to-white"
    >
      <div className="container mx-auto px-6 py-16 text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-8">
          Welcome to Our Platform
        </h1>
        <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
          We help businesses grow and succeed in the digital world with
          innovative solutions and cutting-edge technology.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="px-8 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition">
            Get Started
          </button>
          <button className="px-8 py-3 border-2 border-orange-500 text-orange-500 rounded-lg hover:bg-orange-50 transition">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}
