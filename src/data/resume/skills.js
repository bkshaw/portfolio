// Programming, Python, ML Engineering, Data Science, Data Engineering, Deep Learning,
// Web Development, Tools, DevOps, Databases, Generative AI
const skills = [
  {
    title: 'Python',
    competency: 5,
    category: ['Programming', 'Data Science', 'ML Engineering', 'Data Engineering', 'Web Development'],
  },
  {
    title: 'Numpy',
    competency: 5,
    category: ['Data Science', 'Data Engineering', 'ML Engineering', 'Python'],
  },
  {
    title: 'PyTorch',
    competency: 5,
    category: ['ML Engineering', 'Deep Learning', 'Data Science', 'Python'],
  },
  {
    title: 'Tensorflow + Keras',
    competency: 4,
    category: ['ML Engineering', 'Deep Learning', 'Python'],
  },
  {
    title: 'OpenCV',
    competency: 4,
    category: ['ML Engineering', 'Python', 'Data Engineering', 'Data Science'],
  },
  {
    title: 'Pandas',
    competency: 5,
    category: ['Data Engineering', 'ML Engineering', 'Python', 'Data Science'],
  },
  {
    title: 'Matplotlib',
    competency: 4,
    category: ['Data Engineering', 'ML Engineering', 'Python'],
  },
  {
    title: 'Scikit-Learn',
    competency: 5,
    category: ['Data Engineering', 'ML Engineering', 'Python', 'Data Science'],
  },
  {
    title: 'Javascript',
    competency: 3,
    category: ['Web Development', 'Programming'],
  },
  {
    title: 'Node.JS',
    competency: 2,
    category: ['Web Development'],
  },
  {
    title: 'React',
    competency: 2,
    category: ['Web Development'],
  },
  {
    title: 'Vue.js',
    competency: 3,
    category: ['Web Development', 'Programming'],
  },
  {
    title: 'Laravel',
    competency: 3,
    category: ['Web Development', 'Programming'],
  },
  {
    title: 'HTML + CSS',
    competency: 4,
    category: ['Web Development'],
  },
  {
    title: 'PHP',
    competency: 2,
    category: ['Web Development', 'Programming'],
  },
  {
    title: 'Bash',
    competency: 3,
    category: ['Tools', 'Programming', 'Data Engineering', 'DevOps'],
  },
  {
    title: 'Amazon Web Services (AWS)',
    competency: 4,
    category: ['Tools', 'DevOps', 'Web Development', 'Data Engineering', 'Databases', 'ML Engineering', 'Generative AI'],
  },
  {
    title: 'MongoDB',
    competency: 3,
    category: ['Web Development', 'Databases'],
  },
  {
    title: 'PostgreSQL/SQLite3/SQL',
    competency: 4,
    category: ['Web Development', 'Databases', 'Programming'],
  },
  {
    title: 'Data Mining',
    competency: 3,
    category: ['Data Engineering', 'ML Engineering', 'Data Science'],
  },
  {
    title: 'Flask',
    competency: 3,
    category: ['Web Development', 'Python'],
  },
  {
    title: 'FastAPI',
    competency: 4,
    category: ['Web Development', 'Python'],
  },
  {
    title: 'Git',
    competency: 4,
    category: ['Tools', 'DevOps'],
  },
  {
    title: 'Docker/Docker Compose',
    competency: 4,
    category: ['Tools', 'Data Engineering', 'DevOps'],
  },
  {
    title: 'Jupyter',
    competency: 3,
    category: ['Data Science', 'Python', 'ML Engineering', 'Data Engineering', 'Tools'],
  },
  {
    title: 'C',
    competency: 3,
    category: ['Programming'],
  },
  {
    title: 'Java',
    competency: 3,
    category: ['Programming'],
  },
  {
    title: 'C++',
    competency: 3,
    category: ['Programming'],
  },
  {
    title: 'MATLAB',
    competency: 3,
    category: ['Programming', 'Data Science', 'Tools'],
  },
  {
    title: 'Data Visualization',
    competency: 3,
    category: ['Data Science', 'Data Engineering', 'Web Development'],
  },
  {
    title: 'Langchain',
    competency: 4,
    category: ['Generative AI', 'Deep Learning', 'Python', 'Tools'],
  },
  {
    title: 'Hugging Face',
    competency: 4,
    category: ['Generative AI', 'Deep Learning', 'Python', 'Tools'],
  },
  {
    title: 'GPT/Gemini/Claude/Grok',
    competency: 4,
    category: ['Generative AI', 'Deep Learning', 'Python', 'Tools'],
  },
  {
    title: 'Data Structures and Algorithms',
    competency: 4,
    category: ['Programming'],
  },
  {
    title: 'Prompt Engineering',
    competency: 5,
    category: ['Generative AI', 'Deep Learning', 'Python', 'Tools'],
  },
].map((skill) => ({ ...skill, category: skill.category.sort() }));

// this is a list of colors that I like. The length should be === to the
// number of categories. Re-arrange this list until you find a pattern you like.
const colors = [
  '#6968b3',
  '#37b1f5',
  '#40494e',
  '#515dd4',
  '#e47272',
  '#cc7b94',
  '#3896e2',
  '#c3423f',
  '#d75858',
  '#747fff',
  '#64cb7b',
];

const categories = [...new Set(skills.flatMap(({ category }) => category))]
  .sort()
  .map((category, index) => ({
    name: category,
    color: colors[index],
  }));

export { categories, skills };
