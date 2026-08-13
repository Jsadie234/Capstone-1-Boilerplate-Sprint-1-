export type TeamMember = {
  name: string
  role: string
  bio: string
  email: string
  linkedin: string
  photo?: string
}

export const TEAM_MEMBERS: TeamMember[] = [
  {
    name: 'Sukritee Nayak Chhetri',
    role: 'Project Manager',
    photo: '/images/team/sukritee.png',
    email: 'S4090745@student.rmit.edu.au',
    linkedin: 'https://www.linkedin.com/in/sukritee',
    bio: "I'm studying Computer Science at RMIT, minoring in Artificial Intelligence & Machine Learning and Cloud Computing. I enjoy utilising technology to make life easier and helping others. Whether it's assisting them through consulting or building innovative products with code. I've interned at BOSCH as an IT Consultant and Operations Engineer and consulting on tech is something I'm passionate about as well.",
  },
  {
    name: 'Tom Nunan',
    role: 'Business Analyst',
    email: 'tsnunan@gmail.com',
    linkedin: 'https://www.linkedin.com/in/tom-n-b44057154',
    bio: "Final-year Bachelor of Information Technology student at RMIT, with interests in data analytics, AI and automation. I'm particularly interested in applying technology to industrial systems, energy and emerging infrastructure, and I'm looking forward to contributing to the ElectraWireless project.",
  },
  {
    name: 'Agavita Diva Juwono',
    role: 'UX',
    photo: '/images/team/agavita.jpg',
    email: 's4061620@student.rmit.edu.au',
    linkedin: 'https://www.linkedin.com/in/agavita-diva-juwono-34b393287',
    bio: 'I am a final year Computer Science student at RMIT University with a minor in Data Science. My main interest is UX, and I enjoy creating user-friendly designs and collaborating with others. I am keen to further develop my UX skills through this project.',
  },
  {
    name: 'Juan Sadie',
    role: 'Developer',
    photo: '/images/team/juan.jpg',
    email: 's3791532@student.rmit.edu.au',
    linkedin: 'https://www.linkedin.com/in/juan-sadie-213937421',
    bio: 'I am a final year IT student Majoring in Cybersecurity at RMIT. My main skills and interests in terms of development are centered around Web Development, Cybersecurity and AI. Some projects of note include simple AI training and use (within RMIT and outside in my spare time), and a website in collaboration with others combining eBay, gaming news sites, and a discussion board, with login, coupon, cart, and the ability to list items.',
  },
]

export const TEAM_HEADER_TITLE = 'GROUP 51 - POWERED IWEM PLATFORM (TEAM A)'
