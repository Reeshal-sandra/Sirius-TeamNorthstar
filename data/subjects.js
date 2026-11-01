// All subjects taught in Sirius, each with bilingual names and their lessons.
export const subjects = [
  {
    id: "maths",
    name: { en: "Maths", hi: "गणित" },
    lessons: [
      {
        id: "fractions",
        name: { en: "Fractions", hi: "भिन्न" },
        career: {
          en: "Cooks and bakers use fractions every day to measure ingredients in the right amounts.",
          hi: "रसोइये और बेकर हर दिन सामग्री को सही मात्रा में मापने के लिए भिन्न का उपयोग करते हैं।",
        },
      },
      {
        id: "decimals",
        name: { en: "Decimals", hi: "दशमलव" },
        career: {
          en: "Shopkeepers and accountants use decimals when calculating prices and giving change.",
          hi: "दुकानदार और लेखाकार कीमतों की गणना और बकाया राशि देने के लिए दशमलव का उपयोग करते हैं।",
        },
      },
    ],
  },
  {
    id: "science",
    name: { en: "Science", hi: "विज्ञान" },
    lessons: [
      {
        id: "heat-and-temperature",
        name: { en: "Heat and Temperature", hi: "ऊष्मा और तापमान" },
        career: {
          en: "Doctors and nurses measure body temperature to check if a patient has a fever.",
          hi: "डॉक्टर और नर्स यह जाँचने के लिए शरीर का तापमान मापते हैं कि मरीज को बुखार है या नहीं।",
        },
      },
    ],
  },
  {
    id: "english",
    name: { en: "English", hi: "अंग्रेज़ी" },
    lessons: [
      {
        id: "subject-verb-agreement",
        name: { en: "Subject-Verb Agreement", hi: "कर्ता-क्रिया सामंजस्य" },
        career: {
          en: "Writers and journalists apply subject-verb agreement to make their articles clear and professional.",
          hi: "लेखक और पत्रकार अपने लेखों को स्पष्ट और पेशेवर बनाने के लिए कर्ता-क्रिया सामंजस्य का उपयोग करते हैं।",
        },
      },
    ],
  },
];
