import { SanityImageSource } from "@sanity/image-url";
import { TESTIMONIAL_QUERY } from "@/lib/sanityQuery";
import { fetchSectionData } from "@/lib/sanityFetch";
import { TestimonialsCarousel } from "./testimonialsCarousel";

export interface Testimonial {
  _id: string;
  name: string;
  role: string;
  organization?: string;
  quote: string;
  photo?: SanityImageSource;
}

async function Testimonials() {
  const testimonials = await fetchSectionData<Testimonial[]>(TESTIMONIAL_QUERY);

  return <TestimonialsCarousel testimonials={testimonials || []} />;
}

export { Testimonials };
