'use client';
import { usePathname, useParams } from 'next/navigation';

export default function DynamicRoute() {
  const pathname  = usePathname();
  const params = useParams();
  return (
    <div>
      <h1>Dynamic Route Page</h1> 
      <h2>Pathname: {pathname}</h2>
      <h2>Dynamic Parameter: {params.data}</h2>
    </div>
  );
}