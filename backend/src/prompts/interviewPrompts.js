export const generateInterviewPrompt = ({
  role,
  difficulty,
  topic,
}) => {

  return `
You are an expert technical interviewer.

Generate:
1. Interview Question
2. Detailed Answer
3. Explanation

Role:
${role}

Difficulty:
${difficulty}

Topic:
${topic}

Rules:
- professional interview style
- realistic company-level questions
- concise but detailed answers
- beginner friendly explanations

Response format:

Question:
...

Answer:
...

Explanation:
...
`;
};