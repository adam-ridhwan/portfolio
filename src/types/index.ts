import { z } from 'zod';

export type SVGProps = {
  className?: string;
};

export type Project = {
  id: string;
  name: string;
  description: string;
  type: string;
  image: string;
  link: string;
};

const ClicksSchema = z.object({
  email: z.number(),
  github: z.number(),
  linkedin: z.number(),
  resume: z.number(),
  work_experience: z.number(),
  pixel_craft: z.number(),
  pondero: z.number(),
  flair: z.number(),
  quizzy: z.number(),
  geaux: z.number(),
});
export type Clicks = z.infer<typeof ClicksSchema>;
