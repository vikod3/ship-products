import { HeroHeader } from './HeroHeader';
import { HeroContent } from './HeroContent';
import { LogoSlider } from './LogoSlider';

export function HeroSection() {
  return (
    <>
      <HeroHeader />
      <main className="overflow-x-hidden">
        <HeroContent />
        <LogoSlider />
      </main>
    </>
  );
}
