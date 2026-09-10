'use client'

import { useState } from 'react'
import { CheckCircle2, RotateCcw, Send } from 'lucide-react'
import CourseHeader from '../CourseHeader'

const question = 'Theo Hồ Chí Minh, chủ nghĩa xã hội là mục đích hay là công cụ để thực hiện mục đích nào đó?'
const referenceAnswer = 'Đối với Hồ Chí Minh, chủ nghĩa xã hội trước hết là mục tiêu của cách mạng Việt Nam. Đồng thời, chủ nghĩa xã hội cũng là điều kiện và phương tiện để thực hiện mục tiêu cao nhất là độc lập dân tộc, tự do, ấm no và hạnh phúc cho nhân dân.'

export default function CauHoiCQPage() {
  const [answer, setAnswer] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    if (answer.trim()) setSubmitted(true)
  }

  const handleReset = () => {
    setAnswer('')
    setSubmitted(false)
  }

  return (
    <>
      <CourseHeader active="cq" />
      <main className="page cq-page">
        <section className="cq-card">
          <div className="cq-heading">
            <span className="small-kicker">Câu hỏi CQ</span>
            <h1>Trả lời câu hỏi</h1>
            <p>Hãy trình bày ngắn gọn quan điểm của Hồ Chí Minh về vai trò của chủ nghĩa xã hội.</p>
          </div>

          <div className="cq-question">
            <span>Câu hỏi</span>
            <h2>{question}</h2>
          </div>

          <form onSubmit={handleSubmit}>
            <label className="cq-label" htmlFor="cq-answer">Câu trả lời của bạn</label>
            <textarea
              id="cq-answer"
              className="cq-textarea"
              value={answer}
              onChange={(event) => setAnswer(event.target.value)}
              placeholder="Nhập câu trả lời của bạn..."
              rows={7}
            />
            <div className="cq-actions">
              <button className="primary-btn" type="submit" disabled={!answer.trim()}>
                <Send size={15} /> Nộp câu trả lời
              </button>
              <button className="ghost-btn" type="button" onClick={handleReset}>
                <RotateCcw size={15} /> Làm lại
              </button>
            </div>
          </form>

          {submitted && (
            <div className="cq-reference">
              <div className="cq-reference-title"><CheckCircle2 size={18} /> Đáp án tham khảo</div>
              <p>{referenceAnswer}</p>
            </div>
          )}
        </section>
      </main>
    </>
  )
}
