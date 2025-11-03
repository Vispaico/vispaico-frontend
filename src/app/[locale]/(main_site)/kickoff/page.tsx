// app/(main_site)/kickoff/page.tsx
'use client';

import KickoffForm from '@/components/KickoffForm';
import { Suspense } from 'react';

export default function KickoffPage() {
    return (
        <Suspense>
            <div className="bg-gray-900 text-white">
                <KickoffForm />
            </div>
        </Suspense>
    );
}