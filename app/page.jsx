'use client'

import Link from 'next/link'
import { useState } from 'react'
import {
  ArrowRight,
  BookOpen,
  BookOpenText,
  Check,
  CheckCircle2,
  ChevronRight,
  CirclePlay,
  Clock3,
  Flag,
  Home,
  Landmark,
  Award,
  ArrowUpRight,
  Search,
  Sparkles,
  Target,
  User,
  XCircle,
  Zap,
} from 'lucide-react'
import CourseHeader from './CourseHeader'

export const chapterData = {
  '3.1': {
    id: '3.1',
    title: 'Tư tưởng Hồ Chí Minh về độc lập dân tộc',
    shortLabel: '3.1',
    summary: 'Độc lập dân tộc là quyền thiêng liêng, bất khả xâm phạm, phải gắn với tự do, hạnh phúc của nhân dân và thống nhất lãnh thổ.',
    overview: {
      title: 'Độc lập dân tộc gắn liền với chủ nghĩa xã hội',
      text: 'Sợi chỉ đỏ xuyên suốt cách mạng Việt Nam: độc lập dân tộc phải đi cùng chính nghĩa, nhân dân làm chủ và tiến tới công bằng xã hội.',
    },
    sections: [
      {
        title: '1. Độc lập, tự do là quyền thiêng liêng, bất khả xâm phạm',
        detail: 'Mọi dân tộc đều có quyền sống, tự do, mưu cầu hạnh phúc. Hồ Chí Minh nhấn mạnh quyền dân tộc tự quyết và khẳng định rằng “không có gì quý hơn độc lập, tự do”.',
      },
      {
        title: '2. Độc lập dân tộc gắn liền với tự do, hạnh phúc của nhân dân',
        detail: 'Nền độc lập phải đem lại cuộc sống ấm no, tự do và hạnh phúc cho nhân dân. Độc lập không chỉ là danh nghĩa, mà phải thật sự mang lại đời sống tốt hơn cho người dân.',
      },
      {
        title: '3. Độc lập dân tộc phải thật sự, hoàn toàn và triệt để',
        detail: 'Nền độc lập phải được thực hiện trên mọi lĩnh vực: chính trị, ngoại giao, tài chính, quân sự và toàn vẹn lãnh thổ. Hiệp định Sơ bộ 6/3/1946 là minh chứng.',
      },
      {
        title: '4. Độc lập dân tộc gắn liền với thống nhất và toàn vẹn lãnh thổ',
        detail: 'Hồ Chí Minh cảnh báo chống mọi âm mưu chia cắt đất nước. “Nước Việt Nam là một, dân tộc Việt Nam là một”.',
      },
      {
        title: '5. Về cách mạng giải phóng dân tộc',
        detail: 'Cách mạng phải theo con đường cách mạng vô sản, do Đảng Cộng sản lãnh đạo, dựa vào đại đoàn kết toàn dân tộc, chủ động sáng tạo và tiến hành bằng bạo lực cách mạng.',
      },
    ],
    keywords: ['độc lập', 'tự do', 'quyền dân tộc tự quyết', 'đại đoàn kết', 'đảng lãnh đạo', 'bạo lực cách mạng'],
    timeline: [
      { year: '1919', event: 'Bản Yêu sách của nhân dân An Nam' },
      { year: '1930', event: 'Chánh cương vắn tắt; mục tiêu độc lập dân tộc' },
      { year: '1946', event: 'Hiệp định Sơ bộ 6/3; Lời kêu gọi toàn quốc kháng chiến' },
      { year: '1958', event: '“Nước Việt Nam là một, dân tộc Việt Nam là một”' },
      { year: '1965', event: '“Không có gì quý hơn độc lập, tự do”' },
    ],
  },
  '3.1.1': {
    id: '3.1.1',
    title: 'Vấn đề độc lập dân tộc',
    shortLabel: '3.1.1',
    summary: 'Độc lập dân tộc là vấn đề sống còn của dân tộc, phải được giải quyết bằng con đường cách mạng, dựa trên quyền tự quyết và đại đoàn kết.',
    overview: {
      title: 'Vấn đề độc lập dân tộc là mục tiêu hàng đầu của cách mạng',
      text: 'Hồ Chí Minh xem độc lập dân tộc là quyền thiêng liêng, là cơ sở để người dân được sống trong tự do và hạnh phúc.',
    },
    sections: [
      {
        title: '1. Quyền độc lập, tự do của dân tộc',
        detail: 'Mỗi dân tộc đều có quyền sống, quyền tự quyết, không ai có quyền áp bức hoặc thống trị. Hồ Chí Minh khẳng định: “Không có gì quý hơn độc lập, tự do”.',
      },
      {
        title: '2. Độc lập dân tộc với hạnh phúc của nhân dân',
        detail: 'Độc lập phải không chỉ là tên gọi, mà phải tạo ra đời sống ấm no, tự do, công bằng cho nhân dân. Một dân tộc độc lập mà nhân dân không hạnh phúc thì chưa thực sự độc lập.',
      },
      {
        title: '3. Độc lập toàn vẹn và triệt để',
        detail: 'Hồ Chí Minh yêu cầu độc lập phải hoàn chỉnh trên mọi mặt: chính trị, quân sự, ngoại giao, kinh tế, văn hóa và toàn vẹn lãnh thổ.',
      },
      {
        title: '4. Độc lập dân tộc phải được bảo vệ bằng sức mạnh thật sự',
        detail: 'Độc lập không thể tự nhiên đến, phải được giữ bằng sự đoàn kết, lòng yêu nước, tinh thần bất khuất và sự chuẩn bị cho cách mạng.',
      },
    ],
    keywords: ['quyền tự quyết', 'độc lập', 'tự do', 'hạnh phúc nhân dân', 'toàn vẹn lãnh thổ'],
    timeline: [
      { year: '1919', event: 'Yêu sách của nhân dân An Nam' },
      { year: '1945', event: 'Cách mạng Tháng Tám thành công' },
      { year: '1946', event: 'Hiệp định Sơ bộ 6/3; bảo vệ nền độc lập' },
      { year: '1954', event: 'Đất nước giải phóng, chiến thắng Điện Biên Phủ' },
    ],
  },
  '3.1.2': {
    id: '3.1.2',
    title: 'Về cách mạng giải phóng dân tộc',
    shortLabel: '3.1.2',
    summary: 'Cách mạng giải phóng dân tộc phải đi theo con đường đúng, do Đảng Cộng sản lãnh đạo, dựa vào đại đoàn kết toàn dân tộc và bạo lực cách mạng.',
    overview: {
      title: 'Cách mạng phải là một cuộc đấu tranh vì độc lập, tự do và nhân dân',
      text: 'Hồ Chí Minh nhấn mạnh cách mạng giải phóng dân tộc không thể chỉ dựa vào sự ngoan ngoãn, mà phải là cuộc đấu tranh có đường lối, tổ chức và lãnh đạo vững chắc.',
    },
    sections: [
      {
        title: '1. Con đường cách mạng vô sản',
        detail: 'Hồ Chí Minh cho rằng cách mạng giải phóng dân tộc ở Việt Nam phải đi theo con đường cách mạng vô sản, gắn với mục tiêu giải phóng dân tộc và xây dựng xã hội mới.',
      },
      {
        title: '2. Đảng Cộng sản lãnh đạo',
        detail: 'Đảng là nhân tố cốt lõi quyết định thắng lợi của cách mạng. Không có Đảng, cách mạng sẽ không có đường lối, không có tổ chức vững chắc.',
      },
      {
        title: '3. Đại đoàn kết toàn dân tộc',
        detail: 'Cách mạng phải dựa vào sức mạnh của nhân dân, huy động mọi tầng lớp, mọi lực lượng, tạo nên khối đại đoàn kết để đánh bại kẻ thù.',
      },
      {
        title: '4. Bạo lực cách mạng và sáng tạo',
        detail: 'Hồ Chí Minh nhấn mạnh cách mạng cần chủ động, sáng tạo, linh hoạt nhưng không ngừng bền bỉ trong đấu tranh vì độc lập tự do.',
      },
    ],
    keywords: ['cách mạng vô sản', 'đảng lãnh đạo', 'đại đoàn kết', 'bạo lực cách mạng', 'dân tộc', 'giải phóng'],
    timeline: [
      { year: '1920', event: 'Đường lối cách mạng giải phóng dân tộc được xác định' },
      { year: '1930', event: 'Đảng Cộng sản Việt Nam ra đời' },
      { year: '1945', event: 'Cách mạng Tháng Tám' },
      { year: '1946', event: 'Kháng chiến chống thực dân Pháp' },
    ],
  },
  '3.2': {
    id: '3.2',
    title: 'Tư tưởng Hồ Chí Minh về chủ nghĩa xã hội và xây dựng chủ nghĩa xã hội ở Việt Nam',
    shortLabel: '3.2',
    summary: 'CNXH là xã hội không còn áp bức bóc lột, do nhân dân làm chủ, với mục tiêu ấm no, tự do, hạnh phúc và sự phát triển toàn diện.',
    overview: {
      title: 'CNXH là bước đi tất yếu khách quan',
      text: 'Sau khi giành độc lập, Việt Nam tiến lên CNXH là điều tất yếu, phù hợp xu thế thời đại và hoàn cảnh lịch sử cụ thể.',
    },
    sections: [
      {
        title: '1. Quan niệm về CNXH',
        detail: 'CNXH là xã hội không còn áp bức bóc lột, nhân dân lao động làm chủ, và mọi người đều có đời sống ấm no, tự do, hạnh phúc.',
      },
      {
        title: '2. Tiến lên CNXH là tất yếu khách quan',
        detail: 'Từ một nước nông nghiệp lạc hậu sau chiến tranh, Việt Nam cần tiến lên CNXH để xây dựng xã hội công bằng, văn minh và bền vững.',
      },
      {
        title: '3. Đặc trưng cơ bản của xã hội XHCN',
        detail: 'Về chính trị: dân chủ, nhân dân làm chủ; kinh tế: phát triển cao, tư liệu sản xuất chủ yếu công hữu; văn hóa: công bằng, phát triển toàn diện.',
      },
      {
        title: '4. Xây dựng CNXH ở Việt Nam',
        detail: 'Thời kỳ quá độ khó khăn, phức tạp, lâu dài. Trọng tâm là cải tạo kinh tế cũ, xây dựng cơ sở vật chất kỹ thuật, phát triển văn hóa và đào tạo con người mới.',
      },
      {
        title: '5. Nguyên tắc xây dựng CNXH',
        detail: 'Phải dựa trên chủ nghĩa Mác - Lênin, giữ vững độc lập dân tộc, đoàn kết học tập sáng tạo và “xây đi đôi với chống”.',
      },
    ],
    keywords: ['CNXH tất yếu', 'dân chủ XHCN', 'nông nghiệp công nghiệp hiện đại', 'nhân dân làm chủ', 'xây đi đôi với chống', 'con người'],
    timeline: [
      { year: '1927', event: 'Tác phẩm Đường cách mệnh' },
      { year: '1930', event: 'Chánh cương vắn tắt' },
      { year: '1945', event: 'Cách mạng Tháng Tám thành công' },
      { year: '1954', event: 'Hiệp định Genève; bước chuyển mạnh về xây dựng đất nước' },
      { year: '1975', event: 'Đất nước thống nhất, mở ra giai đoạn mới' },
    ],
  },
  '3.2.1': {
    id: '3.2.1',
    title: 'Tư tưởng Hồ Chí Minh về chủ nghĩa xã hội',
    shortLabel: '3.2.1',
    summary: 'CNXH là xã hội không còn áp bức, không còn bóc lột, nơi nhân dân làm chủ và cùng nhau hưởng cuộc sống ấm no, tự do, hạnh phúc.',
    overview: {
      title: 'CNXH là hình thái xã hội tiến bộ',
      text: 'Hồ Chí Minh nhìn nhận chủ nghĩa xã hội là mục tiêu lâu dài của cách mạng, gắn chặt với độc lập dân tộc và giải phóng con người khỏi áp bức.',
    },
    sections: [
      {
        title: '1. Mục tiêu của CNXH',
        detail: 'CNXH là xã hội công bằng, dân chủ, văn minh, trong đó không còn người bóc lột người, mọi người đều được sống có việc làm, có quyền làm chủ.',
      },
      {
        title: '2. Con người là trung tâm',
        detail: 'Trong xã hội mới, con người không chỉ được giải phóng về chính trị mà còn được phát triển toàn diện về trí tuệ, nhân cách và đời sống vật chất.',
      },
      {
        title: '3. Xây dựng xã hội mới bằng chính sức mạnh của nhân dân',
        detail: 'Hồ Chí Minh nhấn mạnh nhân dân là chủ thể, những người lao động làm chủ, đồng thời xây dựng nền văn hóa mới, nhân văn và tiến bộ.',
      },
    ],
    keywords: ['công bằng xã hội', 'nhân dân làm chủ', 'con người', 'văn minh', 'không áp bức'],
    timeline: [
      { year: '1920', event: 'Nhận thức về chủ nghĩa xã hội tiến bộ' },
      { year: '1930', event: 'Đường lối cách mạng Việt Nam rõ ràng hơn' },
      { year: '1945', event: 'Mở đầu cho xây dựng đất nước mới' },
    ],
  },
  '3.2.2': {
    id: '3.2.2',
    title: 'Tư tưởng Hồ Chí Minh về xây dựng chủ nghĩa xã hội ở Việt Nam',
    shortLabel: '3.2.2',
    summary: 'Xây dựng chủ nghĩa xã hội ở Việt Nam phải phù hợp với điều kiện thực tế, kết hợp công nghiệp hóa, văn hóa hóa, dân chủ hóa và phát triển con người.',
    overview: {
      title: 'Xây dựng XHCN ở Việt Nam là quá trình lâu dài, khó khăn nhưng không thể tránh',
      text: 'Hồ Chí Minh nhấn mạnh trước hết phải có nền độc lập, sau đó mới đi lên xây dựng xã hội mới trên nền tảng khoa học, hợp lý và phù hợp với thực tiễn Việt Nam.',
    },
    sections: [
      {
        title: '1. Phải dựa trên thực tiễn Việt Nam',
        detail: 'Xây dựng CNXH không thể sao chép máy móc từ nước ngoài; phải căn cứ vào điều kiện của Việt Nam, đặc điểm lịch sử, văn hóa và trình độ phát triển.',
      },
      {
        title: '2. Xây dựng nền kinh tế và văn hóa mới',
        detail: 'Phải phát triển nền kinh tế xã hội chủ nghĩa, tạo ra cơ sở vật chất - kỹ thuật, đồng thời nâng cao trí tuệ, đạo đức, văn hóa của nhân dân.',
      },
      {
        title: '3. Xây đi đôi với chống',
        detail: 'Quá trình xây dựng xã hội mới luôn phải đẩy mạnh chống tham nhũng, lãng phí, quan liêu, kìm hãm tư tưởng và tiêu cực trong xã hội.',
      },
      {
        title: '4. Đổi mới và phát triển bền vững',
        detail: 'Hồ Chí Minh luôn nhấn mạnh việc xây dựng CNXH cần tiến hành trên cơ sở phát triển lực lượng sản xuất, nâng cao dân trí và tạo ra đời sống tốt hơn cho đồng bào.',
      },
    ],
    keywords: ['thực tiễn Việt Nam', 'xây đi đôi với chống', 'nền kinh tế mới', 'văn hóa và đạo đức', 'dân chủ', 'phát triển bền vững'],
    timeline: [
      { year: '1945', event: 'Cách mạng Tháng Tám mở ra giai đoạn xây dựng đất nước' },
      { year: '1954', event: 'Giải phóng miền Bắc, các bước xây dựng mới' },
      { year: '1975', event: 'Thống nhất đất nước; khởi đầu giai đoạn mới' },
    ],
  },
}

