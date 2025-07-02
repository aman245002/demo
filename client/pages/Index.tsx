import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
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
} from "lucide-react";

export default function Index() {
  return (
    <div className="min-h-screen bg-black text-white">
      <SpaceCarousel />
      <Navigation />

      <div className="relative z-10">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-5xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              CGU Space Club
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90 leading-relaxed">
              Exploring the cosmos, pushing boundaries, and inspiring the next
              generation of space explorers
            </p>
            <p className="text-lg mb-12 text-white/80 max-w-3xl mx-auto">
              Join us in our mission to advance space science, technology, and
              exploration. From rocket launches to astronomical research, we're
              reaching for the stars.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/sponsorship">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg font-semibold"
                >
                  <Award className="mr-2 h-5 w-5" />
                  Become a Sponsor
                </Button>
              </Link>
              <Link to="/team">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white/30 text-black hover:bg-white/10 px-8 py-4 text-lg"
                >
                  <Users className="mr-2 h-5 w-5" />
                  Meet Our Team
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black/40 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              What We Do
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <Rocket className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-3 text-white">
                    Rocket Development
                  </h3>
                  <p className="text-white/80">
                    Design, build, and launch cutting-edge rockets while
                    learning aerospace engineering principles.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <BookOpen className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-3 text-white">
                    Research & Education
                  </h3>
                  <p className="text-white/80">
                    Conduct astronomical research and educational outreach to
                    inspire future space scientists.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <Users className="w-12 h-12 text-pink-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-3 text-white">
                    Community
                  </h3>
                  <p className="text-white/80">
                    Build a community of passionate space enthusiasts and future
                    aerospace professionals.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white">
              Ready to Reach for the Stars?
            </h2>
            <p className="text-xl mb-12 text-white/90">
              Support our mission to explore space and inspire the next
              generation of explorers. Your sponsorship helps us achieve the
              impossible.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link to="/sponsorship">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-10 py-4 text-lg font-semibold w-full sm:w-auto"
                >
                  <Award className="mr-2 h-5 w-5" />
                  View Sponsorship Options
                </Button>
              </Link>
              <Link to="/contact">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white/30 text-black hover:bg-white/10 px-10 py-4 text-lg w-full sm:w-auto"
                >
                  <Mail className="mr-2 h-5 w-5" />
                  Get In Touch
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
}
