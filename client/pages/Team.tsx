import Navigation from "@/components/Navigation";
import { Link } from "react-router-dom";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Github,
  Linkedin,
  Mail,
  Award,
  Users,
  Target,
  Zap,
  Calendar,
} from "lucide-react";

export default function Team() {
  const teamMembers = [
    {
      id: 1,
      name: "Dr. Smita Rani Parija",
      role: "Co-Ordinator", //was confused for it and the id2 to be put here or somewhere else. and their roles.
      image:
        "smitha_maam.jpg",
      description:
        "Leading our space exploration initiatives fueling the creativity and ideas. Asso. Proffesor and President at ECE Department in CGU.",
      color: "orange",
      achievements: ["NASA Internship", "3 Published Papers", "AIAA Award"],
    },
    {
      id: 2,
      name: "Dr. Soumya Mishra",
      role: "Co-Ordinator",
      image:
        "soumya_maam.jpg",
      description:
        "Managing club operations and coordinating with our students to help them achieve their goal. Asso. Proffessor and Custodian at Ece Department.",
      color: "red",
      achievements: ["SpaceX Internship", "Rocketry Champion", "IEEE Member"],
    },
    {
      id: 3,
      name: "Debadutta Sahoo", //the student member lists start from here.
      role: "Student President",
      image:
        "president.jpg",
      description:
        "Leading our research initiatives in space technology and materials science.",
      color: "light-orange",
      achievements: ["NASA Researcher", "5 Patents", "Space Grant"],
    },
    {
      id: 4,
      name: "Rahul Kumar Gupta",
      role: "Student Vice-President",
      image:
        "vice_president.jpg",
      description:
        "Overseeing Satellite development and projects, to turn the ideas of us students into reality.",
      color: "orange",
      achievements: ["Blue Origin Intern", "CAD Expert", "Design Award"],
    },
    {
      id: 5,
      name: "Debankur Pal",
      role: "Student Secretary",
      image:
        "dabankur_pal.jpg",
      description:
        "Ensuring all projects is being handeled effeciently and effectively, while handeling the communication within the team",
      color: "red",
      achievements: ["Safety Certified", "OSHA Trainer", "Risk Assessment"],
    },
    {
      id: 6,
      name: "Aditi Singh",
      role: "Student Tresurer",
      image:
        "aditi_singh.jpg",
      description:
        "Creating and Overseeing budgets and possible fun raisers, to be able bring the project to light and giving it a physical form.",
      color: "light-orange",
      achievements: ["PR Specialist", "TEDx Speaker", "Media Relations"],
    },
    {
      id: 7,
      name: "Nilkamal Ghosh",
      role: "Student Volunteer",
      image:
        "Nilkamal.jpg",
      description:
        "Helping the team in transitioning the ideas into perspective, to help the technological world",
      color: "orange",
      achievements: ["PR Specialist", "TEDx Speaker", "Media Relations"],
    },
    {
      id: 8,
      name: "Asmita Agarwal",
      role: "Student Volunteer",
      image:
        "asmita_agarwal.png",
      description:
        "Helping the team in transitioning the ideas into perspective, to help the technological world",
      color: "red",
      achievements: ["PR Specialist", "TEDx Speaker", "Media Relations"],
    },
    {
      id: 9,
      name: "Smita Nayak",
      role: "Student Volunteer",
      image:
        "smita_nayak.jpg",
      description:
        "Helping the team in transitioning the ideas into perspective, to help the technological world",
      color: "light-orange",
      achievements: ["PR Specialist", "TEDx Speaker", "Media Relations"],
    },
    {
      id: 10,
      name: "Nitish Giri",
      role: "Student Volunteer",
      image:
        "nitish_giri.jpg",
      description:
        "Helping the team in transitioning the ideas into perspective, to help the technological world",
      color: "orange",
      achievements: ["PR Specialist", "TEDx Speaker", "Media Relations"],
    },
    // {
    //   id: 11,
    //   name: "Priyan Acharya",
    //   role: "Student Volunteer",
    //   image:
    //     "https://images.pexels.com/photos/3862126/pexels-photo-3862126.jpeg",
    //   description:
    //     "Helping the team in transitioning the ideas into perspective, to help the technological world",
    //   color: "red",
    //   achievements: ["PR Specialist", "TEDx Speaker", "Media Relations"],
    // },
    {
      id: 11,
      name: "Ramakanta Senapati",
      role: "Student Volunteer",
      image:
        "ramakant.jpg",
      description:
        "Helping the team in transitioning the ideas into perspective, to help the technological world",
      achievements: ["PR Specialist", "TEDx Speaker", "Media Relations"],
    },
  ];

  // const stats = [
  //   { number: "50+", label: "Active Members", icon: Users },
  //   { number: "15", label: "Ongoing Projects", icon: Target },
  //   { number: "8", label: "Successful Launches", icon: Zap },
  //   { number: "3", label: "Years Active", icon: Calendar },
  // ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case "orange":
        return {
          border: "border-brand-orange/30 hover:border-brand-orange/60",
          shadow: "hover:shadow-brand-orange/20",
          bg: "bg-gradient-to-r from-brand-orange to-brand-red",
          text: "text-brand-orange",
          hover: "hover:text-brand-orange",
        };
      case "red":
        return {
          border: "border-brand-red/30 hover:border-brand-red/60",
          shadow: "hover:shadow-brand-red/20",
          bg: "bg-gradient-to-r from-brand-red to-brand-light-orange",
          text: "text-brand-red",
          hover: "hover:text-brand-red",
        };
      case "light-orange":
        return {
          border:
            "border-brand-light-orange/30 hover:border-brand-light-orange/60",
          shadow: "hover:shadow-brand-light-orange/20",
          bg: "bg-gradient-to-r from-brand-light-orange to-brand-orange",
          text: "text-brand-light-orange",
          hover: "hover:text-brand-light-orange",
        };
      default:
        return {
          border: "border-brand-orange/30 hover:border-brand-orange/60",
          shadow: "hover:shadow-brand-orange/20",
          bg: "bg-gradient-to-r from-brand-orange to-brand-red",
          text: "text-brand-orange",
          hover: "hover:text-brand-orange",
        };
    }
  };

  return (
    <div className="min-h-screen bg-black text-white font-sans">
      <Navigation />

      {/* Hero Section with Background */}
      <section className="relative py-20 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/HeroImage3c.jpg" //the background image at the top.
            alt="Diverse scientists working together in modern laboratory"
            className="w-full h-full object-cover scale-100"
          />
          <div className="absolute inset-0 bg-black/50" />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-orange/3 to-brand-red/3" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="text-center "> {/* removed mb-16 */}
            <h1 className="font-display text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-brand-orange to-brand-red bg-clip-text text-transparent drop-shadow-lg">
              {/* Meet Our Team */}Leadership Team
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto font-medium leading-relaxed">
              The passionate individuals driving our mission to explore space
              and inspire the next generation of space explorers
            </p>
          </div>

          {/* Stats Section */}
          {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-black/40 border border-white/20 rounded-xl p-6 text-center hover:border-brand-orange/50 transition-all duration-300"
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
          </div> */}
        </div>
      </section>

      {/* Team Members Section */}
      <section className="py-10 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black/50 to-black" >
        <div className="max-w-7xl mx-auto">
          {/* <div className="text-center mb-16"> //**the old Leadership title that was right beloe the picture.**
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-brand-orange to-brand-red bg-clip-text text-transparent">
              Leadership Team
            </h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto font-medium">
              Meet the experts leading our space exploration initiatives
            </p>
          </div> */}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member) => {
              const colors = getColorClasses(member.color);
              return (
                <Card
                  key={member.id}
                  className={`bg-white/5 backdrop-blur-sm ${colors.border} hover:bg-white/10 transition-all duration-500 hover:scale-105 ${colors.shadow} group`}
                >
                  <CardHeader className="text-center p-6">
                    <div className="relative mb-4">
                      <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-white/20 group-hover:border-white/40 transition-all duration-300">
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                      <div
                        className={`absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full ${colors.bg} flex items-center justify-center shadow-lg`}
                      >
                        <Award className="w-4 h-4 text-white" />
                      </div>
                    </div>
                    <CardTitle className="text-xl font-bold text-white mb-2">
                      {member.name}
                    </CardTitle>
                    <p className={`${colors.text} font-medium mb-3`}>
                      {member.role}
                    </p>
                  </CardHeader>
                  {/* <CardContent className="px-6 pb-6">
                    <p className="text-white/80 text-sm mb-4 font-normal leading-relaxed">
                      {member.description}
                    </p>

                    
                    <div className="mb-4">
                      <h4 className="text-white font-medium text-xs mb-2 uppercase tracking-wide">
                        Achievements
                      </h4>
                      <div className="flex flex-wrap gap-1">
                        {member.achievements.map((achievement, index) => (
                          <span
                            key={index}
                            className="px-2 py-1 bg-white/10 text-white/70 text-xs rounded-full"
                          >
                            {achievement}
                          </span>
                        ))}
                      </div>
                    </div>

                    
                    <div className="flex justify-center space-x-4 pt-4 border-t border-white/10">
                      <Github
                        className={`w-5 h-5 text-white/60 ${colors.hover} cursor-pointer transition-colors`}
                      />
                      <Linkedin
                        className={`w-5 h-5 text-white/60 ${colors.hover} cursor-pointer transition-colors`}
                      />
                      <Mail
                        className={`w-5 h-5 text-white/60 ${colors.hover} cursor-pointer transition-colors`}
                      />
                    </div>
                  </CardContent> */}
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-black via-brand-gray-900 to-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-brand-orange to-brand-red bg-clip-text text-transparent">
              Our Values
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-r from-brand-orange to-brand-red rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300">
                <Target className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Innovation</h3>
              <p className="text-white/70 font-medium">
                Pushing the boundaries of space technology and exploration
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-r from-brand-red to-brand-light-orange rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300">
                <Users className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                Collaboration
              </h3>
              <p className="text-white/70 font-medium">
                Working together to achieve extraordinary results
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-r from-brand-light-orange to-brand-orange rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300">
                <Zap className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Excellence</h3>
              <p className="text-white/70 font-medium">
                Striving for the highest standards in everything we do
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Join Team CTA with Background */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/earth.jpg"
            alt="planet surface"
            className="w-full h-full object-cover scale-100"
          />
          <div className="absolute inset-0 bg-black/45" />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-orange/4 via-brand-red/3 to-brand-orange/4" />
        </div>

        {/* Animated background elements
        <div className="absolute inset-0 z-0">
          <div className="absolute top-20 left-10 w-2 h-2 bg-brand-orange rounded-full animate-pulse"></div>
          <div className="absolute top-40 right-20 w-3 h-3 bg-brand-red rounded-full animate-bounce"></div>
          <div className="absolute bottom-30 left-1/4 w-1 h-1 bg-brand-light-orange rounded-full animate-ping"></div>
          <div className="absolute top-60 left-3/4 w-2 h-2 bg-brand-orange rounded-full animate-pulse"></div>
        </div> */}

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="mb-12">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-brand-orange to-brand-red bg-clip-text text-transparent drop-shadow-lg">
              Want to Join Our Team?
            </h2>
            <p className="text-xl text-white/90 mb-8 font-medium leading-relaxed max-w-3xl mx-auto">
              We're always looking for passionate individuals to join our
              mission. Whether you're a student, researcher, or industry
              professional, there's a place for you here.
            </p>
          </div>

          {/* Benefits Grid
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-black/40 border border-white/20 rounded-xl p-6 hover:border-brand-orange/50 transition-all duration-300 hover:scale-105">
              <Award className="w-12 h-12 text-brand-orange mx-auto mb-4" />
              <h3 className="text-lg font-bold text-white mb-2">
                Learn & Grow
              </h3>
              <p className="text-white/80 text-sm font-medium">
                Access to cutting-edge technology and mentorship
              </p>
            </div>

            <div className="bg-black/40 border border-white/20 rounded-xl p-6 hover:border-brand-red/50 transition-all duration-300 hover:scale-105">
              <Users className="w-12 h-12 text-brand-red mx-auto mb-4" />
              <h3 className="text-lg font-bold text-white mb-2">Network</h3>
              <p className="text-white/80 text-sm font-medium">
                Connect with industry professionals and alumni
              </p>
            </div>

            <div className="bg-black/40 border border-white/20 rounded-xl p-6 hover:border-brand-light-orange/50 transition-all duration-300 hover:scale-105">
              <Zap className="w-12 h-12 text-brand-light-orange mx-auto mb-4" />
              <h3 className="text-lg font-bold text-white mb-2">Impact</h3>
              <p className="text-white/80 text-sm font-medium">
                Work on real projects that advance space exploration
              </p>
            </div>
          </div> */}

          {/* Application Process */}
          <div className="bg-black/30 border border-white/20 rounded-2xl p-8 mb-8">
            <h3 className="font-display text-2xl font-bold text-white mb-6">
              Application Process
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-r from-brand-orange to-brand-red rounded-full flex items-center justify-center mx-auto mb-3 text-white font-bold text-lg shadow-lg">
                  1
                </div>
                <h4 className="font-bold text-white mb-2">
                  Submit Application
                </h4>
                <p className="text-white/70 text-sm">
                  Submit your resume with your background and interests
                </p>
              </div>

              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-r from-brand-red to-brand-light-orange rounded-full flex items-center justify-center mx-auto mb-3 text-white font-bold text-lg shadow-lg">
                  2
                </div>
                <h4 className="font-bold text-white mb-2">Interview</h4>
                <p className="text-white/70 text-sm">
                  Meet with our team to discuss your goals and experience
                </p>
              </div>

              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-r from-brand-light-orange to-brand-orange rounded-full flex items-center justify-center mx-auto mb-3 text-white font-bold text-lg shadow-lg">
                  3
                </div>
                <h4 className="font-bold text-white mb-2">Welcome Aboard</h4>
                <p className="text-white/70 text-sm">
                  Join our team and start working on exciting projects
                </p>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link to="/contact">
              <Button
                size="lg"
                className="bg-gradient-to-r from-brand-orange to-brand-red 
               hover:from-brand-light-orange hover:to-brand-dark-red 
               text-white px-12 py-4 text-lg font-bold 
               shadow-2xl hover:shadow-brand-orange/40 
               transition-all duration-500 
               hover:scale-110 
               border border-brand-orange/30"
              >
                <Users className="mr-2 h-5 w-5" />
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
