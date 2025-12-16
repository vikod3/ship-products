import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';
import { useEffect, useRef } from 'react';
import Hls from 'hls.js';

export function HeroContent() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const videoSrc = 'https://customer-cbeadsgr09pnsezs.cloudflarestream.com/e81db7751c9ff8adfd5a0b4daaf7e65f/manifest/video.m3u8';

    if (Hls.isSupported()) {
      const hls = new Hls();
      hls.loadSource(videoSrc);
      hls.attachMedia(video);
      hls.on(Hls.Events.MANIFEST_PARSED, () => {
        video.play().catch(() => {});
      });

      return () => {
        hls.destroy();
      };
    } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
      // Safari native HLS support
      video.src = videoSrc;
      video.addEventListener('loadedmetadata', () => {
        video.play().catch(() => {});
      });
    }
  }, []);

  return (
    <section className="relative min-h-[90vh]">
      {/* Video Background Card */}
      <div className="absolute inset-4 top-2 overflow-hidden rounded-3xl border border-foreground/10 bg-card lg:rounded-[3rem]">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="size-full object-cover opacity-60 lg:opacity-80"
        />
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/60 to-background/20" />
      </div>

      {/* Content */}
      <div className="relative z-10 py-24 md:pb-32 lg:pb-36 lg:pt-44">
        <div className="mx-auto flex max-w-7xl flex-col px-6 lg:block lg:px-12">
          <div className="mx-auto max-w-lg text-center lg:ml-0 lg:max-w-full lg:text-left">
            <h1 className="mt-8 max-w-2xl text-balance text-5xl font-semibold tracking-tight text-foreground md:text-6xl lg:mt-16 xl:text-7xl">
              Build 10x Faster with NS
            </h1>
            <p className="mt-8 max-w-2xl text-balance text-lg text-muted-foreground">
              Highly customizable components for building modern websites and applications you mean it.
            </p>

            <div className="mt-12 flex flex-col items-center justify-center gap-2 sm:flex-row lg:justify-start">
              <Button asChild size="lg" variant="hero">
                <Link to="#">
                  <span className="text-nowrap">Start Building</span>
                  <ChevronRight className="ml-1 size-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="ghost" className="h-12 rounded-full px-5 hover:bg-foreground/5">
                <Link to="#">
                  <span className="text-nowrap">Request a demo</span>
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
