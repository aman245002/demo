import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import SpaceCarousel from "@/components/SpaceCarousel";
import Footer from "@/components/Footer";
import {
  Rocket,
  Users,
  BookOpen,
  Award,
  Mail,
  ExternalLink,
  ArrowRight,
  Calendar,
  Target,
  Zap,
} from "lucide-react";

export default function Index() {
  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* Section 1: Main Hero with Navbar and Space Carousel */}
      <div className="relative min-h-screen">
        <SpaceCarousel />
        <Navigation />

        <div className="relative z-10 min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-5xl mx-auto">
            <h1 className="font-display text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-brand-orange via-brand-red to-brand-light-orange bg-clip-text text-transparent">
              CGU Space Club
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90 leading-relaxed font-medium">
              Exploring the cosmos, pushing boundaries, and inspiring the next
              generation of space explorers
            </p>
            <p className="text-lg mb-12 text-white/80 max-w-3xl mx-auto font-normal">
              Join us in our mission to advance space science, technology, and
              exploration. From rocket launches to astronomical research, we're
              reaching for the stars.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/sponsorship">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-brand-orange to-brand-red hover:from-brand-light-orange hover:to-brand-dark-red text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <Award className="mr-2 h-5 w-5" />
                  Become a Sponsor
                </Button>
              </Link>
              <Link to="/team">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white/30 text-white hover:bg-white/10 px-8 py-4 text-lg font-medium"
                >
                  <Users className="mr-2 h-5 w-5" />
                  Meet Our Team
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Section 2: Ongoing Projects - Highlighted Container */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.pexels.com/photos/256381/pexels-photo-256381.jpeg"
            alt="Engineers in protective suits working on telescopic mirrors in high-tech lab"
            className="w-full h-full object-cover scale-110"
          />
          <div className="absolute inset-0 bg-black/60" />
          <div className="absolute inset-0 bg-gradient-to-br from-brand-orange/8 via-brand-red/5 to-black/20" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-brand-orange to-brand-red bg-clip-text text-transparent drop-shadow-lg">
              Ongoing Projects
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto font-medium drop-shadow-md">
              Discover our cutting-edge initiatives that are pushing the
              boundaries of space exploration
            </p>
          </div>

          {/* Enhanced Project Cards Container */}
          <div className="relative">
            {/* Multiple glowing effects for more drama */}
            <div className="absolute inset-0 bg-gradient-to-r from-brand-orange/20 via-brand-red/20 to-brand-orange/20 blur-3xl animate-pulse"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-transparent via-brand-orange/10 to-transparent blur-2xl"></div>

            <div className="relative bg-black/60 backdrop-blur-md border border-brand-orange/40 rounded-3xl p-10 shadow-2xl hover:shadow-brand-orange/20 transition-all duration-500">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                <Card className="bg-black/70 border-brand-orange/40 hover:border-brand-orange/80 transition-all duration-500 group hover:shadow-2xl hover:shadow-brand-orange/30 hover:scale-105 backdrop-blur-sm">
                  <CardHeader>
                    <div className="w-full h-48 mb-4 rounded-lg overflow-hidden">
                      <img
                        src="https://images.pexels.com/photos/2166/flight-sky-earth-space.jpg"
                        alt="NASA space shuttle launching with fiery liftoff"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="flex items-center justify-between mb-2">
                      <Rocket className="w-8 h-8 text-brand-orange" />
                      <span className="px-3 py-1 bg-brand-orange/20 text-brand-orange text-xs rounded-full font-medium">
                        Active
                      </span>
                    </div>
                    <CardTitle className="text-white font-bold">
                      CGU Rocket Program
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-white/80 mb-4 font-normal">
                      Developing and launching high-powered rockets to compete
                      in national competitions and advance aerospace engineering
                      education.
                    </p>
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-brand-orange/50 text-brand-orange hover:bg-brand-orange/10 font-medium"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Learn More
                    </Button>
                  </CardContent>
                </Card>

                <Card className="bg-black/70 border-brand-red/40 hover:border-brand-red/80 transition-all duration-500 group hover:shadow-2xl hover:shadow-brand-red/30 hover:scale-105 backdrop-blur-sm">
                  <CardHeader>
                    <div className="w-full h-48 mb-4 rounded-lg overflow-hidden">
                      <img
                        src="https://images.pexels.com/photos/32780193/pexels-photo-32780193.jpeg"
                        alt="Satellite station with large dishes"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="flex items-center justify-between mb-2">
                      <Target className="w-8 h-8 text-brand-red" />
                      <span className="px-3 py-1 bg-brand-red/20 text-brand-red text-xs rounded-full font-medium">
                        Planning
                      </span>
                    </div>
                    <CardTitle className="text-white font-bold">
                      CubeSat Initiative
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-white/80 mb-4 font-normal">
                      Designing and building small satellites for educational
                      purposes and scientific data collection.
                    </p>
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-brand-red/50 text-brand-red hover:bg-brand-red/10 font-medium"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Learn More
                    </Button>
                  </CardContent>
                </Card>

                <Card className="bg-black/70 border-brand-light-orange/40 hover:border-brand-light-orange/80 transition-all duration-500 group hover:shadow-2xl hover:shadow-brand-light-orange/30 hover:scale-105 backdrop-blur-sm">
                  <CardHeader>
                    <div className="w-full h-48 mb-4 rounded-lg overflow-hidden">
                      <img
                        src="https://images.pexels.com/photos/586105/pexels-photo-586105.jpeg"
                        alt="Technicians assembling spacecraft"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="flex items-center justify-between mb-2">
                      <Zap className="w-8 h-8 text-brand-light-orange" />
                      <span className="px-3 py-1 bg-brand-light-orange/20 text-brand-light-orange text-xs rounded-full font-medium">
                        Ongoing
                      </span>
                    </div>
                    <CardTitle className="text-white font-bold">
                      Research Lab
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-white/80 mb-4 font-normal">
                      Advanced research in space technology, materials science,
                      and astronomical observations.
                    </p>
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-brand-light-orange/50 text-brand-light-orange hover:bg-brand-light-orange/10 font-medium"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Learn More
                    </Button>
                  </CardContent>
                </Card>
              </div>

              <div className="text-center mt-16">
                <Link to="/projects">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-brand-orange to-brand-red hover:from-brand-light-orange hover:to-brand-dark-red text-white px-12 py-4 text-lg font-bold shadow-2xl hover:shadow-brand-orange/40 transition-all duration-500 hover:scale-110 border border-brand-orange/30"
                  >
                    View All Projects
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Get Involved - Different Background Image */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden mt-32">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.pexels.com/photos/8474714/pexels-photo-8474714.jpeg"
            alt="Two astronauts in silver spacesuits collaborating in space environment"
            className="w-full h-full object-cover scale-110"
          />
          <div className="absolute inset-0 bg-black/55" />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-orange/3 to-brand-red/3" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-brand-orange to-brand-red bg-clip-text text-transparent">
            Get Involved
          </h2>
          <p className="text-xl mb-12 text-white/90 font-medium leading-relaxed">
            Ready to be part of something extraordinary? Join our mission to
            explore space and inspire the next generation of explorers. Your
            participation helps us achieve the impossible.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-black/30 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-brand-orange/50 transition-all duration-300">
              <Users className="w-12 h-12 text-brand-orange mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-3 text-white">
                Join the Team
              </h3>
              <p className="text-white/80 font-normal">
                Become a member and contribute to groundbreaking space projects
              </p>
            </div>

            <div className="bg-black/30 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-brand-red/50 transition-all duration-300">
              <Award className="w-12 h-12 text-brand-red mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-3 text-white">Sponsor Us</h3>
              <p className="text-white/80 font-normal">
                Support our mission with financial backing and partnerships
              </p>
            </div>

            <div className="bg-black/30 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-brand-light-orange/50 transition-all duration-300">
              <BookOpen className="w-12 h-12 text-brand-light-orange mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-3 text-white">
                Learn & Grow
              </h3>
              <p className="text-white/80 font-normal">
                Access educational resources and mentorship opportunities
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link to="/contact">
              <Button
                size="lg"
                className="bg-gradient-to-r from-brand-orange to-brand-red hover:from-brand-light-orange hover:to-brand-dark-red text-white px-10 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Mail className="mr-2 h-5 w-5" />
                Get In Touch
              </Button>
            </Link>
            <Link to="/sponsorship">
              <Button
                variant="outline"
                size="lg"
                className="border-white/30 text-white hover:bg-white/10 px-10 py-4 text-lg font-medium"
              >
                <Award className="mr-2 h-5 w-5" />
                View Sponsorship Options
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Section 4: Footer */}
      <Footer />
    </div>
  );
}
