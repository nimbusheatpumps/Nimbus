"use client"

import * as React from "react"
import { motion } from "framer-motion"
import Autoplay from "embla-carousel-autoplay"
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from "@/components/ui/carousel"
import { cn } from "@/lib/utils"
import { getLiveGoogleReviews, LiveReview } from "../lib/live-google-reviews"
import Image from 'next/image'

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

export default function Testimonials() {
  const [reviews, setReviews] = React.useState<LiveReview[]>([])
  const [loading, setLoading] = React.useState(true)
  const [error, setError] = React.useState<string | null>(null)

  React.useEffect(() => {
    const fetchReviews = async () => {
      try {
        const data = await getLiveGoogleReviews()
        setReviews(data.reviews)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load reviews')
      } finally {
        setLoading(false)
      }
    }
    fetchReviews()
  }, [])

  if (loading) {
    return (
      <div className="flex justify-center items-center py-8">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="text-center py-8">
        <a
          href="https://g.page/r/yk7F28G9VpVstANKx/review"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition-colors"
        >
          See all our Google reviews
        </a>
      </div>
    )
  }

  return (
    <motion.div
      className="bg-teal-50 py-16"
      initial="hidden"
      whileInView="visible"
      variants={containerVariants}
      viewport={{ once: true }}
    >
      <Carousel
        plugins={[
          Autoplay({
            delay: 5000,
          }),
        ]}
        className="w-full max-w-4xl mx-auto"
      >
        <motion.div variants={containerVariants}>
          <CarouselContent className="gap-4">
            {reviews.map((review, index) => (
              <CarouselItem key={index} className="basis-full sm:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <motion.div
                    className="bg-white shadow-md rounded-lg p-4"
                    variants={cardVariants}
                    whileHover={{ y: -10, transition: { duration: 0.2 } }}
                  >
                    <div className="flex items-center mb-4">
                      <Image
                        src={review.authorPhotoUri}
                        alt={review.authorName}
                        width={40}
                        height={40}
                        quality={90}
                        className="w-10 h-10 rounded-full mr-3"
                      />
                      <div>
                        <h4 className="font-semibold text-gray-900">{review.authorName}</h4>
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <svg
                              key={i}
                              width="20"
                              height="20"
                              viewBox="0 0 24 24"
                              fill="currentColor"
                              className={cn(
                                "transition-all duration-200",
                                i < review.rating ? "text-yellow-400 hover:drop-shadow-[0_0_10px_rgba(251,191,36,0.8)]" : "text-gray-300"
                              )}
                            >
                              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                            </svg>
                          ))}
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-700 italic">"{review.text}"</p>
                    <p className="text-sm text-gray-500 mt-2">{review.relativeTimeDescription}</p>
                  </motion.div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </motion.div>
      </Carousel>
    </motion.div>
  )
}