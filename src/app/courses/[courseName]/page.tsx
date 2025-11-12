"use client";
import React from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import courseData from "@/data/music_courses.json";
import { BackgroundLines } from "@/Component/ui/background-lines";
import { ArrowLeft, Clock, Users, BookOpen, Star } from "lucide-react";
import { useRouter } from "next/navigation";

export default function CoursePage() {
  const params = useParams();
  const { courseName } = params;
  const course = courseData.courses.find((c) => c.slug === courseName);
    const router = useRouter();
  if (!course) {
    return (
      <BackgroundLines className="absolute inset-0 z-0">
        <div className="min-h-screen flex items-center justify-center bg-black text-white">
        <h1 className="text-3xl font-bold text-red-500">Course not found 😢</h1>
      </div>
      </BackgroundLines>
      
    );
  }

  return (
    <BackgroundLines className="absolute inset-0 z-0">
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
          {/* Hero Section with Staggered Animation */}
          <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
            {/* Left Column - Image */}
            <div className="animate-fade-in-left">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl blur-lg opacity-25 group-hover:opacity-50 transition duration-500"></div>
                <img
                  src={course.image}
                  alt={course.title}
                  className="relative w-full h-[400px] object-cover rounded-2xl shadow-2xl border border-gray-800"
                />
                {course.isFeatured && (
                  <div className="absolute top-4 right-4 bg-yellow-500/90 backdrop-blur-sm text-black px-4 py-2 rounded-full text-sm font-bold flex items-center gap-2 animate-bounce-slow">
                    <Star className="w-4 h-4 fill-current" />
                    Featured
                  </div>
                )}
              </div>
            </div>

            {/* Right Column - Course Info */}
            <div className="space-y-6 animate-fade-in-right">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent leading-tight">
                  {course.title}
                </h1>
                <p className="text-gray-400 text-lg leading-relaxed">
                  {course.description}
                </p>
              </div>

              {/* Price Card */}
              <div className="bg-gradient-to-br from-purple-900/40 to-pink-900/40 border border-purple-500/30 rounded-2xl p-6 backdrop-blur-sm hover:border-purple-500/50 transition-all duration-300">
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-5xl font-bold text-white">
                    ${course.price}
                  </span>
                  <span className="text-gray-400 text-lg">USD</span>
                </div>
                <p className="text-gray-300 text-sm">One-time payment</p>
                <button className="w-full mt-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/50">
                  Enroll Now
                </button>
              </div>

              {/* Instructor Card */}
              <div className="bg-gray-900/60 border border-gray-700 rounded-2xl p-6 backdrop-blur-sm hover:border-gray-600 transition-all duration-300">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-2xl font-bold">
                    {course.instructor.charAt(0)}
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 uppercase tracking-wider mb-1">
                      Instructor
                    </p>
                    <p className="text-xl font-semibold text-white">
                      {course.instructor}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Section - Animated */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-fade-in-up">
            <div className="bg-gray-900/40 border border-gray-700 rounded-2xl p-6 backdrop-blur-sm hover:border-purple-500/50 transition-all duration-300 group">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Clock className="w-6 h-6 text-purple-400" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-white">12 Weeks</p>
                  <p className="text-sm text-gray-400">Duration</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-900/40 border border-gray-700 rounded-2xl p-6 backdrop-blur-sm hover:border-pink-500/50 transition-all duration-300 group">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-pink-500/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Users className="w-6 h-6 text-pink-400" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-white">2,450+</p>
                  <p className="text-sm text-gray-400">Students</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-900/40 border border-gray-700 rounded-2xl p-6 backdrop-blur-sm hover:border-blue-500/50 transition-all duration-300 group">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <BookOpen className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-white">48 Lessons</p>
                  <p className="text-sm text-gray-400">Content</p>
                </div>
              </div>
            </div>
          </div>

          {/* What You'll Learn Section */}
          <div className="mt-16 animate-fade-in-up">
            <h2 className="text-3xl font-bold mb-8 text-center">What You'll Learn</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                "Master fundamental music theory concepts",
                "Develop advanced compositional techniques",
                "Learn industry-standard production tools",
                "Create professional-quality recordings",
                "Understand music business essentials",
                "Build your unique artistic voice"
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 bg-gray-900/40 border border-gray-700 rounded-xl p-4 hover:border-gray-600 transition-all duration-300"
                >
                  <div className="w-6 h-6 bg-green-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  </div>
                  <p className="text-gray-300">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </BackgroundLines>
  );
}