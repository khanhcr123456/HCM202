import Link from 'next/link'
import { BookOpen, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer-inner">
        <div className="footer-brand">
          <span className="footer-brand-icon"><BookOpen size={18} /></span>
          <div>
            <strong>Tư tưởng Hồ Chí Minh</strong>
            <span>Chương 3 · Học tập và ôn tập</span>
          </div>
        </div>

        <nav className="footer-links" aria-label="Liên kết cuối trang">
          <Link href="/">Trang chủ</Link>
          <Link href="/vandedantoc">Độc lập dân tộc</Link>
          <Link href="/vanchuyenxahoi">Chủ nghĩa xã hội</Link>
          <Link href="/cau-hoi-cq">Câu hỏi CQ</Link>
          <Link href="/quiz">Quiz</Link>
        </nav>

        <a className="footer-contact" href="mailto:contact@example.com">
          <Mail size={15} /> Liên hệ
        </a>
      </div>
      <div className="site-footer-bottom">
        <span>Đây là sản phẩm của bài thuyết trình Nhóm 2</span>
        <span>© 2026 · Hành trình học tập Tư tưởng Hồ Chí Minh</span>
      </div>
    </footer>
  )
}
