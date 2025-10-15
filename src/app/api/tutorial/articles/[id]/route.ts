import { NextResponse } from 'next/server';

import { deleteDemoArticle, fetchDemoArticle, updateDemoArticle } from '@/lib/sanity';
import type { DemoArticleDraft } from '@/types/tutorial';

const extractId = (request: Request) => {
  const url = new URL(request.url);
  const segments = url.pathname.split('/').filter(Boolean);
  return segments[segments.length - 1] ?? '';
};

export async function GET(request: Request) {
  try {
    const id = extractId(request);
    if (!id) {
      return NextResponse.json({ error: 'Article id missing.' }, { status: 400 });
    }
    const article = await fetchDemoArticle(id);
    if (!article) {
      return NextResponse.json({ error: 'Article not found.' }, { status: 404 });
    }
    return NextResponse.json({ article });
  } catch (error) {
    return NextResponse.json({ error: (error as Error).message }, { status: 500 });
  }
}

export async function PUT(request: Request) {
  try {
    const id = extractId(request);
    if (!id) {
      return NextResponse.json({ error: 'Article id missing.' }, { status: 400 });
    }
    const payload = (await request.json()) as DemoArticleDraft;
    if (!payload?.title) {
      return NextResponse.json({ error: 'Title is required.' }, { status: 400 });
    }
    const article = await updateDemoArticle(id, payload);
    return NextResponse.json({ article });
  } catch (error) {
    return NextResponse.json({ error: (error as Error).message }, { status: 500 });
  }
}

export async function DELETE(request: Request) {
  try {
    const id = extractId(request);
    if (!id) {
      return NextResponse.json({ error: 'Article id missing.' }, { status: 400 });
    }
    await deleteDemoArticle(id);
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: (error as Error).message }, { status: 500 });
  }
}
