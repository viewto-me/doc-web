// src/app/page.tsx
import { redirect } from 'next/navigation';

export default function HomePage() {
  redirect('/docs/introduction');
  // This component will not render anything as redirect will happen server-side.
  // return null; 
}
