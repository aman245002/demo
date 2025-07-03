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
  Users,
  TrendingUp,
  Target,
  Zap,
  Building2,
  Globe,
  Heart,
  Handshake,
} from "lucide-react";

export default function Sponsorship() {
  const stats = [
    { number: "$500K+", label: "Total Funding Raised", icon: TrendingUp },
    { number: "25+", label: "Corporate Partners", icon: Building2 },
    { number: "50K+", label: "Community Reach", icon: Globe },
    { number: "15", label: "Success Stories", icon: Award },
  ];

  const sponsorshipTiers = [
    {
      name: "Bronze",
      price: "$500 - $1,999",
      icon: Star,
      color: "orange",
      popular: false,
      benefits: [
        "Logo on website",
        "Social media recognition",
        "Newsletter mentions",
        "Event acknowledgment",
        "Annual report inclusion",
      ],
    },
    {
      name: "Silver",
      price: "$2,000 - $4,999",
      icon: Award,
      color: "red",
      popular: true,
      benefits: [
        "Everything in Bronze",
        "Logo on merchandise",
        "Event partnership opportunities",
        "Quarterly progress reports",
        "Direct team interaction",
        "Priority support",
      ],
    },
    {
      name: "Gold",
      price: "$5,000+",
      icon: Crown,
      color: "light-orange",
      popular: false,
      benefits: [
        "Everything in Silver",
        "Naming rights opportunities",
        "Exclusive access to events",
        "Custom partnership benefits",
        "Advisory board invitation",
        "Co-branded projects",
      ],
    },
  ];

  const partnerBenefits = [
    {
      icon: Rocket,
      title: "Innovation Access",
      description:
        "Get early access to cutting-edge space technology and research breakthroughs",
    },
    {
      icon: Users,
      title: "Talent Pipeline",
      description:
        "Connect with top engineering students and emerging space professionals",
    },
    {
      icon: Award,
      title: "Brand Recognition",
      description:
        "Enhance your brand visibility in the rapidly growing space industry",
    },
    {
      icon: Target,
      title: "Mission Impact",
      description:
        "Directly contribute to advancing space exploration and education",
    },
  ];

  const successStories = [
    {
      company: "AeroTech Industries",
      contribution: "$10,000",
      outcome: "Sponsored 3 successful rocket launches",
      testimonial:
        "Partnering with CGU Space Club has been incredibly rewarding. Their innovation and dedication are truly inspiring.",
    },
    {
      company: "Stellar Dynamics",
      contribution: "$15,000",
      outcome: "Enabled CubeSat development program",
      testimonial:
        "The team's technical expertise and passion for space exploration make them an ideal partner for our mission.",
    },
    {
      company: "Cosmos Corp",
      contribution: "$8,000",
      outcome: "Funded educational outreach programs",
      testimonial:
        "Supporting education in space science is crucial for our industry's future. CGU Space Club delivers exceptional results.",
    },
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case "orange":
        return {
          border: "border-brand-orange/40 hover:border-brand-orange/80",
          shadow: "hover:shadow-brand-orange/30",
          bg: "bg-gradient-to-r from-brand-orange to-brand-red",
          text: "text-brand-orange",
          button:
            "bg-gradient-to-r from-brand-orange to-brand-red hover:from-brand-light-orange hover:to-brand-dark-red",
        };
      case "red":
        return {
          border: "border-brand-red/40 hover:border-brand-red/80",
          shadow: "hover:shadow-brand-red/30",
          bg: "bg-gradient-to-r from-brand-red to-brand-light-orange",
          text: "text-brand-red",
          button:
            "bg-gradient-to-r from-brand-red to-brand-orange hover:from-brand-dark-red hover:to-brand-light-orange",
        };
      case "light-orange":
        return {
          border:
            "border-brand-light-orange/40 hover:border-brand-light-orange/80",
          shadow: "hover:shadow-brand-light-orange/30",
          bg: "bg-gradient-to-r from-brand-light-orange to-brand-orange",
          text: "text-brand-light-orange",
          button:
            "bg-gradient-to-r from-brand-light-orange to-brand-orange hover:from-brand-orange hover:to-brand-red",
        };
      default:
        return {
          border: "border-brand-orange/40 hover:border-brand-orange/80",
          shadow: "hover:shadow-brand-orange/30",
          bg: "bg-gradient-to-r from-brand-orange to-brand-red",
          text: "text-brand-orange",
          button:
            "bg-gradient-to-r from-brand-orange to-brand-red hover:from-brand-light-orange hover:to-brand-dark-red",
        };
    }
  };

  return (
    <div className="min-h-screen bg-black text-white font-sans">
      <Navigation />

      {/* Hero Section with Background */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg"
            alt="Professional handshake in modern office"
            className="w-full h-full object-cover scale-110"
          />
          <div className="absolute inset-0 bg-black/60" />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-orange/5 to-brand-red/5" />
        </div>

        {/* Animated background elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-20 left-10 w-2 h-2 bg-brand-orange rounded-full animate-pulse"></div>
          <div className="absolute top-40 right-20 w-3 h-3 bg-brand-red rounded-full animate-bounce"></div>
          <div className="absolute bottom-30 left-1/4 w-1 h-1 bg-brand-light-orange rounded-full animate-ping"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="font-display text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-brand-orange to-brand-red bg-clip-text text-transparent drop-shadow-lg">
              Partner With Us
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto font-medium leading-relaxed">
              Join us in advancing space exploration and inspiring the next
              generation of space scientists and engineers through strategic
              partnerships.
            </p>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-black/40 backdrop-blur-sm border border-white/20 rounded-xl p-6 text-center hover:border-brand-orange/50 transition-all duration-300 hover:scale-105"
              >
                <stat.icon className="w-8 h-8 text-brand-orange mx-auto mb-3" />
                <div className="text-3xl font-bold text-white mb-1">
                  {stat.number}
                </div>
                <div className="text-white/70 text-sm font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Benefits */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-black via-brand-gray-900 to-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-brand-orange to-brand-red bg-clip-text text-transparent">
              Why Partner With Us?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {partnerBenefits.map((benefit, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-r from-brand-orange to-brand-red rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300">
                  <benefit.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {benefit.title}
                </h3>
                <p className="text-white/70 font-medium">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sponsorship Tiers */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-brand-orange to-brand-red bg-clip-text text-transparent">
              Sponsorship Tiers
            </h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto font-medium">
              Choose the partnership level that best aligns with your goals and
              budget
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {sponsorshipTiers.map((tier, index) => {
              const colors = getColorClasses(tier.color);
              return (
                <Card
                  key={index}
                  className={`bg-white/5 backdrop-blur-sm ${colors.border} hover:bg-white/10 transition-all duration-300 ${colors.shadow} ${
                    tier.popular ? "scale-105 ring-2 ring-brand-red/50" : ""
                  }`}
                >
                  <CardHeader className="text-center relative">
                    {tier.popular && (
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                        <span className="px-4 py-1 bg-brand-red text-white text-sm rounded-full font-medium">
                          Most Popular
                        </span>
                      </div>
                    )}
                    <tier.icon
                      className={`w-12 h-12 ${colors.text} mx-auto mb-4`}
                    />
                    <CardTitle className="text-2xl text-white font-bold">
                      {tier.name}
                    </CardTitle>
                    <p className={`${colors.text} text-xl font-bold mt-2`}>
                      {tier.price}
                    </p>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 mb-6">
                      {tier.benefits.map((benefit, benefitIndex) => (
                        <li
                          key={benefitIndex}
                          className="flex items-center text-white/80"
                        >
                          <Check className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                          <span className="font-medium">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                    <Button className={`w-full ${colors.button} font-bold`}>
                      Choose {tier.name}
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-black via-brand-gray-900 to-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-brand-orange to-brand-red bg-clip-text text-transparent">
              Success Stories
            </h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto font-medium">
              See how our partnerships create meaningful impact
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <Card
                key={index}
                className="bg-white/5 backdrop-blur-sm border-white/20 hover:border-brand-orange/40 hover:bg-white/10 transition-all duration-300 hover:scale-105"
              >
                <CardHeader>
                  <div className="flex items-center mb-4">
                    <Building2 className="w-8 h-8 text-brand-orange mr-3" />
                    <div>
                      <CardTitle className="text-white font-bold">
                        {story.company}
                      </CardTitle>
                      <p className="text-brand-orange text-sm font-medium">
                        {story.contribution}
                      </p>
                    </div>
                  </div>
                  <div className="bg-black/30 rounded-lg p-3 mb-4">
                    <p className="text-white/90 font-medium text-sm">
                      {story.outcome}
                    </p>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-white/80 italic font-normal leading-relaxed">
                    "{story.testimonial}"
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background with subtle pattern */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-brand-orange/10 via-brand-red/5 to-brand-orange/10" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="bg-black/40 backdrop-blur-sm border border-brand-orange/20 rounded-2xl p-8">
            <Handshake className="w-16 h-16 text-brand-orange mx-auto mb-6" />
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-brand-orange to-brand-red bg-clip-text text-transparent">
              Ready to Partner With Us?
            </h2>
            <p className="text-xl text-white/90 mb-8 font-medium leading-relaxed">
              Let's discuss how we can work together to advance space
              exploration and create meaningful impact in the aerospace
              industry.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-brand-orange to-brand-red hover:from-brand-light-orange hover:to-brand-dark-red text-white px-12 py-4 text-lg font-bold shadow-2xl hover:shadow-brand-orange/40 transition-all duration-500 hover:scale-110"
              >
                <Mail className="mr-2 h-5 w-5" />
                Contact Us
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-white/40 text-white hover:bg-white/15 px-12 py-4 text-lg font-semibold"
              >
                <Download className="mr-2 h-5 w-5" />
                Download Proposal
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
