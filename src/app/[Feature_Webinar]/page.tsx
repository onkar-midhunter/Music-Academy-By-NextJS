"use client";
import React from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { featuredWebinars } from "@/data/featureWebinars";
import { Boxes } from "@/Component/ui/background-boxes";
import {
  ArrowLeft,
  Calendar,
  Clock,
  Users,
  Video,
  CheckCircle2,
  Sparkles,
  Play,
} from "lucide-react";
import { useRouter } from "next/navigation";

export default function WebinarPage() {
  const router = useRouter();
  const params = useParams();
  console.log(params);

  const { Feature_Webinar } = params;
  const webinar = featuredWebinars.find((w) => w.slug === Feature_Webinar);

  if (!webinar) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black text-white">
        <div className="absolute inset-0 z-0">
          <Boxes />
        </div>
        <h1 className="text-3xl font-bold text-red-500">
          Webinar not found 😢
        </h1>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-black">
      {/* Background Boxes */}
      <div className="absolute inset-0 z-0">
        <Boxes />
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen text-white pt-24 pb-20 px-4">
        {/* Back Button - Animated Entry */}
        <div className="max-w-6xl mx-auto mb-8 animate-fade-in-down">
          <button
            onClick={() => router.back()} // 👈 goes to previous page in browser history
            className="group flex items-center gap-2 text-gray-400 hover:text-white transition-all duration-300 hover:gap-3"
          >
            <ArrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
            <span className="text-sm font-medium">Go Back</span>
          </button>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Hero Section */}
          <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
            {/* Left Column - Visual */}
            <div className="animate-fade-in-left space-y-6">
              <div className="relative group">
                {/* Glow Effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-600 rounded-3xl blur-xl opacity-30 group-hover:opacity-60 transition duration-500"></div>

                {/* Main Card */}
                <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-2xl p-8 shadow-2xl">
                  <div className="flex items-center justify-center mb-6">
                    <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-500/50 relative group-hover:scale-110 transition-transform duration-300">
                      <Video className="w-12 h-12 text-white" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Play className="w-8 h-8 text-white/80" />
                      </div>
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-center mb-4 text-white">
                    Live Interactive Session
                  </h3>

                  <div className="space-y-3">
                    <div className="flex items-center gap-3 text-gray-300">
                      <Calendar className="w-5 h-5 text-blue-400" />
                      <span>
                        {new Date().toLocaleDateString("en-US", {
                          weekday: "long",
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-300">
                      <Clock className="w-5 h-5 text-cyan-400" />
                      <span>90 minutes duration</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-300">
                      <Users className="w-5 h-5 text-teal-400" />
                      <span>Limited to 150 participants</span>
                    </div>
                  </div>
                </div>

                {/* Featured Badge */}
                {webinar.isFeatured && (
                  <div className="absolute -top-3 -right-3 bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-4 py-2 rounded-full text-sm font-bold flex items-center gap-2 shadow-lg animate-bounce-slow">
                    <Sparkles className="w-4 h-4" />
                    Featured
                  </div>
                )}
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-4 backdrop-blur-sm hover:border-blue-500/50 transition-all duration-300">
                  <p className="text-3xl font-bold text-blue-400">Live</p>
                  <p className="text-sm text-gray-400 mt-1">Interactive Q&A</p>
                </div>
                <div className="bg-cyan-500/10 border border-cyan-500/30 rounded-xl p-4 backdrop-blur-sm hover:border-cyan-500/50 transition-all duration-300">
                  <p className="text-3xl font-bold text-cyan-400">Free</p>
                  <p className="text-sm text-gray-400 mt-1">No Cost to Join</p>
                </div>
              </div>
            </div>

            {/* Right Column - Info */}
            <div className="space-y-6 animate-fade-in-right">
              <div>
                <div className="inline-block bg-blue-500/10 border border-blue-500/30 px-3 py-1 rounded-full text-sm text-blue-400 mb-4">
                  Webinar #{webinar.id}
                </div>
                <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent leading-tight">
                  {webinar.title}
                </h1>
                <p className="text-gray-400 text-lg leading-relaxed">
                  {webinar.description}
                </p>
              </div>

              {/* Expert Panel Card */}
              <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 border border-gray-700 rounded-2xl p-6 backdrop-blur-sm hover:border-gray-600 transition-all duration-300">
                <p className="text-sm text-gray-400 uppercase tracking-wider mb-3">
                  Expert Panel
                </p>
                <div className="flex -space-x-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-lg font-bold border-2 border-gray-900 shadow-lg">
                    M
                  </div>
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-lg font-bold border-2 border-gray-900 shadow-lg">
                    E
                  </div>
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-teal-500 rounded-full flex items-center justify-center text-lg font-bold border-2 border-gray-900 shadow-lg">
                    P
                  </div>
                </div>
                <p className="text-white font-semibold">
                  Industry Leading Experts & Professionals
                </p>
              </div>

              {/* CTA Button */}
              <button className="w-full bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-600 hover:from-blue-700 hover:via-cyan-700 hover:to-teal-700 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/50 text-lg">
                Register for Free
              </button>

              <p className="text-center text-sm text-gray-400">
                🎁 Instant access + downloadable resources
              </p>
            </div>
          </div>

          {/* What You'll Learn Section */}
          <div className="mt-16 animate-fade-in-up">
            <h2 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              What You'll Discover
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                "Expert insights and proven techniques",
                "Industry best practices and workflows",
                "Practical tips you can apply immediately",
                "Live demonstrations and real examples",
                "Direct access to ask questions",
                "Exclusive resources and materials",
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 bg-gray-900/60 border border-gray-700 rounded-xl p-4 hover:border-cyan-500/50 transition-all duration-300 group"
                >
                  <CheckCircle2 className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                  <p className="text-gray-300">{item}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Why Attend Section */}
          <div className="mt-16 animate-fade-in-up">
            <div className="bg-gradient-to-br from-blue-900/20 to-cyan-900/20 border border-blue-500/30 rounded-2xl p-8 backdrop-blur-sm">
              <h3 className="text-2xl font-bold mb-4 text-center text-white">
                Why Attend This Webinar?
              </h3>
              <p className="text-gray-300 text-center leading-relaxed max-w-3xl mx-auto mb-6">
                Join our community of passionate learners and gain invaluable
                knowledge from industry experts. This interactive session is
                designed to provide you with actionable insights and practical
                skills that you can implement right away.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <span className="bg-blue-500/20 border border-blue-500/30 px-4 py-2 rounded-full text-sm text-blue-300">
                  Certificate of Attendance
                </span>
                <span className="bg-cyan-500/20 border border-cyan-500/30 px-4 py-2 rounded-full text-sm text-cyan-300">
                  Lifetime Access to Recording
                </span>
                <span className="bg-teal-500/20 border border-teal-500/30 px-4 py-2 rounded-full text-sm text-teal-300">
                  Bonus Materials
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
