import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  MessageSquare,
  Users,
  Calendar,
  Building2,
  Navigation2,
  Globe,
} from "lucide-react";

export default function Contact() {
  const stats = [
    { number: "24/7", label: "Support Available", icon: Clock },
    { number: "< 2hrs", label: "Response Time", icon: MessageSquare },
    { number: "50+", label: "Team Members", icon: Users },
    { number: "3", label: "Office Locations", icon: Building2 },
  ];

  const contactMethods = [
    {
      icon: Mail,
      title: "Email Us",
      primary: "contact@cguspaceclub.edu",
      secondary: "sponsorship@cguspaceclub.edu",
      description: "Get in touch via email for general inquiries",
      color: "orange",
    },
    {
      icon: Phone,
      title: "Call Us",
      primary: "+1 (555) 123-4567",
      secondary: "+1 (555) 123-4568",
      description: "Speak directly with our team members",
      color: "red",
    },
    {
      icon: MapPin,
      title: "Visit Us",
      primary: "California Graduate University",
      secondary: "Engineering Building, Room 201",
      description: "Come see our facilities and meet the team",
      color: "light-orange",
    },
  ];

  const officeHours = [
    { day: "Monday - Thursday", hours: "9:00 AM - 6:00 PM" },
    { day: "Friday", hours: "9:00 AM - 4:00 PM" },
    { day: "Saturday", hours: "10:00 AM - 2:00 PM" },
    { day: "Sunday", hours: "Closed" },
  ];

  const meetingTimes = [
    { event: "General Meetings", time: "Tuesdays: 6:00 PM - 8:00 PM" },
    { event: "Project Sessions", time: "Fridays: 4:00 PM - 6:00 PM" },
    { event: "Workshop Days", time: "Saturdays: 10:00 AM - 4:00 PM" },
    { event: "Special Events", time: "By announcement" },
  ];

  const socialLinks = [
    { icon: Facebook, name: "Facebook", color: "blue-500" },
    { icon: Twitter, name: "Twitter", color: "blue-400" },
    { icon: Instagram, name: "Instagram", color: "pink-500" },
    { icon: Linkedin, name: "LinkedIn", color: "blue-600" },
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case "orange":
        return {
          icon: "text-brand-orange",
          border: "border-brand-orange/30 hover:border-brand-orange/60",
          shadow: "hover:shadow-brand-orange/20",
        };
      case "red":
        return {
          icon: "text-brand-red",
          border: "border-brand-red/30 hover:border-brand-red/60",
          shadow: "hover:shadow-brand-red/20",
        };
      case "light-orange":
        return {
          icon: "text-brand-light-orange",
          border:
            "border-brand-light-orange/30 hover:border-brand-light-orange/60",
          shadow: "hover:shadow-brand-light-orange/20",
        };
      default:
        return {
          icon: "text-brand-orange",
          border: "border-brand-orange/30 hover:border-brand-orange/60",
          shadow: "hover:shadow-brand-orange/20",
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
            alt="Modern professional office environment"
            className="w-full h-full object-cover scale-110"
          />
          <div className="absolute inset-0 bg-black/70" />
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
              Get in Touch
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto font-medium leading-relaxed">
              Ready to join our mission or partner with us? We'd love to hear
              from you. Reach out to learn more about our projects, join our
              club, or explore sponsorship opportunities.
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

      {/* Contact Methods */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-black via-brand-gray-900 to-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-brand-orange to-brand-red bg-clip-text text-transparent">
              How to Reach Us
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactMethods.map((method, index) => {
              const colors = getColorClasses(method.color);
              return (
                <Card
                  key={index}
                  className={`bg-white/5 backdrop-blur-sm ${colors.border} hover:bg-white/10 transition-all duration-300 hover:scale-105 ${colors.shadow}`}
                >
                  <CardHeader className="text-center">
                    <method.icon
                      className={`w-12 h-12 ${colors.icon} mx-auto mb-4`}
                    />
                    <CardTitle className="text-white font-bold mb-2">
                      {method.title}
                    </CardTitle>
                    <p className="text-white/70 text-sm font-medium">
                      {method.description}
                    </p>
                  </CardHeader>
                  <CardContent className="text-center">
                    <div className="space-y-2">
                      <p className="text-white font-medium">{method.primary}</p>
                      <p className="text-white/80 text-sm">
                        {method.secondary}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form and Information */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="bg-white/5 backdrop-blur-sm border-white/20">
              <CardHeader>
                <CardTitle className="text-2xl text-white font-bold">
                  <Send className="w-6 h-6 text-brand-orange mr-3 inline" />
                  Send us a Message
                </CardTitle>
                <p className="text-white/70 font-medium">
                  Fill out the form below and we'll get back to you within 24
                  hours
                </p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName" className="text-white">
                      First Name *
                    </Label>
                    <Input
                      id="firstName"
                      placeholder="John"
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastName" className="text-white">
                      Last Name *
                    </Label>
                    <Input
                      id="lastName"
                      placeholder="Doe"
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="email" className="text-white">
                    Email Address *
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john.doe@example.com"
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
                  />
                </div>
                <div>
                  <Label htmlFor="subject" className="text-white">
                    Subject *
                  </Label>
                  <Input
                    id="subject"
                    placeholder="How can we help you?"
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
                  />
                </div>
                <div>
                  <Label htmlFor="message" className="text-white">
                    Message *
                  </Label>
                  <Textarea
                    id="message"
                    placeholder="Tell us more about your inquiry..."
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/60 min-h-[120px]"
                  />
                </div>
                <Button className="w-full bg-gradient-to-r from-brand-orange to-brand-red hover:from-brand-light-orange hover:to-brand-dark-red text-white font-bold py-3">
                  <Send className="mr-2 h-4 w-4" />
                  Send Message
                </Button>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              {/* Office Hours */}
              <Card className="bg-white/5 backdrop-blur-sm border-white/20">
                <CardHeader>
                  <CardTitle className="text-white font-bold">
                    <Clock className="w-6 h-6 text-brand-orange mr-3 inline" />
                    Office Hours
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {officeHours.map((schedule, index) => (
                      <div
                        key={index}
                        className="flex justify-between items-center py-2 border-b border-white/10 last:border-b-0"
                      >
                        <span className="text-white/90 font-medium">
                          {schedule.day}
                        </span>
                        <span className="text-brand-orange font-medium">
                          {schedule.hours}
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Meeting Times */}
              <Card className="bg-white/5 backdrop-blur-sm border-white/20">
                <CardHeader>
                  <CardTitle className="text-white font-bold">
                    <Calendar className="w-6 h-6 text-brand-red mr-3 inline" />
                    Meeting Schedule
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {meetingTimes.map((meeting, index) => (
                      <div
                        key={index}
                        className="py-2 border-b border-white/10 last:border-b-0"
                      >
                        <div className="text-white/90 font-medium mb-1">
                          {meeting.event}
                        </div>
                        <div className="text-brand-red text-sm">
                          {meeting.time}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Location */}
              <Card className="bg-white/5 backdrop-blur-sm border-white/20">
                <CardHeader>
                  <CardTitle className="text-white font-bold">
                    <Navigation2 className="w-6 h-6 text-brand-light-orange mr-3 inline" />
                    Our Location
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <MapPin className="w-5 h-5 text-brand-light-orange mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <p className="text-white/90 font-medium">
                          California Graduate University
                        </p>
                        <p className="text-white/70">
                          Engineering Building, Room 201
                        </p>
                        <p className="text-white/70">
                          123 University Ave, CA 90210
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Social Media */}
              <Card className="bg-white/5 backdrop-blur-sm border-white/20">
                <CardHeader>
                  <CardTitle className="text-white font-bold">
                    <Globe className="w-6 h-6 text-brand-orange mr-3 inline" />
                    Follow Us
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex space-x-4">
                    {socialLinks.map((social, index) => (
                      <button
                        key={index}
                        className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all duration-300 hover:scale-110"
                      >
                        <social.icon className="w-5 h-5 text-white hover:text-brand-orange" />
                      </button>
                    ))}
                  </div>
                  <p className="text-white/70 text-sm mt-4">
                    Stay connected with our latest updates, project highlights,
                    and space exploration news.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
