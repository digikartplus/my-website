export default function MahadevSmartCareWebsite() {
  const services = [
    "AC Repair & Service",
    "AC Installation & Uninstallation",
    "AC Gas Filling",
    "Refrigerator Repair",
    "Washing Machine Repair",
    "Microwave Oven Repair",
    "Geyser Repair & Installation",
    "RO Water Purifier Repair",
    "Commercial HVAC Services",
    "AC Rental Services",
    "Emergency Home Appliance Repair",
    "Filter & Coil Deep Cleaning",
  ];

  const brands = [
    "LG",
    "Samsung",
    "Voltas",
    "Whirlpool",
    "Godrej",
    "Blue Star",
    "Panasonic",
    "Daikin",
  ];

  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 via-blue-700 to-cyan-500 text-white py-16 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
              Mahadev Smart Care
            </h1>

            <p className="text-xl md:text-2xl font-semibold mb-4">
              AC, Fridge, Washing Machine, Microwave Oven & Geyser Repair Services in Jodhpur
            </p>

            <p className="text-lg mb-6 text-blue-100 leading-relaxed">
              Fast Service • Affordable Charges • Same-Day Repair • Expert Technicians
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="tel:9610248701"
                className="bg-white text-blue-800 px-6 py-3 rounded-2xl font-bold shadow-lg hover:scale-105 transition"
              >
                📞 Call Now
              </a>

              <a
                href="https://wa.me/919610248701"
                target="_blank"
                className="bg-green-500 text-white px-6 py-3 rounded-2xl font-bold shadow-lg hover:scale-105 transition"
              >
                WhatsApp Booking
              </a>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-white/20">
            <h2 className="text-3xl font-bold mb-6 text-center">
              Why Choose Us?
            </h2>

            <div className="space-y-4 text-lg">
              <div>✅ AC Service Charge Just ₹250</div>
              <div>✅ AC Installation Just ₹500</div>
              <div>✅ Same-Day Home Service</div>
              <div>✅ Professional Technicians</div>
              <div>✅ Genuine Spare Parts</div>
              <div>✅ Quick Cooling & Gas Filling</div>
              <div>✅ Residential & Commercial Services</div>
              <div>✅ AC Rental Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              Our Services
            </h2>
            <p className="text-gray-600 text-lg">
              Complete Home Appliance Repair & Maintenance Solutions
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-3xl p-6 shadow-md hover:shadow-xl transition border border-gray-100"
              >
                <div className="text-3xl mb-4">🔧</div>
                <h3 className="text-xl font-bold mb-2">{service}</h3>
                <p className="text-gray-600">
                  Professional repair and maintenance service with expert support.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AC Special Section */}
      <section className="py-16 px-6 bg-blue-50">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div>
            <img
              src="https://images.unsplash.com/photo-1621905251918-48416bd8575a?q=80&w=1200&auto=format&fit=crop"
              alt="AC Repair"
              className="rounded-3xl shadow-2xl w-full h-[420px] object-cover"
            />
          </div>

          <div>
            <h2 className="text-4xl font-bold mb-6 text-blue-900">
              No.1 AC Repair & Service in Jodhpur
            </h2>

            <div className="space-y-4 text-lg text-gray-700">
              <p>✔ Deep AC Cleaning & Maintenance</p>
              <p>✔ Cooling Problem Solution</p>
              <p>✔ AC Gas Filling & Leakage Check</p>
              <p>✔ Indoor & Outdoor Unit Installation</p>
              <p>✔ Copper Pipe & Wiring Setup</p>
              <p>✔ Window AC & Split AC Repair</p>
              <p>✔ Same-Day Technician Visit</p>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="tel:9610248701"
                className="bg-blue-700 text-white px-6 py-3 rounded-2xl font-bold hover:bg-blue-800 transition"
              >
                Book AC Service
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Brands */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">
            Brands We Service
          </h2>

          <p className="text-gray-600 text-lg mb-10">
            Expert Repair Support for All Major Brands
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {brands.map((brand, index) => (
              <div
                key={index}
                className="bg-gray-100 rounded-2xl py-6 text-2xl font-bold shadow hover:shadow-lg transition"
              >
                {brand}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-6 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              What Makes Us Best?
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-white/10 rounded-3xl p-6 backdrop-blur-md">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-2xl font-bold mb-2">Fast Service</h3>
              <p>Quick technician support across Jodhpur.</p>
            </div>

            <div className="bg-white/10 rounded-3xl p-6 backdrop-blur-md">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="text-2xl font-bold mb-2">Affordable Price</h3>
              <p>Budget-friendly repair & maintenance charges.</p>
            </div>

            <div className="bg-white/10 rounded-3xl p-6 backdrop-blur-md">
              <div className="text-4xl mb-4">🛠</div>
              <h3 className="text-2xl font-bold mb-2">Expert Technicians</h3>
              <p>Experienced appliance repair specialists.</p>
            </div>

            <div className="bg-white/10 rounded-3xl p-6 backdrop-blur-md">
              <div className="text-4xl mb-4">🏠</div>
              <h3 className="text-2xl font-bold mb-2">Doorstep Service</h3>
              <p>Home service available throughout Jodhpur.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="bg-gradient-to-r from-blue-700 to-cyan-500 rounded-[32px] p-10 text-white shadow-2xl">
            <div className="grid md:grid-cols-2 gap-10">
              <div>
                <h2 className="text-4xl font-bold mb-6">
                  Contact Us
                </h2>

                <div className="space-y-5 text-lg">
                  <div>
                    <span className="font-bold">📞 Mobile:</span><br />
                    9610248701
                  </div>

                  <div>
                    <span className="font-bold">📍 Address:</span><br />
                    Spicy Kitchen, Rup Nagar-1,<br />
                    293 Near Pal Road Ke Pass Wali Gali,<br />
                    Jodhpur, Rajasthan 342003
                  </div>

                  <div>
                    <span className="font-bold">⏰ Service Timing:</span><br />
                    8:00 AM – 9:00 PM
                  </div>
                </div>
              </div>

              <div className="bg-white text-gray-800 rounded-3xl p-8 shadow-xl">
                <h3 className="text-3xl font-bold mb-6 text-center">
                  Quick Booking
                </h3>

                <form className="space-y-4">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full p-4 rounded-xl border border-gray-300 outline-none focus:ring-2 focus:ring-blue-500"
                  />

                  <input
                    type="tel"
                    placeholder="Mobile Number"
                    className="w-full p-4 rounded-xl border border-gray-300 outline-none focus:ring-2 focus:ring-blue-500"
                  />

                  <textarea
                    placeholder="Service Required"
                    rows="4"
                    className="w-full p-4 rounded-xl border border-gray-300 outline-none focus:ring-2 focus:ring-blue-500"
                  ></textarea>

                  <button
                    type="button"
                    className="w-full bg-blue-700 text-white py-4 rounded-xl font-bold hover:bg-blue-800 transition"
                  >
                    Submit Request
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-8 px-6 text-center">
        <h3 className="text-2xl font-bold mb-3">Mahadev Smart Care</h3>

        <p className="text-gray-400 mb-2">
          AC • Fridge • Washing Machine • Microwave • Geyser Repair Services
        </p>

        <p className="text-gray-500 text-sm">
          © 2026 Mahadev Smart Care. All Rights Reserved.
        </p>
      </footer>
    </div>
  );
}
