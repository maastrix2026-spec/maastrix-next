export interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  initials: string;
}

export const mockTestimonials: Testimonial[] = [
  {
    id: 1,
    name: "MallikCalifornia",
    role: "",
    company: "USA",
    content: "Very satisfied with the quality of work. Professional and always willing to make the requested changes without asking for additional money.",
    initials: "M"
  },
  {
    id: 2,
    name: "Rottimi",
    role: "Nigeria",
    company: "Torj Technology",
    content: "Enjoyed working with Maastrix. A professional and reliable company",
    initials: "R"
  },
  {
    id: 3,
    name: "Dilanim",
    role: "UK",
    company: "",
    content: "Maas Infotech did a good job and I think we both learned a lot of this project .",
    initials: "D"
  },
  {
    id: 4,
    name: "Peter Ellis",
    role: "USA",
    company: "Onyx World Ltd",
    content: "Thank you for the prompt service we will be happy to recommend you. You satisfied our ever changing demand without any problems.",
    initials: "PE"
  },
  {
    id: 5,
    name: "Coopson",
    role: "USA",
    company: "",
    content: "Delivered before time, and exactly to my spec. Top providers will defiantly use again, and highly recommended.",
    initials: "C"
  }
];