import Image from 'next/image';
import type { HTMLAttributes } from 'react';

// Define a props type that accepts className, as it's passed from the Navbar
// interface ViewToMeLogoProps extends Pick<HTMLAttributes<HTMLElement>, 'className'> {
//   // Add any other specific props you might want to pass in the future
// }

export function ViewToMeLogo({ className }: Pick<HTMLAttributes<HTMLElement>, 'className'>) {
  // The className "h-8 w-auto" will be passed from Navbar.
  // "h-8" corresponds to 32px.
  // The image filename "white-viewtome-name28px.svg" suggests an intrinsic height of 28px.
  // We'll use width={112} and height={28} for next/image, assuming a 4:1 aspect ratio (similar to original SVG).
  // The "h-8 w-auto" className will then scale this rendered image to 32px height, maintaining aspect ratio.
  return (
    <Image
      src="https://storage.googleapis.com/publics-svg/white-viewtome-name28px.svg.svg"
      alt="viewto.me Logo"
      width={112} // Intrinsic width (28 * 4)
      height={28} // Based on "28px" in the image filename
      className={className} // Applies "h-8 w-auto" from Navbar
      priority // Logos are often critical for LCP
    />
  );
}
