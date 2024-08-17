/**
 * @typedef {Object} Position
 * Conforms to https://jsonresume.org/schema/
 *
 * @property {string} name - Name of the company
 * @property {string} position - Position title
 * @property {string} url - Company website
 * @property {string} startDate - Start date of the position in YYYY-MM-DD format
 * @property {string|undefined} endDate - End date of the position in YYYY-MM-DD format.
 * If undefined, the position is still active.
 * @property {string|undefined} summary - html/markdown summary of the position
 * @property {string[]} highlights - plain text highlights of the position (bulleted list)
 */
const work = [
  {
    name: 'Valuence Technologies(VT) Japan',
    position: 'AI Engineer',
    url: 'https://www.valuence.inc/en/group/technologies/',
    startDate: '2023-01-01',
    summary: `Valuence Technologies is a subsidiary of Valuence Holdings, a luxury goods retailer company in Japan. 
    VT is a technology company that provides AI solutions to various business problems of its other subsidiaries and also outside clients.
    I am part of the AI team that develops and deploys AI solutions for clients.`,
    highlights: [
      'Developed and deployed AI solutions for various business problems.',
      'Worked on NLP, Computer Vision, and Time Series Forecasting problems.',
      'Worked on a variety of projects like Image Classification, Object Detection, Named Entity Recognition, Sentiment Analysis, etc.',
    ],
  },
  {
    name: 'Valuence Technologies(VT) Japan',
    position: 'Assitant AI Engineer',
    url: 'https://www.valuence.inc/en/group/technologies/',
    startDate: '2021-01-01',
    endDate: '2022-12-31',
    highlights: [
      'Developed and deployed AI solutions for various business problems.',
      'Worked on NLP, Computer Vision, and Time Series Forecasting problems.',
      'Worked on a variety of projects like Image Classification, Object Detection, Named Entity Recognition, Sentiment Analysis, etc.',
    ],
  },
  {
    name: 'Valuence Technologies(VT) Japan',
    position: 'Trainee AI Engineer',
    url: 'https://www.valuence.inc/en/group/technologies/',
    startDate: '2020-07-01',
    endDate: '2020-12-31',
    highlights: [
      'Worked on various AI projects.',
      'Learned about AI technologies and how to develop and deploy AI solutions.',
    ],
  },
  {
    name: 'Tata Consultancy Services(TCS)',
    position: 'ML Engineer Intern',
    url: 'https://www.tcs.com/',
    startDate: '2019-05-25',
    endDate: '2019-07-30',
    summary: `Tata Consultancy Services is an Indian multinational information technology services and consulting company.
    I worked as a Machine Learning Engineer Intern in the AI and Cognitive Sciences team of TCS Research and Innovation.`,
    highlights: [
      'Worked on a project to develop a Machine Learning model for a business problem.',
      'Developed and deployed a Machine Learning model for the project.',
      'Worked on a variety of projects like Image Classification, Object Detection, Named Entity Recognition, Sentiment Analysis',
    ],
  },
];

export default work;
