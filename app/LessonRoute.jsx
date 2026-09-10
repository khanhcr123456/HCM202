'use client'

import Link from 'next/link'
import { ArrowLeft, ArrowRight, Clock3, Home } from 'lucide-react'
import CourseHeader from './CourseHeader'

export default function LessonRoute({ section, items, group, nextHref, nextLabel }) {
  return (
    <>
      <CourseHeader active={group === 'dan-toc' ? 'dan-toc' : 'cnxh'} />
      <main className="page lesson-page">
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

        <section className="lesson-panel">
          <div className="lesson-title-row">
            <div className="title-block"><h2>{section.title}</h2></div>
            <span className="time-tag"><Clock3 size={14} /> 15 phút</span>
          </div>
          <div className="lesson-tabs"><button className="active">Tổng quan</button></div>
          <div className="content-card">
            <div className="card-head">
              <span className="small-kicker">Chủ đề</span>
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
          <div className="bottom-actions">
            <Link className="ghost-btn" href={group === 'dan-toc' ? '/vandedantoc' : '/vanchuyenxahoi'}>
              <ArrowLeft size={15} /> Quay lại
            </Link>
            <Link className="primary-btn" href={nextHref}>
              {nextLabel} <ArrowRight size={15} />
            </Link>
          </div>
        </section>
      </main>
    </>
  )
}
