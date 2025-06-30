import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQBlogSection = () => {
  const [openFAQ, setOpenFAQ] = useState(0);

  const faqs = [
    {
      question: "How to join Harmoni Event Management?",
      answer: "Bring people together, or turn your passion into a business. Harmoni gives you everything you need to host your best event yet. lorem ipsum diamet."
    },
    {
      question: "How to make my own event?",
      answer: "Creating your own event is simple with our platform. Start by defining your event goals, choose a venue, set your budget, and let our team guide you through the process."
    },
    {
      question: "About the price to make new event?",
      answer: "Event pricing varies based on scale, duration, and requirements. Contact our team for a personalized quote that fits your budget and vision."
    },
    {
      question: "About the price to make new event?",
      answer: "We offer flexible pricing packages for different event types. Our basic package starts at $500, with premium options available for larger events."
    }
  ];

  const blogPosts = [
    {
      title: "Barcelona Friday Food Truck Festival 26 Mei 2019",
      date: "26 June 2018",
      image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300&h=200&fit=crop"
    },
    {
      title: "Barcelona Friday Food Truck Festival 26 Mei 2019", 
      date: "26 June 2018",
      image: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=300&h=200&fit=crop"
    }
  ];

  return (
    <section className="bg-gray-900 text-white py-20 mb-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          
          {/* FAQ Section */}
          <div>
            <div className="mb-8">
              <div className="w-16 h-1 bg-orange-400 mb-4"></div>
              <p className="text-gray-400 tracking-wider text-sm mb-4">FIND YOUR ANSWER</p>
              <h2 className="text-4xl font-bold">Ask & Questions</h2>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="border border-gray-700 rounded-lg overflow-hidden">
                  <button
                    onClick={() => setOpenFAQ(openFAQ === index ? -1 : index)}
                    className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-800 transition-colors"
                  >
                    <div className="flex items-center space-x-4">
                      <span className="text-orange-400 font-bold">0{index + 1}.</span>
                      <span className="font-medium">{faq.question}</span>
                    </div>
                    {openFAQ === index ? (
                      <ChevronUp className="w-5 h-5 text-orange-400" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-400" />
                    )}
                  </button>
                  
                  {openFAQ === index && (
                    <div className="px-6 pb-6">
                      <div className="pl-8">
                        <h4 className="text-orange-400 font-semibold mb-2">Answer</h4>
                        <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Blog Section */}
          <div>
            <div className="mb-8">
              <div className="w-16 h-1 bg-orange-400 mb-4"></div>
              <p className="text-gray-400 tracking-wider text-sm mb-4">OUR BLOG</p>
              <h2 className="text-4xl font-bold">Latest News</h2>
            </div>

            <div className="space-y-6">
              {blogPosts.map((post, index) => (
                <div key={index} className="flex space-x-4 group cursor-pointer">
                  <img 
                    src={post.image}
                    alt={post.title}
                    className="w-24 h-20 object-cover rounded-lg flex-shrink-0 group-hover:scale-105 transition-transform"
                  />
                  <div>
                    <h3 className="font-bold text-lg mb-2 group-hover:text-orange-400 transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-orange-400 text-sm">{post.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Background Decoration */}
      <div className="absolute bottom-0 right-0 w-1/3 h-1/2 bg-gradient-to-t from-orange-900/20 to-transparent opacity-50"></div>
    </section>
  );
};

export default FAQBlogSection;