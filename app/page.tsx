import { allPosts } from "@/.contentlayer/generated"
import Link from "next/link"
import Image from "next/image"

export default function Home() {
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="text-center section-spacing py-8">
      <h1 className="header-style">Welcome to My Portfolio</h1>
        <div className="space-y-8 p-8 border-style">

          {/* Profile + Intro */}
          <div className="flex flex-col md:flex-row items-center md:items-start md:justify-center gap-8 max-w-5xl mx-auto">
            {/* Profile Picture + Social Buttons */}
            <div className="flex-shrink-0 flex flex-col items-center gap-4">
              <img
                src="profile.jpg"
                alt="Profile Icon"
                className="w-40 h-40 rounded-full object-cover border-style"
              />
              <p>
                Adam Berndt
              </p>
              <div className="flex gap-4">
                <a
                  href="https://www.linkedin.com/in/adam-berndt-6778a4211"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  LinkedIn
                </a>
                <a
                  href="https://github.com/adamant-213"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                >
                  GitHub
                </a>

              </div>
            </div>

            {/* Paragraph */}
            <div className="text-left md:text-left py-2 max-w-3xl">
            <p className="doc-text">
            I&rsquo;m Adam Berndt, a software and systems engineer with a background in networking, IT, and software development.
             I&rsquo;ve worked on automation, enterprise systems, and analytics in manufacturing, with experience in C#, Java, and Bash.
              While much of my recent work is proprietary, this site showcases my personal and academic projects, 
              from full-stack web apps to Linux automation, reflecting my focus on solving practical problems with technology.
            </p>
            </div>
          </div>
        </div>

        {/* Main Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="#blog-section" className="btn-primary text-lg">
            Explore Articles
          </Link>
          <Link href="/about" className="btn-secondary text-lg">
            Learn More About Me
          </Link>
        </div>
      </section>

      {/* Exposition Section */}
      <section className="max-w-4xl mx-auto section-spacing">
        <div className="prose dark:prose-invert prose-lg max-w-none">
          <h2 className="section-title mb-8">What You Will Find Here</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400">
                🚀 Resume & Transcripts
              </h3>
              <p className="doc-text">
                This section introduces me and also offers previews of my resume and transcript
              </p>
              <Link href="/about/#info-section" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 font-medium">
                Browse About Me →
              </Link>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-purple-600 dark:text-purple-400">
                🎨 Documentation
              </h3>
              <p className="doc-text">
                This section shows documentation I have written throughout my academic career
              </p>
              <Link href="/documentation" className="text-purple-600 hover:text-purple-700 dark:text-purple-400 dark:hover:text-purple-300 font-medium">
                Browse Documentation →
              </Link>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-green-600 dark:text-green-400">
                🔧 Photo Dumps
              </h3>
              <p className="doc-text">
                Still under development
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-orange-600 dark:text-orange-400">
                💡 Employment Experience
              </h3>
              <p className="doc-text">
                Still under development
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Images Section */}
      <section className="max-w-6xl mx-auto section-spacing">
        <h2 className="text-3xl font-bold text-center">Featured Work</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="group cursor-pointer">
            <div className="feature-image">
              <Image
                src="/blog-post-1.jpg"
                alt="Modern web development"
                width={400}
                height={250}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <div className="feature-overlay">
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="font-semibold">Web Development</h3>
                  <p className="text-sm opacity-90">WIP</p>
                </div>
              </div>
            </div>
          </div>

          <div className="group cursor-pointer">
            <div className="feature-image">
              <Image
                src="/blog-post-2.jpg"
                alt="Design systems"
                width={400}
                height={250}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <div className="feature-overlay">
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="font-semibold">System Design</h3>
                  <p className="text-sm opacity-90">WIP</p>
                </div>
              </div>
            </div>
          </div>

          <div className="group cursor-pointer">
            <div className="feature-image">
              <Image
                src="/blog-post-3.jpg"
                alt="Performance optimization"
                width={400}
                height={250}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <div className="feature-overlay">
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="font-semibold">Scripting</h3>
                  <p className="text-sm opacity-90">WIP</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Documents & Resources Section */}
      <section className="max-w-4xl mx-auto section-spacing">
        <h2 className="text-3xl font-bold text-center">Resources & Documents</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="p-8 rounded-lg border border-style hover:border-blue-300 dark:hover:border-blue-700 transition-colors">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold">Technical Guides</h3>
            </div>
            <p className="doc-text mb-4">
              This link will take you to my documentation page where I have posted guides written throughout my academic career
            </p>
            <Link href="/documentation/#network-section" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 font-medium">
              Browse Guides →
            </Link>
          </div>

          <div className="p-8 rounded-lg border border-style hover:border-purple-300 dark:hover:border-purple-700 transition-colors">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold">Code Projects</h3>
            </div>
            <p className="doc-text mb-4">
              This link will take you to my code page where I have posted various projects I&apos;ve worked on over the years
            </p>
            <Link href="/codelinks" className="text-purple-600 hover:text-purple-700 dark:text-purple-400 dark:hover:text-purple-300 font-medium">
              Browse Code →
            </Link>
          </div>
        </div>
      </section>

      {/* Blog Posts Section */}
      <section id="blog-section" className="section-spacing">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold">Latest Articles</h2>
          <p className="text-lg doc-text max-w-2xl mx-auto">
            Most recent articles will be posted here
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allPosts.map((post) => (
            <article key={post._id} className="group">
              <Link href={post.slug} className="block">
                <div className="card">
                  <h3 className="text-xl font-semibold group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors mb-3">
                    {post.title}
                  </h3>
                  {post.description && (
                    <p className="doc-text mb-4">
                      {post.description}
                    </p>
                  )}
                  {post.date && (
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-slate-500 dark:text-slate-500">
                        {new Date(post.date).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}
                      </span>
                      <span className="text-sm text-blue-600 dark:text-blue-400 font-medium group-hover:translate-x-1 transition-transform">
                        Read more →
                      </span>
                    </div>
                  )}
                </div>
              </Link>
            </article>
          ))}
        </div>

        {allPosts.length > 0 && (
          <div className="text-center">
            <Link
              href="/articles"
              className="btn-dark"
            >
              View All Articles
            </Link>
          </div>
        )}
      </section>

      {/* Call to Action Section */}
      <section className="text-center section-spacing bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950 dark:to-purple-950 rounded-2xl p-8">
        <h2 className="text-3xl font-bold">Ready to Dive Deeper?</h2>
        <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
          Reach out to me on GitHub, LinkedIn, or email me direct!
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/about/#socials-section"
            className="btn-primary"
          >
            Get in Touch
          </Link>
          <Link
            href="#blog-section"
            className="btn-secondary"
          >
            Explore More
          </Link>
        </div>
      </section>
    </div>
  )
}
