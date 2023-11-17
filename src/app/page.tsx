import { About } from '@/components/about';
import { Bio } from '@/components/bio';
import Links from '@/components/links';
import { ProjectList } from '@/components/project-list';
import { Skills } from '@/components/skills';
import { WorkExperience } from '@/components/work-experience';

export default function Home() {
  return (
    <>
      <main className='relative flex flex-col gap-20 overflow-x-hidden overflow-y-hidden px-4 md:container md:overflow-visible'>
        <Bio />
        <About />
        <WorkExperience />
        <Skills />
        <ProjectList />
        <Links />
      </main>
    </>
  );
}
