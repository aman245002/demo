import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Award,
  Star,
  Crown,
  Rocket,
  Mail,
  Download,
  Check,
} from "lucide-react";

export default function Sponsorship() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />

      <div className="relative z-10 pt-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Sponsorship
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Partner with us to advance space exploration and inspire the next
              generation of space scientists and engineers.
            </p>
          </div>

          {/* Sponsorship Tiers */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            <Card className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300">
              <CardHeader className="text-center">
                <Star className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                <CardTitle className="text-2xl text-white">Bronze</CardTitle>
                <p className="text-blue-400 text-xl font-bold">$500 - $1,999</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center text-white/80">
                    <Check className="w-4 h-4 text-green-400 mr-2" />
                    Logo on website
                  </li>
                  <li className="flex items-center text-white/80">
                    <Check className="w-4 h-4 text-green-400 mr-2" />
                    Social media recognition
                  </li>
                  <li className="flex items-center text-white/80">
                    <Check className="w-4 h-4 text-green-400 mr-2" />
                    Newsletter mentions
                  </li>
                </ul>
                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  Choose Bronze
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-white/5 backdrop-blur-sm border-purple-400/30 hover:bg-white/10 transition-all duration-300 scale-105">
              <CardHeader className="text-center">
                <Award className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                <CardTitle className="text-2xl text-white">Silver</CardTitle>
                <p className="text-purple-400 text-xl font-bold">
                  $2,000 - $4,999
                </p>
                <div className="px-3 py-1 bg-purple-400/20 text-purple-400 text-sm rounded-full">
                  Most Popular
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center text-white/80">
                    <Check className="w-4 h-4 text-green-400 mr-2" />
                    Everything in Bronze
                  </li>
                  <li className="flex items-center text-white/80">
                    <Check className="w-4 h-4 text-green-400 mr-2" />
                    Logo on merchandise
                  </li>
                  <li className="flex items-center text-white/80">
                    <Check className="w-4 h-4 text-green-400 mr-2" />
                    Event partnership
                  </li>
                  <li className="flex items-center text-white/80">
                    <Check className="w-4 h-4 text-green-400 mr-2" />
                    Quarterly reports
                  </li>
                </ul>
                <Button className="w-full bg-purple-600 hover:bg-purple-700">
                  Choose Silver
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300">
              <CardHeader className="text-center">
                <Crown className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
                <CardTitle className="text-2xl text-white">Gold</CardTitle>
                <p className="text-yellow-400 text-xl font-bold">$5,000+</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center text-white/80">
                    <Check className="w-4 h-4 text-green-400 mr-2" />
                    Everything in Silver
                  </li>
                  <li className="flex items-center text-white/80">
                    <Check className="w-4 h-4 text-green-400 mr-2" />
                    Naming rights
                  </li>
                  <li className="flex items-center text-white/80">
                    <Check className="w-4 h-4 text-green-400 mr-2" />
                    Exclusive access
                  </li>
                  <li className="flex items-center text-white/80">
                    <Check className="w-4 h-4 text-green-400 mr-2" />
                    Custom benefits
                  </li>
                </ul>
                <Button className="w-full bg-yellow-600 hover:bg-yellow-700">
                  Choose Gold
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Why Sponsor Us */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white">
              Why Sponsor CGU Space Club?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <Rocket className="w-16 h-16 text-blue-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-white">
                  Innovation
                </h3>
                <p className="text-white/80">
                  Support cutting-edge research and development
                </p>
              </div>
              <div className="text-center">
                <Award className="w-16 h-16 text-purple-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-white">
                  Recognition
                </h3>
                <p className="text-white/80">
                  Gain visibility in the aerospace community
                </p>
              </div>
              <div className="text-center">
                <Star className="w-16 h-16 text-pink-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-white">
                  Impact
                </h3>
                <p className="text-white/80">
                  Directly influence future space leaders
                </p>
              </div>
              <div className="text-center">
                <Crown className="w-16 h-16 text-yellow-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-white">
                  Legacy
                </h3>
                <p className="text-white/80">
                  Be part of space exploration history
                </p>
              </div>
            </div>
          </div>

          {/* Contact Section */}
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white">
              Ready to Partner With Us?
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4"
              >
                <Mail className="mr-2 h-5 w-5" />
                Contact Us
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-white/30 text-black hover:bg-white/10 px-8 py-4"
              >
                <Download className="mr-2 h-5 w-5" />
                Download Proposal
              </Button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
