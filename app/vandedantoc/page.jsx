import { lessonData } from '../lesson-data'
import LessonRoute from '../LessonRoute'

const items = [
  { ...lessonData['3.1.1'], href: '/vandedantoc/doc-lap-dan-toc' },
  { ...lessonData['3.1.2'], href: '/vandedantoc/giai-phong-dan-toc' },
]

export default function VanDeDanTocPage() {
  return (
    <LessonRoute
      section={items[0]}
      items={items}
      group="dan-toc"
      nextHref="/vandedantoc/giai-phong-dan-toc"
      nextLabel="Phần tiếp theo"
    />
  )
}
