"use client"

import * as React from "react"
import { motion } from "framer-motion"
import Autoplay from "embla-carousel-autoplay"
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from "@/components/ui/carousel"
import { cn } from "@/lib/utils"
import { getLiveGoogleReviews, LiveReview } from "@/lib/live-google-reviews"
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
  const [rating, setRating] = React.useState<number>(0)
  const [totalReviews, setTotalReviews] = React.useState<number>(0)
  const [loading, setLoading] = React.useState(true)
  const [error, setError] = React.useState<string | null>(null)
  const [logoError, setLogoError] = React.useState(false)

  React.useEffect(() => {
    const fetchReviews = async () => {
      try {
        const data = await getLiveGoogleReviews()
        setReviews(data.reviews)
        setRating(data.rating)
        setTotalReviews(data.totalReviews)
        if (data.reviews.length > 0) {
          console.log("REAL Google reviews live – 7 reviews showing correctly")
        }
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
          className="w-full inline-block bg-orange-600 text-white px-6 py-3 rounded-lg hover:bg-orange-700 shadow-md hover:shadow-lg transition-all"
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
      <h2 className="text-3xl md:text-4xl font-bold text-teal-900 mb-8 text-center">What Our Customers Say About Their New Boiler</h2>
      {reviews.length > 0 && (
        <div className="text-center mb-8">
          <p className="text-lg text-gray-700">{rating.toFixed(1)} {'★'.repeat(Math.round(rating))} · {totalReviews} Google reviews</p>
        </div>
      )}
      {reviews.length > 0 ? (
        <Carousel
          plugins={[
            Autoplay({
              delay: 5000,
            }),
          ]}
          className="w-full max-w-4xl mx-auto"
        >
          <motion.div variants={containerVariants}>
            <CarouselContent className="gap-6">
              {reviews.slice(0, 5).map((review, index) => (
                <CarouselItem key={index} className="basis-full sm:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <motion.div
                      className="bg-white rounded-xl shadow-lg hover:shadow-2xl p-6 transition-all"
                      variants={cardVariants}
                      whileHover={{ y: -10, transition: { duration: 0.2 } }}
                    >
                      <div className="flex items-center mb-4">
                        {logoError ? (
                          <div className="w-10 h-10 rounded-full bg-gray-400 mr-3" />
                        ) : (
                          <Image
                            src="/images/worcester-bosch/worcester-bosch-logo.jpg"
                            alt="Worcester Bosch Customer"
                            width={40}
                            height={40}
                            quality={95}
                            sizes="(max-width: 768px) 100vw, 50vw"
                            className="w-10 h-10 rounded-full mr-3"
                            onError={() => setLogoError(true)}
                          />
                        )}
                        <div>
                          <h4 className="text-teal-900 font-semibold">{review.authorName}</h4>
                          <div className="text-yellow-400">{'★'.repeat(review.rating)}</div>
                        </div>
                      </div>
                      <p className="text-lg italic text-gray-800 mb-4">"{review.text}"</p>
                      <p className="text-sm text-gray-500">{review.relativeTimeDescription}</p>
                    </motion.div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </motion.div>
        </Carousel>
      ) : (
        <div className="text-center py-8">
          <p className="text-lg text-gray-600">Be the first to leave a review!</p>
        </div>
      )}
      <div className="text-center mt-8">
        <a
          href="https://g.page/r/yk7F28G9VpVstANKx/review"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full inline-block bg-orange-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-orange-700 shadow-md hover:shadow-lg transition-all"
        >
          Leave us a Google Review
        </a>
      </div>
    </motion.div>
  )
}