// Pure JS helpers for adaptive question selection, level adjustment, and result summaries.

// Pick an unused question at the target level; fall back to any unused question if needed.
export function pickNextQuestion(questions, level, usedIds) {
  const atLevel = questions.filter(
    (q) => q.level === level && !usedIds.includes(q.id)
  );
  if (atLevel.length > 0) return atLevel[0];
  const any = questions.filter((q) => !usedIds.includes(q.id));
  return any[0] ?? null;
}

// Move the level up by 1 on a correct answer (max 3) or down by 1 on a wrong one (min 1).
export function nextLevel(level, correct) {
  if (correct) return Math.min(3, level + 1);
  return Math.max(1, level - 1);
}

// Build plain positive sentences describing the student's performance in the given language.
export function buildStrengths(answers, lang) {
  const sentences = { en: [], hi: [] };
  const total = answers.length;
  if (total === 0) {
    return lang === "hi"
      ? ["तुमने आज अभ्यास शुरू किया — यह एक शानदार पहला कदम है!"]
      : ["You started practising today — that is a fantastic first step!"];
  }

  const correctCount = answers.filter((a) => a.correct).length;
  const accuracy = correctCount / total;
  const fastCorrect = answers.filter((a) => a.correct && a.timeSec <= 15);
  const maxLevel = Math.max(...answers.map((a) => a.level));
  const lastThree = answers.slice(-3);
  const recoveredAfterMistake =
    answers.length >= 2 &&
    answers.some((a, i) => i > 0 && !answers[i - 1].correct && a.correct);

  // Accuracy praise
  if (accuracy === 1) {
    sentences.en.push("You got every question right — a perfect score!");
    sentences.hi.push("तुमने हर सवाल सही किया — एकदम परफेक्ट!");
  } else if (accuracy >= 0.8) {
    sentences.en.push("You answered most questions correctly — great work!");
    sentences.hi.push("तुमने ज़्यादातर सवाल सही किए — बहुत बढ़िया!");
  } else if (accuracy >= 0.5) {
    sentences.en.push("You got more than half the questions right — good effort!");
    sentences.hi.push("तुमने आधे से ज़्यादा सवाल सही किए — अच्छी कोशिश!");
  } else {
    sentences.en.push("You kept trying all the way through — that takes courage!");
    sentences.hi.push("तुम अंत तक कोशिश करते रहे — यह बहादुरी की बात है!");
  }

  // Fast and accurate
  if (fastCorrect.length >= 2) {
    sentences.en.push("You were fast and accurate on several questions.");
    sentences.hi.push("कई सवालों में तुम तेज़ और सटीक थे।");
  }

  // Reached a high level
  if (maxLevel === 3) {
    sentences.en.push("You reached level 3 — the hardest questions!");
    sentences.hi.push("तुम लेवल 3 तक पहुँचे — सबसे कठिन सवाल!");
  } else if (maxLevel === 2) {
    sentences.en.push("You worked your way up to medium-difficulty questions.");
    sentences.hi.push("तुम मध्यम-स्तर के सवालों तक पहुँचे।");
  }

  // Answered a hard question correctly
  const hardCorrect = answers.find((a) => a.correct && a.level === 3);
  if (hardCorrect) {
    sentences.en.push("You answered a hard question correctly — impressive!");
    sentences.hi.push("तुमने एक कठिन सवाल सही किया — शाबाश!");
  }

  // Recovered after a mistake
  if (recoveredAfterMistake) {
    sentences.en.push("You bounced back after a wrong answer — that shows real learning!");
    sentences.hi.push("एक गलत जवाब के बाद तुम वापस आए — यही असली सीखना है!");
  }

  // Strong finish
  const lastCorrect = lastThree.filter((a) => a.correct).length;
  if (lastCorrect === 3 && total >= 3) {
    sentences.en.push("You finished strong with three correct answers in a row!");
    sentences.hi.push("तुमने अंत में लगातार तीन सवाल सही करके शानदार समापन किया!");
  }

  // Always guarantee at least one sentence
  const result = sentences[lang] ?? sentences.en;
  return result.length > 0
    ? result
    : ["You gave it your best today — keep it up!"];
}

// Build a 2-3 sentence non-technical parent note summarising the session.
export function buildParentNote(name, score, total, misconceptionNames, lang) {
  const pct = Math.round((score / total) * 100);

  if (lang === "hi") {
    const opening = `${name} ने आज ${total} में से ${score} सवाल सही किए (${pct}%)।`;
    let middle = "";
    if (misconceptionNames.length === 0) {
      middle = "इस पाठ में कोई बड़ी गलतफहमी नहीं दिखी — बहुत अच्छा प्रदर्शन!";
    } else {
      const names = misconceptionNames.join(", ");
      middle = `कुछ क्षेत्रों में थोड़ी मदद फायदेमंद हो सकती है: ${names}।`;
    }
    const closing =
      "अभ्यास जारी रखने से ये विषय और मज़बूत होंगे — ${name} की मेहनत की तारीफ करें!".replace(
        "${name}",
        name
      );
    return `${opening} ${middle} ${closing}`;
  }

  const opening = `${name} answered ${score} out of ${total} questions correctly today (${pct}%).`;
  let middle = "";
  if (misconceptionNames.length === 0) {
    middle = "No major misunderstandings were spotted — a really strong session!";
  } else {
    const names = misconceptionNames.join(", ");
    middle = `A little extra practice on the following areas could help: ${names}.`;
  }
  const closing = `Keep encouraging ${name} — regular practice will make these ideas feel natural.`;
  return `${opening} ${middle} ${closing}`;
}
