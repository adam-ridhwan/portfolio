import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export const Navbar = () => {
  return (
    <>
      <header className='fixed top-0 z-50 flex h-[55px] w-full flex-row items-center justify-between bg-background p-4'>
        <div className='flex flex-row items-center gap-2'>
          <Avatar className='h-8 w-8'>
            <AvatarImage src='https://github.com/shadcn.png' />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>

          <span className='text-muted-foreground'>Adam Ridhwan</span>
        </div>

        <div className='flex flex-row gap-5 text-secondary-foreground'>
          <div>About</div>
          <div>Projects</div>
        </div>
      </header>
    </>
  );
};