const questions = [
  {
    question: 'Theo tư tưởng Hồ Chí Minh, độc lập dân tộc phải gắn với điều gì?',
    options: ['Lợi ích cá nhân', 'Tự do, hạnh phúc của nhân dân', 'Sự phát triển của một số vùng', 'Sự phục tùng tuyệt đối'],
    answer: 1,
    explanation: 'Độc lập dân tộc không chỉ là mục tiêu chính trị, mà còn phải đem lại tự do, hạnh phúc cho nhân dân.',
  },
  {
    question: 'Đặc điểm nào đúng với cách mạng giải phóng dân tộc theo Hồ Chí Minh?',
    options: ['Phải do Đảng Cộng sản lãnh đạo', 'Chỉ cần nhân dân tham gia ít', 'Không cần bạo lực', 'Phải theo con đường tư bản'],
    answer: 0,
    explanation: 'Hồ Chí Minh khẳng định cách mạng giải phóng dân tộc phải do Đảng Cộng sản lãnh đạo để thành công.',
  },
  {
    question: 'Nội dung nào thể hiện đúng tinh thần “Không có gì quý hơn độc lập, tự do”?',
    options: ['Độc lập là thứ không cần thiết', 'Độc lập và tự do là quyền thiêng liêng của mọi dân tộc', 'Chỉ cần kinh tế phát triển là đủ', 'Không cần bảo vệ lãnh thổ'],
    answer: 1,
    explanation: 'Đây là phát biểu thể hiện giá trị tối cao của quyền sống, quyền tự do và độc lập của dân tộc.',
  },
  {
    question: 'Theo Hồ Chí Minh, CNXH ở Việt Nam là gì?',
    options: ['Mục tiêu tất yếu sau khi giành độc lập', 'Một hệ thống chỉ có mục tiêu quân sự', 'Một sự thừa nhận của đế quốc', 'Một con đường không cần nhân dân'],
    answer: 0,
    explanation: 'Hồ Chí Minh cho rằng tiến lên CNXH là bước đi tất yếu sau khi giành độc lập dân tộc.',
  },
  {
    question: 'Theo Hồ Chí Minh, chủ nghĩa xã hội là mục đích hay là công cụ để thực hiện mục đích nào đó?',
    options: ['Chỉ là công cụ kinh tế', 'Là mục tiêu, đồng thời là điều kiện để thực hiện tự do, hạnh phúc cho nhân dân', 'Chỉ là mục tiêu quân sự', 'Không phải mục tiêu của cách mạng Việt Nam'],
    answer: 1,
    explanation: 'Đối với Hồ Chí Minh, chủ nghĩa xã hội là mục tiêu của cách mạng, đồng thời tạo ra cơ sở và điều kiện để nhân dân có tự do, ấm no, hạnh phúc.',
  },
  {
    question: 'Mối quan hệ giữa độc lập dân tộc và CNXH theo tư tưởng Hồ Chí Minh là gì?',
    options: ['Không liên quan', 'Độc lập là tiền đề, CNXH là điều kiện bảo đảm nền độc lập vững chắc', 'CNXH làm mất độc lập', 'Chỉ có một trong hai mới cần'],
    answer: 1,
    explanation: 'Độc lập dân tộc là cơ sở, tiền đề; CNXH là điều kiện bảo đảm cho nền độc lập dân tộc vững chắc.',
  },
]

