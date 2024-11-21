'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { QuestionCard } from './components/QuestionCard'
import { ResultCard } from './components/ResultCard'
import { questions } from './data/questions'
import { bundles } from './data/bundles'
import { Button } from './components/ui/button'

export default function Home() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [scores, setScores] = useState({
    lowRisk: 0,
    balanced: 0,
    growth: 0,
    defi: 0
  })
  const [showResult, setShowResult] = useState(false)
  const [language, setLanguage] = useState<"en" | "gr">("gr")

  const handleAnswer = (score: any) => {
    const newScores = { ...scores }
    Object.entries(score).forEach(([key, value]) => {
      if (typeof value === 'number') {
        newScores[key as keyof typeof scores] = (newScores[key as keyof typeof scores] || 0) + value
      }
    })
    setScores(newScores)

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      setShowResult(true)
    }
  }

  const getRecommendedBundle = () => {
    const maxScore = Math.max(...Object.values(scores))
    const recommendation = Object.entries(scores).find(([_, score]) => score === maxScore)?.[0] || 'balanced'
    return bundles[recommendation as keyof typeof bundles]
  }

  const handleRestart = () => {
    setCurrentQuestion(0)
    setScores({
      lowRisk: 0,
      balanced: 0,
      growth: 0,
      defi: 0
    })
    setShowResult(false)
  }

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-gray-900 via-purple-900/10 to-blue-900/10">
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
      
      <Button
        className="fixed top-4 right-4 z-20 bg-white/10 text-white hover:bg-white/20 border border-white/20"
        variant="outline"
        size="lg"
        onClick={() => setLanguage(language === "gr" ? "en" : "gr")}
      >
        {language === "gr" ? "🇬🇧" : "🇬🇷"}
      </Button>

      <div className="container mx-auto py-8 md:py-16 px-4 relative z-10">
        <div className="space-y-8">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl mb-4 font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              {language === "gr" 
                ? "Ξεκινήστε το Ταξίδι σας στο Web3"
                : "Start Your Web3 Journey"}
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
              {language === "gr"
                ? "Ανακαλύψτε το ιδανικό επενδυτικό πακέτο για εσάς"
                : "Discover your ideal investment package"}
            </p>
          </motion.div>

          {!showResult ? (
            <QuestionCard
              question={questions[currentQuestion][language]}
              options={questions[currentQuestion].options}
              onAnswer={handleAnswer}
              progress={(currentQuestion / questions.length) * 100}
              language={language}
            />
          ) : (
            <ResultCard
              bundle={getRecommendedBundle()}
              onRestart={handleRestart}
              language={language}
            />
          )}
        </div>
      </div>
    </div>
  )
}