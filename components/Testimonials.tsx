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
      className="bg-teal-50 py-16 rounded-xl -mx-4 md:mx-0 md:rounded-none"
      initial="hidden"
      whileInView="visible"
      variants={containerVariants}
      viewport={{ once: true }}
    >
      <h2 className="text-3xl md:text-4xl font-bold text-teal-900 mb-8 text-center">Testimonials</h2>
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
            {reviews.map((review, index) => (
              <CarouselItem key={index} className="basis-full sm:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <motion.div
                    className="bg-white border border-gray-200 rounded-lg shadow-md p-6 hover:shadow-lg transition"
                    variants={cardVariants}
                    whileHover={{ y: -10, transition: { duration: 0.2 } }}
                  >
                    <Image
                      src="/images/worcester-bosch/worcester-bosch-logo.jpg"
                      alt="Worcester Bosch Boiler"
                      width={96}
                      height={96}
                      className="h-24 w-24 rounded-full mx-auto mb-4"
                    />
                    <div className="flex items-center mb-4">
                      <Image
                        src={review.authorPhotoUri}
                        alt={review.authorName}
                        width={40}
                        height={40}
                        quality={95}
                        sizes="(max-width: 768px) 100vw, 50vw"
                        placeholder="blur"
                        className="w-10 h-10 rounded-full mr-3"
                        onError={() => {}}
                      />
                      <div>
                        <h4 className="text-teal-900 font-semibold">{review.authorName}</h4>
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <svg
                              key={i}
                              width="20"
                              height="20"
                              viewBox="0 0 24 24"
                              fill="currentColor"
                              className="text-yellow-400 hover:drop-shadow-[0_0_10px_rgba(251,191,36,0.8)] transition-all duration-200"
                            >
                              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                            </svg>
                          ))}
                        </div>
                      </div>
                    </div>
                    <p className="text-lg italic text-gray-800 mb-4">"{review.text}"</p>
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