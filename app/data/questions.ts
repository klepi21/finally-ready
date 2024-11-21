export const questions = [
  {
    en: "What's your investment experience level?",
    gr: "Ποιο είναι το επίπεδο επενδυτικής σας εμπειρίας;",
    options: [
      { 
        en: "I'm new to investing", 
        gr: "Είμαι νέος στις επενδύσεις",
        score: { lowRisk: 3, balanced: 1 }
      },
      { 
        en: "I have some experience", 
        gr: "Έχω κάποια εμπειρία",
        score: { balanced: 2, growth: 1 }
      },
      { 
        en: "I'm an experienced investor", 
        gr: "Είμαι έμπειρος επενδυτής",
        score: { growth: 2, defi: 1 }
      }
    ]
  },
  {
    en: "What's your risk tolerance?",
    gr: "Ποια είναι η ανοχή σας στο ρίσκο;",
    options: [
      { 
        en: "I prefer safety over high returns", 
        gr: "Προτιμώ την ασφάλεια από τις υψηλές αποδόσεις",
        score: { lowRisk: 3 }
      },
      { 
        en: "I can handle moderate risk", 
        gr: "Μπορώ να διαχειριστώ μέτριο ρίσκο",
        score: { balanced: 2, growth: 1 }
      },
      { 
        en: "I'm comfortable with high risk", 
        gr: "Είμαι άνετος με υψηλό ρίσκο",
        score: { growth: 2, defi: 2 }
      }
    ]
  },
  {
    en: "What's your investment timeframe?",
    gr: "Ποιο είναι το χρονικό πλαίσιο της επένδυσής σας;",
    options: [
      { 
        en: "Short term (< 1 year)", 
        gr: "Βραχυπρόθεσμα (< 1 έτος)",
        score: { lowRisk: 2 }
      },
      { 
        en: "Medium term (1-3 years)", 
        gr: "Μεσοπρόθεσμα (1-3 έτη)",
        score: { balanced: 2, growth: 1 }
      },
      { 
        en: "Long term (3+ years)", 
        gr: "Μακροπρόθεσμα (3+ έτη)",
        score: { growth: 2, defi: 2 }
      }
    ]
  },
  {
    en: "What interests you most about crypto?",
    gr: "Τι σας ενδιαφέρει περισσότερο στα κρυπτονομίσματα;",
    options: [
      { 
        en: "Store of value", 
        gr: "Αποθήκευση αξίας",
        score: { lowRisk: 2, balanced: 1 }
      },
      { 
        en: "DeFi and yield farming", 
        gr: "DeFi και απόδοση farming",
        score: { defi: 3 }
      },
      { 
        en: "Growth potential", 
        gr: "Δυνατότητα ανάπτυξης",
        score: { growth: 3 }
      }
    ]
  }
]