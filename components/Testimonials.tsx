"use client"

import * as React from "react"
import Autoplay from "embla-carousel-autoplay"
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from "@/components/ui/carousel"
import { cn } from "@/lib/utils"
import { getLiveGoogleReviews, LiveReview } from "../lib/live-google-reviews"

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
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
        >
          See all our Google reviews
        </a>
      </div>
    )
  }

  return (
    <Carousel
      plugins={[
        Autoplay({
          delay: 5000,
        }),
      ]}
      className="w-full max-w-xs mx-auto"
    >
      <CarouselContent>
        {reviews.map((review, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <div className="flex items-center mb-4">
                  <img
                    src={review.authorPhotoUri}
                    alt={review.authorName}
                    className="w-10 h-10 rounded-full mr-3"
                  />
                  <div>
                    <h4 className="font-semibold">{review.authorName}</h4>
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <span
                          key={i}
                          className={cn(
                            "text-lg",
                            i < review.rating ? "text-yellow-400" : "text-gray-300"
                          )}
                        >
                          ★
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-700 italic">"{review.text}"</p>
                <img
                  src="/images/worcester-bosch/kitchen-install.jpg"
                  alt="Worcester Bosch Kitchen Installation"
                  className="mt-4 w-full h-32 object-cover rounded"
                />
                <p className="text-sm text-gray-500 mt-2">{review.relativeTimeDescription}</p>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  )
}