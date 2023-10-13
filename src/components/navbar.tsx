export const Navbar = () => {
  return (
    <>
      <header className='fixed top-0 z-50 flex h-[55px] w-full flex-row items-center justify-between border-b border-border bg-background p-4'>
        <div>
          <span className='text-muted-foreground'>Adam Ridhwan</span>
        </div>

        <div className='flex flex-row gap-5 text-secondary-foreground'>
          <div>about</div>
          <div>projects</div>
        </div>
      </header>
    </>
  );
};
