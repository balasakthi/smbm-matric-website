import TestimonialsCarousel from "./testimonialsCarousel";
import { SanityImageSource } from "@sanity/image-url";
import { TESTIMONIAL_QUERY } from "@/lib/sanityQuery";
import { fetchSectionData } from "@/lib/sanityFetch";

export interface Testimonial {
  _id: string;
  name: string;
  role: string;
  organization?: string;
  quote: string;
  photo?: SanityImageSource;
}

const Testimonials = async () => {
  const testimonials = await fetchSectionData<Testimonial[]>(TESTIMONIAL_QUERY);

  return <TestimonialsCarousel testimonials={testimonials || []} />;
};

export default Testimonials;
