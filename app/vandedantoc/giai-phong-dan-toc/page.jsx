import LessonRoute from '../../LessonRoute'
import { lessonData } from '../../lesson-data'

const items = [
  { ...lessonData['3.1.1'], href: '/vandedantoc/doc-lap-dan-toc' },
  { ...lessonData['3.1.2'], href: '/vandedantoc/giai-phong-dan-toc' },
]

export default function GiaiPhongDanTocPage() {
  return (
    <LessonRoute
      section={items[1]}
      items={items}
      group="dan-toc"
      nextHref="/vanchuyenxahoi"
      nextLabel="Chuyển sang CNXH"
    />
  )
}
