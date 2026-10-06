"use client";

import { ArrowLeft, ArrowRight, Quote } from "lucide-react";
import Image from "next/image";
import { type MouseEvent, useState } from "react";
import StarRating from "./star-rating";

const testimonials = [
  {
    image: "/images/client.jpg",
    name: "Fabrizio Fernandez",
    quote:
      "Nuvora has changed the way I manage my entire team. The insights are clear, the workflows are effortless, and we finally have more time for the work we love.",
    role: "Founder, Studio North",
  },
  {
    image: "/images/hero.png",
    name: "Sarah Mitchell",
    quote:
      "From our first campaign to our biggest launch, everything feels connected. Our team spends less time on admin and more time bringing great ideas to life.",
    role: "Marketing Director, Bloom",
  },
  {
    image: "/images/team.jpg",
    name: "Alex Morgan",
    quote:
      "Having our tools and our people in one place made all the difference. We’re moving faster, collaborating better, and growing with confidence.",
    role: "Team Lead, Together",
  },
];

export default function Stories() {
  const [index, setIndex] = useState(0);
  const story = testimonials[index];
  function selectTestimonial(event: MouseEvent<HTMLButtonElement>) {
    setIndex(Number(event.currentTarget.dataset.index));
  }
  function previousTestimonial() {
    setIndex(
      (current) => (current + testimonials.length - 1) % testimonials.length
    );
  }
  function nextTestimonial() {
    setIndex((current) => (current + 1) % testimonials.length);
  }
  return (
    <div className="testimonial">
      <div className="testimonial-photo">
        <Image
          alt={story.name}
          fill
          sizes="(max-width: 650px) 90vw, 480px"
          src={story.image}
        />
        <span className="quote-mark">
          <Quote
            aria-hidden="true"
            fill="currentColor"
            size={26}
            strokeWidth={1.5}
          />
        </span>
      </div>
      <div aria-live="polite" className="testimonial-copy">
        <StarRating />
        <blockquote>“{story.quote}”</blockquote>
        <div className="testimonial-author">
          <strong>{story.name}</strong>
          <span>{story.role}</span>
        </div>
        <div className="story-controls">
          <div className="story-dots">
            {testimonials.map((item, i) => (
              <button
                aria-label={`Show testimonial from ${item.name}`}
                aria-pressed={i === index}
                className={i === index ? "active" : ""}
                data-index={i}
                key={item.name}
                onClick={selectTestimonial}
                type="button"
              />
            ))}
          </div>
          <div className="story-arrows">
            <button
              aria-label="Previous testimonial"
              onClick={previousTestimonial}
              type="button"
            >
              <ArrowLeft aria-hidden="true" size={18} strokeWidth={1.7} />
            </button>
            <button
              aria-label="Next testimonial"
              onClick={nextTestimonial}
              type="button"
            >
              <ArrowRight aria-hidden="true" size={18} strokeWidth={1.7} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
