'use client'

import { motion, type Variants } from 'framer-motion'
import { AlertTriangle, ArrowRight, Wallet } from 'lucide-react'
import Image from 'next/image'
import { Button } from './ui/button'

interface Token {
  tokenIdentifier: string
  weight: number
}

interface ResultCardProps {
  bundle: {
    name: string
    description: { en: string; gr: string }
    tokens: Token[]
    longDescription?: { en: string; gr: string }
  }
  onRestart: () => void
  language: "en" | "gr"
}

const containerVariants: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: 0.5 }
  }
}

const iconVariants: Variants = {
  hidden: { scale: 0 },
  visible: { 
    scale: 1,
    transition: { type: "spring", duration: 0.6 }
  }
}

const tokenVariants: Variants = {
  hidden: { opacity: 0, x: -20 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { delay: i * 0.1 }
  })
}

export function ResultCard({ bundle, onRestart, language }: ResultCardProps) {
  const getTokenName = (identifier: string) => identifier.split('-')[0]
  const getTokenImageUrl = (identifier: string) => 
    `https://raw.githubusercontent.com/ElrondNetwork/assets/master/tokens/${identifier}/logo.png`

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="w-full max-w-2xl mx-auto"
    >
      <div className="bg-white/5 backdrop-blur-lg shadow-2xl rounded-2xl overflow-hidden border border-white/20 p-6 md:p-8">
        <div className="space-y-8">
          <div className="text-center">
            <motion.div
              variants={iconVariants}
              initial="hidden"
              animate="visible"
              className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center"
            >
              <Wallet className="w-10 h-10 text-white" />
            </motion.div>

            <h2 className="text-2xl mb-2 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              {language === "gr" ? "Η Πρότασή μας" : "Our Recommendation"}
            </h2>

            <h3 className="text-3xl font-bold mb-3 text-blue-400">
              {bundle.name}
            </h3>

            <p className="text-lg text-white/90 mb-6">
              {bundle.description[language]}
            </p>

            <div className="bg-white/5 p-6 rounded-xl mb-8">
              <p className="text-white/90">
                {bundle.longDescription?.[language]}
              </p>
            </div>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-4 text-white/90">
              {language === "gr" ? "Σύνθεση Χαρτοφυλακίου" : "Portfolio Composition"}
            </h4>

            <div className="space-y-3">
              {bundle.tokens.map((token, index) => (
                <motion.div
                  key={token.tokenIdentifier}
                  variants={tokenVariants}
                  initial="hidden"
                  animate="visible"
                  custom={index}
                >
                  <div className="p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-all flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-white p-1 relative">
                        <Image
                          src={getTokenImageUrl(token.tokenIdentifier)}
                          alt={getTokenName(token.tokenIdentifier)}
                          fill
                          className="rounded-full"
                        />
                      </div>
                      <span className="font-medium text-white/90">
                        {getTokenName(token.tokenIdentifier)}
                      </span>
                    </div>
                    <span className="font-medium text-white/80">
                      {token.weight}%
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="bg-orange-900/20 p-6 rounded-xl border border-orange-500/20">
            <div className="flex flex-col items-center gap-3">
              <AlertTriangle className="text-orange-300 w-6 h-6" />
              <p className="text-orange-100 text-center">
                {language === "gr" 
                  ? "Αυτό δεν αποτελεί οικονομική συμβουλή. Παρακαλώ κάντε τη δική σας έρευνα πριν επενδύσετε."
                  : "This is not financial advice. Please do your own research before investing."}
              </p>
            </div>
          </div>

          <div className="bg-blue-900/20 p-6 rounded-xl border border-blue-500/20">
            <p className="text-blue-100 text-center text-lg">
              {language === "gr" 
                ? "Όλα αυτά τα χαρτοφυλάκια είναι διαθέσιμα στο valoro.fund. Μπορείτε εύκολα να δημιουργήσετε το πρώτο σας πορτφόλιο χρησιμοποιώντας απλά το Gmail σας. Αγοράστε κρύπτο και επενδύστε σε έτοιμα πακέτα με ευκολία!"
                : "All these portfolios are available at valoro.fund. You can easily create your first portfolio using just your Gmail. Buy crypto and invest in ready-made packages with ease!"}
            </p>
          </div>

          <div className="space-y-4">
            <Button
              onClick={() => window.open("https://valoro.fund/onboarding/", "_blank")}
              className="w-full py-6 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 hover:scale-102 transition-all duration-200"
            >
              <Wallet className="mr-2" />
              <span>{language === "gr" ? "Ξεκινήστε την Επένδυση" : "Start Investing"}</span>
              <ArrowRight className="ml-2" />
            </Button>

            <Button
              onClick={onRestart}
              variant="outline"
              className="w-full py-6 hover:bg-white/20 hover:border-blue-400"
            >
              {language === "gr" ? "Ξεκινήστε Ξανά" : "Start Over"}
            </Button>
          </div>
        </div>
      </div>
    </motion.div>
  )
}