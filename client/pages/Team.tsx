import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Team() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />

      <div className="relative z-10 pt-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Our Team
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Meet the passionate individuals who are driving our mission to
              explore space and inspire the next generation of space explorers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {/* Team member cards would go here */}
            <Card className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-24 h-24 rounded-full bg-gradient-to-r from-blue-400 to-purple-600 mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold">JS</span>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white">
                  John Smith
                </h3>
                <p className="text-blue-400 mb-3">President</p>
                <p className="text-white/80 text-sm mb-4">
                  Leading our space exploration initiatives and coordinating
                  with industry partners.
                </p>
                <div className="flex justify-center space-x-3">
                  <Github className="w-5 h-5 text-white/60 hover:text-white cursor-pointer" />
                  <Linkedin className="w-5 h-5 text-white/60 hover:text-white cursor-pointer" />
                  <Mail className="w-5 h-5 text-white/60 hover:text-white cursor-pointer" />
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-24 h-24 rounded-full bg-gradient-to-r from-purple-400 to-pink-600 mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold">AJ</span>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white">
                  Alice Johnson
                </h3>
                <p className="text-purple-400 mb-3">Vice President</p>
                <p className="text-white/80 text-sm mb-4">
                  Managing club operations and organizing educational outreach
                  programs.
                </p>
                <div className="flex justify-center space-x-3">
                  <Github className="w-5 h-5 text-white/60 hover:text-white cursor-pointer" />
                  <Linkedin className="w-5 h-5 text-white/60 hover:text-white cursor-pointer" />
                  <Mail className="w-5 h-5 text-white/60 hover:text-white cursor-pointer" />
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-24 h-24 rounded-full bg-gradient-to-r from-pink-400 to-blue-600 mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold">MB</span>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white">
                  Mike Brown
                </h3>
                <p className="text-pink-400 mb-3">Technical Lead</p>
                <p className="text-white/80 text-sm mb-4">
                  Overseeing rocket development and engineering projects.
                </p>
                <div className="flex justify-center space-x-3">
                  <Github className="w-5 h-5 text-white/60 hover:text-white cursor-pointer" />
                  <Linkedin className="w-5 h-5 text-white/60 hover:text-white cursor-pointer" />
                  <Mail className="w-5 h-5 text-white/60 hover:text-white cursor-pointer" />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
