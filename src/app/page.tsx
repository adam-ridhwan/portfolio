import { About } from '@/components/about';
import { Bio } from '@/components/bio';
import { Footer } from '@/components/footer';
import { ProjectList } from '@/components/project-list';
import { Skills } from '@/components/skills';

export default function Home() {
  return (
    <>
      <main className='relative flex flex-col gap-20 overflow-x-hidden px-4 md:container md:overflow-visible'>
        <Bio />
        <About />
        <Skills />
        <ProjectList />
      </main>

      <Footer />
    </>
  );
}
