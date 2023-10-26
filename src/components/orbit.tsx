import { cn } from '@/lib/utils';

type Props = {
  height: string;
  color: string;
  animate?: string;
  className?: string;
};

const Orbit = ({ height, color, animate, className }: Props) => {
  const angles = [
    'rotate-[0deg]',
    'rotate-[30deg]',
    'rotate-[60deg]',
    'rotate-[90deg]',
    'rotate-[120deg]',
    'rotate-[150deg]',
    'rotate-[180deg]',
    'rotate-[210deg]',
    'rotate-[240deg]',
    'rotate-[270deg]',
    'rotate-[300deg]',
    'rotate-[330deg]',
  ];

  return (
    <div className={cn('absolute aspect-square h-20', className, height)}>
      <div
        className={cn(
          'relative flex h-[inherit] w-[inherit] items-center justify-center rounded-full',
          animate
        )}
      >
        {angles.map(angle => (
          <div
            key={angle}
            className={`absolute left-1/2 top-0 aspect-square h-[inherit] w-[inherit] -translate-x-1/2 ${angle} transform rounded-full`}
          >
            <div
              className={cn(
                `absolute left-1/2 top-0 aspect-square h-[3px] -translate-x-1/2 transform rounded-full`,
                color
              )}
            />
          </div>
        ))}
        {/*<div className=' h-1 w-1 bg-red-500'></div>*/}
      </div>
    </div>
  );
};

export default Orbit;
