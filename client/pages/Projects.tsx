import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Rocket,
  Satellite,
  Telescope,
  ExternalLink,
  Award,
  Users,
  Target,
  Zap,
  Calendar,
  TrendingUp,
  CheckCircle,
  Clock,
} from "lucide-react";

export default function Projects() {
  const stats = [
    { number: "15", label: "Active Projects", icon: Target },
    { number: "8", label: "Completed Launches", icon: Rocket },
    { number: "25+", label: "Team Members", icon: Users },
    { number: "3", label: "Awards Won", icon: Award },
  ];

  const projectCategories = [
    {
      title: "Rocket Development",
      description: "Advanced propulsion and aerodynamics research",
      icon: Rocket,
      color: "orange",
      count: 6,
    },
    {
      title: "Satellite Technology",
      description: "CubeSat design and communication systems",
      icon: Satellite,
      color: "red",
      count: 4,
    },
    {
      title: "Space Observation",
      description: "Astronomical research and data collection",
      icon: Telescope,
      color: "light-orange",
      count: 5,
    },
  ];

  const featuredProjects = [
    {
      id: 1,
      title: "CGU Rocket Program",
      status: "Active",
      completion: 75,
      image: "https://images.pexels.com/photos/2166/flight-sky-earth-space.jpg",
      description:
        "Developing and launching high-powered rockets to compete in national competitions and advance aerospace engineering education.",
      color: "orange",
      teamSize: 12,
      timeline: "6 months",
      budget: "$50K",
    },
    {
      id: 2,
      title: "CubeSat Initiative",
      status: "Planning",
      completion: 45,
      image:
        "https://images.pexels.com/photos/32780193/pexels-photo-32780193.jpeg",
      description:
        "Designing and building small satellites for educational purposes and scientific data collection.",
      color: "red",
      teamSize: 8,
      timeline: "12 months",
      budget: "$75K",
    },
    {
      id: 3,
      title: "Observatory Project",
      status: "Ongoing",
      completion: 60,
      image: "https://images.pexels.com/photos/586105/pexels-photo-586105.jpeg",
      description:
        "Advanced research in space technology, materials science, and astronomical observations.",
      color: "light-orange",
      teamSize: 6,
      timeline: "8 months",
      budget: "$30K",
    },
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case "orange":
        return {
          border: "border-brand-orange/30 hover:border-brand-orange/60",
          shadow: "hover:shadow-brand-orange/20",
          bg: "bg-gradient-to-r from-brand-orange to-brand-red",
          text: "text-brand-orange",
          progress: "bg-brand-orange",
        };
      case "red":
        return {
          border: "border-brand-red/30 hover:border-brand-red/60",
          shadow: "hover:shadow-brand-red/20",
          bg: "bg-gradient-to-r from-brand-red to-brand-light-orange",
          text: "text-brand-red",
          progress: "bg-brand-red",
        };
      case "light-orange":
        return {
          border:
            "border-brand-light-orange/30 hover:border-brand-light-orange/60",
          shadow: "hover:shadow-brand-light-orange/20",
          bg: "bg-gradient-to-r from-brand-light-orange to-brand-orange",
          text: "text-brand-light-orange",
          progress: "bg-brand-light-orange",
        };
      default:
        return {
          border: "border-brand-orange/30 hover:border-brand-orange/60",
          shadow: "hover:shadow-brand-orange/20",
          bg: "bg-gradient-to-r from-brand-orange to-brand-red",
          text: "text-brand-orange",
          progress: "bg-brand-orange",
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
            src="https://images.pexels.com/photos/586098/pexels-photo-586098.jpeg"
            alt="Mechanic working on spacecraft at industrial facility"
            className="w-full h-full object-cover scale-110"
          />
          <div className="absolute inset-0 bg-black/50" />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-orange/4 to-brand-red/4" />
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
              Our Projects
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto font-medium leading-relaxed">
              Discover the innovative projects that are pushing the boundaries
              of space exploration and inspiring the next generation of space
              scientists.
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

      {/* Project Categories */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-black via-brand-gray-900 to-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-brand-orange to-brand-red bg-clip-text text-transparent">
              Project Categories
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projectCategories.map((category, index) => {
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
                    {category.count} Projects
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-brand-orange to-brand-red bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto font-medium">
              Our most impactful and innovative space exploration initiatives
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project) => {
              const colors = getColorClasses(project.color);
              return (
                <Card
                  key={project.id}
                  className={`bg-white/5 backdrop-blur-sm ${colors.border} hover:bg-white/10 transition-all duration-500 hover:scale-105 ${colors.shadow} group`}
                >
                  <CardHeader>
                    <div className="w-full h-48 mb-4 rounded-lg overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <div className="flex items-center justify-between mb-2">
                      <Rocket className={`w-8 h-8 ${colors.text}`} />
                      <span
                        className={`px-3 py-1 bg-${project.color === "orange" ? "brand-orange" : project.color === "red" ? "brand-red" : "brand-light-orange"}/20 ${colors.text} text-xs rounded-full font-medium`}
                      >
                        {project.status}
                      </span>
                    </div>
                    <CardTitle className="text-white font-bold mb-4">
                      {project.title}
                    </CardTitle>

                    {/* Progress Bar */}
                    <div className="mb-4">
                      <div className="flex justify-between text-sm text-white/70 mb-2">
                        <span>Progress</span>
                        <span>{project.completion}%</span>
                      </div>
                      <div className="w-full bg-white/20 rounded-full h-2">
                        <div
                          className={`${colors.progress} h-2 rounded-full transition-all duration-500`}
                          style={{ width: `${project.completion}%` }}
                        ></div>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent>
                    <p className="text-white/80 mb-4 font-normal leading-relaxed">
                      {project.description}
                    </p>

                    {/* Project Details */}
                    <div className="grid grid-cols-3 gap-4 mb-4 p-3 bg-black/30 rounded-lg">
                      <div className="text-center">
                        <Users className="w-4 h-4 text-white/60 mx-auto mb-1" />
                        <div className="text-white text-sm font-medium">
                          {project.teamSize}
                        </div>
                        <div className="text-white/60 text-xs">Team</div>
                      </div>
                      <div className="text-center">
                        <Clock className="w-4 h-4 text-white/60 mx-auto mb-1" />
                        <div className="text-white text-sm font-medium">
                          {project.timeline}
                        </div>
                        <div className="text-white/60 text-xs">Duration</div>
                      </div>
                      <div className="text-center">
                        <Target className="w-4 h-4 text-white/60 mx-auto mb-1" />
                        <div className="text-white text-sm font-medium">
                          {project.budget}
                        </div>
                        <div className="text-white/60 text-xs">Budget</div>
                      </div>
                    </div>

                    <Button
                      variant="outline"
                      size="sm"
                      className={`w-full border-white/30 text-white hover:bg-white/10 font-medium`}
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Learn More
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* View All Projects CTA */}
          <div className="text-center mt-16">
            <Button
              size="lg"
              className="bg-gradient-to-r from-brand-orange to-brand-red hover:from-brand-light-orange hover:to-brand-dark-red text-white px-12 py-4 text-lg font-bold shadow-2xl hover:shadow-brand-orange/40 transition-all duration-500 hover:scale-110"
            >
              <TrendingUp className="mr-2 h-5 w-5" />
              View All Projects
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
