import { allPosts } from "@/.contentlayer/generated"
import Link from "next/link"
import Image from "next/image"

export default function Home() {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="text-center space-y-8 py-12">
        <div className="space-y-6">
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
            Welcome to My Portfolio
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 max-w-4xl mx-auto leading-relaxed">
          Im a software and systems engineer with a background in computer networking and a focus on software development. Ive contributed to high-impact engineering projects in manufacturing environments, developing tools and automation in languages like C#, Java, and Bash. 
          My professional experience includes working with cross-functional teams, maintaining complex enterprise systems, and developing business analytics dashboards and internal platforms.
          While much of my recent work at Starplus Energy and BorgWarner was developed within corporate settings and cant be publicly shared, this website showcases my personal and academic projects, as well as the skills Im currently sharpening. 
          Whether its building full-stack web apps with Next.js and Tailwind or scripting automation in Linux environments, Im always seeking to solve practical problems through technology.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            href="#blog-section" 
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-medium transition-colors text-lg"
          >
            Explore Articles
          </Link>
          <Link 
            href="/about" 
            className="inline-flex items-center gap-2 border-2 border-slate-300 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 px-8 py-4 rounded-lg font-medium transition-colors text-lg"
          >
            Learn More About Me
          </Link>
        </div>
      </section>

      {/* Exposition Section */}
      <section className="max-w-4xl mx-auto space-y-8">
        <div className="prose dark:prose-invert prose-lg max-w-none">
          <h2 className="text-3xl font-bold text-center mb-8">What You Will Find Here</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400">
                🚀 Academic Development
              </h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                TEST
              </p>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-purple-600 dark:text-purple-400">
                🎨 Documentation
              </h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                TEST2
              </p>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-green-600 dark:text-green-400">
                🔧 Photo Dumps
              </h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                TEST3
              </p>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-orange-600 dark:text-orange-400">
                💡 Employment Experience
              </h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                TEST4
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Images Section */}
      <section className="max-w-6xl mx-auto space-y-8">
        <h2 className="text-3xl font-bold text-center">Featured Work</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="group cursor-pointer">
            <div className="relative overflow-hidden rounded-lg shadow-lg group-hover:shadow-xl transition-shadow">
              <Image 
                src="/blog-post-1.jpg" 
                alt="Modern web development" 
                width={400} 
                height={250}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="font-semibold">Web Development</h3>
                  <p className="text-sm opacity-90">TEST5</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="group cursor-pointer">
            <div className="relative overflow-hidden rounded-lg shadow-lg group-hover:shadow-xl transition-shadow">
              <Image 
                src="/blog-post-2.jpg" 
                alt="Design systems" 
                width={400} 
                height={250}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="font-semibold">Design Systems</h3>
                  <p className="text-sm opacity-90">TEST6</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="group cursor-pointer">
            <div className="relative overflow-hidden rounded-lg shadow-lg group-hover:shadow-xl transition-shadow">
              <Image 
                src="/blog-post-3.jpg" 
                alt="Performance optimization" 
                width={400} 
                height={250}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="font-semibold">Performance</h3>
                  <p className="text-sm opacity-90">TEST7</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Documents & Resources Section */}
      <section className="max-w-4xl mx-auto space-y-8">
        <h2 className="text-3xl font-bold text-center">Resources & Documents</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="p-6 rounded-lg border border-slate-200 dark:border-slate-800 hover:border-blue-300 dark:hover:border-blue-700 transition-colors">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold">Technical Guides</h3>
            </div>
            <p className="text-slate-600 dark:text-slate-400 mb-4">
              TEST8
            </p>
            <Link href="#blog-section" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 font-medium">
              Browse Guides →
            </Link>
          </div>
          
          <div className="p-6 rounded-lg border border-slate-200 dark:border-slate-800 hover:border-purple-300 dark:hover:border-purple-700 transition-colors">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold">Code Examples</h3>
            </div>
            <p className="text-slate-600 dark:text-slate-400 mb-4">
              TEST9
            </p>
            <Link href="#blog-section" className="text-purple-600 hover:text-purple-700 dark:text-purple-400 dark:hover:text-purple-300 font-medium">
              View Examples →
            </Link>
          </div>
        </div>
      </section>

      {/* Blog Posts Section */}
      <section id="blog-section" className="space-y-8">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold">Latest Articles</h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            TEST10
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allPosts.map((post) => (
            <article key={post._id} className="group">
              <Link href={post.slug} className="block">
                <div className="p-6 rounded-lg border border-slate-200 dark:border-slate-800 hover:border-blue-300 dark:hover:border-blue-700 transition-all duration-300 hover:shadow-lg">
                  <h3 className="text-xl font-semibold group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors mb-3">
                    {post.title}
                  </h3>
                  {post.description && (
                    <p className="text-slate-600 dark:text-slate-400 mb-4 leading-relaxed">
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
              className="inline-flex items-center gap-2 bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 hover:bg-slate-800 dark:hover:bg-slate-200 px-6 py-3 rounded-lg font-medium transition-colors"
            >
              View All Articles
            </Link>
          </div>
        )}
      </section>

      {/* Call to Action Section */}
      <section className="text-center space-y-6 py-12 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950 dark:to-purple-950 rounded-2xl">
        <h2 className="text-3xl font-bold">Ready to Dive Deeper?</h2>
        <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
          TEST11
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            href="/about" 
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
          >
            Get in Touch
          </Link>
          <Link 
            href="#blog-section" 
            className="inline-flex items-center gap-2 border border-slate-300 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 px-6 py-3 rounded-lg font-medium transition-colors"
          >
            Explore More
          </Link>
        </div>
      </section>
    </div>
  )
}
