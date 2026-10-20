export type ProcessStep = {
  number: string;
  title: string;
  description: string;
};

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Discover",
    description:
      "We talk through your business, your customers, and what the website or software needs to achieve. You leave with a clear sense of scope.",
  },
  {
    number: "02",
    title: "Plan",
    description:
      "We agree the pages or features, the content, and the timeline. You approve the plan before any build work begins.",
  },
  {
    number: "03",
    title: "Build",
    description:
      "We design and develop in stages, and share progress for your review. Changes are discussed as they come up rather than saved for the end.",
  },
  {
    number: "04",
    title: "Launch",
    description:
      "We deploy the work, check it across devices, and hand over everything you need to run it. Optional maintenance can follow.",
  },
];

export type Benefit = {
  title: string;
  description: string;
};

export const benefits: Benefit[] = [
  {
    title: "Direct communication",
    description:
      "You speak with the person building your project, so questions are answered quickly and decisions are not lost in handovers.",
  },
  {
    title: "Thoughtful technology choices",
    description:
      "We pick tools that suit the problem, not the trend. That keeps the result maintainable and avoids unnecessary complexity.",
  },
  {
    title: "Responsive, usable interfaces",
    description:
      "Every layout is checked on mobile, tablet, and desktop, and built with keyboard access and readable contrast in mind.",
  },
  {
    title: "Clear scope and deliverables",
    description:
      "You know what is included before work starts, so there are no surprises about what is being built or what it covers.",
  },
  {
    title: "Maintainable solutions",
    description:
      "The code and content are organised so the site can be updated later without a full rebuild.",
  },
];
