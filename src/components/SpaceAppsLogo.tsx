import Image from "next/image";

export function SpaceAppsLogo({ className = "" }: { className?: string }) {
  return (
    <Image
      src="/Image/logo.png"
      alt="NASA Space Apps Challenge Ogbomoso"
      width={804}
      height={316}
      priority
      className={`h-8 w-auto sm:h-10 ${className}`}
    />
  );
}
