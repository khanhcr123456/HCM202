'use client'

import { useRouter } from 'next/navigation'
import { QuizPage } from '../page'

export default function QuizRoute() {
  const router = useRouter()
  return <QuizPage onHome={() => router.push('/')} />
}
