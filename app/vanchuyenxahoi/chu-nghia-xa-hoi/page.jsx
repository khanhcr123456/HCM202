'use client'

import Link from 'next/link'
import { ArrowLeft, ArrowRight, Clock3, Gavel, TrendingUp, HeartHandshake, Users } from 'lucide-react'
import { useEffect, useState } from 'react'
import CourseHeader from '../../CourseHeader'
import CourseSidebar from '../../CourseSidebar'
import { lessonData } from '../../lesson-data'

const currentSection = {
  id: '3.2.1',
  title: 'Tư tưởng Hồ Chí Minh về chủ nghĩa xã hội',
  href: '/vanchuyenxahoi/chu-nghia-xa-hoi',
  groups: [
    {
      label: 'a',
      title: 'Quan niệm của Hồ Chí Minh về chủ nghĩa xã hội',
      sharedImage: '/images/Screenshot 2026-09-12 161922.png',
      items: [
        {
          title: '- Mục đích của chủ nghĩa xã hội',
          detail: 'Chủ nghĩa xã hội trước hết nhằm làm cho nhân dân lao động thoát nạn bần cùng, làm cho mọi người có công ăn việc làm, được ấm no và sống một đời hạnh phúc',
          image: '/images/mucdich.jpg',
        },
        {
          title: '- Con đường phát triển của cách mạng Việt Nam',
          detail: 'Hồ Chí Minh khẳng định mục đích của cách mạng Việt Nam là tiến đến chủ nghĩa xã hội rồi đến chủ nghĩa cộng sản, vì chủ nghĩa cộng sản có hai giai đoạn.',
        },
        {
          title: '- Chủ nghĩa xã hội là giai đoạn đầu của chủ nghĩa cộng sản',
          detail: 'Mặc dù còn tồn đọng tàn dư của xã hội cũ, chủ nghĩa xã hội không còn áp bức, bóc lột; xã hội do nhân dân lao động làm chủ, trong đó con người sống ấm no, tự do, hạnh phúc, quyền lợi của cá nhân và tập thể vừa thống nhất, vừa gắn bó chặt chẽ với nhau.',
        },
      ],
    },
    {
      label: 'b',
      title: 'Tiến lên chủ nghĩa xã hội là một tất yếu khách quan',
      items: [
        {
          title: '- Hồ Chí Minh khẳng định',
          detail: '“Tiến lên chủ nghĩa xã hội là bước phát triển tất yếu ở Việt Nam sau khi nước nhà đã giành được độc lập theo con đường cách mạng vô sản”.',
          emphasis: true,
        },
        {
          title: '- Phù hợp với xu thế phát triển của thời đại',
          detail: 'Tiến lên chủ nghĩa xã hội phù hợp với xu thế phát triển chung của thời đại và con đường cách mạng vô sản.',
        },
        {
          title: '- Phù hợp với nguyện vọng của đại đa số nhân dân lao động',
          detail: 'Chủ nghĩa xã hội hướng tới cuộc sống ấm no, tự do, hạnh phúc và đáp ứng nguyện vọng chính đáng của nhân dân lao động.',
        },
        {
          title: '- Bảo vệ được thành quả của cách mạng Việt Nam',
          detail: 'Đi lên chủ nghĩa xã hội giúp củng cố nền độc lập và bảo vệ những thành quả mà cách mạng Việt Nam đã giành được.',
        },
      ],
    },
    {
      label: 'c',
      title: 'Một số đặc trưng cơ bản của xã hội xã hội chủ nghĩa',
      items: [
        {
          title: 'Thứ nhất, về chính trị',
          detail: 'Xã hội xã hội chủ nghĩa là xã hội do nhân dân làm chủ',
          icon: 'gavel',
          color: '#ea580c'
        },
        {
          title: 'Thứ hai, về kinh tế',
          detail: 'Xã hội xã hội chủ nghĩa là xã hội có nền kinh tế phát triển cao dựa trên lực lượng sản xuất hiện đại và chế độ công hữu về tư liệu sản xuất chủ yếu',
          icon: 'trending-up',
          color: '#ef4444'
        },
        {
          title: 'Thứ ba về văn hóa, đạo đức và các quan hệ xã hội',
          detail: 'Xã hội xã hội chủ nghĩa có trình độ phát triển cao về văn hoá và đạo đức, bảo đảm sự công bằng, hợp lý trong các quan hệ xã hội.',
          icon: 'heart',
          color: '#0ea5e9'
        },
        {
          title: 'Thứ tư, về chủ thể xây dựng chủ nghĩa xã hội',
          detail: 'Chủ nghĩa xã hội là công trình tập thể của nhân dân dưới sự lãnh đạo của Đảng Cộng sản.',
          icon: 'users',
          color: '#eab308'
        }
      ],
    },
  ],
}

const items = [
  { ...currentSection, href: '/vanchuyenxahoi/chu-nghia-xa-hoi' },
  { ...lessonData['3.2.2'], href: '/vanchuyenxahoi/xay-dung-chu-nghia-xa-hoi' },
]

