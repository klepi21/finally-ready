'use client'

import { motion, type Variants } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Button } from './ui/button'

interface QuestionCardProps {
  question: string
  options: Array<{ en: string; gr: string; score: any }>
  onAnswer: (score: any) => void
  progress: number
  language: "en" | "gr"
}

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5 }
  }
}

const optionVariants: Variants = {
  hidden: { opacity: 0, x: -20 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { delay: i * 0.1 }
  })
}

export function QuestionCard({ question, options, onAnswer, progress, language }: QuestionCardProps) {
  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      className="w-full max-w-2xl mx-auto"
    >
      <div className="bg-white/5 backdrop-blur-lg shadow-2xl rounded-2xl overflow-hidden border border-white/20 p-6 md:p-8">
        <div className="mb-8 relative">
          <div className="h-2 bg-white/10 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>
          <span className="absolute right-0 top-full mt-2 text-sm text-white/70">
            {Math.round(progress)}%
          </span>
        </div>
        
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-white">
          {question}
        </h2>

        <div className="space-y-4">
          {options.map((option, index) => (
            <motion.div
              key={index}
              variants={optionVariants}
              initial="hidden"
              animate="visible"
              custom={index}
            >
              <Button
                onClick={() => onAnswer(option.score)}
                className="w-full py-6 text-lg justify-between hover:scale-102 hover:bg-white/20 hover:border-blue-400 transition-all duration-200 bg-white/5 border-2 border-white/10"
                variant="outline"
              >
                <span>{option[language]}</span>
                <ArrowRight className="ml-2" />
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}