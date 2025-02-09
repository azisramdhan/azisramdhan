import { Github, Linkedin, Mail, ChevronDown, Smartphone, Code, Rocket, MessageSquare, GitBranch, Box, RefreshCw } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="container mx-auto px-6 text-center">
          <img 
            src="/images/memoji-new.png" 
            alt="Profile" 
            className="w-32 h-32 rounded-full mx-auto mb-8 object-cover shadow-lg"
          />
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Azis R</h1>
          <p className="text-xl text-gray-600 mb-8">iOS Developer</p>
          <div className="flex justify-center gap-4 mb-12">
            <a href="https://github.com/azisramdhan" target="_blank" rel="noopener noreferrer" className="p-2 text-gray-600 hover:text-blue-600 transition-colors">
              <Github className="w-6 h-6" />
            </a>
            <a href="https://www.linkedin.com/in/azisramdhandarojat" target="_blank" rel="noopener noreferrer" className="p-2 text-gray-600 hover:text-blue-600 transition-colors">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="mailto:azisramdhan@icloud.com" className="p-2 text-gray-600 hover:text-blue-600 transition-colors">
              <Mail className="w-6 h-6" />
            </a>
          </div>
          <a href="#services" className="animate-bounce inline-block">
            <ChevronDown className="w-8 h-8 text-gray-400" />
          </a>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">My Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ServiceCard 
              icon={<Smartphone />}
              title="iOS Development"
              description="Native iOS app development with Swift and SwiftUI"
            />
            <ServiceCard 
              icon={<Code />}
              title="Swift Programming"
              description="Swift programming with best practices and modern architecture"
            />
            <ServiceCard 
              icon={<Rocket />}
              title="App Store Deployment"
              description="App release management and App Store optimization"
            />
            <ServiceCard 
              icon={<MessageSquare />}
              title="Consultation"
              description="iOS app development consultation for your business"
            />
          </div>
        </div>
      </section>

      {/* CI/CD Workflow Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Development Workflow</h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <WorkflowCard
                icon={<GitBranch />}
                title="Version Control"
                description="Git workflow with feature branches, code review process, and merge strategies"
                details={[
                  "Feature branch workflow",
                  "Pull request reviews",
                  "Protected main branch",
                  "Automated merge checks"
                ]}
              />
              <WorkflowCard
                icon={<RefreshCw />}
                title="CI with Jenkins"
                description="Automated build and test pipeline using Jenkins"
                details={[
                  "Automated builds",
                  "Unit test execution",
                  "Code quality checks",
                  "Parallel test execution"
                ]}
              />
              <WorkflowCard
                icon={<Box />}
                title="CD with Fastlane"
                description="Automated deployment pipeline using Fastlane"
                details={[
                  "Automated versioning",
                  "TestFlight deployment",
                  "App Store submission",
                  "Screenshot generation"
                ]}
              />
            </div>
            <div className="mt-12 bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-4">CI/CD Pipeline Overview</h3>
              <div className="space-y-4">
                <PipelineStep 
                  number="1"
                  title="Code Push & PR Creation"
                  description="Developer pushes code and creates a pull request"
                />
                <PipelineStep 
                  number="2"
                  title="Jenkins Build & Test"
                  description="Jenkins automatically builds the project and runs test suite"
                />
                <PipelineStep 
                  number="3"
                  title="Code Review & Approval"
                  description="Team reviews code and approves changes"
                />
                <PipelineStep 
                  number="4"
                  title="Fastlane Deployment"
                  description="Automated deployment to TestFlight or App Store using Fastlane"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Portfolio</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <PortfolioCard
              image="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=500"
              title="Fitness Tracker App"
              description="Fitness tracking app with HealthKit integration"
              tags={['Swift', 'HealthKit', 'CoreData']}
            />
            <PortfolioCard
              image="https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?auto=format&fit=crop&q=80&w=500"
              title="E-commerce App"
              description="E-commerce app with in-app purchases"
              tags={['SwiftUI', 'Combine', 'StoreKit']}
            />
            <PortfolioCard
              image="https://images.unsplash.com/photo-1573152958734-1922c188fba3?auto=format&fit=crop&q=80&w=500"
              title="Social Media App"
              description="Social media app with real-time chat features"
              tags={['UIKit', 'Firebase', 'MessageKit']}
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Contact Me</h2>
          <div className="max-w-lg mx-auto">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                <input
                  type="text"
                  id="name"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-6 text-center">
          <p>© 2025 Azis R. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function ServiceCard({ icon, title, description }: ServiceCardProps) {
  return (
    <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

interface WorkflowCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  details: string[];
}

function WorkflowCard({ icon, title, description, details }: WorkflowCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <ul className="space-y-2">
        {details.map((detail: string, index: number) => (
          <li key={index} className="flex items-center text-sm text-gray-600">
            <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
            {detail}
          </li>
        ))}
      </ul>
    </div>
  );
}

interface PipelineStepProps {
  number: string;
  title: string;
  description: string;
}

function PipelineStep({ number, title, description }: PipelineStepProps) {
  return (
    <div className="flex items-start">
      <div className="flex-shrink-0 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-semibold">
        {number}
      </div>
      <div className="ml-4">
        <h4 className="text-lg font-semibold text-gray-900">{title}</h4>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
}

interface PortfolioCardProps {
  image: string;
  title: string;
  description: string;
  tags: string[];
}

function PortfolioCard({ image, title, description, tags }: PortfolioCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span 
              key={index}
              className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;