const sidebarStorageKey = 'hcm-cnxh-sidebar'

export default function ChuNghiaXaHoiPage() {
  const [activeSectionIndex, setActiveSectionIndex] = useState(null)
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const [stateHydrated, setStateHydrated] = useState(false)
  const activeGroup = activeSectionIndex === null ? null : currentSection.groups[activeSectionIndex]

  useEffect(() => {
    const savedState = window.localStorage.getItem(sidebarStorageKey)
    const requestedSection = new URLSearchParams(window.location.search).get('section')
    const requestedIndex = currentSection.groups.findIndex((group) => group.label === requestedSection)
    if (requestedIndex >= 0) setActiveSectionIndex(requestedIndex)
    if (!savedState) {
      setStateHydrated(true)
      return
    }

    try {
      const state = JSON.parse(savedState)
      if (requestedIndex < 0 && Number.isInteger(state.activeSectionIndex) && state.activeSectionIndex >= 0 && state.activeSectionIndex < currentSection.groups.length) {
        setActiveSectionIndex(state.activeSectionIndex)
      }
      if (typeof state.sidebarOpen === 'boolean') setSidebarOpen(state.sidebarOpen)
    } catch {
      window.localStorage.removeItem(sidebarStorageKey)
    }
    setStateHydrated(true)
  }, [])

  useEffect(() => {
    if (!stateHydrated) return
    const savedState = window.localStorage.getItem(sidebarStorageKey)
    let state = {}
    try { state = savedState ? JSON.parse(savedState) : {} } catch { state = {} }
    window.localStorage.setItem(sidebarStorageKey, JSON.stringify({ ...state, activeSectionIndex, sidebarOpen }))
  }, [activeSectionIndex, sidebarOpen, stateHydrated])

  return (
    <>
      <CourseHeader active="cnxh" />
      <main className={`page lesson-page${sidebarOpen ? '' : ' sidebar-collapsed'}`}>
        <CourseSidebar
          activeSectionIndex={activeSectionIndex}
          currentSection={currentSection}
          groups={currentSection.groups}
          items={items}
          onOpenChange={setSidebarOpen}
          onSectionSelect={setActiveSectionIndex}
          open={sidebarOpen}
        />

        <section className="lesson-panel course-lesson-panel">
          <div className="lesson-title-row">
            <div className="title-block"><h2>{activeGroup ? activeGroup.title : currentSection.title}</h2></div>

          </div>
          <div className="content-card">
            {activeGroup ? (
              <>
                {activeGroup.sharedImage ? (
                  <>
                    <ul className="point-list purpose-list">
                      <li className="point-slide" key={activeGroup.items[0].title}>
                        <div className="point-copy">
                          <strong>{activeGroup.items[0].title}</strong>
                          <p>{activeGroup.items[0].detail}</p>
                        </div>
                        <img className="point-image" src={activeGroup.items[0].image} alt={activeGroup.items[0].title} />
                      </li>
                    </ul>
                    <ul className="point-list shared-list">
                      <li className="point-slide shared-image-slide" key={activeGroup.sharedImage}>
                        <div className="point-copy">
                          {activeGroup.items.slice(1).map((item) => (
                            <div key={item.title}>
                              <strong>{item.title}</strong>
                              <p>{item.detail}</p>
                            </div>
                          ))}
                        </div>
                        <img className="point-image" src={activeGroup.sharedImage} alt={activeGroup.title} />
                      </li>
                    </ul>
                  </>
                ) : activeGroup.label === 'b' ? (
                  <div style={{ backgroundColor: '#f0f9ff', padding: '40px', borderRadius: '16px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '30px', margin: '20px 0' }}>
                    <div style={{ backgroundColor: '#fff', padding: '30px 40px', borderRadius: '40px', border: '2px solid #e0f2fe', boxShadow: '0 8px 30px rgba(0,0,0,0.08)', maxWidth: '850px', display: 'flex', alignItems: 'center', gap: '30px', marginBottom: '20px' }}>
                      <img src="/images/ho-chi-minh.jpg" alt="Hồ Chí Minh" style={{ width: '120px', height: '120px', borderRadius: '50%', objectFit: 'cover', border: '5px solid #f0f9ff', boxShadow: '0 4px 15px rgba(2,132,199,0.2)', flexShrink: 0 }} />
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                        <strong style={{ color: '#005bc4', fontSize: '1.4rem' }}>Hồ Chí Minh khẳng định:</strong>
                        <span style={{ color: '#0284c7', fontSize: '1.65rem', lineHeight: '1.5', textAlign: 'left' }}>
                          <em>“Tiến lên chủ nghĩa xã hội là bước phát triển <strong style={{ textDecoration: 'underline' }}>tất yếu</strong> ở Việt Nam sau khi nước nhà đã giành được độc lập theo con đường cách mạng vô sản”</em>
                        </span>
                      </div>
                    </div>

                    <div style={{ width: '100%', maxWidth: '800px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '15px' }}>
                      <div style={{ color: '#0284c7', fontWeight: 'bold', fontStyle: 'italic', fontSize: '1.25rem', textDecoration: 'underline', marginBottom: '5px' }}>
                        Tất yếu bởi các lý do sau:
                      </div>
                      {activeGroup.items.slice(1).map((item, idx) => {
                        let titleText = item.title.replace('- ', '');
                        if (!titleText.endsWith('.')) titleText += '.';
                        return (
                          <div key={item.title} style={{ backgroundColor: '#fff', border: '1.5px solid #0ea5e9', borderRadius: '12px', padding: '20px 25px', display: 'flex', alignItems: 'center', boxShadow: '0 4px 15px rgba(0,0,0,0.03)', color: '#ea580c', fontWeight: 'bold', fontSize: '1.2rem' }}>
                            {idx + 1}. {titleText}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                ) : activeGroup.label === 'c' ? (
                  <div style={{ padding: '30px 40px', display: 'flex', flexDirection: 'column', alignItems: 'center', backgroundColor: '#f8fafc', borderRadius: '24px', margin: '10px 0' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px 60px', width: '100%' }}>
                      {activeGroup.items.map((item) => {
                        let Icon;
                        if (item.icon === 'gavel') Icon = Gavel;
                        else if (item.icon === 'trending-up') Icon = TrendingUp;
                        else if (item.icon === 'heart') Icon = HeartHandshake;
                        else Icon = Users;

                        return (
                          <div key={item.title} style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                              <Icon size={48} color={item.color} strokeWidth={1.5} />
                              <strong style={{ color: '#0ea5e9', fontSize: '1.4rem', textDecoration: 'underline', fontStyle: 'italic' }}>
                                {item.title}
                              </strong>
                            </div>
                            <p style={{ color: '#334155', fontSize: '1.2rem', lineHeight: '1.5', fontStyle: 'italic', paddingLeft: '60px', margin: 0 }}>
                              {item.detail}
                            </p>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                ) : (
                  <ul className="point-list">
                    {activeGroup.items.map((item) => (
                      <li key={item.title}>
                        <strong>{item.title}</strong>
                        <p className={item.emphasis ? 'emphasis-text' : ''}>{item.detail}</p>
                      </li>
                    ))}
                  </ul>
                )}
              </>
            ) : (
              <div className="card-head">
                <h4>Hãy chọn một mục ở sidebar để bắt đầu</h4>
              </div>
            )}
          </div>
          <div className="bottom-actions" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '40px', borderTop: '2px solid #f1f5f9', paddingTop: '30px' }}>
            <style>{`
              .nav-btn {
                display: inline-flex;
                align-items: center;
                justify-content: center;
                gap: 10px;
                padding: 14px 28px;
                border-radius: 100px;
                font-weight: 600;
                font-size: 1.05rem;
                cursor: pointer;
                transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                border: none;
                text-decoration: none;
              }
              .nav-btn-prev {
                background-color: #ffffff;
                color: #64748b;
                border: 2px solid #e2e8f0;
                box-shadow: 0 4px 10px rgba(0,0,0,0.03);
              }
              .nav-btn-prev:hover {
                background-color: #f8fafc;
                color: #0f172a;
                border-color: #cbd5e1;
                transform: translateX(-4px);
                box-shadow: 0 6px 15px rgba(0,0,0,0.06);
              }
              .nav-btn-next {
                background: linear-gradient(135deg, #0284c7 0%, #2563eb 100%);
                color: #ffffff;
                box-shadow: 0 6px 15px rgba(37, 99, 235, 0.3);
              }
              .nav-btn-next:hover {
                box-shadow: 0 8px 25px rgba(37, 99, 235, 0.45);
                transform: translateX(4px);
              }
              .nav-btn-next:disabled {
                background: #e2e8f0;
                color: #94a3b8;
                box-shadow: none;
                transform: none;
                cursor: not-allowed;
              }
            `}</style>
            {activeSectionIndex > 0 ? (
              <button
                className="nav-btn nav-btn-prev"
                onClick={() => setActiveSectionIndex((index) => index - 1)}
                type="button"
              >
                <ArrowLeft size={18} strokeWidth={2.5} /> Phần trước
              </button>
            ) : (
              <div></div>
            )}
            {activeSectionIndex === null ? (
              <button className="nav-btn nav-btn-next" disabled type="button">Phần tiếp theo <ArrowRight size={18} strokeWidth={2.5} /></button>
            ) : activeSectionIndex < currentSection.groups.length - 1 ? (
              <button
                className="nav-btn nav-btn-next"
                onClick={() => setActiveSectionIndex((index) => index + 1)}
                type="button"
              >
                Phần tiếp theo <ArrowRight size={18} strokeWidth={2.5} />
              </button>
            ) : (
              <Link className="nav-btn nav-btn-next" href="/vanchuyenxahoi/xay-dung-chu-nghia-xa-hoi">
                Phần tiếp theo <ArrowRight size={18} strokeWidth={2.5} />
              </Link>
            )}
          </div>
        </section>
      </main>
    </>
  )
}
