import { Star } from "lucide-react";
import Card from "./Card";
import Image from 'next/image';

const Reviews = () => {
  const reviews = [
    {
      src: '/photos/homepage/5.jpg',
      name: "Sarah Thompson",
      role: "Homeowner in Toronto",
      text: "Exceptional drywall work! They transformed our damaged walls after a water leak. The team was professional, cleaned up thoroughly, and the finished walls look flawless. Couldn't be happier with the results!"
    },
    {
      src: '/photos/homepage/6.jpg',
      name: "Michael Roberts",
      role: "Commercial Property Owner",
      text: "Best drywall contractors in Toronto! They handled our office renovation with incredible attention to detail. The crew was efficient, and their expertise in commercial drywall installation was evident. Highly recommend!"
    },
    {
      src: '/photos/homepage/7.jpg',
      name: "Emily Chen",
      role: "Interior Designer",
      text: "Their craftsmanship is outstanding. As an interior designer, I need reliable contractors who deliver quality work. Their drywall finishing is impeccable, and they always meet deadlines. They're my go-to drywall team."
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-8 md:mb-16">
          Reviews
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <Card 
              key={index} 
              className="bg-white p-8 border-none hover:shadow-xl transition-all duration-300 group rounded-xl"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="relative w-16 h-16">
                  <Image
                    src={review.src}
                    alt={review.name}
                    fill
                    className="rounded-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">{review.name}</h3>
                  <p className="text-gray-600 text-sm">{review.role}</p>
                </div>
              </div>
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[#FACC15] stroke-[#FACC15]" />
                ))}
              </div>
              <p className="text-gray-700 text-base leading-relaxed">{review.text}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Reviews;