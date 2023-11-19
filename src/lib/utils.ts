import { MouseEvent } from 'react';
import { LinkType } from '@/types';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const isDevelopmentMode = process.env.NEXT_PUBLIC_NODE_ENV;

export const updateLinkClicks = async (e: MouseEvent<HTMLAnchorElement>, link: LinkType) => {
  if (isDevelopmentMode === 'development') e.preventDefault();

  const response = await fetch('/api/clicks', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      link,
      time: new Date().toISOString(),
    }),
  });

  return response;
};
