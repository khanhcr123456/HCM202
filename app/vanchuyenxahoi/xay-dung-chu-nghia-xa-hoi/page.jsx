import LessonRoute from '../../LessonRoute'
import { lessonData } from '../../lesson-data'

const items = [
  { ...lessonData['3.2.1'], href: '/vanchuyenxahoi/chu-nghia-xa-hoi' },
  { ...lessonData['3.2.2'], href: '/vanchuyenxahoi/xay-dung-chu-nghia-xa-hoi' },
]

const sidebarGroups = [
  { label: 'a', title: 'Quan niệm của Hồ Chí Minh về chủ nghĩa xã hội', href: '/vanchuyenxahoi/chu-nghia-xa-hoi?section=a' },
  { label: 'b', title: 'Tiến lên chủ nghĩa xã hội là một tất yếu khách quan', href: '/vanchuyenxahoi/chu-nghia-xa-hoi?section=b' },
  { label: 'c', title: 'Một số đặc trưng cơ bản của xã hội xã hội chủ nghĩa', href: '/vanchuyenxahoi/chu-nghia-xa-hoi?section=c' },
]

export default function XayDungChuNghiaXaHoiPage() {
  return (
    <LessonRoute
      section={items[1]}
      items={items}
      group="cnxh"
      nextHref="/"
      nextLabel="Về trang chủ"
      sharedSidebar
      sidebarSection={{ ...items[0], href: '/vanchuyenxahoi/chu-nghia-xa-hoi' }}
      sidebarGroups={sidebarGroups}
      prevHref="/vanchuyenxahoi/chu-nghia-xa-hoi?section=c"
    />
  )
}
