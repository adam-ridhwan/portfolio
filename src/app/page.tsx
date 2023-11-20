import { About } from '@/components/about';
import { Bio } from '@/components/bio';
import Education from '@/components/education';
import LinksText from '@/components/links-text';
import { ProjectList } from '@/components/project-list';
import { Skills } from '@/components/skills';
import { WorkExperience } from '@/components/work-experience';

export default function Home() {
  return (
    <main className='relative flex flex-col gap-28 overflow-x-hidden overflow-y-hidden px-4 md:container md:overflow-visible'>
      <Bio />
      <About />
      <WorkExperience />
      <Education />
      <Skills />
      <ProjectList />
      <LinksText />
    </main>
  );
}
