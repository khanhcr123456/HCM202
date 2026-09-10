'use client'

import Link from 'next/link'
import { BookOpen, UserRound } from 'lucide-react'

export default function CourseHeader({ active = '' }) {
  return (
    <header className="lesson-header">
      <Link href="/" className="lesson-header-left">
        <div className="brand-mini-icon"><BookOpen size={18} /></div>
        <div>
          <div className="brand-mini-title">Tư tưởng Hồ Chí Minh</div>
          <div className="brand-mini-sub">Chương 3</div>
        </div>
      </Link>

      <nav className="lesson-header-nav" aria-label="Section navigation">
        <Link className={active === 'home' ? 'active' : ''} href="/">Trang chủ</Link>
        <Link className={active === 'dan-toc' ? 'active' : ''} href="/vandedantoc">Độc lập dân tộc</Link>
        <Link className={active === 'cnxh' ? 'active' : ''} href="/vanchuyenxahoi">Chủ nghĩa xã hội</Link>
        <Link className={active === 'cq' ? 'active' : ''} href="/cau-hoi-cq">Câu hỏi CQ</Link>
        <Link className={active === 'quiz' ? 'active' : ''} href="/quiz">Quiz</Link>
      </nav>

      <Link className="account-link" href="/dang-nhap">
        <UserRound size={16} />
        <span>Đăng nhập</span>
      </Link>

    </header>
  )
}
