'use client'

import Link from 'next/link'
import { Menu, ChevronDown, ChevronUp } from 'lucide-react'
import { useEffect, useState } from 'react'

export default function CourseSidebar({
  currentSection,
  groups = [],
  items,
  activeSectionIndex = null,
  onSectionSelect = () => {},
  open,
  onOpenChange,
  storageKey = 'hcm-cnxh-sidebar',
  activeItemId = currentSection.id,
}) {
  const [subsectionsOpen, setSubsectionsOpen] = useState(true)
  const [hydrated, setHydrated] = useState(false)
  const subsectionsStorageKey = `${storageKey}-subsections`

  useEffect(() => {
    const savedSubsectionsState = window.localStorage.getItem(subsectionsStorageKey)
    if (savedSubsectionsState !== null) {
      try {
        setSubsectionsOpen(savedSubsectionsState === 'open')
      } catch {
        window.localStorage.removeItem(subsectionsStorageKey)
      }
    }
    setHydrated(true)
  }, [subsectionsStorageKey])

  useEffect(() => {
    if (!hydrated) return
    window.localStorage.setItem(subsectionsStorageKey, subsectionsOpen ? 'open' : 'closed')
  }, [hydrated, subsectionsStorageKey, subsectionsOpen])

  if (!open) {
    return (
      <button
        aria-label="Mở danh mục"
        className="sidebar-toggle sidebar-toggle-collapsed"
        onClick={() => onOpenChange(true)}
        title="Mở danh mục"
        type="button"
      >
        <Menu size={19} />
      </button>
    )
  }

  return (
    <aside className="sidebar-panel">
      <button
        aria-label="Đóng danh mục"
        className="sidebar-toggle sidebar-toggle-in-panel"
        onClick={() => onOpenChange(false)}
        title="Đóng danh mục"
        type="button"
      >
        <Menu size={19} />
      </button>
      <ul className="side-list">
        <li>
          <div className="side-main-row">
            <Link className={activeItemId === currentSection.id ? 'active side-link' : 'side-link'} href={currentSection.href}>
              {currentSection.title}
            </Link>
            {groups.length > 0 && (
              <button
                aria-label={subsectionsOpen ? 'Đóng các mục con' : 'Mở các mục con'}
                className={`side-section-toggle${activeItemId === currentSection.id ? ' on-dark' : ''}`}
                onClick={() => setSubsectionsOpen((value) => !value)}
                title={subsectionsOpen ? 'Đóng các mục con' : 'Mở các mục con'}
                type="button"
              >
                {subsectionsOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
              </button>
            )}
          </div>
          {subsectionsOpen && groups.length > 0 && (
            <ul className="side-sublist">
              {groups.map((group, index) => (
                <li key={group.label}>
                  {group.href ? (
                    <Link
                      className={index === activeSectionIndex ? 'active side-sub-link' : 'side-sub-link'}
                      href={group.href}
                      onClick={() => onSectionSelect(index)}
                    >
                      {group.label}. {group.title}
                    </Link>
                  ) : (
                    <button
                      className={index === activeSectionIndex ? 'active' : ''}
                      onClick={() => onSectionSelect(index)}
                      type="button"
                    >
                      {group.label}. {group.title}
                    </button>
                  )}
                </li>
              ))}
            </ul>
          )}
        </li>
        {items.filter((item) => item.id !== currentSection.id).map((item) => (
          <li key={item.href}>
            <Link className={activeItemId === item.id ? 'active side-link' : 'side-link'} href={item.href}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </aside>
  )
}
