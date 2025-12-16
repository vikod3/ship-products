import { cn } from '@/lib/utils';
import logoImage from '@/assets/logo.png';

interface LogoProps {
  className?: string;
}

export function Logo({ className }: LogoProps) {
  return (
    <img 
      src={logoImage} 
      alt="Logo" 
      className={cn('h-8 w-auto', className)} 
    />
  );
}
