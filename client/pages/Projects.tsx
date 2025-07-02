import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Rocket, Satellite, Telescope, ExternalLink } from "lucide-react";

export default function Projects() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />

      <div className="relative z-10 pt-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Our Projects
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Discover the innovative projects that are pushing the boundaries
              of space exploration and inspiring the next generation of space
              scientists.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            <Card className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300">
              <CardHeader>
                <div className="w-full h-48 mb-4 rounded-lg overflow-hidden">
                  <img
                    src="https://images.pexels.com/photos/2166/flight-sky-earth-space.jpg"
                    alt="NASA space shuttle launching with fiery liftoff"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex items-center justify-between">
                  <Rocket className="w-8 h-8 text-blue-400" />
                  <span className="px-2 py-1 bg-blue-400/20 text-blue-400 text-xs rounded-full">
                    Active
                  </span>
                </div>
                <CardTitle className="text-white">CGU Rocket Program</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-white/80 mb-4">
                  Developing and launching high-powered rockets to compete in
                  national competitions and advance aerospace engineering
                  education.
                </p>
                <Button
                  variant="outline"
                  size="sm"
                  className="border-white/30 text-black hover:bg-white/10"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Learn More
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300">
              <CardHeader>
                <div className="w-full h-48 mb-4 rounded-lg overflow-hidden">
                  <img
                    src="https://images.pexels.com/photos/32780193/pexels-photo-32780193.jpeg"
                    alt="Satellite station with large dishes under moody sky"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex items-center justify-between">
                  <Satellite className="w-8 h-8 text-purple-400" />
                  <span className="px-2 py-1 bg-purple-400/20 text-purple-400 text-xs rounded-full">
                    Planning
                  </span>
                </div>
                <CardTitle className="text-white">CubeSat Initiative</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-white/80 mb-4">
                  Designing and building small satellites for educational
                  purposes and scientific data collection.
                </p>
                <Button
                  variant="outline"
                  size="sm"
                  className="border-white/30 text-black hover:bg-white/10"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Learn More
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300">
              <CardHeader>
                <div className="w-full h-48 mb-4 rounded-lg overflow-hidden">
                  <img
                    src="https://images.pexels.com/photos/586105/pexels-photo-586105.jpeg"
                    alt="Technicians assembling spacecraft parts in modern facility"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex items-center justify-between">
                  <Telescope className="w-8 h-8 text-pink-400" />
                  <span className="px-2 py-1 bg-pink-400/20 text-pink-400 text-xs rounded-full">
                    Ongoing
                  </span>
                </div>
                <CardTitle className="text-white">
                  Astronomy Observation
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-white/80 mb-4">
                  Conducting regular astronomical observations and contributing
                  to citizen science projects.
                </p>
                <Button
                  variant="outline"
                  size="sm"
                  className="border-white/30 text-black hover:bg-white/10"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Learn More
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
