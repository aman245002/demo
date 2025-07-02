import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, User, Clock, ArrowRight } from "lucide-react";

export default function Blog() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />

      <div className="relative z-10 pt-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Blog
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Stay updated with the latest news, discoveries, and insights from
              our space exploration journey and the broader space community.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            <Card className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300">
              <CardHeader>
                <div className="w-full h-48 rounded-lg mb-4 overflow-hidden">
                  <img
                    src="https://images.pexels.com/photos/2166/flight-sky-earth-space.jpg"
                    alt="NASA space shuttle launching with fiery liftoff"
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardTitle className="text-white">
                  Successful Rocket Launch Update
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center text-white/60 text-sm mb-3">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>March 15, 2024</span>
                  <User className="w-4 h-4 ml-4 mr-2" />
                  <span>John Smith</span>
                </div>
                <p className="text-white/80 mb-4">
                  Our latest rocket achieved an altitude record, marking a
                  significant milestone in our development program...
                </p>
                <Button
                  variant="outline"
                  size="sm"
                  className="border-white/30 text-black hover:bg-white/10"
                >
                  Read More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300">
              <CardHeader>
                <div className="w-full h-48 rounded-lg mb-4 overflow-hidden">
                  <img
                    src="https://images.pexels.com/photos/586059/pexels-photo-586059.jpeg"
                    alt="Modern spacecraft cabin with digital control panels"
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardTitle className="text-white">
                  CubeSat Project Progress
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center text-white/60 text-sm mb-3">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>March 10, 2024</span>
                  <User className="w-4 h-4 ml-4 mr-2" />
                  <span>Alice Johnson</span>
                </div>
                <p className="text-white/80 mb-4">
                  Updates on our CubeSat development including component
                  selection and testing procedures...
                </p>
                <Button
                  variant="outline"
                  size="sm"
                  className="border-white/30 text-black hover:bg-white/10"
                >
                  Read More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300">
              <CardHeader>
                <div className="w-full h-48 rounded-lg mb-4 overflow-hidden">
                  <img
                    src="https://images.pexels.com/photos/2034892/pexels-photo-2034892.jpeg"
                    alt="Telescope silhouette capturing the Milky Way"
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardTitle className="text-white">
                  Astronomy Night Observations
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center text-white/60 text-sm mb-3">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>March 5, 2024</span>
                  <User className="w-4 h-4 ml-4 mr-2" />
                  <span>Mike Brown</span>
                </div>
                <p className="text-white/80 mb-4">
                  Highlights from our recent astronomy observation session
                  including stunning planetary views...
                </p>
                <Button
                  variant="outline"
                  size="sm"
                  className="border-white/30 text-black hover:bg-white/10"
                >
                  Read More
                  <ArrowRight className="w-4 h-4 ml-2" />
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
