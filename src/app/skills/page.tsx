import PortfolioLayout from '../components/PortfolioLayout';
import { HiCode, HiShieldCheck, HiLightningBolt, HiCube } from 'react-icons/hi';

export default function Skills() {
  const skillCategories = [
    { 
      category: 'Languages', 
      skills: ['C/C++', 'Java', 'Python', 'Swift', 'SQL', 'R', 'HTML/CSS', 'Assembly', 'Bash', 'JavaScript', 'TypeScript'] 
    },
    { 
      category: 'Technologies', 
      skills: ['AWS', 'Docker', 'Google Cloud Platform', 'Git', 'Hadoop', 'Spark', 'Kafka', 'PostgreSQL', 'MySQL', 'REST APIs', 'Blockchain', 'Web3', 'NFT', 'Stripe', 'OpenAI', 'Blender'] 
    },
    { 
      category: 'Frameworks & Libraries', 
      skills: ['Django', 'PyTorch', 'Spring Boot', 'JUnit', 'Mockito', 'Pandas', 'Elasticsearch', 'React', 'Next.js', 'FastAPI', 'Prisma', 'Clerk', 'Framer Motion', 'Tailwind CSS', 'CUDA'] 
    },
    { 
      category: 'Coursework', 
      skills: ['Computer Graphics', 'Computer Vision', 'Operating Systems', 'Big Data', 'Algorithms', 'Data Structures', 'Machine Organization', 'Discrete Math', 'Linear Algebra', 'Introduction to AI', 'Introductory Applied Statistics', 'Object Oriented Programming'] 
    }
  ];


  return (
    <PortfolioLayout>
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-[var(--console-primary)] mb-6">
          {'< SKILLS & EXPERTISE />'}
        </h2>
        
        {/* Technical Skills */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {skillCategories.map((group) => (
            <div 
              key={group.category}
              className="bg-[var(--console-bg-light)] p-6 rounded-lg border border-[var(--console-border)]"
            >
              <h3 className="text-lg font-bold text-[var(--console-secondary)] mb-4">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span 
                    key={skill}
                    className="px-3 py-1 bg-[var(--console-bg)] rounded text-sm text-[var(--console-text)] border border-[var(--console-border)] hover:border-[var(--console-primary)] transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Professional Experience Highlights */}
        <div className="bg-[var(--console-bg-light)] p-6 rounded-lg border border-[var(--console-border)]">
          <h3 className="text-lg font-bold text-[var(--console-secondary)] mb-4">
            Professional Experience Highlights
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-semibold text-[var(--console-accent)] mb-2">Scale & Impact</h4>
              <ul className="space-y-2 text-[var(--console-text)]">
                <li>• Served 800+ remote employees daily</li>
                <li>• Enhanced security for 500,000+ loan applications</li>
                <li>• Managed 1,000+ database entries</li>
                <li>• Reduced data breaches by 20%</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-[var(--console-accent)] mb-2">Key Achievements</h4>
              <ul className="space-y-2 text-[var(--console-text)]">
                <li>• Saved 10+ hours of meeting time weekly</li>
                <li>• Built end-to-end full-stack applications</li>
                <li>• Optimized blockchain transaction monitoring</li>
                <li>• Implemented security and verification systems</li>
                <li>• Designed scalable database architectures</li>
              </ul>
            </div>
          </div>
        </div>


        {/* Areas of Interest */}
        <div className="bg-[var(--console-bg-light)] p-6 rounded-lg border border-[var(--console-border)]">
          <h3 className="text-lg font-bold text-[var(--console-secondary)] mb-4">
            Areas of Interest & Expertise
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="text-center p-4 bg-[var(--console-bg)] rounded border border-[var(--console-border)]">
              <HiCode className="text-4xl mb-2 mx-auto text-[var(--console-primary)]" />
              <h4 className="font-semibold text-[var(--console-primary)] mb-2">Full-Stack Development</h4>
              <p className="text-sm text-[var(--console-text-dim)]">End-to-end application development with modern frameworks</p>
            </div>
            <div className="text-center p-4 bg-[var(--console-bg)] rounded border border-[var(--console-border)]">
              <HiCube className="text-4xl mb-2 mx-auto text-[var(--console-primary)]" />
              <h4 className="font-semibold text-[var(--console-primary)] mb-2">Blockchain & Web3</h4>
              <p className="text-sm text-[var(--console-text-dim)]">NFT platforms, transaction monitoring, and decentralized applications</p>
            </div>
            <div className="text-center p-4 bg-[var(--console-bg)] rounded border border-[var(--console-border)]">
              <HiShieldCheck className="text-4xl mb-2 mx-auto text-[var(--console-primary)]" />
              <h4 className="font-semibold text-[var(--console-primary)] mb-2">Security & Data Protection</h4>
              <p className="text-sm text-[var(--console-text-dim)]">Building secure systems and protecting user data</p>
            </div>
            <div className="text-center p-4 bg-[var(--console-bg)] rounded border border-[var(--console-border)]">
              <HiLightningBolt className="text-4xl mb-2 mx-auto text-[var(--console-primary)]" />
              <h4 className="font-semibold text-[var(--console-primary)] mb-2">System Design & Scalability</h4>
              <p className="text-sm text-[var(--console-text-dim)]">Designing systems that scale to hundreds of thousands of users</p>
            </div>
          </div>
        </div>
      </div>
    </PortfolioLayout>
  );
}