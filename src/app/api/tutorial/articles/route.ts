import { NextResponse } from 'next/server';

import { createDemoArticle, fetchDemoArticles } from '@/lib/sanity';
import type { DemoArticleDraft } from '@/types/tutorial';

export async function GET() {
  try {
    const articles = await fetchDemoArticles();
    return NextResponse.json({ articles });
  } catch (error) {
    return NextResponse.json({ error: (error as Error).message }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const payload = (await request.json()) as DemoArticleDraft;
    if (!payload?.title) {
      return NextResponse.json({ error: 'Title is required.' }, { status: 400 });
    }
    const article = await createDemoArticle(payload);
    return NextResponse.json({ article }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: (error as Error).message }, { status: 500 });
  }
}
