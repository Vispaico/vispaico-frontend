import type { StoryCategory, StorySummary } from './stories';

const baseStorySummariesVi: Array<Omit<StorySummary, 'category'>> = [
  {
    routeSegment: 'how-to-audit-your-website-for-wcag2_2-compliance',
    title: 'Cách kiểm tra website đáp ứng WCAG 2.2 AA (Placeholder)',
    excerpt:
      'Nội dung tạm thời: sẽ thay bằng bản dịch tiếng Việt cho bài hướng dẫn kiểm toán WCAG 2.2 AA khi hoàn tất.',
    publishDate: '2025-11-01',
    readLength: 'Đọc trong 13 phút',
    metadataTitle: 'Hướng dẫn kiểm tra WCAG 2.2 AA (VI Placeholder) | Vispaico',
    metadataDescription:
      'Mô tả tạm thời bằng tiếng Việt cho bài viết kiểm toán WCAG 2.2 AA. Hãy thay bằng bản dịch chính thức sau.',
    featured: true,
  },
  {
    routeSegment: 'how-to-build-accessible-websites',
    title: 'Xây dựng website thân thiện với mọi người (Placeholder)',
    excerpt:
      'Nội dung tạm thời: tóm tắt tiếng Việt sẽ được cập nhật khi bản dịch hoàn thành cho bài viết về thiết kế website tiếp cận.',
    publishDate: '2025-10-22',
    readLength: 'Đọc trong 7 phút',
    metadataTitle: 'Thiết kế website tiếp cận (VI Placeholder) | Vispaico',
    metadataDescription:
      'Mô tả tạm thời bằng tiếng Việt cho bài viết về website tiếp cận. Thay bằng nội dung cuối cùng sau.',
  },
  {
    routeSegment: 'ai-adopters-hire-more',
    title: 'Doanh nghiệp dùng AI đang tuyển thêm người (Placeholder)',
    excerpt:
      'Nội dung tạm thời: sẽ cập nhật bản dịch tiếng Việt cho bài viết về việc các công ty ứng dụng AI mở rộng nhân sự.',
    publishDate: '2025-10-28',
    readLength: 'Đọc trong 3 phút',
    metadataTitle: 'AI thúc đẩy tuyển dụng (VI Placeholder) | Vispaico',
    metadataDescription:
      'Mô tả tạm thời bằng tiếng Việt cho bài viết về AI và tuyển dụng. Thay bằng bản dịch chính thức khi sẵn sàng.',
    featured: true,
  },
];

const categoryMapVi: Record<string, StoryCategory> = {
  'how-to-audit-your-website-for-wcag2_2-compliance': 'tech',
  'how-to-build-accessible-websites': 'tech',
  'ai-adopters-hire-more': 'growth',
};

export const storySummariesVi: StorySummary[] = baseStorySummariesVi.map((entry) => ({
  ...entry,
  category: categoryMapVi[entry.routeSegment] ?? 'growth',
}));