export default function Page() {
  const [view, setView] = useState('home')
  const [lessonId, setLessonId] = useState('3.1')

  return (
    <div className="shell">
      {view === 'home' && (
        <HomePage />
      )}

      {view === 'lesson' && (
        <LessonPage
          lessonId={lessonId}
          setLessonId={setLessonId}
          onHome={() => setView('home')}
          onQuiz={() => setView('quiz')}
        />
      )}

      {view === 'quiz' && <QuizPage onHome={() => setView('home')} />}
    </div>
  )
}

function HomePage() {
  return (
    <main className="page home-page">
      <CourseHeader active="home" />

      <section
        className="hero-card"
        style={{
          backgroundImage: "url('/images/ho-chi-minh.jpg')",
        }}
      >
        <div className="hero-copy">
          <span className="hero-kicker">
            <span className="hero-kicker-mark">⟡</span>
            Chương 3 · Tư tưởng Hồ Chí Minh
          </span>

          <h1>Tư tưởng Hồ Chí Minh về độc lập dân tộc và chủ nghĩa xã hội</h1>

          <p>
            Chương 3 giúp bạn hiểu rõ cách Hồ Chí Minh nhìn nhận độc lập dân tộc, chủ nghĩa xã hội,
            mối quan hệ giữa hai mục tiêu cốt lõi của cách mạng Việt Nam và những dấu mốc lịch sử quan trọng.
          </p>

          <div className="hero-actions">
            <Link className="primary-btn" href="/vandedantoc">
              <CirclePlay size={17} /> Bắt đầu học
            </Link>
            <Link className="secondary-btn" href="/cau-hoi-cq">
              <BookOpenText size={17} /> Câu hỏi CQ
            </Link>
          </div>

        </div>
      </section>

      <section className="topic-index">
        <div className="topic-heading">
          <span className="section-kicker">Chỉ mục chuyên đề</span>
          <h2>Các nội dung nghiên cứu trọng tâm</h2>
          <p>Nhấp vào từng chuyên mục bên dưới để truy cập các trang nội dung chi tiết và bài tập tương tác.</p>
        </div>

       

        <div className="topic-grid">
          <Link className="topic-card" href="/vandedantoc">
            <div className="topic-card-top"><span className="topic-icon"><Landmark size={22} /></span></div>
            <h3>Độc lập dân tộc</h3>
            <p>Tìm hiểu tư tưởng Hồ Chí Minh về quyền độc lập, tự do và con đường giải phóng dân tộc.</p>
            <span className="topic-more">Xem nội dung <ArrowUpRight size={16} /></span>
          </Link>

          <Link className="topic-card" href="/vanchuyenxahoi">
            <div className="topic-card-top"><span className="topic-icon"><Flag size={22} /></span></div>
            <h3>Chủ nghĩa xã hội</h3>
            <p>Khám phá quan niệm về CNXH và tư tưởng xây dựng chủ nghĩa xã hội ở Việt Nam.</p>
            <span className="topic-more">Xem nội dung <ArrowUpRight size={16} /></span>
          </Link>

          <Link className="topic-card" href="/cau-hoi-cq">
            <div className="topic-card-top"><span className="topic-icon"><Award size={22} /></span></div>
            <h3>Câu hỏi CQ</h3>
            <p>Trình bày suy nghĩ và củng cố nhận thức qua câu hỏi tự luận trọng tâm của chương.</p>
            <span className="topic-more">Trả lời câu hỏi <ArrowUpRight size={16} /></span>
          </Link>
          
        </div>
         <div className="quote-panel">
          <div className="quote-mark">“</div>
          <blockquote>Theo Hồ Chí Minh, chủ nghĩa xã hội là mục đích hay là công cụ để thực hiện mục đích nào đó?</blockquote>
          <p>Hãy phân tích mối quan hệ giữa mục tiêu của chủ nghĩa xã hội và mục tiêu tự do, ấm no, hạnh phúc của nhân dân.</p>
          <Link className="quote-link" href="/cau-hoi-cq">Xem câu hỏi CQ <ArrowRight size={16} /></Link>
        </div>
      </section>
    </main>
  )
}

