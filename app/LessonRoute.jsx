'use client'

import Link from 'next/link'
import { ArrowLeft, ArrowRight, Clock3, Home } from 'lucide-react'
import { useEffect, useState } from 'react'
import CourseHeader from './CourseHeader'
import CourseSidebar from './CourseSidebar'

export default function LessonRoute({ section, items, group, nextHref, nextLabel, hideContent = false, sharedSidebar = false, sidebarSection, sidebarGroups = [], prevHref }) {
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const [sidebarStateHydrated, setSidebarStateHydrated] = useState(!sharedSidebar)

  useEffect(() => {
    if (!sharedSidebar) return
    const savedState = window.localStorage.getItem('hcm-cnxh-sidebar')
    if (savedState) {
      try {
        const state = JSON.parse(savedState)
        if (typeof state.sidebarOpen === 'boolean') setSidebarOpen(state.sidebarOpen)
      } catch {
        window.localStorage.removeItem('hcm-cnxh-sidebar')
      }
    }
    setSidebarStateHydrated(true)
  }, [sharedSidebar])

  useEffect(() => {
    if (sharedSidebar && sidebarStateHydrated) {
      const savedState = window.localStorage.getItem('hcm-cnxh-sidebar')
      let state = {}
      try { state = savedState ? JSON.parse(savedState) : {} } catch { state = {} }
      window.localStorage.setItem('hcm-cnxh-sidebar', JSON.stringify({ ...state, sidebarOpen }))
    }
  }, [sharedSidebar, sidebarOpen, sidebarStateHydrated])

  return (
    <>
      <CourseHeader active={group === 'dan-toc' ? 'dan-toc' : 'cnxh'} />
      <main className={`page lesson-page${sharedSidebar && !sidebarOpen ? ' sidebar-collapsed' : ''}`}>
        {sharedSidebar ? (
          <CourseSidebar
            activeItemId={section.id}
            currentSection={sidebarSection || { ...section, href: items.find((item) => item.id === section.id)?.href }}
            groups={sidebarGroups}
            items={items}
            onOpenChange={setSidebarOpen}
            open={sidebarOpen}
            storageKey="hcm-cnxh-sidebar"
          />
        ) : (
          <aside className="sidebar-panel">
            <ul className="side-list">
              {items.map((item) => (
                <li key={item.href}>
                  <Link className={item.id === section.id ? 'active side-link' : 'side-link'} href={item.href}>
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </aside>
        )}

        <section className="lesson-panel">
          {!hideContent && (
            <>
              <div className="lesson-title-row">
                <div className="title-block"><h2>{section.title}</h2></div>
                <span className="time-tag"><Clock3 size={14} /> 15 phút</span>
              </div>
              <div className="lesson-tabs"><button className="active">Tổng quan</button></div>
              <div className="content-card">
                <div className="card-head">
                  <h4>{section.overview.title}</h4>
                </div>
                <p className="lead-text">{section.overview.text}</p>
                <ul className="point-list">
                  {section.sections.map((item) => (
                    <li key={item.title}>
                      <strong>{item.title}</strong>
                      <p>{item.detail}</p>
                    </li>
                  ))}
                </ul>
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
                <Link className="nav-btn nav-btn-prev" href={prevHref || (group === 'dan-toc' ? '/vandedantoc' : '/vanchuyenxahoi')}>
                  <ArrowLeft size={18} strokeWidth={2.5} /> Phần trước
                </Link>
                <Link className="nav-btn nav-btn-next" href={nextHref}>
                  {nextLabel} <ArrowRight size={18} strokeWidth={2.5} />
                </Link>
              </div>
            </>
          )}
        </section>
      </main>
    </>
  )
}
