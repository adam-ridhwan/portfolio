import { MouseEvent } from 'react';
import { LinkType } from '@/types';

export const updateLinkClicks = async (e: MouseEvent<HTMLAnchorElement>, link: LinkType) => {
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
