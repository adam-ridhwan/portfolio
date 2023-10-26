import { ProjectItem } from '@/components/project-item';

export type Project = {
  name: string;
  description: string;
  image: string;
  link: string;
};

export const ProjectList = () => {
  const projects: Project[] = [
    {
      name: 'Geaux TV',
      description: `A TV streaming platform offering a library of live tv shows. Features include a custom video player, url routing, and a responsive design.`,
      image: '/images/geaux.png',
      link: 'https://geaux-tv.vercel.app/tv/465',
    },
    {
      name: 'Pondero',
      description:
        'A blogging platform where users can post articles. Features include the ability for readers to' +
        ' like, comment on, save, and delete posts.',
      image: '/images/pondero.png',
      link: 'https://pondero-sigma.vercel.app',
    },
    {
      name: 'Flair',
      description:
        'An e-commerce website where users can browse and purchase products. Features include a dynamic shopping cart, product filtering, a custom image gallery, and a seamless Stripe checkout process.',
      image: '/images/flair.png',
      link: 'https://flair.vercel.app',
    },
    {
      name: 'Quizzzy',
      description: `An interactive quiz platform designed to make quizzes easy. It offers a seamless experience for educators, students, and trivia enthusiasts alike.`,
      image: '/images/quizzzy.png',
      link: 'https://quizzzy-mu.vercel.app/',
    },
  ];

  return (
    <>
      <section>
        <div className='mb-4 flex flex-col gap-2'>
          <span className='text-2xl font-semibold text-secondary-foreground'>Projects</span>
          <span className='text-lg font-light text-muted-foreground'>
            Here&apos;s what I&apos;ve been up to:
          </span>
        </div>

        {projects.map(project => (
          <ProjectItem key={project.name} project={project} />
        ))}
      </section>
    </>
  );
};