function LessonPage({ lessonId, setLessonId, onHome, onQuiz }) {
  const lessonOrder = Object.keys(chapterData)
  const current = chapterData[lessonId] || chapterData['3.1']
  const idx = lessonOrder.indexOf(lessonId)
  const tabs = ['Tổng quan', 'Luận điểm', 'Từ khóa', 'Mốc lịch sử']
  const [activeTab, setActiveTab] = useState('Tổng quan')
  const visibleLessonItems = lessonId === '3.1' || lessonId === '3.2'
    ? Object.values(chapterData).filter((item) => item.id.startsWith(`${lessonId}.`))
    : [current]
  const hasPrev = idx > 0
  const hasNext = idx < lessonOrder.length - 1

  const renderTabContent = () => {
    switch (activeTab) {
      case 'Tổng quan':
        return (
          <div className="content-card">
            <div className="card-head">
              <span className="small-kicker">Chủ đề</span>
              <h4>{current.overview.title}</h4>
            </div>

            <p className="lead-text">{current.overview.text}</p>

            <ul className="point-list">
              {current.sections.map((item) => (
                <li key={item.title}>
                  <strong>{item.title}</strong>
                  <p>{item.detail}</p>
                </li>
              ))}
            </ul>
          </div>
        )
      case 'Luận điểm':
        return (
          <div className="content-card">
            <div className="card-head">
              <span className="small-kicker">Luận điểm</span>
              <h4>{current.title}</h4>
            </div>

            <ul className="point-list">
              {current.sections.map((item) => (
                <li key={item.title}>
                  <strong>{item.title}</strong>
                  <p>{item.detail}</p>
                </li>
              ))}
            </ul>
          </div>
        )
      case 'Từ khóa':
        return (
          <div className="content-card">
            <div className="card-head">
              <span className="small-kicker">Từ khóa</span>
              <h4>{current.title}</h4>
            </div>

            <div className="keyword-box">
              <span>Từ khóa</span>
              <div>
                {current.keywords.map((word) => (
                  <strong key={word}>{word}</strong>
                ))}
              </div>
            </div>
          </div>
        )
      case 'Mốc lịch sử':
        return (
          <div className="content-card">
            <div className="card-head">
              <span className="small-kicker">Mốc lịch sử</span>
              <h4>{current.title}</h4>
            </div>

            <div className="timeline-box">
              <span>Mốc lịch sử</span>
              <ul>
                {current.timeline.map((event) => (
                  <li key={`${event.year}-${event.event}`}><b>{event.year}</b> <span>{event.event}</span></li>
                ))}
              </ul>
            </div>
          </div>
        )
      default:
        return null
    }
  }

  return (
    <>
      <CourseHeader active={lessonId.startsWith('3.1') ? 'dan-toc' : 'cnxh'} />
      <main className="page lesson-page">
      <aside className="sidebar-panel">
        <div className="side-header">
          <span className="pill tiny">Chương 3</span>
          <h3>Nội dung học</h3>
        </div>

        <ul className="side-list">
          {visibleLessonItems.map((item) => (
            <li key={item.id}>
              <button className={item.id === lessonId ? 'active' : ''} onClick={() => setLessonId(item.id)}>
                {item.title}
              </button>
            </li>
          ))}
        </ul>
      </aside>

      <section className="lesson-panel">
        <div className="lesson-title-row">
          <div className="title-block">
            <h2>{current.title}</h2>
          </div>
          <span className="time-tag"><Clock3 size={14} /> 15 phút</span>
        </div>

        <div className="lesson-tabs">
          {tabs.map((tab) => (
            <button
              key={tab}
              className={activeTab === tab ? 'active' : ''}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        {renderTabContent()}

        <div className="bottom-actions">
          <button className="ghost-btn" onClick={() => hasPrev && setLessonId(lessonOrder[idx - 1])} disabled={!hasPrev}>
            ← Phần trước
          </button>
          <button className="primary-btn" onClick={hasNext ? () => setLessonId(lessonOrder[idx + 1]) : onQuiz}>
            {hasNext ? 'Phần tiếp theo' : 'Làm quiz'} <ArrowRight size={15} />
          </button>
        </div>
      </section>
    </main>
    </>
  )
}

export function QuizPage({ onHome }) {
  const [current, setCurrent] = useState(0)
  const [selected, setSelected] = useState(null)
  const [score, setScore] = useState(0)
  const [done, setDone] = useState(false)

  const q = questions[current]

  const handleAnswer = (idx) => {
    if (selected !== null) return
    setSelected(idx)
    if (idx === q.answer) setScore((s) => s + 1)
  }

  const handleNext = () => {
    if (current === questions.length - 1) {
      setDone(true)
      return
    }
    setCurrent((v) => v + 1)
    setSelected(null)
  }

  const reset = () => {
    setCurrent(0)
    setSelected(null)
    setScore(0)
    setDone(false)
  }

  if (done) {
    return (
      <main className="page result-page">
        <div className="result-card">
          <span className="result-icon"><Sparkles size={20} /></span>
          <span className="pill">Hoàn thành</span>
          <h3>{score}/{questions.length}</h3>
          <p>{score >= Math.ceil(questions.length * 0.8) ? 'Bạn đã nắm chắc các luận điểm trọng tâm của chương.' : 'Hãy ôn lại một số phần quan trọng và làm lại nhé.'}</p>
          <div className="result-actions">
            <button className="primary-btn" onClick={reset}><CheckCircle2 size={15} /> Làm lại</button>
            <button className="secondary-btn" onClick={onHome}>Về trang chủ</button>
          </div>
        </div>
      </main>
    )
  }

  return (
    <>
      <CourseHeader active="quiz" />
      <main className="page quiz-page">
      <section className="quiz-card">
        <div className="quiz-header">
          <div>
            <span className="small-kicker">Quiz - Kiểm tra kiến thức</span>
            <h3>Câu {current + 1}/{questions.length}</h3>
          </div>
          <div className="score-box">
            <strong>{String(score).padStart(2, '0')}</strong>
            <small>điểm</small>
          </div>
        </div>

        <div className="quiz-progress"><span style={{ width: `${((current + 1) / questions.length) * 100}%` }} /></div>

        <div className="question-box">
          <h4>{q.question}</h4>

          <div className="option-list">
            {q.options.map((option, idx) => {
              const isCorrect = idx === q.answer
              const isSelected = idx === selected
              const showCorrect = selected !== null && isCorrect
              const showWrong = selected !== null && isSelected && !isCorrect

              return (
                <button
                  key={option}
                  className={`choice ${showCorrect ? 'correct' : ''} ${showWrong ? 'wrong' : ''}`}
                  onClick={() => handleAnswer(idx)}
                >
                  <span>{String.fromCharCode(65 + idx)}</span>
                  <span>{option}</span>
                  {showCorrect && <CheckCircle2 size={16} />}
                  {showWrong && <XCircle size={16} />}
                </button>
              )
            })}
          </div>

          {selected !== null && (
            <div className={`explain ${selected === q.answer ? 'right' : 'wrong'}`}>
              <strong>{selected === q.answer ? 'Đúng rồi!' : 'Chưa đúng'}</strong>
              <p>{q.explanation}</p>
            </div>
          )}

          <button className="primary-btn full" disabled={selected === null} onClick={handleNext}>
            {current === questions.length - 1 ? 'Xem kết quả' : 'Câu tiếp theo'} <ArrowRight size={15} />
          </button>
        </div>
      </section>
    </main>
    </>
  )
}
