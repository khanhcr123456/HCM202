import LessonRoute from '../../LessonRoute'
import { lessonData } from '../../lesson-data'

const items = [
  { ...lessonData['3.2.1'], href: '/vanchuyenxahoi/chu-nghia-xa-hoi' },
  { ...lessonData['3.2.2'], href: '/vanchuyenxahoi/xay-dung-chu-nghia-xa-hoi' },
]

export default function XayDungChuNghiaXaHoiPage() {
  return (
    <LessonRoute
      section={items[1]}
      items={items}
      group="cnxh"
      nextHref="/"
      nextLabel="Về trang chủ"
    />
  )
}
