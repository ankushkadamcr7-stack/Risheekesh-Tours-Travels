import { MapPin, Phone, Car, Bike, Quote, CheckCircle2, ChevronRight, Menu, X, ArrowRight, Star } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect, useRef } from 'react';

const WHATSAPP_NUMBER = "918237960809";
const PREFILLED_MESSAGE = "Hello! I'm interested in your tour/rental service. Please share details.";
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(PREFILLED_MESSAGE)}`;

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <a href="#" className="flex items-center gap-2 group">
            <div className="bg-konkan-teal p-2 rounded-full text-white transition-transform group-hover:scale-105">
              <Car className="w-5 h-5" />
            </div>
            <div className="flex flex-col">
              <span className={`font-serif font-bold text-xl leading-tight ${isScrolled ? 'text-konkan-teal-dark' : 'text-white shadow-sm'}`}>
                Risheekesh
              </span>
              <span className={`text-[10px] tracking-widest uppercase font-semibold ${isScrolled ? 'text-konkan-amber' : 'text-konkan-gold drop-shadow-md'}`}>
                Tours & Travels
              </span>
              <span className={`text-[9px] font-sans ${isScrolled ? 'text-gray-500' : 'text-white/80'}`}>
                (ऋषिकेश टूर्स अँड ट्रॅव्हल्स)
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {['Home', 'Services', 'Fleet', 'Destinations', 'About', 'Contact'].map((item) => (
              <a 
                href={item === 'Home' ? '#' : `#${item.toLowerCase()}`} 
                key={item}
                className={`font-sans text-sm font-medium transition-colors hover:text-konkan-amber ${isScrolled ? 'text-gray-700' : 'text-white drop-shadow-md'}`}
              >
                {item}
              </a>
            ))}
            <a 
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white px-6 py-2.5 rounded-full font-medium transition-all shadow-lg shadow-green-500/30 flex items-center gap-2 hover:-translate-y-0.5 relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-white/20 -translate-x-[150%] skew-x-12 group-hover:animate-shine"></div>
              <Phone className="w-4 h-4" />
              Book on WhatsApp
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className={`md:hidden p-2 ${isScrolled ? 'text-gray-900' : 'text-white drop-shadow-md'}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t mt-3 overflow-hidden"
          >
            <div className="px-4 py-6 flex flex-col space-y-4">
              {['Home', 'Services', 'Fleet', 'Destinations', 'About', 'Contact'].map((item) => (
                <a 
                  href={item === 'Home' ? '#' : `#${item.toLowerCase()}`} 
                  key={item}
                  onClick={() => setMobileMenuOpen(false)}
                  className="font-sans text-lg font-medium text-gray-800 py-2 border-b border-gray-100"
                >
                  {item}
                </a>
              ))}
              <a 
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="bg-green-500 text-white px-6 py-3 rounded-full font-medium text-center flex items-center justify-center gap-2 mt-4"
              >
                <Phone className="w-5 h-5" />
                Book Now on WhatsApp
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

