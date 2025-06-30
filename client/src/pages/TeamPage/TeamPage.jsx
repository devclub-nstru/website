import { motion } from "framer-motion"
import { useState } from "react"
import TeamCard from "../../components/TeamCard/TeamCard"

const TeamPage = () => {
  const [selectedYear, setSelectedYear] = useState("All Years")

  const teamMembers = [
    {
      id: 1,
      name: "Aditya Kumar",
      role: "President",
      avatar: "/images/team/class_of_28/aditya_team_image.jpeg",
      bio: "Leading DevClub with passion for innovation and community building. Full-stack developer with 5+ years experience.",
      skills: ["React", "NextJS", "MongoDB", "HTML", "CSS", "EXPRESS", "TAILWIND CSS", "MONGO DATABASE", "DOM", "UNIT TEST", "PERFORMANCE OPTIMIZE", "SSR", "TYPESCRIPT", "PYTHON", "REACT NATIVE", "SOLIDITY", "DOCKER", "NODE", "GIT", "GITHUB", "LINUX", "WORDPRESS", "VPS", "VERCEL", "UX/UI DESIGN", "PRODUCT DESIGN", "FIGMA", "ADOBE XD", "WIREFRAME", "WEB3", "AI/ML", "NLP METHODS", "LLM MODELS", "SMART CONTRACTS", "CI & CD", "BLOCKCHAIN", "JENKINS", "AWS SERVICES", "VECTORS EMBEDDINGS"],
      social: {
        github: "https://github.com/AdityaInnovates",
        linkedin: "https://www.linkedin.com/in/adityainnovates/",
      },
      graduationYear: "2028",
      yearsActive: ["2024", "2025"]
    },
    {
      id: 2,
      name: "Ved Pawar",
      role: "Vice President",
      avatar: "/images/team/class_of_28/ved_team_image.jpeg",
      bio: "Passionate about creating inclusive tech spaces and mentoring newcomers. Contributing to open-source for 2+ years.",
      skills: ["React", "Node.js", "Express.js", "MongoDB", "Next.js", "Mentorship", "Kubernetes", "Docker", "Git", "Github"],
      social: {
        github: "https://github.com/vedpawar2254",
        linkedin: "https://www.linkedin.com/in/vedpawar2254/",
      },
      graduationYear: "2028",
      yearsActive: ["2024", "2025"]
    },
    {
      id: 3,
      name: "Rohan Singh",
      role: "Secretary",
      avatar: "/images/team/class_of_28/rohan_team_image.jpeg",
      bio: "Product Manager and Freelancer with over 3+ years of experience. Managing internal operations and public relations.",
      skills: ["Product Management", "React", "NodeJS", "HTML/CSS", "ExpressJS", "MongoDB", "Product Design", "Social Media Marketing", "Financial Databases", "MS-Suite/G-Suite", "Python", "C++", "Risk Management", "Git/Github", "Postman"],
      social: {
        github: "https://github.com/r0hansng",
        linkedin: "https://www.linkedin.com/in/rohansng/"
      },
      graduationYear: "2028",
      yearsActive: ["2024", "2025"]
    },
    {
      id: 4,
      name: "Rajdeep Sanyal",
      role: "Executive",
      avatar: "/images/team/class_of_28/rajdeep_team_image.jpeg",
      bio: "The brain behind the events happening through DevClub. Coordinating events and workshops. 'Old Wolf' of the pack",
      skills: ["Event Planning", "Team Management", "Finance", "Product Analysis"],
      social: {
        linkedin: "https://www.linkedin.com/in/rajdeepsanyal/",
      },
      graduationYear: "2028",
      yearsActive: ["2024", "2025"]
    },
    {
      id: 5,
      name: "Rishav Diwan",
      role: "Executive",
      avatar: "/images/team/class_of_28/rishav_team_image.jpeg",
      bio: "Managing text-content and PR of the club. We turn to him when need to wipe our faces clean.",
      skills: ["Blog Writing", "Marketing", "SEO", "Public Relations", "Consulting", "Python", "Javascript", "React"],
      social: {
        linkedin: "https://www.linkedin.com/in/rishav-dewan/",
      },
      graduationYear: "2028",
      yearsActive: ["2025"]
    },
    {
      id: 6,
      name: "Hardik Jaiswal",
      role: "Maven",
      avatar: "/images/team/class_of_28/hardik_team_image.jpeg",
      bio: "Python Developer with a keen interest in Artificial Intelligence and Deep Learning. The 'Deadpool' of the club.",
      skills: ["Public Speaking", "Python", "Django", "FastAPI", "React", "NodeJS", "MongoDB", "ExpressJS", "Flask", "Postman"],
      social: {
        linkedin: "https://www.linkedin.com/in/pythonicforge/",
        github: "https://github.com/pythonicforge"
      },
      graduationYear: "2028",
      yearsActive: ["2024"]
    },
    {
      id: 7,
      name: "Raghav Gupta",
      role: "Maven",
      avatar: "/images/team/class_of_28/raghav_team_image.jpeg",
      bio: "Backend Developer with an knack for learning new technologies. The sport-freak of the club.",
      skills: ["MongoDB", "React", "NodeJS", "ExpressJS", "HTML/CSS", "Postman", "NextJS", "Prisma"],
      social: {
        github: "https://github.com/Raghavg18",
        linkedin: "https://www.linkedin.com/in/raghav-gupta-b890b7323/",
      },
      graduationYear: "2028",
      yearsActive: ["2024", "2025"]
    },
    {
      id: 8,
      name: "Avneet Singh",
      role: "Maven",
      avatar: "/images/team/class_of_28/avneet_team_image.jpeg",
      bio: "UI/UX designer, growth Consultant and a freelancer with 3+ years in the industry. Crafting clean and easy to use UIs at DevClub.",
      skills: ["UI Design", "Figma", "Framer", "Python", "JavaScript", "Canva", "Adobe Illustrator"],
      social: {
        linkedin: "https://www.linkedin.com/in/avneet0419/",
      },
      graduationYear: "2028",
      yearsActive: ["2024", "2025"]
    },
    {
      id: 9,
      name: "Kaavya Gala",
      role: "Maven",
      avatar: "/images/team/class_of_28/kaavya_team_image.jpeg",
      bio: "UI/UX and graphic designer. Helping DevClub with visual static content. I love traveling to different places",
      skills: ["UI Design", "Figma", "Framer", "Python", "JavaScript"],
      social: {
        github: "https://github.com/siddharthrao",
        linkedin: "https://linkedin.com/in/siddharthrao"
      },
      graduationYear: "2028",
      yearsActive: ["2024", "2025"]
    },
    {
      id: 10,
      name: "Shreyansh Agrawal",
      role: "Maven",
      avatar: "/images/team/class_of_28/shreyansh_team_image.jpeg",
      bio: "FullStack Web Developer at DevClub. Explorer and Content creator of the club. 'Influencer'",
      skills: ["React", "NodeJS", "Django", "MongoDB", "ExpressJS", "NextJS", "Content Creation"],
      social: {
        linkedin: "https://linkedin.com/in/ananyagupta",
        youtube: "https://www.youtube.com/@shreyansh_agrawal",
      },
      graduationYear: "2028",
      yearsActive: ["2024",]
    },
    {
      id: 11,
      name: "Yug Johri",
      role: "Maven",
      avatar: "/images/team/class_of_28/yug_team_image.jpeg",
      bio: "'I don't know I just got here'. Blockchain enthusiast and quick learner. The 'Johri' surname is justified.",
      skills: ["Blockchain", "Python", "Javascript", "BlockChain", "Prototyping"],
      social: {
        linkedin: "https://linkedin.com/in/ananyagupta",
      },
      graduationYear: "2028",
      yearsActive: ["2024", "2025"]
    },
    {
      id: 12,
      name: "Abhinav Bajpai",
      role: "Maven",
      avatar: "/images/team/class_of_28/abhinav_team_image.jpeg",
      bio: "App Development enthusiast at DevClub. Has found te perfect balance between DSA and Dev. Master Oogway of the club.",
      skills: ["UI/UX Design", "Figma", "Adobe XD", "User Research", "Prototyping"],
      social: {
        linkedin: "https://www.linkedin.com/in/abhinavbajpai30/",
      },
      graduationYear: "2028",
      yearsActive: ["2024", "2025"]
    },
    {
      id: 13,
      name: "Aryan Vibhuti",
      role: "Maven",
      avatar: "/images/team/class_of_28/aryan_team_image.jpeg",
      bio: "'Working from the shadows'. Red teamer and pen-testing expert. Cinematographer of the club.",
      skills: ["Penetration testing", "Cybersecurity", "Red Teaming", "Photography", "Filmmaking", "Python", "GoLang", "Javascript"],
      social: {
        linkedin: "https://www.linkedin.com/in/aryan-vibhuti-57b322163/",
      },
      graduationYear: "2028",
      yearsActive: ["2024", "2025"]
    },
    {
      id: 14,
      name: "Rudra Choudhary",
      role: "Maven",
      avatar: "/images/team/class_of_28/rudra_team_image.jpeg",
      bio: "'Working from the shadows'. Blue teamer and Networking geek. Potential 'Netaji (Policymaker)'",
      skills: ["Networking", "Cybersecurity", "Blue Teaming", "Filmmaking", "Python", "Javascript"],
      social: {
        linkedin: "https://www.linkedin.com/in/rudra-choudhary-b27b41306/",
      },
      graduationYear: "2028",
      yearsActive: ["2024", "2025"]
    },
  ];

  const allYears = [...new Set(teamMembers.flatMap(member => member.yearsActive))].sort((a, b) => b - a)
  const yearOptions = ["All Years", ...allYears]

  const filteredMembers = selectedYear === "All Years"
    ? teamMembers
    : teamMembers.filter(member => member.yearsActive.includes(selectedYear))

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  }

  const headingVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  }

  return (
    <div className='min-h-screen flex items-center flex-col p-2'>
      <motion.div
        className='text-center p-2'
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.h1
          className="text-3xl mb-2 font-bold"
          variants={headingVariants}
        >
          Meet Our Team
        </motion.h1>
        <motion.p
          className="dark:text-text-muted-dark text-text-muted-light mb-6"
          variants={headingVariants}
        >
          The passionate individuals behind DevClub who make everything possible.<br />
          Get to know the people driving innovation and building community.
        </motion.p>

        {/* Year Filter Dropdown */}
        <motion.div
          className="mb-8"
          variants={headingVariants}
        >
          <select
            value={selectedYear}
            onChange={(e) => setSelectedYear(e.target.value)}
            className="px-4 py-2 rounded-lg border border-gray-300 dark:border-white/20 bg-white dark:bg-black text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
          >
            {yearOptions.map(year => (
              <option key={year} value={year}>{year}</option>
            ))}
          </select>
          <p className="text-sm text-text-muted-light dark:text-text-muted-dark mt-2">
            Showing {filteredMembers.length} member{filteredMembers.length !== 1 ? 's' : ''}
            {selectedYear !== "All Years" && ` from ${selectedYear}`}
          </p>
        </motion.div>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-8 px-4 py-8 max-w-7xl"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        key={selectedYear}
      >
        {filteredMembers.map((member, index) => (
          <motion.div
            key={member.id}
            variants={cardVariants}
            custom={index}
          >
            <TeamCard {...member} />
          </motion.div>
        ))}
      </motion.div>

      {filteredMembers.length === 0 && (
        <motion.div
          className="text-center py-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <p className="text-gray-500 dark:text-gray-400">
            No team members found for {selectedYear}
          </p>
        </motion.div>
      )}
    </div>
  )
}

export default TeamPage
