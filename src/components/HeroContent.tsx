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
        <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/40 to-transparent" />
      </div>

      {/* Content - Positioned at bottom left */}
      <div className="relative z-10 flex min-h-[90vh] flex-col justify-end pb-16 md:pb-20 lg:pb-24">
        <div className="px-8 md:px-12 lg:px-16">
          <h1 className="whitespace-nowrap text-4xl font-normal tracking-tight text-foreground sm:text-5xl md:text-6xl xl:text-7xl">
            Ship Products 10x Faster
          </h1>
          <p className="mt-8 max-w-md text-lg text-muted-foreground">
            Premium UI blocks crafted for developers who value speed, precision, and beautiful design.
          </p>

          <div className="mt-10 flex flex-row items-center gap-3">
            <Button asChild variant="hero" className="rounded-full">
              <Link to="#" className="rounded-full">
                <span className="text-nowrap">Start Building</span>
                <ChevronRight className="ml-1 size-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="ghost" className="!h-auto rounded-full px-6 py-3 text-lg hover:bg-foreground/5">
              <Link to="#">
                <span className="text-nowrap">Request a demo</span>
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
