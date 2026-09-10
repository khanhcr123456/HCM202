'use client'

import Link from 'next/link'
import { useState } from 'react'
import { ArrowLeft, BookOpen, CheckCircle2, Eye, EyeOff } from 'lucide-react'
import CourseHeader from '../CourseHeader'

export default function DangNhapPage() {
  const [mode, setMode] = useState('login')
  const [showPassword, setShowPassword] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const isRegister = mode === 'register'

  const handleSubmit = (event) => {
    event.preventDefault()
    setSubmitted(true)
  }

  const changeMode = (nextMode) => {
    setMode(nextMode)
    setSubmitted(false)
    setShowPassword(false)
  }

  return (
    <>
      <CourseHeader />
      <main className="auth-page">
        <section className="auth-card">
          <div className="auth-brand"><BookOpen size={20} /></div>
          <span className="small-kicker">Tư tưởng Hồ Chí Minh</span>
          <h1>{isRegister ? 'Tạo tài khoản học tập' : 'Chào mừng trở lại'}</h1>
          <p className="auth-intro">
            {isRegister ? 'Đăng ký để lưu tiến độ và bài làm của bạn.' : 'Đăng nhập để tiếp tục hành trình học tập.'}
          </p>

          <div className="auth-tabs" role="tablist" aria-label="Tài khoản">
            <button className={!isRegister ? 'active' : ''} type="button" onClick={() => changeMode('login')}>Đăng nhập</button>
            <button className={isRegister ? 'active' : ''} type="button" onClick={() => changeMode('register')}>Đăng ký</button>
          </div>

          {submitted ? (
            <div className="auth-success">
              <CheckCircle2 size={22} />
              <strong>{isRegister ? 'Đăng ký thành công' : 'Đăng nhập thành công'}</strong>
              <p>Đây là bản giao diện thử nghiệm. Dữ liệu chưa được kết nối với máy chủ.</p>
              <button className="primary-btn full" type="button" onClick={() => setSubmitted(false)}>Tiếp tục</button>
            </div>
          ) : (
            <form className="auth-form" onSubmit={handleSubmit}>
              {isRegister && (
                <label>
                  Họ và tên
                  <input type="text" name="name" placeholder="Nguyễn Văn A" required />
                </label>
              )}
              <label>
                Email
                <input type="email" name="email" placeholder="ban@example.com" required />
              </label>
              <label>
                Mật khẩu
                <span className="password-field">
                  <input type={showPassword ? 'text' : 'password'} name="password" placeholder="Nhập mật khẩu" minLength={6} required />
                  <button type="button" aria-label={showPassword ? 'Ẩn mật khẩu' : 'Hiện mật khẩu'} onClick={() => setShowPassword((value) => !value)}>
                    {showPassword ? <EyeOff size={17} /> : <Eye size={17} />}
                  </button>
                </span>
              </label>
              {isRegister && (
                <label>
                  Nhập lại mật khẩu
                  <input type="password" name="confirmPassword" placeholder="Nhập lại mật khẩu" minLength={6} required />
                </label>
              )}
              <button className="primary-btn full" type="submit">{isRegister ? 'Tạo tài khoản' : 'Đăng nhập'}</button>
            </form>
          )}

          <Link className="auth-back" href="/">
            <ArrowLeft size={15} /> Về trang chủ
          </Link>
        </section>
      </main>
    </>
  )
}
