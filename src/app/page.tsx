import { Bio } from '@/components/bio';
import { Navbar } from '@/components/navbar';
import { ProjectList } from '@/components/project-list';

export default function Home() {
  return (
    <>
      <Navbar />

      <main className='relative my-[55px] flex w-[100vw] flex-col'>
        <Bio />
        <ProjectList />
      </main>
    </>
  );
}
