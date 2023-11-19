import { z } from 'zod';

export type SVGProps = {
  className?: string;
};

export const LINKS_ENUM = {
  EMAIL: 'EMAIL',
  GITHUB: 'GITHUB',
  LINKEDIN: 'LINKEDIN',
  RESUME: 'RESUME',
} as const;

const LinkTypeSchema = z.union([
  z.literal(LINKS_ENUM.EMAIL),
  z.literal(LINKS_ENUM.GITHUB),
  z.literal(LINKS_ENUM.LINKEDIN),
  z.literal(LINKS_ENUM.RESUME),
]);
export type LinkType = z.infer<typeof LinkTypeSchema>;

const LinkSchema = z.object({
  id: LinkTypeSchema,
  name: z.string(),
  Icon: z.any(),
  link: z.string(),
  handle: z.string(),
});
export type Link = z.infer<typeof LinkSchema>;

export type Project = {
  id: string;
  name: string;
  description: string;
  type: string;
  image: string;
  link: string;
};

const { EMAIL, GITHUB, LINKEDIN, RESUME } = LINKS_ENUM;

const ClicksSchema = z.object({
  userId: z.string(),
  [EMAIL]: z.number(),
  [GITHUB]: z.number(),
  [LINKEDIN]: z.number(),
  [RESUME]: z.number(),
  workExperience: z.number(),
  pixelCraft: z.number(),
  pondero: z.number(),
  flair: z.number(),
  quizzy: z.number(),
  geaux: z.number(),
});
export type Clicks = z.infer<typeof ClicksSchema>;
