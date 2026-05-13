export interface SliderItem {
  id: string;
  heading: string;
  subheading: string;
  backgroundImage: string;
  smallImage: string;
  linkText: string;
  linkAction: string;
}

export interface EventItem {
  id: string;
  image: string;
  heading: string;
  date: string;
  time: string;
  buttonText: string;
  buttonAction: string;
}

export interface ServiceItem {
  id: string;
  image: string;
  name: string;
  description: string;
  linkText: string;
  linkAction: string;
}

export interface DestinationItem {
  id: string;
  country: string;
  slug: string;
  flagImage: string;
  coverImage: string;
  shortDescription: string;
  featured: boolean;
}

export interface TestimonialItem {
  id: string;
  name: string;
  country: string;
  image: string;
  quote: string;
}
