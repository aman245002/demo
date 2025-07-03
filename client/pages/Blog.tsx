import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Calendar,
  User,
  Clock,
  ArrowRight,
  TrendingUp,
  MessageSquare,
  Heart,
  Share2,
  Search,
  Tag,
  BookOpen,
  Rss,
  Star,
  Eye,
} from "lucide-react";

export default function Blog() {
  const stats = [
    { number: "150+", label: "Articles Published", icon: BookOpen },
    { number: "25K+", label: "Monthly Readers", icon: Eye },
    { number: "500+", label: "Community Members", icon: User },
    { number: "4.8", label: "Average Rating", icon: Star },
  ];

  const categories = [
    { name: "Rocket Science", count: 45, color: "orange" },
    { name: "Space Missions", count: 32, color: "red" },
    { name: "Technology", count: 28, color: "light-orange" },
    { name: "Research", count: 25, color: "orange" },
    { name: "Education", count: 20, color: "red" },
  ];

  const featuredPosts = [
    {
      id: 1,
      title: "Revolutionary Rocket Propulsion Breakthrough",
      excerpt:
        "Our latest research achieves unprecedented efficiency in rocket propulsion systems, marking a significant milestone in space exploration technology.",
      author: "Dr. Sarah Chen",
      date: "March 20, 2024",
      readTime: "5 min read",
      category: "Research",
      image: "https://images.pexels.com/photos/2166/flight-sky-earth-space.jpg",
      likes: 156,
      comments: 23,
      views: 2400,
      featured: true,
    },
    {
      id: 2,
      title: "CubeSat Development: From Concept to Launch",
      excerpt:
        "Follow our journey in developing cutting-edge CubeSat technology, from initial design phases to successful orbital deployment.",
      author: "Alex Rodriguez",
      date: "March 18, 2024",
      readTime: "7 min read",
      category: "Technology",
      image: "https://images.pexels.com/photos/586059/pexels-photo-586059.jpeg",
      likes: 134,
      comments: 18,
      views: 1950,
      featured: false,
    },
    {
      id: 3,
      title: "Stargazing Night: Capturing the Cosmos",
      excerpt:
        "Highlights from our recent astronomy observation session, featuring stunning planetary views and deep-space photography techniques.",
      author: "Dr. Maya Patel",
      date: "March 15, 2024",
      readTime: "4 min read",
      category: "Education",
      image:
        "https://images.pexels.com/photos/2034892/pexels-photo-2034892.jpeg",
      likes: 89,
      comments: 12,
      views: 1680,
      featured: false,
    },
    {
      id: 4,
      title: "Mars Mission Planning: Next Generation Rovers",
      excerpt:
        "Exploring the future of Mars exploration with advanced rover technology and autonomous navigation systems.",
      author: "Marcus Thompson",
      date: "March 12, 2024",
      readTime: "6 min read",
      category: "Space Missions",
      image: "https://images.pexels.com/photos/586105/pexels-photo-586105.jpeg",
      likes: 203,
      comments: 31,
      views: 3200,
      featured: false,
    },
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case "orange":
        return "text-brand-orange bg-brand-orange/20";
      case "red":
        return "text-brand-red bg-brand-red/20";
      case "light-orange":
        return "text-brand-light-orange bg-brand-light-orange/20";
      default:
        return "text-brand-orange bg-brand-orange/20";
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
            alt="Professional workspace with modern technology"
            className="w-full h-full object-cover scale-110"
          />
          <div className="absolute inset-0 bg-black/65" />
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
              Space Exploration Blog
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto font-medium leading-relaxed">
              Stay updated with the latest news, discoveries, and insights from
              our space exploration journey and the broader space community.
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

      {/* Search and Categories */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-black via-brand-gray-900 to-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-brand-orange to-brand-red bg-clip-text text-transparent">
              Explore Content
            </h2>
          </div>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-12">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/60 w-5 h-5" />
              <Input
                placeholder="Search articles, topics, or authors..."
                className="pl-12 bg-black/40 border-white/20 text-white placeholder:text-white/60 h-12 text-lg"
              />
              <Button
                size="sm"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-brand-orange to-brand-red hover:from-brand-light-orange hover:to-brand-dark-red"
              >
                Search
              </Button>
            </div>
          </div>

          {/* Categories */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-4 py-2 rounded-full ${getColorClasses(category.color)} hover:scale-105 transition-all duration-300 font-medium`}
              >
                <Tag className="w-4 h-4 mr-2 inline" />
                {category.name} ({category.count})
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured and Recent Posts */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-brand-orange to-brand-red bg-clip-text text-transparent">
              Latest Articles
            </h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto font-medium">
              Discover the latest insights and breakthroughs in space
              exploration
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {featuredPosts.map((post) => (
              <Card
                key={post.id}
                className={`bg-white/5 backdrop-blur-sm border-white/10 hover:border-brand-orange/40 hover:bg-white/10 transition-all duration-500 hover:scale-105 group ${
                  post.featured ? "lg:col-span-2" : ""
                }`}
              >
                <CardHeader>
                  <div
                    className={`w-full ${post.featured ? "h-64" : "h-48"} mb-4 rounded-lg overflow-hidden relative`}
                  >
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    {post.featured && (
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 bg-brand-orange text-white text-sm rounded-full font-medium">
                          Featured
                        </span>
                      </div>
                    )}
                    <div className="absolute top-4 right-4">
                      <span className="px-2 py-1 bg-black/70 text-white text-xs rounded-full">
                        {post.category}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center text-white/60 text-sm mb-3">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>{post.date}</span>
                    <User className="w-4 h-4 ml-4 mr-2" />
                    <span>{post.author}</span>
                    <Clock className="w-4 h-4 ml-4 mr-2" />
                    <span>{post.readTime}</span>
                  </div>

                  <CardTitle
                    className={`text-white font-bold mb-4 group-hover:text-brand-orange transition-colors ${
                      post.featured ? "text-2xl" : "text-xl"
                    }`}
                  >
                    {post.title}
                  </CardTitle>
                </CardHeader>

                <CardContent>
                  <p
                    className={`text-white/80 mb-4 font-normal leading-relaxed ${
                      post.featured ? "text-lg" : ""
                    }`}
                  >
                    {post.excerpt}
                  </p>

                  {/* Post Stats */}
                  <div className="flex items-center justify-between mb-4 p-3 bg-black/30 rounded-lg">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center">
                        <Heart className="w-4 h-4 text-red-400 mr-1" />
                        <span className="text-white/70 text-sm">
                          {post.likes}
                        </span>
                      </div>
                      <div className="flex items-center">
                        <MessageSquare className="w-4 h-4 text-blue-400 mr-1" />
                        <span className="text-white/70 text-sm">
                          {post.comments}
                        </span>
                      </div>
                      <div className="flex items-center">
                        <Eye className="w-4 h-4 text-green-400 mr-1" />
                        <span className="text-white/70 text-sm">
                          {post.views}
                        </span>
                      </div>
                    </div>
                    <Share2 className="w-4 h-4 text-white/60 hover:text-brand-orange cursor-pointer transition-colors" />
                  </div>

                  <Button
                    variant="outline"
                    className="w-full border-white/30 text-white hover:bg-white/10 font-medium"
                  >
                    Read Article
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Newsletter Subscription */}
          <div className="bg-black/40 backdrop-blur-sm border border-brand-orange/20 rounded-2xl p-8 text-center">
            <div className="max-w-2xl mx-auto">
              <Rss className="w-12 h-12 text-brand-orange mx-auto mb-4" />
              <h3 className="font-display text-2xl md:text-3xl font-bold mb-4 bg-gradient-to-r from-brand-orange to-brand-red bg-clip-text text-transparent">
                Stay Updated
              </h3>
              <p className="text-white/80 mb-6 font-medium">
                Subscribe to our newsletter and never miss the latest space
                exploration news and insights.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <Input
                  placeholder="Enter your email..."
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
                />
                <Button className="bg-gradient-to-r from-brand-orange to-brand-red hover:from-brand-light-orange hover:to-brand-dark-red text-white font-semibold">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
