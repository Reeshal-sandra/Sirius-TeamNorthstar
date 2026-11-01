// Full lesson content keyed by lesson id: misconceptions and practice questions.
export const lessonContent = {

  // ─────────────────────────────────────────────────────────────
  // LESSON: Fractions
  // ─────────────────────────────────────────────────────────────
  fractions: {
    misconceptions: {
      // M1: Adding numerators and denominators separately
      frac_m1: {
        name: {
          en: "Adding tops and bottoms separately",
          hi: "ऊपर और नीचे अलग-अलग जोड़ना",
        },
        explanation: {
          steps: {
            en: "To add fractions, the denominators (bottom numbers) must be the same first. Find a common denominator, then add only the numerators. The denominator stays the same after adding.",
            hi: "भिन्नों को जोड़ने के लिए पहले हर (नीचे की संख्या) को समान बनाना होता है। एक समान हर खोजें, फिर केवल अंश (ऊपर की संख्या) को जोड़ें। जोड़ने के बाद हर वैसा ही रहता है।",
          },
          picture: {
            en: "1/4 + 2/4 = 3/4\n[#---] + [##--] = [###-]\nAll pieces are the same size, so just count the shaded parts.",
            hi: "1/4 + 2/4 = 3/4\n[#---] + [##--] = [###-]\nसभी टुकड़े समान आकार के हैं, इसलिए बस रंगे हुए हिस्सों को गिनें।",
          },
          story: {
            en: "Ananya had 1/4 of a pizza and her friend gave her 2/4 more. The slices were already the same size, so she simply ended up with 3 slices out of 4 — that is 3/4. She did not need to change the slice size at all.",
            hi: "अनन्या के पास पिज्जा का 1/4 हिस्सा था और उसकी दोस्त ने उसे 2/4 और दिया। टुकड़े पहले से समान आकार के थे, इसलिए उसके पास 4 में से 3 टुकड़े हो गए — यानी 3/4। उसे टुकड़े का आकार बदलने की कोई जरूरत नहीं थी।",
          },
        },
      },

      // M2: Thinking a bigger denominator means a bigger fraction
      frac_m2: {
        name: {
          en: "Bigger number below means bigger fraction",
          hi: "नीचे बड़ी संख्या का मतलब बड़ी भिन्न",
        },
        explanation: {
          steps: {
            en: "A larger denominator actually means each piece is smaller, not larger. 1/8 is smaller than 1/4 because the whole is cut into more pieces, making each piece tinier.",
            hi: "बड़ा हर वास्तव में इसका मतलब है कि प्रत्येक टुकड़ा छोटा है, बड़ा नहीं। 1/8, 1/4 से छोटा है क्योंकि पूरे को अधिक टुकड़ों में काटा गया है, जिससे प्रत्येक टुकड़ा और भी छोटा हो जाता है।",
          },
          picture: {
            en: "1/4:  [##--]   (2 shaded out of 4)\n1/8:  [#-------]   (1 shaded out of 8)\nEach box is the same total size. Fewer cuts = bigger pieces.",
            hi: "1/4:  [##--]   (4 में से 2 रंगे)\n1/8:  [#-------]   (8 में से 1 रंगा)\nहर बॉक्स का कुल आकार समान है। कम कट = बड़े टुकड़े।",
          },
          story: {
            en: "Imagine sharing a roti equally. If you cut it into 4 pieces, each piece is quite big. If you cut the same roti into 8 pieces, each piece is much smaller. So 1/8 of a roti is less than 1/4 of a roti.",
            hi: "कल्पना करें कि एक रोटी को समान रूप से बाँटा जाए। अगर आप इसे 4 टुकड़ों में काटते हैं, तो प्रत्येक टुकड़ा काफी बड़ा होता है। अगर आप उसी रोटी को 8 टुकड़ों में काटते हैं, तो प्रत्येक टुकड़ा बहुत छोटा होता है। इसलिए रोटी का 1/8 भाग, 1/4 भाग से कम है।",
          },
        },
      },

      // M3: Multiplying fractions by adding them
      frac_m3: {
        name: {
          en: "Multiplying fractions by adding numerators and denominators",
          hi: "अंश और हर जोड़कर भिन्नों को गुणा करना",
        },
        explanation: {
          steps: {
            en: "To multiply two fractions, multiply the numerators together and multiply the denominators together separately. For example, 1/2 x 1/3 = (1x1)/(2x3) = 1/6.",
            hi: "दो भिन्नों को गुणा करने के लिए, अंशों को आपस में गुणा करें और हरों को अलग से आपस में गुणा करें। उदाहरण के लिए, 1/2 x 1/3 = (1x1)/(2x3) = 1/6।",
          },
          picture: {
            en: "1/2 of 1/3:\n[##########]   Full bar\n[#####-----]   1/2 of bar\n[##--------]   1/3 of that half = 1/6 of the whole",
            hi: "1/3 का 1/2:\n[##########]   पूरी पट्टी\n[#####-----]   पट्टी का 1/2\n[##--------]   उस आधे का 1/3 = पूरे का 1/6",
          },
          story: {
            en: "Raju had half a bottle of juice. He drank one-third of what was in the bottle. He actually drank 1/6 of the full bottle — because half of a third is a sixth. Multiplying fractions always gives a smaller result, which makes sense.",
            hi: "राजू के पास जूस की आधी बोतल थी। उसने बोतल में जो था उसका एक-तिहाई पिया। उसने वास्तव में पूरी बोतल का 1/6 पिया — क्योंकि एक-तिहाई का आधा, एक-छठा होता है। भिन्नों को गुणा करने पर हमेशा एक छोटा परिणाम मिलता है, जो समझ में आता है।",
          },
        },
      },
    },

    // 6 questions, 2 per level (1=easy, 2=medium, 3=hard), 3 options each
    questions: [
      // ── Level 1 ──
      {
        id: "frac_q1",
        level: 1,
        text: {
          en: "What is 1/4 + 2/4?",
          hi: "1/4 + 2/4 क्या है?",
        },
        options: [
          { id: "frac_q1_a", text: { en: "3/4", hi: "3/4" }, correct: true, misconceptionId: null },
          { id: "frac_q1_b", text: { en: "3/8", hi: "3/8" }, correct: false, misconceptionId: "frac_m1" },
          { id: "frac_q1_c", text: { en: "1/2", hi: "1/2" }, correct: false, misconceptionId: "frac_m1" },
        ],
      },
      {
        id: "frac_q2",
        level: 1,
        text: {
          en: "Which fraction is larger: 1/3 or 1/6?",
          hi: "कौन सी भिन्न बड़ी है: 1/3 या 1/6?",
        },
        options: [
          { id: "frac_q2_a", text: { en: "1/3", hi: "1/3" }, correct: true, misconceptionId: null },
          { id: "frac_q2_b", text: { en: "1/6", hi: "1/6" }, correct: false, misconceptionId: "frac_m2" },
          { id: "frac_q2_c", text: { en: "They are equal", hi: "वे बराबर हैं" }, correct: false, misconceptionId: "frac_m2" },
        ],
      },

      // ── Level 2 ──
      {
        id: "frac_q3",
        level: 2,
        text: {
          en: "What is 1/3 + 1/6?",
          hi: "1/3 + 1/6 क्या है?",
        },
        options: [
          { id: "frac_q3_a", text: { en: "1/2", hi: "1/2" }, correct: true, misconceptionId: null },
          { id: "frac_q3_b", text: { en: "2/9", hi: "2/9" }, correct: false, misconceptionId: "frac_m1" },
          { id: "frac_q3_c", text: { en: "2/6", hi: "2/6" }, correct: false, misconceptionId: "frac_m1" },
        ],
      },
      {
        id: "frac_q4",
        level: 2,
        text: {
          en: "What is 1/2 x 1/4?",
          hi: "1/2 x 1/4 क्या है?",
        },
        options: [
          { id: "frac_q4_a", text: { en: "1/8", hi: "1/8" }, correct: true, misconceptionId: null },
          { id: "frac_q4_b", text: { en: "2/6", hi: "2/6" }, correct: false, misconceptionId: "frac_m3" },
          { id: "frac_q4_c", text: { en: "1/2", hi: "1/2" }, correct: false, misconceptionId: "frac_m3" },
        ],
      },

      // ── Level 3 ──
      {
        id: "frac_q5",
        level: 3,
        text: {
          en: "Siya ate 2/5 of a cake on Monday and 1/10 on Tuesday. What total fraction did she eat?",
          hi: "सिया ने सोमवार को केक का 2/5 भाग और मंगलवार को 1/10 भाग खाया। उसने कुल कितना भाग खाया?",
        },
        options: [
          { id: "frac_q5_a", text: { en: "1/2", hi: "1/2" }, correct: true, misconceptionId: null },
          { id: "frac_q5_b", text: { en: "3/15", hi: "3/15" }, correct: false, misconceptionId: "frac_m1" },
          { id: "frac_q5_c", text: { en: "3/10", hi: "3/10" }, correct: false, misconceptionId: "frac_m1" },
        ],
      },
      {
        id: "frac_q6",
        level: 3,
        text: {
          en: "A rope is 3/4 m long. Arjun uses 1/3 of it. How much rope does he use?",
          hi: "एक रस्सी 3/4 मीटर लंबी है। अर्जुन इसका 1/3 भाग उपयोग करता है। वह कितनी रस्सी उपयोग करता है?",
        },
        options: [
          { id: "frac_q6_a", text: { en: "1/4 m", hi: "1/4 मीटर" }, correct: true, misconceptionId: null },
          { id: "frac_q6_b", text: { en: "4/7 m", hi: "4/7 मीटर" }, correct: false, misconceptionId: "frac_m3" },
          { id: "frac_q6_c", text: { en: "3/7 m", hi: "3/7 मीटर" }, correct: false, misconceptionId: "frac_m3" },
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // LESSON: Decimals
  // ─────────────────────────────────────────────────────────────
  decimals: {
    misconceptions: {
      // M1: Ignoring place value — treating decimals like whole numbers
      dec_m1: {
        name: {
          en: "Ignoring place value in decimals",
          hi: "दशमलव में स्थानीय मान को नज़रअंदाज़ करना",
        },
        explanation: {
          steps: {
            en: "Each digit after the decimal point has a place value: tenths, hundredths, thousandths, and so on. 0.3 means 3 tenths, and 0.03 means 3 hundredths, so 0.3 is ten times bigger than 0.03.",
            hi: "दशमलव बिंदु के बाद प्रत्येक अंक का एक स्थानीय मान होता है: दसवां, सौवां, हज़ारवां, और इसी तरह। 0.3 का मतलब 3 दसवां है, और 0.03 का मतलब 3 सौवां है, इसलिए 0.3, 0.03 से दस गुना बड़ा है।",
          },
          picture: {
            en: "0.3  = [###-------]  (3 out of 10 parts)\n0.03 = [#---------]  (3 out of 100 parts, tiny!)\n0.3 > 0.03",
            hi: "0.3  = [###-------]  (10 में से 3 भाग)\n0.03 = [#---------]  (100 में से 3 भाग, बहुत छोटा!)\n0.3 > 0.03",
          },
          story: {
            en: "Think of a metre ruler. 0.3 m means 30 cm — almost a third of the ruler. 0.03 m means just 3 cm — barely a finger's width. Even though both have a 3, they are very different lengths.",
            hi: "एक मीटर स्केल की कल्पना करें। 0.3 मीटर का मतलब है 30 सेमी — स्केल का लगभग एक तिहाई। 0.03 मीटर का मतलब है सिर्फ 3 सेमी — मुश्किल से एक उंगली की चौड़ाई। भले ही दोनों में 3 है, वे बहुत अलग लंबाई हैं।",
          },
        },
      },

      // M2: Thinking more decimal digits means a bigger number
      dec_m2: {
        name: {
          en: "More digits after the point means a bigger number",
          hi: "बिंदु के बाद अधिक अंक मतलब बड़ी संख्या",
        },
        explanation: {
          steps: {
            en: "The number of digits after the decimal point does not decide which number is bigger. Compare digit by digit from left to right after the point. 0.5 is bigger than 0.125 because 5 tenths is more than 1 tenth.",
            hi: "दशमलव बिंदु के बाद अंकों की संख्या यह तय नहीं करती कि कौन सी संख्या बड़ी है। बिंदु के बाद बाएं से दाएं अंक दर अंक तुलना करें। 0.5, 0.125 से बड़ा है क्योंकि 5 दसवां, 1 दसवां से अधिक है।",
          },
          picture: {
            en: "0.5   = [#####-----]  (5 out of 10)\n0.125 = [#---------]  (about 1.25 out of 10)\n0.5 > 0.125",
            hi: "0.5   = [#####-----]  (10 में से 5)\n0.125 = [#---------]  (10 में से लगभग 1.25)\n0.5 > 0.125",
          },
          story: {
            en: "If a shopkeeper charges Rs 0.5 and another charges Rs 0.125, the first one is more expensive even though 0.125 has more digits. Always look at the first decimal digit first — it tells you the most.",
            hi: "अगर एक दुकानदार Rs 0.5 लेता है और दूसरा Rs 0.125 लेता है, तो पहला अधिक महंगा है, भले ही 0.125 में अधिक अंक हों। हमेशा पहले दशमलव अंक को पहले देखें — यह सबसे महत्वपूर्ण है।",
          },
        },
      },

      // M3: Misaligning decimal points when adding or subtracting
      dec_m3: {
        name: {
          en: "Not lining up decimal points when adding",
          hi: "जोड़ते समय दशमलव बिंदु को सीध में न रखना",
        },
        explanation: {
          steps: {
            en: "When adding or subtracting decimals, always line up the decimal points vertically. This makes sure you are adding tenths to tenths and hundredths to hundredths, not mixing up place values.",
            hi: "दशमलव को जोड़ते या घटाते समय, हमेशा दशमलव बिंदुओं को लंबवत सीध में रखें। यह सुनिश्चित करता है कि आप दसवां को दसवां से और सौवां को सौवां से जोड़ रहे हैं, न कि स्थानीय मानों को मिला रहे हैं।",
          },
          picture: {
            en: "WRONG:   1.5        RIGHT:  1.50\n       + 0.25              + 0.25\n       -----              ------\n         1.75               1.75\n(Line up the dots!)",
            hi: "गलत:   1.5        सही:  1.50\n     + 0.25            + 0.25\n     -----            ------\n       1.75              1.75\n(बिंदुओं को सीध में रखें!)",
          },
          story: {
            en: "A shopkeeper is adding two bills: Rs 1.50 and Rs 0.25. She carefully lines up the decimal points and gets Rs 1.75. If she had not lined them up, she might have written a wrong total and cheated herself or the customer.",
            hi: "एक दुकानदार दो बिलों को जोड़ रही है: Rs 1.50 और Rs 0.25। वह सावधानी से दशमलव बिंदुओं को सीध में रखती है और Rs 1.75 पाती है। अगर उसने उन्हें सीध में नहीं रखा होता, तो वह एक गलत कुल लिख सकती थी और खुद को या ग्राहक को नुकसान पहुँचा सकती थी।",
          },
        },
      },
    },

    questions: [
      // ── Level 1 ──
      {
        id: "dec_q1",
        level: 1,
        text: {
          en: "Which number is larger: 0.7 or 0.07?",
          hi: "कौन सी संख्या बड़ी है: 0.7 या 0.07?",
        },
        options: [
          { id: "dec_q1_a", text: { en: "0.7", hi: "0.7" }, correct: true, misconceptionId: null },
          { id: "dec_q1_b", text: { en: "0.07", hi: "0.07" }, correct: false, misconceptionId: "dec_m1" },
          { id: "dec_q1_c", text: { en: "They are equal", hi: "वे बराबर हैं" }, correct: false, misconceptionId: "dec_m1" },
        ],
      },
      {
        id: "dec_q2",
        level: 1,
        text: {
          en: "What is 0.4 + 0.3?",
          hi: "0.4 + 0.3 क्या है?",
        },
        options: [
          { id: "dec_q2_a", text: { en: "0.7", hi: "0.7" }, correct: true, misconceptionId: null },
          { id: "dec_q2_b", text: { en: "0.07", hi: "0.07" }, correct: false, misconceptionId: "dec_m3" },
          { id: "dec_q2_c", text: { en: "7.0", hi: "7.0" }, correct: false, misconceptionId: "dec_m3" },
        ],
      },

      // ── Level 2 ──
      {
        id: "dec_q3",
        level: 2,
        text: {
          en: "Which is greater: 0.6 or 0.512?",
          hi: "कौन सा बड़ा है: 0.6 या 0.512?",
        },
        options: [
          { id: "dec_q3_a", text: { en: "0.6", hi: "0.6" }, correct: true, misconceptionId: null },
          { id: "dec_q3_b", text: { en: "0.512", hi: "0.512" }, correct: false, misconceptionId: "dec_m2" },
          { id: "dec_q3_c", text: { en: "They are equal", hi: "वे बराबर हैं" }, correct: false, misconceptionId: "dec_m2" },
        ],
      },
      {
        id: "dec_q4",
        level: 2,
        text: {
          en: "What is 2.35 + 1.4?",
          hi: "2.35 + 1.4 क्या है?",
        },
        options: [
          { id: "dec_q4_a", text: { en: "3.75", hi: "3.75" }, correct: true, misconceptionId: null },
          { id: "dec_q4_b", text: { en: "3.39", hi: "3.39" }, correct: false, misconceptionId: "dec_m3" },
          { id: "dec_q4_c", text: { en: "2.49", hi: "2.49" }, correct: false, misconceptionId: "dec_m3" },
        ],
      },

      // ── Level 3 ──
      {
        id: "dec_q5",
        level: 3,
        text: {
          en: "Meena buys a pen for Rs 12.50 and a notebook for Rs 8.75. How much does she spend in total?",
          hi: "मीना एक पेन Rs 12.50 में और एक नोटबुक Rs 8.75 में खरीदती है। वह कुल कितना खर्च करती है?",
        },
        options: [
          { id: "dec_q5_a", text: { en: "Rs 21.25", hi: "Rs 21.25" }, correct: true, misconceptionId: null },
          { id: "dec_q5_b", text: { en: "Rs 20.25", hi: "Rs 20.25" }, correct: false, misconceptionId: "dec_m3" },
          { id: "dec_q5_c", text: { en: "Rs 21.125", hi: "Rs 21.125" }, correct: false, misconceptionId: "dec_m3" },
        ],
      },
      {
        id: "dec_q6",
        level: 3,
        text: {
          en: "A shopkeeper has 5.0 kg of sugar. He sells 2.75 kg. How much is left?",
          hi: "एक दुकानदार के पास 5.0 किग्रा चीनी है। वह 2.75 किग्रा बेचता है। कितना बचा?",
        },
        options: [
          { id: "dec_q6_a", text: { en: "2.25 kg", hi: "2.25 किग्रा" }, correct: true, misconceptionId: null },
          { id: "dec_q6_b", text: { en: "2.35 kg", hi: "2.35 किग्रा" }, correct: false, misconceptionId: "dec_m3" },
          { id: "dec_q6_c", text: { en: "3.25 kg", hi: "3.25 किग्रा" }, correct: false, misconceptionId: "dec_m1" },
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // LESSON: Heat and Temperature
  // ─────────────────────────────────────────────────────────────
  "heat-and-temperature": {
    misconceptions: {
      // M1: Heat and temperature are the same thing
      ht_m1: {
        name: {
          en: "Heat and temperature are the same",
          hi: "ऊष्मा और तापमान एक ही हैं",
        },
        explanation: {
          steps: {
            en: "Temperature is a measure of how hot or cold something is. Heat is the total energy transferred from a hotter object to a cooler one. A large bucket of warm water has more heat than a small cup of boiling water, even though the cup has a higher temperature.",
            hi: "तापमान यह मापता है कि कोई वस्तु कितनी गर्म या ठंडी है। ऊष्मा वह कुल ऊर्जा है जो किसी गर्म वस्तु से ठंडी वस्तु में स्थानांतरित होती है। गर्म पानी की एक बड़ी बाल्टी में उबलते पानी के एक छोटे कप से अधिक ऊष्मा होती है, भले ही कप का तापमान अधिक हो।",
          },
          picture: {
            en: "Cup (100°C):   [==]      small amount of water\nBucket (40°C): [========] much more water\nThe bucket holds MORE total heat even at lower temperature.",
            hi: "कप (100°C):   [==]      पानी की कम मात्रा\nबाल्टी (40°C): [========] बहुत अधिक पानी\nबाल्टी में कम तापमान पर भी कुल मिलाकर अधिक ऊष्मा होती है।",
          },
          story: {
            en: "Imagine a tiny candle flame (very hot, high temperature) and a warm swimming pool (lower temperature but enormous amount of heat). The pool could warm you up much more than the candle could. Temperature tells us how hot, but heat tells us how much energy is there.",
            hi: "एक छोटी मोमबत्ती की लौ (बहुत गर्म, उच्च तापमान) और एक गर्म स्विमिंग पूल (कम तापमान लेकिन ऊष्मा की विशाल मात्रा) की कल्पना करें। पूल आपको मोमबत्ती की तुलना में बहुत अधिक गर्म कर सकता है। तापमान हमें बताता है कि कितना गर्म है, लेकिन ऊष्मा हमें बताती है कि कितनी ऊर्जा है।",
          },
        },
      },

      // M2: Temperature always measures in Celsius
      ht_m2: {
        name: {
          en: "Temperature can only be measured in Celsius",
          hi: "तापमान केवल सेल्सियस में मापा जा सकता है",
        },
        explanation: {
          steps: {
            en: "Temperature can be measured in different units: Celsius (°C), Fahrenheit (°F), and Kelvin (K). Water freezes at 0°C, 32°F, and 273 K — all three describe the same temperature. Doctors in some countries use Fahrenheit; scientists often use Kelvin.",
            hi: "तापमान को विभिन्न इकाइयों में मापा जा सकता है: सेल्सियस (°C), फ़ारेनहाइट (°F), और केल्विन (K)। पानी 0°C, 32°F और 273 K पर जमता है — तीनों एक ही तापमान का वर्णन करते हैं। कुछ देशों में डॉक्टर फ़ारेनहाइट का उपयोग करते हैं; वैज्ञानिक अक्सर केल्विन का उपयोग करते हैं।",
          },
          picture: {
            en: "Water freezes:\n  Celsius:     0°C\n  Fahrenheit: 32°F\n  Kelvin:    273 K\nAll three mean the same freezing point!",
            hi: "पानी जमने का बिंदु:\n  सेल्सियस:     0°C\n  फ़ारेनहाइट: 32°F\n  केल्विन:    273 K\nतीनों का मतलब एक ही हिमांक बिंदु है!",
          },
          story: {
            en: "When Riya's family visited the United States, the weather app showed 98°F and she was confused — that sounded very hot! But her mum explained that 98°F is about 37°C, which is normal body temperature. Different countries use different scales, but they all measure the same thing.",
            hi: "जब रिया का परिवार संयुक्त राज्य अमेरिका गया, तो मौसम ऐप पर 98°F दिखाया और वह भ्रमित हो गई — यह बहुत गर्म लग रहा था! लेकिन उसकी माँ ने बताया कि 98°F लगभग 37°C है, जो सामान्य शरीर का तापमान है। अलग-अलग देश अलग-अलग पैमानों का उपयोग करते हैं, लेकिन वे सभी एक ही चीज़ मापते हैं।",
          },
        },
      },

      // M3: Hot objects always expand and cool objects always contract (without nuance)
      ht_m3: {
        name: {
          en: "Only solids expand when heated",
          hi: "केवल ठोस पदार्थ गर्म होने पर फैलते हैं",
        },
        explanation: {
          steps: {
            en: "Solids, liquids, and gases all generally expand when heated and contract when cooled. Liquids expand too — that is exactly why thermometers work, as the liquid inside rises when it gets warm. Gases expand the most of all three.",
            hi: "ठोस, तरल और गैस — सभी सामान्यतः गर्म होने पर फैलते हैं और ठंडे होने पर सिकुड़ते हैं। तरल पदार्थ भी फैलते हैं — यही कारण है कि थर्मामीटर काम करते हैं, क्योंकि अंदर का तरल गर्म होने पर ऊपर चढ़ता है। गैसें तीनों में सबसे अधिक फैलती हैं।",
          },
          picture: {
            en: "Thermometer (liquid):\n  Cold: [|----      ]   liquid at low level\n  Hot:  [|----------]   liquid rises up\nThe liquid expands with heat!",
            hi: "थर्मामीटर (तरल):\n  ठंडा: [|----      ]   तरल निचले स्तर पर\n  गर्म: [|----------]   तरल ऊपर चढ़ता है\nतरल पदार्थ ऊष्मा से फैलता है!",
          },
          story: {
            en: "Have you noticed that a glass jar lid is easier to open after running it under hot water? The metal lid expands just a little when it heats up, loosening its grip. This shows that even metals — a type of solid — expand when heated.",
            hi: "क्या आपने देखा है कि कांच के जार का ढक्कन गर्म पानी में चलाने के बाद खोलना आसान होता है? धातु का ढक्कन गर्म होने पर थोड़ा सा फैलता है, जिससे उसकी पकड़ ढीली हो जाती है। यह दर्शाता है कि धातुएं — एक प्रकार का ठोस — गर्म होने पर फैलती हैं।",
          },
        },
      },
    },

    questions: [
      // ── Level 1 ──
      {
        id: "ht_q1",
        level: 1,
        text: {
          en: "What instrument is used to measure temperature?",
          hi: "तापमान मापने के लिए कौन सा यंत्र उपयोग किया जाता है?",
        },
        options: [
          { id: "ht_q1_a", text: { en: "Thermometer", hi: "थर्मामीटर" }, correct: true, misconceptionId: null },
          { id: "ht_q1_b", text: { en: "Barometer", hi: "बैरोमीटर" }, correct: false, misconceptionId: "ht_m2" },
          { id: "ht_q1_c", text: { en: "Voltmeter", hi: "वोल्टमीटर" }, correct: false, misconceptionId: "ht_m1" },
        ],
      },
      {
        id: "ht_q2",
        level: 1,
        text: {
          en: "At what temperature does water boil at sea level?",
          hi: "समुद्र तल पर पानी किस तापमान पर उबलता है?",
        },
        options: [
          { id: "ht_q2_a", text: { en: "100°C", hi: "100°C" }, correct: true, misconceptionId: null },
          { id: "ht_q2_b", text: { en: "0°C", hi: "0°C" }, correct: false, misconceptionId: "ht_m2" },
          { id: "ht_q2_c", text: { en: "37°C", hi: "37°C" }, correct: false, misconceptionId: "ht_m1" },
        ],
      },

      // ── Level 2 ──
      {
        id: "ht_q3",
        level: 2,
        text: {
          en: "A large bucket of water at 40°C and a small cup of water at 90°C — which contains more heat energy?",
          hi: "40°C पर पानी की एक बड़ी बाल्टी और 90°C पर पानी का एक छोटा कप — किसमें अधिक ऊष्मा ऊर्जा है?",
        },
        options: [
          { id: "ht_q3_a", text: { en: "The large bucket", hi: "बड़ी बाल्टी" }, correct: true, misconceptionId: null },
          { id: "ht_q3_b", text: { en: "The small cup", hi: "छोटा कप" }, correct: false, misconceptionId: "ht_m1" },
          { id: "ht_q3_c", text: { en: "They contain the same heat", hi: "दोनों में समान ऊष्मा है" }, correct: false, misconceptionId: "ht_m1" },
        ],
      },
      {
        id: "ht_q4",
        level: 2,
        text: {
          en: "Why does the liquid inside a thermometer rise when it gets hotter?",
          hi: "थर्मामीटर के अंदर का तरल गर्म होने पर क्यों चढ़ता है?",
        },
        options: [
          { id: "ht_q4_a", text: { en: "The liquid expands when heated", hi: "तरल गर्म होने पर फैलता है" }, correct: true, misconceptionId: null },
          { id: "ht_q4_b", text: { en: "Only solids expand; the liquid is pushed up by the glass", hi: "केवल ठोस फैलते हैं; तरल कांच द्वारा ऊपर धकेला जाता है" }, correct: false, misconceptionId: "ht_m3" },
          { id: "ht_q4_c", text: { en: "The liquid gets heavier and sinks then rises", hi: "तरल भारी हो जाता है और डूबता है फिर उठता है" }, correct: false, misconceptionId: "ht_m3" },
        ],
      },

      // ── Level 3 ──
      {
        id: "ht_q5",
        level: 3,
        text: {
          en: "Normal human body temperature is about 37°C. What is this in Fahrenheit? (Use: °F = (°C × 9/5) + 32)",
          hi: "मानव शरीर का सामान्य तापमान लगभग 37°C है। यह फ़ारेनहाइट में क्या है? (उपयोग करें: °F = (°C × 9/5) + 32)",
        },
        options: [
          { id: "ht_q5_a", text: { en: "98.6°F", hi: "98.6°F" }, correct: true, misconceptionId: null },
          { id: "ht_q5_b", text: { en: "37°F", hi: "37°F" }, correct: false, misconceptionId: "ht_m2" },
          { id: "ht_q5_c", text: { en: "69°F", hi: "69°F" }, correct: false, misconceptionId: "ht_m2" },
        ],
      },
      {
        id: "ht_q6",
        level: 3,
        text: {
          en: "A railway track has small gaps left between sections. Why?",
          hi: "रेलवे की पटरियों के बीच छोटे-छोटे अंतराल क्यों छोड़े जाते हैं?",
        },
        options: [
          { id: "ht_q6_a", text: { en: "The metal expands in heat and needs space to do so", hi: "धातु गर्मी में फैलती है और उसे ऐसा करने के लिए जगह चाहिए" }, correct: true, misconceptionId: null },
          { id: "ht_q6_b", text: { en: "Only liquids expand; the gaps are just for decoration", hi: "केवल तरल पदार्थ फैलते हैं; अंतराल केवल सजावट के लिए हैं" }, correct: false, misconceptionId: "ht_m3" },
          { id: "ht_q6_c", text: { en: "The gaps help the train slow down", hi: "अंतराल ट्रेन को धीमा करने में मदद करते हैं" }, correct: false, misconceptionId: "ht_m3" },
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // LESSON: Subject-Verb Agreement
  // (Question text stays in English; names and explanations are bilingual)
  // ─────────────────────────────────────────────────────────────
  "subject-verb-agreement": {
    misconceptions: {
      // M1: Using plural verb with singular subject
      sva_m1: {
        name: {
          en: "Using a plural verb with a singular subject",
          hi: "एकवचन कर्ता के साथ बहुवचन क्रिया का उपयोग करना",
        },
        explanation: {
          steps: {
            en: "When the subject is singular (one person or thing), the verb must also be singular. We say 'She runs' not 'She run'. The rule is: singular subject → add -s or -es to the verb in the present tense.",
            hi: "जब कर्ता एकवचन (एक व्यक्ति या वस्तु) हो, तो क्रिया भी एकवचन होनी चाहिए। हम 'She runs' कहते हैं, 'She run' नहीं। नियम है: एकवचन कर्ता → वर्तमान काल में क्रिया में -s या -es जोड़ें।",
          },
          picture: {
            en: "Singular:  The dog [barks].   (one dog, -s on verb)\nPlural:    The dogs [bark].   (many dogs, no -s)\n\nSubject count matches verb form.",
            hi: "एकवचन:  The dog [barks].   (एक कुत्ता, क्रिया में -s)\nबहुवचन: The dogs [bark].   (कई कुत्ते, -s नहीं)\n\nकर्ता की संख्या क्रिया रूप से मेल खाती है।",
          },
          story: {
            en: "Think of it like a rule in a team game: if only one player is running, you say 'she runs'. When the whole team runs together, you say 'they run'. The verb changes its form to match the team size — that is subject-verb agreement.",
            hi: "इसे एक टीम खेल के नियम की तरह सोचें: अगर केवल एक खिलाड़ी दौड़ रही है, तो आप कहते हैं 'she runs'। जब पूरी टीम एक साथ दौड़ती है, तो आप कहते हैं 'they run'। क्रिया टीम के आकार के अनुसार अपना रूप बदलती है — यही कर्ता-क्रिया सामंजस्य है।",
          },
        },
      },

      // M2: Confusing the subject when a phrase comes between subject and verb
      sva_m2: {
        name: {
          en: "Being confused by words between the subject and verb",
          hi: "कर्ता और क्रिया के बीच शब्दों से भ्रमित होना",
        },
        explanation: {
          steps: {
            en: "Phrases that come between the subject and the verb do not change the verb form. Find the main subject (not the words inside the 'of' phrase) and match the verb to it. Example: 'A box of chocolates is on the table.' — the subject is 'box', not 'chocolates'.",
            hi: "कर्ता और क्रिया के बीच आने वाले वाक्यांश क्रिया के रूप को नहीं बदलते। मुख्य कर्ता खोजें ('of' वाक्यांश के अंदर के शब्द नहीं) और क्रिया को उससे मिलाएं। उदाहरण: 'A box of chocolates is on the table.' — कर्ता 'box' है, 'chocolates' नहीं।",
          },
          picture: {
            en: "[A box] of chocolates [is] on the table.\n  ^                    ^\n  |____ subject ________|_____ verb\n\nIgnore the 'of chocolates' part when choosing the verb.",
            hi: "[A box] of chocolates [is] on the table.\n  ^                    ^\n  |____ कर्ता ________|_____ क्रिया\n\nक्रिया चुनते समय 'of chocolates' भाग को अनदेखा करें।",
          },
          story: {
            en: "Priya wrote: 'The bag of books are heavy.' Her teacher gently pointed out that the subject is 'bag' (singular), not 'books'. So the correct sentence is 'The bag of books is heavy.' The extra words between subject and verb can trick us, but the main subject is always the boss.",
            hi: "प्रिया ने लिखा: 'The bag of books are heavy.' उसकी शिक्षिका ने धीरे से बताया कि कर्ता 'bag' (एकवचन) है, 'books' नहीं। इसलिए सही वाक्य है 'The bag of books is heavy.' कर्ता और क्रिया के बीच के अतिरिक्त शब्द हमें धोखा दे सकते हैं, लेकिन मुख्य कर्ता हमेशा महत्वपूर्ण होता है।",
          },
        },
      },

      // M3: Using singular verb with compound subjects joined by "and"
      sva_m3: {
        name: {
          en: "Using a singular verb when two subjects are joined by 'and'",
          hi: "'And' से जुड़े दो कर्ताओं के साथ एकवचन क्रिया का उपयोग करना",
        },
        explanation: {
          steps: {
            en: "When two subjects are joined by 'and', they form a plural subject and need a plural verb. 'Ravi and Priya are friends' is correct, not 'Ravi and Priya is friends'. Two people together = plural.",
            hi: "जब दो कर्ता 'and' से जुड़े होते हैं, तो वे एक बहुवचन कर्ता बनाते हैं और बहुवचन क्रिया की आवश्यकता होती है। 'Ravi and Priya are friends' सही है, 'Ravi and Priya is friends' नहीं। दो लोग एक साथ = बहुवचन।",
          },
          picture: {
            en: "One subject:   [Ravi]          [is] happy.\nTwo subjects:  [Ravi and Priya] [are] happy.\n\nand = +1 more person = plural verb",
            hi: "एक कर्ता:   [Ravi]          [is] happy.\nदो कर्ता:  [Ravi and Priya] [are] happy.\n\nand = +1 और व्यक्ति = बहुवचन क्रिया",
          },
          story: {
            en: "Imagine two friends walking into class together. You would say 'Rahul and Meena are here', not 'Rahul and Meena is here'. When two people arrive together, the group is plural — so the verb must be plural too.",
            hi: "कल्पना करें कि दो दोस्त एक साथ कक्षा में आते हैं। आप कहेंगे 'Rahul and Meena are here', 'Rahul and Meena is here' नहीं। जब दो लोग एक साथ आते हैं, तो समूह बहुवचन है — इसलिए क्रिया भी बहुवचन होनी चाहिए।",
          },
        },
      },
    },

    questions: [
      // ── Level 1 ──
      {
        id: "sva_q1",
        level: 1,
        // English lesson: question text stays in English, hi is same
        text: {
          en: "Choose the correct sentence: ___ She ___ every day.",
          hi: "सही वाक्य चुनें: ___ She ___ every day.",
        },
        options: [
          { id: "sva_q1_a", text: { en: "She runs every day.", hi: "She runs every day." }, correct: true, misconceptionId: null },
          { id: "sva_q1_b", text: { en: "She run every day.", hi: "She run every day." }, correct: false, misconceptionId: "sva_m1" },
          { id: "sva_q1_c", text: { en: "She running every day.", hi: "She running every day." }, correct: false, misconceptionId: "sva_m1" },
        ],
      },
      {
        id: "sva_q2",
        level: 1,
        text: {
          en: "Which sentence is correct?",
          hi: "कौन सा वाक्य सही है?",
        },
        options: [
          { id: "sva_q2_a", text: { en: "The birds sing beautifully.", hi: "The birds sing beautifully." }, correct: true, misconceptionId: null },
          { id: "sva_q2_b", text: { en: "The birds sings beautifully.", hi: "The birds sings beautifully." }, correct: false, misconceptionId: "sva_m1" },
          { id: "sva_q2_c", text: { en: "The birds singed beautifully.", hi: "The birds singed beautifully." }, correct: false, misconceptionId: "sva_m1" },
        ],
      },

      // ── Level 2 ──
      {
        id: "sva_q3",
        level: 2,
        text: {
          en: "Choose the correct verb: 'A basket of apples ___ on the counter.'",
          hi: "सही क्रिया चुनें: 'A basket of apples ___ on the counter.'",
        },
        options: [
          { id: "sva_q3_a", text: { en: "is", hi: "is" }, correct: true, misconceptionId: null },
          { id: "sva_q3_b", text: { en: "are", hi: "are" }, correct: false, misconceptionId: "sva_m2" },
          { id: "sva_q3_c", text: { en: "were", hi: "were" }, correct: false, misconceptionId: "sva_m2" },
        ],
      },
      {
        id: "sva_q4",
        level: 2,
        text: {
          en: "Which sentence uses the correct verb? The subject is 'Ravi and Priya'.",
          hi: "कौन सा वाक्य सही क्रिया का उपयोग करता है? कर्ता 'Ravi and Priya' है।",
        },
        options: [
          { id: "sva_q4_a", text: { en: "Ravi and Priya are going to school.", hi: "Ravi and Priya are going to school." }, correct: true, misconceptionId: null },
          { id: "sva_q4_b", text: { en: "Ravi and Priya is going to school.", hi: "Ravi and Priya is going to school." }, correct: false, misconceptionId: "sva_m3" },
          { id: "sva_q4_c", text: { en: "Ravi and Priya goes to school.", hi: "Ravi and Priya goes to school." }, correct: false, misconceptionId: "sva_m3" },
        ],
      },

      // ── Level 3 ──
      {
        id: "sva_q5",
        level: 3,
        text: {
          en: "Choose the correct sentence: 'The team of players ___ practising hard.'",
          hi: "सही वाक्य चुनें: 'The team of players ___ practising hard.'",
        },
        options: [
          { id: "sva_q5_a", text: { en: "The team of players is practising hard.", hi: "The team of players is practising hard." }, correct: true, misconceptionId: null },
          { id: "sva_q5_b", text: { en: "The team of players are practising hard.", hi: "The team of players are practising hard." }, correct: false, misconceptionId: "sva_m2" },
          { id: "sva_q5_c", text: { en: "The team of players were practising hard.", hi: "The team of players were practising hard." }, correct: false, misconceptionId: "sva_m2" },
        ],
      },
      {
        id: "sva_q6",
        level: 3,
        text: {
          en: "Identify the correct sentence.",
          hi: "सही वाक्य पहचानें।",
        },
        options: [
          { id: "sva_q6_a", text: { en: "Neither Arun nor his friends were at the park.", hi: "Neither Arun nor his friends were at the park." }, correct: true, misconceptionId: null },
          { id: "sva_q6_b", text: { en: "Neither Arun nor his friends was at the park.", hi: "Neither Arun nor his friends was at the park." }, correct: false, misconceptionId: "sva_m2" },
          { id: "sva_q6_c", text: { en: "Neither Arun nor his friends are at the park.", hi: "Neither Arun nor his friends are at the park." }, correct: false, misconceptionId: "sva_m3" },
        ],
      },
    ],
  },
};
