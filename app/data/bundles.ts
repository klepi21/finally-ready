export const bundles = {
  lowRisk: {
    name: "Path to Heaven",
    description: {
      en: "A low-risk portfolio focused on established cryptocurrencies",
      gr: "Ένα χαρτοφυλάκιο χαμηλού ρίσκου επικεντρωμένο σε καθιερωμένα κρυπτονομίσματα"
    },
    tokens: [
      { tokenIdentifier: "WBTC-5349b3", weight: 50 },
      { tokenIdentifier: "WETH-b4ca29", weight: 30 },
      { tokenIdentifier: "WEGLD-bd4d79", weight: 20 }
    ],
    longDescription: {
      en: "Valoro Heaven is the crown jewel of funds, designed for those seeking steady growth with minimal risk. This fund is based on three powerhouse assets: Wrapped Bitcoin (WBTC), Wrapped Ethereum (WETH), and the heart of the MultiversX ecosystem, EGLD.",
      gr: "Το Valoro Heaven είναι το κορυφαίο ταμείο μας, σχεδιασμένο για όσους αναζητούν σταθερή ανάπτυξη με ελάχιστο ρίσκο. Αυτό το ταμείο βασίζεται σε τρία ισχυρά περιουσιακά στοιχεία: Wrapped Bitcoin (WBTC), Wrapped Ethereum (WETH) και την καρδιά του οικοσυστήματος MultiversX, EGLD."
    }
  },
  balanced: {
    name: "WAGMI, right?",
    description: {
      en: "A balanced portfolio with a mix of established and growth potential tokens",
      gr: "Ένα ισορροπημένο χαρτοφυλάκιο με συνδυασμό καθιερωμένων και αναπτυσσόμενων tokens"
    },
    tokens: [
      { tokenIdentifier: "LEGLD-d74da9", weight: 30 },
      { tokenIdentifier: "HTM-f51d55", weight: 20 },
      { tokenIdentifier: "ASH-a642d1", weight: 20 },
      { tokenIdentifier: "XOXNO-c1293a", weight: 15 },
      { tokenIdentifier: "UTK-2f80e9", weight: 10 },
      { tokenIdentifier: "BOBER-9eb764", weight: 5 }
    ],
    longDescription: {
      en: "Valoro WAGMI is composed of a diverse range of promising tokens within the MultiversX ecosystem, including staked EGLD (LEGLD) for consistent returns, HTM from Hatom Labs, ASH from AshSwap, and more.",
      gr: "Το Valoro WAGMI αποτελείται από μια ποικιλία υποσχόμενων tokens στο οικοσύστημα MultiversX, συμπεριλαμβανομένου του staked EGLD (LEGLD) για σταθερές αποδόσεις, HTM από το Hatom Labs, ASH από το AshSwap και άλλα."
    }
  },
  growth: {
    name: "Valoro Growth",
    description: {
      en: "High-growth potential tokens for aggressive investors",
      gr: "Tokens με υψηλό δυναμικό ανάπτυξης για επιθετικούς επενδυτές"
    },
    tokens: [
      { tokenIdentifier: "QWT-46ac01", weight: 25 },
      { tokenIdentifier: "BEE-cb37b6", weight: 25 },
      { tokenIdentifier: "XOXNO-c1293a", weight: 25 },
      { tokenIdentifier: "CRT-52decf", weight: 15 },
      { tokenIdentifier: "EAPES-014cd7", weight: 10 }
    ],
    longDescription: {
      en: "Valoro Growth is crafted for investors aiming to tap into high-potential projects within the MultiversX ecosystem, with a focus on real-world applications and dynamic growth sectors.",
      gr: "Το Valoro Growth είναι σχεδιασμένο για επενδυτές που στοχεύουν σε projects υψηλού δυναμικού εντός του οικοσυστήματος MultiversX, με έμφαση σε εφαρμογές πραγματικού κόσμου και δυναμικούς τομείς ανάπτυξης."
    }
  },
  defi: {
    name: "MultiversX DeFi",
    description: {
      en: "Focus on DeFi protocols and yield-generating assets",
      gr: "Εστίαση σε πρωτόκολλα DeFi και περιουσιακά στοιχεία που παράγουν απόδοση"
    },
    tokens: [
      { tokenIdentifier: "HTM-f51d55", weight: 40 },
      { tokenIdentifier: "ASH-a642d1", weight: 35 },
      { tokenIdentifier: "MEX-455c57", weight: 25 }
    ],
    longDescription: {
      en: "Valoro DeFi includes the top three DeFi projects within the MultiversX ecosystem, featuring Hatom for lending, ASH from Ashswap for trading, and MEX from xExchange.",
      gr: "Το Valoro DeFi περιλαμβάνει τα τρία κορυφαία έργα DeFi στο οικοσύστημα MultiversX, με το Hatom για δανεισμό, το ASH από το Ashswap για συναλλαγές και το MEX από το xExchange."
    }
  }
}