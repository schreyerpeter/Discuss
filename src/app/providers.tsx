'use client';

import { NextUIProvider } from '@nextui-org/react';

interface ProvidersProps {
  readonly children: React.ReactNode;
}

export default function Providers({ children }: ProvidersProps) {
  return <NextUIProvider>{children}</NextUIProvider>;
}
