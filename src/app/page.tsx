import { About } from '@/app/components/about';
import { Bio } from '@/app/components/bio';
import LinksText from '@/app/components/links-text';
import { ProjectList } from '@/app/components/project-list';
import { Skills } from '@/app/components/skills';
import { WorkExperience } from '@/app/components/work-experience';

export default function Home() {
  return (
    <main className='relative flex flex-col gap-28 overflow-x-hidden overflow-y-hidden px-4 md:container md:overflow-visible'>
      <Bio />
      <About />
      <WorkExperience />
      <Skills />
      <ProjectList />
      <LinksText />
    </main>
  );
}
