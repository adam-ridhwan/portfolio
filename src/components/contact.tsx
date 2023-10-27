import { React } from '../../public/icons/react';

const Contact = () => {
  return (
    <>
      <section>
        <div className='mb-4 flex flex-col gap-2'>
          <span className='text-2xl font-semibold text-secondary-foreground'>Contact</span>
          <span className='text-lg font-light text-muted-foreground'>Get in touch with me:</span>
        </div>

        <div>
          <a
            href='mailto:adamridhwan.1@gmail.com'
            className='inline-flex h-9 items-center justify-center whitespace-nowrap rounded-md border border-input bg-transparent px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50'
          >
            Contact
          </a>
        </div>
      </section>
    </>
  );
};

export default Contact;
