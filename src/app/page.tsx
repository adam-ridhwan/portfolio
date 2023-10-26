import { Bio } from '@/components/bio';
import { Footer } from '@/components/footer';
import { Header } from '@/components/header';
import { ProjectList } from '@/components/project-list';
import { TechStack } from '@/components/tech-stack';
import { Terminal } from '@/components/terminal';

export default function Home() {
  return (
    <>
      <Header />

      <main className='relative my-[55px] flex flex-col gap-20  overflow-x-hidden px-4 md:container md:overflow-visible'>
        <Bio />
        <Terminal />
        <TechStack />
        <ProjectList />
      </main>

      <Footer />
    </>
  );
}
