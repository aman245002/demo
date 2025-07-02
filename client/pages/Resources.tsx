import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, Video, Download, ExternalLink } from "lucide-react";

export default function Resources() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />

      <div className="relative z-10 pt-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Resources
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Access educational materials, documentation, and tools to support
              your journey in space science and aerospace engineering.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            <Card className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300">
              <CardHeader>
                <div className="w-full h-48 mb-4 rounded-lg overflow-hidden">
                  <img
                    src="https://images.pexels.com/photos/326624/pexels-photo-326624.jpeg"
                    alt="Stack of diverse colored hardcover books"
                    className="w-full h-full object-cover"
                  />
                </div>
                <BookOpen className="w-8 h-8 text-blue-400 mb-2" />
                <CardTitle className="text-white">Study Materials</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-white/80 mb-4">
                  Comprehensive guides, textbooks, and research papers on
                  aerospace engineering and space science.
                </p>
                <Button
                  variant="outline"
                  size="sm"
                  className="border-white/30 text-black hover:bg-white/10"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Access Library
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300">
              <CardHeader>
                <div className="w-full h-48 mb-4 rounded-lg overflow-hidden">
                  <img
                    src="https://images.pexels.com/photos/821948/pexels-photo-821948.jpeg"
                    alt="Young person watching educational content on laptop"
                    className="w-full h-full object-cover"
                  />
                </div>
                <Video className="w-8 h-8 text-purple-400 mb-2" />
                <CardTitle className="text-white">Video Tutorials</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-white/80 mb-4">
                  Step-by-step video guides covering rocket design, launch
                  procedures, and safety protocols.
                </p>
                <Button
                  variant="outline"
                  size="sm"
                  className="border-white/30 text-black hover:bg-white/10"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Watch Videos
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300">
              <CardHeader>
                <div className="w-full h-48 mb-4 rounded-lg overflow-hidden">
                  <img
                    src="https://images.pexels.com/photos/1029757/pexels-photo-1029757.jpeg"
                    alt="Contemporary office desk with computer monitor"
                    className="w-full h-full object-cover"
                  />
                </div>
                <Download className="w-8 h-8 text-pink-400 mb-2" />
                <CardTitle className="text-white">Software Tools</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-white/80 mb-4">
                  Simulation software, design tools, and calculators for rocket
                  and spacecraft development.
                </p>
                <Button
                  variant="outline"
                  size="sm"
                  className="border-white/30 text-black hover:bg-white/10"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Download Tools
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
