import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  BookOpen,
  Video,
  Download,
  ExternalLink,
  Users,
  Star,
  TrendingUp,
  FileText,
  PlayCircle,
  Code,
  Database,
  Cpu,
  Globe,
} from "lucide-react";

export default function Resources() {
  const resourceCategories = [
    {
      title: "Study Materials",
      description: "Comprehensive guides and textbooks",
      icon: BookOpen,
      color: "orange",
      count: 45,
    },
    {
      title: "Video Tutorials",
      description: "Step-by-step video guides",
      icon: Video,
      color: "red",
      count: 32,
    },
    {
      title: "Software Tools",
      description: "Simulation and design software",
      icon: Download,
      color: "light-orange",
      count: 28,
    },
  ];

  const featuredResources = [
    {
      id: 1,
      title: "Aerospace Engineering Handbook",
      type: "PDF",
      category: "Study Material",
      image: "https://images.pexels.com/photos/326624/pexels-photo-326624.jpeg",
      description:
        "Comprehensive guide covering fundamental principles of aerospace engineering, propulsion systems, and space mission design.",
      downloads: 1250,
      rating: 4.8,
      size: "25 MB",
      color: "orange",
    },
    {
      id: 2,
      title: "Rocket Design Tutorial Series",
      type: "Video Course",
      category: "Tutorial",
      image: "https://images.pexels.com/photos/821948/pexels-photo-821948.jpeg",
      description:
        "Complete video series covering rocket design principles, CAD modeling, and simulation techniques for beginners to advanced users.",
      downloads: 980,
      rating: 4.9,
      size: "2.5 GB",
      color: "red",
    },
    {
      id: 3,
      title: "Orbital Mechanics Calculator",
      type: "Software",
      category: "Tool",
      image:
        "https://images.pexels.com/photos/1029757/pexels-photo-1029757.jpeg",
      description:
        "Advanced calculator for orbital mechanics computations, trajectory planning, and mission analysis with real-time visualization.",
      downloads: 756,
      rating: 4.7,
      size: "150 MB",
      color: "light-orange",
    },
  ];

  const toolCategories = [
    { name: "CAD Software", icon: Code, count: 8 },
    { name: "Simulation Tools", icon: Cpu, count: 12 },
    { name: "Data Analysis", icon: Database, count: 6 },
    { name: "Web Resources", icon: Globe, count: 15 },
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case "orange":
        return {
          border: "border-brand-orange/30 hover:border-brand-orange/60",
          shadow: "hover:shadow-brand-orange/20",
          bg: "bg-gradient-to-r from-brand-orange to-brand-red",
          text: "text-brand-orange",
          badge: "bg-brand-orange/20 text-brand-orange",
        };
      case "red":
        return {
          border: "border-brand-red/30 hover:border-brand-red/60",
          shadow: "hover:shadow-brand-red/20",
          bg: "bg-gradient-to-r from-brand-red to-brand-light-orange",
          text: "text-brand-red",
          badge: "bg-brand-red/20 text-brand-red",
        };
      case "light-orange":
        return {
          border:
            "border-brand-light-orange/30 hover:border-brand-light-orange/60",
          shadow: "hover:shadow-brand-light-orange/20",
          bg: "bg-gradient-to-r from-brand-light-orange to-brand-orange",
          text: "text-brand-light-orange",
          badge: "bg-brand-light-orange/20 text-brand-light-orange",
        };
      default:
        return {
          border: "border-brand-orange/30 hover:border-brand-orange/60",
          shadow: "hover:shadow-brand-orange/20",
          bg: "bg-gradient-to-r from-brand-orange to-brand-red",
          text: "text-brand-orange",
          badge: "bg-brand-orange/20 text-brand-orange",
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
            src="./resource.webp"
            alt="Solar system with planets and stars"
            className="w-full h-full object-cover scale-110"
          />
          <div className="absolute inset-0 bg-black/60" />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-orange/4 to-brand-red/4" />
        </div>

        {/* Animated background elements */}
        {/* <div className="absolute inset-0 z-0">
          <div className="absolute top-20 left-10 w-2 h-2 bg-brand-orange rounded-full animate-pulse"></div>
          <div className="absolute top-40 right-20 w-3 h-3 bg-brand-red rounded-full animate-bounce"></div>
          <div className="absolute bottom-30 left-1/4 w-1 h-1 bg-brand-light-orange rounded-full animate-ping"></div>
        </div> */}

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="font-display text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-brand-orange to-brand-red bg-clip-text text-transparent drop-shadow-lg">
              Learning Resources
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto font-medium leading-relaxed">
              Access educational materials, documentation, and tools to support
              your journey in space science and aerospace engineering.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { label: "200+ Resources Available", icon: BookOpen },
              { label: "50+ Video Tutorials", icon: Video },
              { label: "25+ Software Tools", icon: Download },
              { label: "1000+ Downloads", icon: TrendingUp },
            ].map((stat, index) => (
              <div
                key={index}
                className="bg-black/40 backdrop-blur-sm border border-white/20 rounded-lg p-6 flex items-center space-x-4 hover:bg-black/50 transition-colors duration-300"
              >
                <stat.icon className="w-8 h-8 text-brand-orange" />
                <span className="text-white font-semibold">{stat.label}</span>
              </div>
            ))}
          </div>
      </section>

      {/* Resource Categories */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-black via-brand-gray-900 to-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-brand-orange to-brand-red bg-clip-text text-transparent">
              Resource Categories
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {resourceCategories.map((category, index) => {
              const colors = getColorClasses(category.color);
              return (
                <div key={index} className="text-center group">
                  <div
                    className={`w-20 h-20 mx-auto mb-4 ${colors.bg} rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300`}
                  >
                    <category.icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">
                    {category.title}
                  </h3>
                  <p className="text-white/70 font-medium mb-2">
                    {category.description}
                  </p>
                  <span
                    className={`inline-block px-3 py-1 ${colors.text} bg-white/10 rounded-full text-sm font-medium`}
                  >
                    {category.count} Items
                  </span>
                </div>
              );
            })}
          </div>

          {/* Tool Categories */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {toolCategories.map((tool, index) => (
              <div
                key={index}
                className="bg-black/40 backdrop-blur-sm border border-white/20 rounded-xl p-4 text-center hover:border-brand-orange/40 transition-all duration-300 hover:scale-105"
              >
                <tool.icon className="w-6 h-6 text-brand-orange mx-auto mb-2" />
                <div className="text-sm font-medium text-white mb-1">
                  {tool.name}
                </div>
                <div className="text-xs text-white/60">{tool.count} tools</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Resources */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-brand-orange to-brand-red bg-clip-text text-transparent">
              Featured Resources
            </h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto font-medium">
              Our most popular and comprehensive learning materials
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {featuredResources.map((resource) => {
              const colors = getColorClasses(resource.color);
              return (
                <Card
                  key={resource.id}
                  className={`bg-white/5 backdrop-blur-sm ${colors.border} hover:bg-white/10 transition-all duration-500 hover:scale-105 ${colors.shadow} group`}
                >
                  <CardHeader>
                    <div className="w-full h-48 mb-4 rounded-lg overflow-hidden relative">
                      <img
                        src={resource.image}
                        alt={resource.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute top-2 right-2">
                        <span
                          className={`px-2 py-1 ${colors.badge} text-xs rounded-full font-medium`}
                        >
                          {resource.type}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs text-white/60 uppercase tracking-wide font-medium">
                        {resource.category}
                      </span>
                      <div className="flex items-center">
                        <Star className="w-4 h-4 text-yellow-400 mr-1" />
                        <span className="text-sm text-white/80">
                          {resource.rating}
                        </span>
                      </div>
                    </div>

                    <CardTitle className="text-white font-bold mb-4">
                      {resource.title}
                    </CardTitle>
                  </CardHeader>

                  <CardContent>
                    <p className="text-white/80 mb-4 font-normal leading-relaxed">
                      {resource.description}
                    </p>

                    {/* Resource Stats */}
                    <div className="grid grid-cols-2 gap-4 mb-4 p-3 bg-black/30 rounded-lg">
                      <div className="text-center">
                        <Download className="w-4 h-4 text-white/60 mx-auto mb-1" />
                        <div className="text-white text-sm font-medium">
                          {resource.downloads}
                        </div>
                        <div className="text-white/60 text-xs">Downloads</div>
                      </div>
                      <div className="text-center">
                        <FileText className="w-4 h-4 text-white/60 mx-auto mb-1" />
                        <div className="text-white text-sm font-medium">
                          {resource.size}
                        </div>
                        <div className="text-white/60 text-xs">Size</div>
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <Button
                        size="sm"
                        className={`flex-1 ${colors.bg} hover:opacity-90 text-white font-medium`}
                      >
                        <Download className="w-4 h-4 mr-2" />
                        Download
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-white/30 text-white hover:bg-white/10"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Access All Resources CTA */}
          <div className="text-center mt-16">
            <div className="bg-black/40 backdrop-blur-sm border border-brand-orange/20 rounded-2xl p-8 max-w-2xl mx-auto">
              <h3 className="font-display text-2xl md:text-3xl font-bold mb-4 bg-gradient-to-r from-brand-orange to-brand-red bg-clip-text text-transparent">
                Access Full Resource Library
              </h3>
              <p className="text-white/80 mb-6 font-medium">
                Join our community to get unlimited access to all resources,
                including exclusive content and early access to new materials.
              </p>
              <Button
                size="lg"
                className="bg-gradient-to-r from-brand-orange to-brand-red hover:from-brand-light-orange hover:to-brand-dark-red text-white px-8 py-3 font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Users className="mr-2 h-5 w-5" />
                Join Community
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
