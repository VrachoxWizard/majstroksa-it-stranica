import type { IconName } from '../types';

interface IconProps {
  name: IconName;
  className?: string;
  ariaHidden?: boolean;
}

const paths: Record<IconName, string[]> = {
  arrowRight: ['M5 12h14', 'm13 6 6 6-6 6'],
  award: ['M12 15a6 6 0 1 0 0-12 6 6 0 0 0 0 12Z', 'm9 14-2 7 5-3 5 3-2-7'],
  check: ['m5 13 4 4L19 7'],
  clock: ['M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20Z', 'M12 6v6l4 2'],
  computer: ['M4 5h16v11H4z', 'M8 21h8', 'M12 16v5'],
  data: ['M4 7c0-2 4-4 8-4s8 2 8 4-4 4-8 4-8-2-8-4Z', 'M4 7v5c0 2 4 4 8 4s8-2 8-4V7', 'M4 12v5c0 2 4 4 8 4s8-2 8-4v-5'],
  mail: ['M4 6h16v12H4z', 'm4 7 8 5 8-5'],
  menu: ['M4 7h16', 'M4 12h16', 'M4 17h16'],
  message: ['M21 12a8 8 0 0 1-8 8H7l-4 3v-6a8 8 0 1 1 18-5Z', 'M8 10h8', 'M8 14h5'],
  phone: ['M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.9a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.2-1.2a2 2 0 0 1 2.1-.5c.9.3 1.9.6 2.9.7a2 2 0 0 1 1.7 2Z'],
  shield: ['M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z', 'm9 12 2 2 4-5'],
  spark: ['M12 2v5', 'M12 17v5', 'M4.2 4.2l3.5 3.5', 'm16.3 16.3 3.5 3.5', 'M2 12h5', 'M17 12h5', 'm4.2 19.8 3.5-3.5', 'm16.3 7.7 3.5-3.5'],
  speed: ['M21 12a9 9 0 1 1-3.2-6.9', 'M12 12l6-6'],
  tools: ['M14.7 6.3a4 4 0 0 0-5 5L3 18l3 3 6.7-6.7a4 4 0 0 0 5-5l-3 3-3-3 3-3Z'],
  virus: ['M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z', 'M12 2v3', 'M12 19v3', 'M2 12h3', 'M19 12h3', 'M6.3 6.3 4 4', 'm17.7 17.7-4-4', 'm6.3 17.7 4-4', 'm17.7 6.3-4 4'],
  x: ['M18 6 6 18', 'm6 6 12 12'],
};

export default function Icon({ name, className = 'h-5 w-5', ariaHidden = true }: IconProps) {
  return (
    <svg
      aria-hidden={ariaHidden}
      className={className}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.85"
      viewBox="0 0 24 24"
    >
      {paths[name].map((path) => (
        <path d={path} key={path} />
      ))}
    </svg>
  );
}
