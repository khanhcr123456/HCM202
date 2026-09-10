import LessonRoute from '../../LessonRoute'
import { lessonData } from '../../lesson-data'

const items = [
  { ...lessonData['3.2.1'], href: '/vanchuyenxahoi/chu-nghia-xa-hoi' },
  { ...lessonData['3.2.2'], href: '/vanchuyenxahoi/xay-dung-chu-nghia-xa-hoi' },
]

export default function ChuNghiaXaHoiPage() {
  return (
    <LessonRoute
      section={items[0]}
      items={items}
      group="cnxh"
      nextHref="/vanchuyenxahoi/xay-dung-chu-nghia-xa-hoi"
      nextLabel="Phần tiếp theo"
    />
  )
}
