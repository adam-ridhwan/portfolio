import { Bio } from '@/components/bio';
import { Navbar } from '@/components/navbar';
import { ProjectList } from '@/components/project-list';
import { Terminal } from '@/components/terminal';

export default function Home() {
  return (
    <>
      <Navbar />

      <main className='relative my-[55px] flex flex-col px-4 md:container'>
        <Bio />
        <Terminal />
        <ProjectList />
      </main>

      <footer className='container mb-10 flex flex-col items-center justify-center text-sm text-muted-foreground'>
        Made by Adam Ridhwan © {new Date().getFullYear()}
      </footer>
    </>
  );
}