function Hero() {
  return (
    <div className="relative min-h-[100vh] flex items-center pt-20 pb-24 md:pb-12 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <motion.img 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          src="https://universallandmarks.com/wp-content/uploads/2023/11/konkan.jpg" 
          alt="Coastal Ratnagiri" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-konkan-teal-dark/95 via-konkan-teal-dark/80 to-konkan-teal-dark/30 mix-blend-multiply"></div>
        {/* Soft grain overlay for cinematic feel */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20 mix-blend-overlay"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pb-32 md:pb-24 mt-12 md:mt-0">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-medium tracking-wide mb-6">
              📍 Based in Ratnagiri, Maharashtra
            </div>
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-white leading-[1.1] mb-6 shadow-sm">
              Explore the <span className="text-konkan-gold italic">Konkan Coast</span> Like Never Before.
            </h1>
            <p className="font-sans text-lg md:text-xl text-white/90 mb-10 max-w-xl leading-relaxed text-balance drop-shadow-md">
              Premium Bike Rentals, Car Rentals, and Custom Tour Packages starting from Ratnagiri to anywhere you desire.
            </p>
            
            <div className="flex flex-col sm:flex-row flex-wrap gap-4">
              <a 
                href="#destinations"
                className="bg-white text-konkan-teal-dark px-8 py-4 rounded-full font-bold text-center transition-transform hover:-translate-y-1 shadow-xl whitespace-nowrap"
              >
                Explore Konkan
              </a>
              <a 
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full font-bold text-center flex items-center justify-center gap-2 transition-transform hover:-translate-y-1 shadow-lg shadow-green-500/40 relative overflow-hidden group whitespace-nowrap"
              >
                <div className="absolute inset-0 bg-white/20 -translate-x-[150%] skew-x-12 group-hover:animate-shine"></div>
                <Phone className="w-5 h-5 fill-current" />
                WhatsApp Us
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Marquee Banner Bottom */}
      <div className="absolute bottom-0 w-full bg-konkan-teal-dark/90 backdrop-blur-md border-t border-white/10 overflow-hidden py-3">
        <div className="flex whitespace-nowrap animate-[marquee_20s_linear_infinite]">
          {[...Array(8)].map((_, i) => (
            <span key={i} className="text-konkan-gold/90 font-serif lowercase tracking-widest text-sm mx-10 flex items-center gap-10">
              <span>🌊 Explore Konkan</span>
              <span className="w-1.5 h-1.5 rounded-full bg-konkan-amber"></span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function TrustBar() {
  const features = [
    { icon: CheckCircle2, text: "Local Experts" },
    { icon: Car, text: "Well-Maintained Vehicles" },
    { icon: MapPin, text: "Ratnagiri-Based" },
    { icon: Phone, text: "Instant WhatsApp Booking" },
  ];

  return (
    <div className="bg-white py-12 border-b border-gray-100 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-12">
          {features.map((feature, idx) => (
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              key={idx} 
              className="flex items-center gap-4 group cursor-default"
            >
              <div className="bg-konkan-sand group-hover:bg-konkan-gold group-hover:text-konkan-teal-dark p-3 rounded-full text-konkan-teal transition-colors duration-300">
                <feature.icon className="w-6 h-6" />
              </div>
              <span className="font-sans font-medium text-gray-800 leading-tight">{feature.text}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Services() {
  const services = [
    {
      title: "Scooty & Bike Rental",
      desc: "Perfect for navigating the scenic coastal roads and local spots freely without worrying about parking or traffic.",
      icon: Bike,
      image: "https://yatrabike.com/wp-content/uploads/2024/09/about.jpg"
    },
    {
      title: "Car Rental",
      desc: "Comfortable sedans and SUVs for family trips, outstation travel, and long coastal drives along the Konkan route.",
      icon: Car,
      image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=2670&auto=format&fit=crop"
    },
    {
      title: "Tour Packages",
      desc: "Curated multi-day itineraries covering the best of Maharashtra's coast, tailored precisely to your preferences.",
      icon: MapPin,
      image: "https://images.unsplash.com/photo-1623126908029-58cb08a2b272?q=80&w=2669&auto=format&fit=crop"
    }
  ];

  return (
    <section id="services" className="py-24 bg-konkan-sand relative overflow-hidden">
      {/* Decorative bg element */}
      <div className="absolute top-0 right-0 -mr-48 -mt-48 w-96 h-96 bg-konkan-teal/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
          >
            <span className="text-konkan-amber font-bold tracking-widest text-sm uppercase mb-4 block">What We Offer</span>
            <h2 className="font-serif text-4xl md:text-5xl text-konkan-teal-dark mb-6">Our Premium Services</h2>
            <p className="font-sans text-gray-600 text-lg max-w-2xl mx-auto">
              Whether you need a quick ride around town or a complete holiday package, we have you covered with best-in-class service.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: idx * 0.15 }}
              key={idx} 
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group flex flex-col"
            >
              <div className="h-56 overflow-hidden relative">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-konkan-teal-dark/10 group-hover:bg-transparent transition-colors"></div>
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-3 rounded-xl shadow-lg text-konkan-teal-dark group-hover:bg-konkan-gold transition-colors duration-300">
                   <service.icon className="w-6 h-6" />
                </div>
              </div>
              <div className="p-8 flex-1 flex flex-col">
                <h3 className="font-serif text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-8 font-sans flex-1">{service.desc}</p>
                <a 
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-konkan-teal font-bold hover:text-konkan-amber transition-colors mt-auto group/btn"
                >
                  Enquire on WhatsApp <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Fleet() {
  const [activeTab, setActiveTab] = useState<'scooters' | 'cars'>('scooters');

  const fleetData = {
    scooters: [
      { 
        name: "Honda Activa", 
        type: "Scooter",
        features: ["2 Seats", "Automatic", "Helmet Included"],
        image: "https://cdn.bikedekho.com/processedimages/honda/activa-6g/640X309/activa-6g67ff4caa45817.jpg",
        icon: Bike
      },
      { 
        name: "Honda Aviator", 
        type: "Scooter",
        features: ["2 Seats", "Automatic", "Helmet Included"],
        image: "data:image/jpeg;base64,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",
        icon: Bike
      },
      { 
        name: "TVS Jupiter", 
        type: "Scooter",
        features: ["2 Seats", "Automatic", "Helmet Included"],
        image: "https://cdn.bikedekho.com/processedimages/tvs/jupiter-125/640X309/jupiter-12568c3ca84bb1ac.jpg?imwidth=480&impolicy=resize",
        icon: Bike
      }
    ],
    cars: [
      { 
        name: "Maruti Ertiga", 
        type: "SUV / MUV",
        features: ["7 Seats", "AC / Heater", "Manual Transmission"],
        image: "https://stimg.cardekho.com/images/car-images/large/Maruti/Ertiga/10288/1760527558211/Arctic-White_c5c5c5.jpg?impolicy=resize&imwidth=420",
        icon: Car
      },
      { 
        name: "Hyundai Aura", 
        type: "Sedan",
        features: ["5 Seats", "AC / Heater", "Manual Transmission"],
        image: "https://imgd-ct.aeplcdn.com/664x415/n/xj5fq0b_1639133.jpg?q=80",
        icon: Car
      }
    ]
  };

  const currentFleet = fleetData[activeTab];

  return (
    <section id="fleet" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
          >
            <span className="text-konkan-amber font-bold tracking-widest text-sm uppercase mb-4 block">Our Vehicles</span>
            <h2 className="font-serif text-4xl md:text-5xl text-konkan-teal-dark mb-6">Choose Your Ride</h2>
          </motion.div>

          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={() => setActiveTab('scooters')}
              className={`px-6 py-3 rounded-full font-bold text-sm transition-all duration-300 flex items-center gap-2 ${
                activeTab === 'scooters' 
                ? 'bg-konkan-teal text-white shadow-lg' 
                : 'bg-konkan-sand text-gray-600 hover:bg-konkan-sand-dark'
              }`}
            >
              <Bike className="w-4 h-4" /> Scooties
            </button>
            <button
              onClick={() => setActiveTab('cars')}
              className={`px-6 py-3 rounded-full font-bold text-sm transition-all duration-300 flex items-center gap-2 ${
                activeTab === 'cars' 
                ? 'bg-konkan-teal text-white shadow-lg' 
                : 'bg-konkan-sand text-gray-600 hover:bg-konkan-sand-dark'
              }`}
            >
              <Car className="w-4 h-4" /> Cars
            </button>
          </div>
        </div>

        <motion.div 
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 justify-center"
        >
          {currentFleet.map((vehicle, idx) => (
            <div 
              key={idx} 
              className="bg-[#FCFBFA] rounded-3xl overflow-hidden border border-gray-200 flex flex-col group hover:shadow-xl transition-all duration-300"
            >
              <div className="h-56 overflow-hidden relative bg-white p-4">
                <img 
                  src={vehicle.image} 
                  alt={vehicle.name} 
                  loading="lazy"
                  className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-6 md:p-8 flex-1 flex flex-col items-start text-left">
                <h3 className="font-serif text-2xl font-bold text-gray-900 mb-1">{vehicle.name}</h3>
                <p className="text-gray-500 text-sm font-sans mb-6">{vehicle.type}</p>
                
                <ul className="space-y-3 mb-8 w-full">
                  {vehicle.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-center text-sm text-gray-700 font-medium">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#185A7D] mr-3 shrink-0"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <a 
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto px-6 py-3.5 rounded-xl border border-gray-900 text-gray-900 font-bold hover:bg-gray-900 hover:text-white transition-colors text-sm w-full text-center"
                >
                  Confirm Booking
                </a>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function Destinations() {
  const destinations = [
    {
      name: "Ratnagiri",
      tagline: "The heart of Konkan",
      attractions: ["Ganapatipule", "Thiba Palace", "Ratnadurg Fort", "Pawas", "Jaigad Fort", "Mandavi Beach", "Bhatye Beach"],
      image: "https://st.indiarailinfo.com/kjfdsuiemjvcya22/0/1/7/0/4727170/0/img20200927224913442011.jpg"
    },
    {
      name: "Guhagar",
      tagline: "Untouched beach paradise",
      attractions: ["Guhagar Beach", "Shree Vyadeshwar Temple, Guhagar", "Velneshwar Beach", "Gopalgad"],
      image: "https://www.mischieftreks.com/Guhagar-turtle-festival-from-mumbai.jpg",
      imageClassName: "object-contain bg-gray-900"
    },
    {
      name: "Malvan",
      tagline: "Adventure & Seafood",
      attractions: ["Kunkeshwar Mandir", "Vijaydurg Fort", "Devgad Windmills", "Pokharbav Ganpati Mandir", "Rajkot Fort", "Tarkarli Beach", "Rock Garden", "Redi Ganpati Temple", "Sawantwadi Palace", "Sindhudurg Fort"],
      image: "https://vl-prod-static.b-cdn.net/system/images/000/788/253/dceaa4a8ff0095416fb6a065390ff1a7/original/safeimagekit-myoffice.png"
    },
    {
      name: "North Goa",
      tagline: "The ultimate getaway",
      attractions: ["Baga Beach", "Fort Aguada", "Anjuna Beach", "Chapora Fort", "Calangute Beach"],
      image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?q=80&w=2574&auto=format&fit=crop"
    },
    {
      name: "South Goa",
      tagline: "Serene & Peaceful",
      attractions: ["Palolem Beach", "Dudhsagar Falls", "Colva Beach", "Cabo de Rama Fort", "Butterfly Beach"],
      image: "https://cf-images.assettype.com/newindianexpress/2026-01-28/jz2vw99v/C3B7C286273F4F50BE048AE8BC00593Fconvertedwebpfinal.jpg"
    }
  ];

  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      const scrollAmount = direction === 'left' ? -400 : 400;
      current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const [selectedDest, setSelectedDest] = useState<any>(null);

  const getAttractionPhoto = (attr: string, index: number) => {
    const specificImages: Record<string, string> = {
      "Ganapatipule": "https://www.incredibleindia-tourism.org/images/weekend-getaways/ganapatipule-ratnagiri.jpg",
      "Thiba Palace": "https://cdnbbsr.s3waas.gov.in/s3cb2c2041d9763d84d7d655e81178f444/uploads/2019/04/202412192147101591.jpg",
      "Ratnadurg Fort": "https://im.whatshot.in/img/2020/Feb/ratndurg-or-bhagavati-fort-body-07-ratnadurg-cropped-1582530746.jpg",
      "Pawas": "https://www.holidify.com/images/cmsuploads/compressed/shutterstock_782851378(1)_20191209175921.jpg",
      "Jaigad Fort": "https://preview.redd.it/jaigad-fort-near-ratnagiri-india-v0-qikxh0edrpke1.jpeg?auto=webp&s=396ef8e6503e22e35d840e512de143ba257e47d9",
      "Mandavi Beach": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjv13bVhHLSSNPC5l21JQNb0aTTxeCd0MV1UOoYxy1JrtRDGLIVWkc4ODEecwhoKgvJzw4BISOKHEoJfsrgzTdPQohb_xwklvPaGO51WDKWdyMgc3jLTVEWrqYQ1ocCK-StPLzQTFM0czt6/s1600/IMG_20181105_213334.JPG",
      "Bhatye Beach": "https://media.assettype.com/outlooktraveller/2024-08-21/yjbxc33u/Mandvi_Ratnagiri_03.png?w=718&auto=format%2Ccompress&fit=max&format=webp&dpr=1.0",
      "Palolem Beach": "https://goa-tourism.org.in/images/places-to-visit/headers/palolem-beach-goa-timings-entry-fee-goa-tourism-header-cr-manfred-sommer-02.jpg",
      "Dudhsagar Falls": "https://imgmediagumlet.lbb.in/media/2021/10/6165b8de6a9fc04e3f38c58c_1634056414914.jpg",
      "Colva Beach": "https://media.tripinvites.com/places/goa/colva-beach/colva-beach-front-view-featured-750x500.webp",
      "Cabo de Rama Fort": "https://goa-tourism.org.in/images/v2/places-to-visit/cabo-de-rama-fort-goa-tourism-header.jpg",
      "Butterfly Beach": "https://d10y46cwh6y6x1.cloudfront.net/images/AD3A7000-A54E-4048-86B1-1CF529409A79.png",
      "Baga Beach": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/18/3e/36/95/baga-sea-beach.jpg?w=800&h=-1&s=1",
      "Fort Aguada": "https://bpu-images-v1.s3.eu-north-1.amazonaws.com/uploads/1721475767022_360_F_736024358_ATkuOSjyZYJOZLhVqbsFVsmJayWpZVpV.jpg",
      "Anjuna Beach": "https://www.tourmyindia.com/states/goa/image/anjuna-beach-banner.webp",
      "Chapora Fort": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiDljLKCR5dCipfDbmAQtV61CAqHsYCj0Sz8iIkPfVqyGU6-ul2dhrsYIiIFXpYl3n1g1QiRDVh91-Mq_Egfhe1LnvcVCXmUtuVIAnOUXX7swR_njL38OhEauNUm1pd5nhQCqUEu9UE6iM/s1600/chapora-fort-goa-+1.jpg",
      "Calangute Beach": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/529922113.jpg?k=b60ee9deb7cd3e62891afcff134987f3a33ae6c40d68c872a739d33a6ec06dcb&o=&hp=1",
      "Guhagar Beach": "https://static.wixstatic.com/media/cbf5ad_40aa396daef9456e8f5d1cba788d4d8a~mv2.jpg/v1/fill/w_280,h_187,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/cbf5ad_40aa396daef9456e8f5d1cba788d4d8a~mv2.jpg",
      "Shree Vyadeshwar Temple, Guhagar": "https://ak-d.tripcdn.com/images/0ww29120008zcoyicF2D7_C_480_270_R5_Q70.jpg_.webp",
      "Velneshwar Beach": "https://xploringdestinations.com/wp-content/uploads/2025/08/Velneshwar-Temple-timings.jpg",
      "Gopalgad": "https://forttrekkers.com/images/fort/pune/Rajmachi.jpg",
      "Kunkeshwar Mandir": "https://www.tourmyindia.com/images/kunkeshwar-temple1.jpg",
      "Vijaydurg Fort": "https://aroundpune.com/wp-content/uploads/2018/10/Vijaydurg_Banner.jpg",
      "Devgad Windmills": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Devgad_beach.jpg/960px-Devgad_beach.jpg",
      "Pokharbav Ganpati Mandir": "https://marathi.cdn.zeenews.com/marathi/sites/default/files/2024/01/24/698256-pokharbavghh.jpg",
      "Rajkot Fort": "https://media.assettype.com/freepressjournal/2025-06-15/lek7achd/PTI05112025000175B.jpg",
      "Rock Garden": "https://www.tourmyindia.com/states/maharashtra/images/rock-garden-malvan1.jpg",
      "Redi Ganpati Temple": "https://www.templepurohit.com/wp-content/uploads/2015/11/114.jpg",
      "Sawantwadi Palace": "https://sawantwadipalace.com/img/21.c954be1b.webp",
      "Sindhudurg Fort": "http://konkancrown.com/wp-content/uploads/2023/02/Sindhu-durg-fort-1.jpg",
      "Tarkarli Beach": "http://www.tripplatform.com/blog/wp-content/uploads/2015/12/Tarkarli-Beach-1.jpg"
    };

    if (specificImages[attr]) {
      return specificImages[attr];
    }
    const images = [
      "https://images.unsplash.com/photo-1596895111956-bf57059e00fa?auto=format&fit=crop&q=80&w=400&h=300",
      "https://images.unsplash.com/photo-1588631526435-0b0c679a9572?auto=format&fit=crop&q=80&w=400&h=300",
      "https://images.unsplash.com/photo-1565576721538-4b71190623d3?auto=format&fit=crop&q=80&w=400&h=300",
      "https://images.unsplash.com/photo-1549479424-df399c53641b?auto=format&fit=crop&q=80&w=400&h=300",
      "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&q=80&w=400&h=300",
      "https://images.unsplash.com/photo-1534346856017-d5d10522197f?auto=format&fit=crop&q=80&w=400&h=300"
    ];
    return images[index % images.length];
  };

  return (
    <section id="destinations" className="py-24 bg-white overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <span className="text-konkan-amber font-bold tracking-widest text-sm uppercase mb-4 block">Where to</span>
            <h2 className="font-serif text-4xl md:text-5xl text-konkan-teal-dark mb-6">Iconic Destinations</h2>
            <p className="font-sans text-gray-600 text-lg">
              Discover the hidden gems and famous spots along the pristine western coastline. 
            </p>
          </motion.div>
          <div className="hidden md:flex gap-2">
            <button 
              onClick={() => scroll('left')}
              className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:text-konkan-teal hover:border-konkan-teal transition-colors"
            >
              <ChevronRight className="w-6 h-6 rotate-180" />
            </button>
            <button 
              onClick={() => scroll('right')}
              className="w-12 h-12 rounded-full bg-konkan-teal flex items-center justify-center text-white hover:bg-konkan-teal-dark transition-colors"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        <div 
          ref={scrollRef}
          className="flex overflow-x-auto hide-scrollbar gap-6 pb-8 snap-x snap-mandatory -mx-4 px-4 sm:mx-0 sm:px-0"
        >
          {destinations.map((dest, idx) => (
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              key={idx} 
              onClick={() => setSelectedDest(dest)}
              className="min-w-[320px] md:min-w-[400px] shrink-0 snap-start group cursor-pointer relative rounded-2xl overflow-hidden aspect-[3/4]"
            >
              <img 
                src={dest.image} 
                alt={dest.name} 
                loading="lazy"
                className={`absolute inset-0 w-full h-full sm:pointer-events-auto transition-transform duration-1000 group-hover:scale-110 ${dest.imageClassName || 'object-cover'}`}
              />
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-900/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
              
              <div className="absolute bottom-0 left-0 p-8 w-full z-10 flex flex-col justify-end h-full">
                <span className="text-konkan-gold font-medium tracking-wide text-sm mb-2 transform opacity-100 translate-y-0 transition-all duration-300">{dest.tagline}</span>
                <h3 className="font-serif text-4xl text-white font-bold mb-4">{dest.name}</h3>
                
                <div className="flex flex-wrap gap-3 mt-4 opacity-100 sm:opacity-0 sm:translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                  <a 
                    href={WHATSAPP_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="bg-white text-konkan-teal px-5 py-2.5 rounded-full font-semibold inline-flex items-center justify-center transition-colors hover:bg-gray-100 w-max text-sm"
                  >
                    Plan This Trip <ChevronRight className="w-4 h-4 ml-1" />
                  </a>
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedDest(dest);
                    }}
                    className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-5 py-2.5 rounded-full font-medium inline-flex items-center justify-center transition-colors hover:bg-white/20 w-max text-sm"
                  >
                    Explore More
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedDest && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-md"
          >
            <motion.div 
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              className="bg-white w-full max-w-4xl max-h-[90vh] rounded-3xl overflow-hidden flex flex-col shadow-2xl relative"
            >
              <div className="relative h-48 sm:h-64 shrink-0 p-6 flex flex-col justify-end">
                <img 
                  src={selectedDest.image} 
                  alt={selectedDest.name}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent opacity-90"></div>
                
                <button 
                  onClick={() => setSelectedDest(null)}
                  className="absolute top-4 right-4 w-10 h-10 bg-black/20 backdrop-blur-md border border-white/10 rounded-full flex items-center justify-center text-white hover:bg-white hover:text-gray-900 transition-colors z-20"
                >
                  <X className="w-5 h-5" />
                </button>
                
                <div className="relative z-10">
                  <span className="text-konkan-gold font-medium tracking-wide text-sm mb-2 block">{selectedDest.tagline}</span>
                  <h3 className="font-serif text-3xl sm:text-4xl text-white font-bold">{selectedDest.name} Places</h3>
                </div>
              </div>
              
              <div className="flex-1 overflow-y-auto p-6 sm:p-8 bg-gray-50/50">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                  {selectedDest.attractions.map((attr: string, i: number) => (
                    <div key={i} className="group cursor-pointer rounded-2xl overflow-hidden bg-white border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300">
                      <div className="aspect-[4/3] overflow-hidden relative">
                        <img 
                          src={getAttractionPhoto(attr, i)} 
                          alt={attr} 
                          loading="lazy"
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/10 to-transparent opacity-80"></div>
                        <div className="absolute bottom-4 left-4 right-4 flex items-start">
                          <MapPin className="w-5 h-5 text-konkan-amber mr-2 shrink-0 mt-0.5" />
                          <h4 className="text-white font-medium text-base sm:text-lg leading-tight break-words">{attr}</h4>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

function MiniAttractions() {
  const spots = [
    { name: "Ratnadurg Fort", icon: "🏰" },
    { name: "Thiba Palace", icon: "🏛️" },
    { name: "Mandavi Beach", icon: "🏖️" },
    { name: "Velneshwar Temple", icon: "🛕" },
  ];

  return (
    <div className="bg-konkan-sand-dark/30 py-12 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="font-serif text-xl text-konkan-teal-dark font-medium whitespace-nowrap">Local Favorites in Ratnagiri:</p>
          <div className="flex flex-wrap gap-4 justify-center md:justify-end w-full">
            {spots.map((spot, i) => (
              <div key={i} className="bg-white px-4 py-2 rounded-full shadow-sm text-sm font-medium text-gray-700 flex items-center gap-2 hover:text-konkan-amber hover:shadow-md transition-all cursor-default">
                <span>{spot.icon}</span> {spot.name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function HowItWorks() {
  const steps = [
    { number: "01", title: "Browse Services", desc: "Choose from our rentals or tour packages." },
    { number: "02", title: "WhatsApp Us", desc: "Send us your dates and requirements instantly." },
    { number: "03", title: "Confirm & Enjoy", desc: "Get your vehicle or itinerary and start exploring!" }
  ];

  return (
    <section className="py-24 bg-konkan-teal-dark text-white relative overflow-hidden">
       {/* Background decorative patterns */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
        >
          <span className="text-konkan-gold font-bold tracking-widest text-sm uppercase mb-4 block">Process</span>
          <h2 className="font-serif text-4xl md:text-5xl mb-16">Simple 3-Step Booking</h2>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-12 relative max-w-4xl mx-auto">
          {/* Connecting line for desktop */}
          <div className="hidden md:block absolute top-12 left-[15%] right-[15%] h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
          
          {steps.map((step, idx) => (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              key={idx} 
              className="relative z-10 flex flex-col items-center group"
            >
              <div className="w-24 h-24 rounded-full bg-konkan-teal border border-konkan-teal-dark/50 flex items-center justify-center font-serif text-4xl text-konkan-gold mb-8 shadow-[0_0_30px_rgba(245,203,92,0.15)] group-hover:scale-110 group-hover:-translate-y-2 group-hover:shadow-[0_0_40px_rgba(245,203,92,0.3)] transition-all duration-300">
                {step.number}
              </div>
              <h3 className="font-sans tracking-wide text-2xl font-bold mb-3">{step.title}</h3>
              <p className="text-white/60 max-w-[250px] text-lg">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const reviews = [
    { name: "Priya S.", location: "Pune", text: "Exceptional service! We rented a car for 3 days to explore Ratnagiri. The car was clean and the booking process via WhatsApp was incredibly smooth." },
    { name: "Rahul M.", location: "Mumbai", text: "The bike rental made our trip. Exploring the coastal routes on a scooty was the best decision. Highly recommend Risheekesh Tours!" },
    { name: "Sneha K.", location: "Nashik", text: "We took the Malvan package. Everything from the stay to the sightseeing was perfectly managed. The local insights were invaluable." }
  ];

  return (
    <section className="py-24 bg-konkan-sand">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-konkan-amber font-bold tracking-widest text-sm uppercase mb-4 block">Testimonials</span>
          <h2 className="font-serif text-4xl md:text-5xl text-konkan-teal-dark mb-4">Traveler Stories</h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, idx) => (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15 }}
              key={idx} 
              className="bg-white p-10 rounded-3xl shadow-sm relative group hover:shadow-xl transition-all duration-300"
            >
              <Quote className="absolute top-8 right-8 text-konkan-sand-dark w-12 h-12 rotate-180 -z-0 opacity-50 group-hover:text-konkan-gold/50 transition-colors" />
              <div className="flex text-konkan-amber mb-6 relative z-10">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
              </div>
              <p className="text-gray-700 mb-8 font-serif italic text-lg relative z-10 leading-relaxed">"{review.text}"</p>
              <div className="flex items-center gap-4 relative z-10 pt-6 border-t border-gray-100">
                <div className="w-12 h-12 rounded-full bg-konkan-teal/10 flex items-center justify-center text-konkan-teal font-bold uppercase text-xl">
                  {review.name[0]}
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">{review.name}</h4>
                  <p className="text-sm text-gray-500">{review.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AboutAndContact() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* About Content */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <span className="text-konkan-amber font-bold tracking-widest text-sm uppercase mb-4 block">About Us</span>
              <h2 className="font-serif text-4xl md:text-5xl text-konkan-teal-dark">Our Roots in Ratnagiri</h2>
            </div>
            
            <div className="prose prose-lg text-gray-600 font-sans">
              <p>
                We are a locally rooted travel agency passionate about showcasing the true beauty of Ratnagiri and the Konkan coast. With years of combined expertise in car rentals and regional tourism, we ensure your journey is seamless, comfortable, and memorable.
              </p>
              <p>
                Instead of complex booking portals, we believe in a personal touch. Drop us a message on WhatsApp, and we'll craft the perfect travel solution tailored for you.
              </p>
            </div>
            
            <div className="pt-10 border-t border-gray-100" id="contact">
              <h3 className="font-serif text-3xl text-gray-900 mb-6">Start Your Journey with Us</h3>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <a 
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-500 text-white px-8 py-4 rounded-full font-bold text-center flex items-center justify-center gap-3 hover:-translate-y-1 transition-all shadow-lg shadow-green-500/30 text-lg group"
                >
                  <Phone className="w-6 h-6 group-hover:animate-bounce" />
                  Chat With Us Now
                </a>
              </div>
              
              <div className="bg-konkan-sand p-6 rounded-2xl flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <p className="text-sm text-gray-500 font-medium mb-1">Direct Line / WhatsApp</p>
                  <div className="flex items-center gap-3 text-konkan-teal-dark font-bold text-xl md:text-2xl">
                    <Phone className="w-5 h-5 text-konkan-amber" />
                    <span>08237960809</span>
                  </div>
                </div>
                <div className="h-10 w-px bg-gray-300 hidden sm:block"></div>
                <div>
                  <p className="text-sm text-gray-500 font-medium mb-1">Location</p>
                  <div className="flex items-center gap-3 text-konkan-teal-dark font-bold">
                    <MapPin className="w-5 h-5 text-konkan-amber shrink-0" />
                    <span>Ratnagiri, MH</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Map */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-[2.5rem] overflow-hidden h-[600px] shadow-2xl relative group"
          >
            <div className="absolute inset-0 bg-konkan-teal-dark/0 group-hover:bg-transparent transition-colors z-10 pointer-events-none"></div>
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d121703.62635639641!2d73.23847551065171!3d16.99434863953503!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bea0d1839a6bc0b%3A0x7ceea09ac379e4d!2sRatnagiri%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1709405020120!5m2!1sen!2sin" 
              className="border-0 w-full h-full grayscale-[15%] group-hover:grayscale-0 transition-all duration-700"
              allowFullScreen={false} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            
            {/* Floating Card over Map */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-[90%] bg-white/95 backdrop-blur shadow-xl rounded-2xl p-6 flex items-center justify-between z-20 hover:scale-[1.02] transition-transform">
              <div>
                <h4 className="font-bold text-gray-900">Risheekesh Tours & Travels</h4>
                <p className="text-sm text-gray-600 flex items-center gap-2 mt-1">
                  <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                  4.9 Top Rated in Ratnagiri
                </p>
              </div>
              <a 
                href="https://share.google/T2vbJKs7WyMgrFBVs" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-blue-50 hover:bg-blue-100 text-blue-600 px-4 py-2 rounded-lg font-medium text-sm transition-colors whitespace-nowrap"
              >
                View on Google
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-konkan-teal-dark text-white pt-20 pb-8 relative overflow-hidden">
      {/* Wave decoration */}
      <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-konkan-amber via-konkan-gold to-konkan-amber"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          
          <div className="md:col-span-2 pr-8">
            <div className="flex flex-col mb-6">
              <span className="font-serif font-bold text-3xl leading-tight">
                Risheekesh
              </span>
              <span className="text-sm tracking-widest uppercase font-semibold text-konkan-gold opacity-90">
                Tours & Travels
              </span>
              <span className="text-xs font-sans text-gray-400 mt-1">
                (ऋषिकेश टूर्स अँड ट्रॅव्हल्स)
              </span>
            </div>
            <p className="text-gray-300 max-w-sm mb-6 leading-relaxed">
              Your premium travel partner in the Konkan. Specialized in quality car rentals, bike rentals, and unforgettable tour packages tailored to your wanderlust.
            </p>
            <div className="flex space-x-4">
              {/* Social Placeholders */}
              {[1,2,3].map(i => (
                <div key={i} className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-konkan-amber transition-colors cursor-pointer">
                  <span className="w-4 h-4 bg-white/50 rounded-sm"></span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6 text-white tracking-wide">Quick Links</h4>
            <ul className="space-y-4 text-gray-300">
              <li><a href="#services" className="hover:text-konkan-gold transition-colors inline-block">Our Services</a></li>
              <li><a href="#fleet" className="hover:text-konkan-gold transition-colors inline-block">Our Fleet</a></li>
              <li><a href="#destinations" className="hover:text-konkan-gold transition-colors inline-block">Top Destinations</a></li>
              <li><a href="#about" className="hover:text-konkan-gold transition-colors inline-block">Our Story</a></li>
              <li><a href="#contact" className="hover:text-konkan-gold transition-colors inline-block">Book with Us</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6 text-white tracking-wide">Contact Us</h4>
            <ul className="space-y-5 text-gray-300">
              <li className="flex items-start gap-4">
                <MapPin className="w-5 h-5 text-konkan-amber shrink-0 mt-1" />
                <span>Ratnagiri, Maharashtra,<br/>India</span>
              </li>
              <li className="flex items-center gap-4">
                <Phone className="w-5 h-5 text-konkan-amber shrink-0" />
                <span className="font-medium">08237960809</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} Risheekesh Tours & Travels | Ratnagiri. All rights reserved.</p>
          <div className="mt-4 md:mt-0 flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FloatingWhatsApp() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show only after scrolling down a bit
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
           initial={{ opacity: 0, scale: 0.5, y: 50 }}
           animate={{ opacity: 1, scale: 1, y: 0 }}
           exit={{ opacity: 0, scale: 0.5, y: 50 }}
           className="fixed bottom-6 right-6 z-[60]"
        >
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform hover:bg-green-600 flex items-center justify-center group relative block"
          >
            {/* Ping animation behind */}
            <span className="absolute inset-0 rounded-full bg-green-500 opacity-20 animate-ping"></span>
            
            <div className="absolute right-full mr-4 bg-white text-gray-800 px-4 py-2 rounded-xl shadow-xl font-medium text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 group-hover:-translate-x-2 transition-all pointer-events-none flex items-center gap-2">
              <img src="https://img.icons8.com/color/48/whatsapp--v1.png" className="w-5 h-5" alt="WhatsApp" />
              Chat with us
              <div className="absolute top-1/2 -right-2 -translate-y-1/2 border-8 border-transparent border-l-white"></div>
            </div>
            <Phone className="w-7 h-7 relative z-10 fill-current" />
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

const styles = `
@keyframes marquee {
  0% { transform: translateX(0%); }
  100% { transform: translateX(-100%); }
}
.animate-[marquee_40s_linear_infinite] {
  animation: marquee 40s linear infinite;
}
@keyframes shine {
  100% { transform: translateX(150%) skewX(12deg); }
}
.animate-shine {
  animation: shine 1.5s ease;
}
`;

export default function App() {
  return (
    <div className="font-sans text-gray-900 antialiased selection:bg-konkan-amber selection:text-white flex flex-col min-h-screen">
      <style>{styles}</style>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <TrustBar />
        <Services />
        <Fleet />
        <Destinations />
        <MiniAttractions />
        <HowItWorks />
        <Testimonials />
        <AboutAndContact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
