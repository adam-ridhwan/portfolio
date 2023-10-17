import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export const Bio = () => {
  return (
    <>
      <section className='mb-8 pt-10'>
        <div className='flex flex-col items-center gap-4 md:flex-row md:gap-8'>
          <Avatar className='ring-offset h-32 w-32 border-4 border-blue-400 ring-4 ring-blue-200'>
            <AvatarImage src='/me.jpeg' />
            <AvatarFallback>AR</AvatarFallback>
          </Avatar>

          <div className='flex flex-col gap-2'>
            <span className='text-3xl font-bold text-secondary-foreground md:text-4xl'>
              Hello, I&apos;m Adam 👋
            </span>

            <div className='mb-4 flex flex-col text-lg font-light text-muted-foreground md:text-xl'>
              <span>I&apos;m a software engineer 🖥️</span>
              <span>avid badminton player 🏸</span>
              <span>& keyboard enthusiast ⌨️🪛</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
