import { InfiniteSlider } from '@/components/ui/infinite-slider';
import { ProgressiveBlur } from '@/components/ui/progressive-blur';

const logos = [
  { src: 'https://html.tailus.io/blocks/customers/nvidia.svg', alt: 'Nvidia', height: 'h-5' },
  { src: 'https://html.tailus.io/blocks/customers/column.svg', alt: 'Column', height: 'h-4' },
  { src: 'https://html.tailus.io/blocks/customers/github.svg', alt: 'GitHub', height: 'h-4' },
  { src: 'https://html.tailus.io/blocks/customers/nike.svg', alt: 'Nike', height: 'h-5' },
  { src: 'https://html.tailus.io/blocks/customers/lemonsqueezy.svg', alt: 'Lemon Squeezy', height: 'h-5' },
  { src: 'https://html.tailus.io/blocks/customers/laravel.svg', alt: 'Laravel', height: 'h-4' },
  { src: 'https://html.tailus.io/blocks/customers/lilly.svg', alt: 'Lilly', height: 'h-7' },
  { src: 'https://html.tailus.io/blocks/customers/openai.svg', alt: 'OpenAI', height: 'h-6' },
];

export function LogoSlider() {
  return (
    <section className="bg-background pb-2">
      <div className="group relative mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center md:flex-row">
          <div className="md:max-w-44 md:border-r md:border-border md:pr-6">
            <p className="text-sm text-muted-foreground md:text-end">Powering the best teams</p>
          </div>
          <div className="relative py-6 md:w-[calc(100%-11rem)]">
            <InfiniteSlider speedOnHover={20} speed={40} gap={112}>
              {logos.map((logo, index) => (
                <div key={index} className="flex">
                  <img
                    className={`mx-auto ${logo.height} w-fit invert`}
                    src={logo.src}
                    alt={`${logo.alt} Logo`}
                    height="20"
                    width="auto"
                  />
                </div>
              ))}
            </InfiniteSlider>

            <div className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-background to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-background to-transparent" />
            <ProgressiveBlur
              className="pointer-events-none absolute left-0 top-0 h-full w-20"
              direction="left"
              blurIntensity={1}
            />
            <ProgressiveBlur
              className="pointer-events-none absolute right-0 top-0 h-full w-20"
              direction="right"
              blurIntensity={1}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
