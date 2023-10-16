import { GitHubLogoIcon, LinkedInLogoIcon } from '@radix-ui/react-icons';

export const Bio = () => {
  return (
    <>
      <section className='mb-8 pt-10'>
        <div className='mb-5'>
          <span className='text-3xl font-bold text-secondary-foreground md:text-4xl'>
            Hello, I&apos;m Adam 👋
          </span>
        </div>

        <div className='text-md mb-4 flex flex-col font-light text-muted-foreground md:text-xl'>
          <span>I&apos;m a software engineer 🖥️</span>
          <span>avid badminton player 🏸</span>
          <span>& keyboard enthusiast ⌨️🪛</span>
        </div>
      </section>
    </>
  );
};
