// import React, { useState, useEffect, useRef } from "react";
// import { motion } from "framer-motion";
// import { Sun, Moon, Menu, X, Play, Award, Clock, BarChart2 } from "lucide-react";

// // NOTE: This file is designed for a Create React App environment with Tailwind CSS enabled.
// // Replace Google Form links and image placeholders with your real links/assets before deploying.

// // ---------------------- Navbar ----------------------
// function Navbar({ darkMode, toggleDarkMode, onNavigate }) {
//   const [open, setOpen] = useState(false);
//   return (
//     <header className={`sticky top-0 z-50 ${darkMode ? "bg-gray-900/80" : "bg-white/80"} backdrop-blur`}> 
//       <div className="max-w-6xl mx-auto flex items-center justify-between p-4">
//         <div className="flex items-center gap-3">
//           <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center text-white font-bold">ML</div>
//           <div>
//             <h1 className={`font-semibold text-lg ${darkMode ? "text-white" : "text-gray-900"}`}>Machine Learning by Mehmood</h1>
//             <div className="text-xs text-gray-500">AI · ML · NLP</div>
//           </div>
//         </div>

//         <nav className="hidden md:flex items-center gap-6">
//           <a onClick={() => onNavigate("home")} className="cursor-pointer">Home</a>
//           <a onClick={() => onNavigate("courses")} className="cursor-pointer">Courses</a>
//           <a onClick={() => onNavigate("features")} className="cursor-pointer">Features</a>
//           <a onClick={() => onNavigate("testimonials")} className="cursor-pointer">Testimonials</a>
//           <a onClick={() => onNavigate("contact")} className="cursor-pointer">Contact</a>
//           <button onClick={toggleDarkMode} aria-label="Toggle dark mode" className="p-2 rounded-full hover:scale-105 transition bg-gray-100 dark:bg-gray-800">
//             {darkMode ? <Sun className="w-5 h-5 text-yellow-400" /> : <Moon className="w-5 h-5 text-gray-700" />}
//           </button>
//         </nav>

//         <div className="md:hidden flex items-center gap-2">
//           <button onClick={toggleDarkMode} className="p-2 rounded-full bg-gray-100 dark:bg-gray-800">
//             {darkMode ? <Sun className="w-5 h-5 text-yellow-400" /> : <Moon className="w-5 h-5 text-gray-700" />}
//           </button>
//           <button onClick={() => setOpen(!open)} className="p-2 rounded-md bg-gray-100 dark:bg-gray-800">
//             {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
//           </button>
//         </div>
//       </div>

//       {open && (
//         <div className={`md:hidden ${darkMode ? "bg-gray-900" : "bg-white"} border-t`}> 
//           <div className="flex flex-col p-4 gap-3 max-w-6xl mx-auto">
//             <a onClick={() => { onNavigate("home"); setOpen(false); }} className="cursor-pointer">Home</a>
//             <a onClick={() => { onNavigate("courses"); setOpen(false); }} className="cursor-pointer">Courses</a>
//             <a onClick={() => { onNavigate("features"); setOpen(false); }} className="cursor-pointer">Features</a>
//             <a onClick={() => { onNavigate("testimonials"); setOpen(false); }} className="cursor-pointer">Testimonials</a>
//             <a onClick={() => { onNavigate("contact"); setOpen(false); }} className="cursor-pointer">Contact</a>
//           </div>
//         </div>
//       )}
//     </header>
//   );
// }

// // ---------------------- Hero ----------------------
// function Hero({ darkMode, onBrowse }) {
//   return (
//     <section id="home" className={`${darkMode ? "bg-gradient-to-br from-gray-900 to-gray-800" : "bg-gradient-to-br from-blue-50 to-indigo-50"} py-20`}> 
//       <div className="max-w-6xl mx-auto px-6 md:px-8 flex flex-col-reverse md:flex-row items-center gap-8">
//         <div className="flex-1">
//           <motion.h2 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className={`text-3xl md:text-4xl font-extrabold ${darkMode ? "text-white" : "text-gray-900"}`}>
//             Learn Machine Learning, Deep Learning & NLP with Mehmood
//           </motion.h2>
//           <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.15 }} className={`${darkMode ? "text-gray-300" : "text-gray-700"} mt-4 max-w-xl`}>Interactive, project-based courses to help you go from zero to building real AI projects.</motion.p>

//           <div className="mt-6 flex flex-wrap gap-4">
//             <motion.button onClick={onBrowse} whileHover={{ scale: 1.03 }} className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-5 py-3 rounded-full shadow-lg hover:shadow-2xl transition">
//               <Play className="w-5 h-5" />
//               Browse Courses
//             </motion.button>

//               <a
//                 href="https://forms.gle/yournewsletterform"
//                 target="_blank"
//                 rel="noreferrer"
//                 className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-gray-300 dark:border-gray-700 
//                           text-gray-700 dark:text-gray-200 
//                           bg-white dark:bg-gray-900 
//                           hover:bg-gradient-to-r hover:from-indigo-500 hover:to-purple-500 
//                           hover:text-white transition-all duration-300 shadow-sm"
//               >
//                 <Award className="w-4 h-4" />
//                 Join Newsletter
//               </a>

//           </div>

//           <div className="mt-8 flex gap-6">
//             <div className="text-center">
//               <div className={`text-2xl font-bold ${darkMode ? "text-white" : "text-gray-900"}`}>100+</div>
//               <div className="text-sm text-gray-500">Students Enrolled</div>
//             </div>

//             <div className="text-center">
//               <div className={`text-2xl font-bold ${darkMode ? "text-white" : "text-gray-900"}`}>15</div>
//               <div className="text-sm text-gray-500">Projects Built</div>
//             </div>
//           </div>
//         </div>

//         <div className="flex-1 flex justify-center">
//           <div className="w-full max-w-md p-6 rounded-2xl shadow-lg bg-white dark:bg-gray-800">
//             <img src="/hologram.png" alt="Future of AI" className="w-full h-48 object-contain" />
//             <div className="mt-4 text-sm text-gray-600 dark:text-gray-300">Start with foundational concepts and move to advanced topics with hands-on notebooks and projects.</div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// // ---------------------- Course Card ----------------------
// function CourseCard({ course, darkMode }) {
//   return (
//     <motion.div
//       whileHover={{ y: -6 }}
//       className={`p-5 rounded-2xl shadow-md flex flex-col justify-between ${
//         darkMode ? "bg-gray-800 text-gray-200" : "bg-white text-gray-800"
//       }`}
//     >
//       {/* Top Content */}
//       <div>
//         <div className="flex items-center gap-3">
//           <div className="p-3 rounded-lg bg-gradient-to-br from-blue-600 to-indigo-600 text-white">
//             <BarChart2 className="w-5 h-5" />
//           </div>
//           <div>
//             <h3 className="text-lg font-semibold">{course.title}</h3>
//             <div className="text-sm text-gray-500">
//               {course.level} • {course.duration}
//             </div>
//           </div>
//         </div>

//         <p className="mt-4 text-sm text-gray-500 dark:text-gray-300">
//           {course.description}
//         </p>

//         <div className="mt-4 flex gap-4 text-sm text-gray-500 dark:text-gray-400">
//           <div className="flex items-center gap-2">
//             <Clock className="w-4 h-4" /> {course.weeks} weeks
//           </div>
//           <div className="flex items-center gap-2">
//             <Award className="w-4 h-4" /> Certificate
//           </div>
//         </div>
//       </div>

//       {/* Progress bar */}
//       <div className="mt-4">
//       </div>

//       {/* Centered Button */}
//       <div className="mt-6 flex justify-center">
//         <a
//           href={course.link}
//           target="_blank"
//           rel="noopener noreferrer"
//           className="w-half"
//         >
//           <button className="w-half inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-orange-500 to-pink-500 text-white shadow-lg hover:scale-105 transition">
//             Register Now
//           </button>
//         </a>
//       </div>
//     </motion.div>
//   );
// }


// // ---------------------- Courses Section ----------------------
// function Courses({ darkMode }) {
//   const data = [
//     { title: "Machine Learning Basics", description: "Foundations: linear models, trees, evaluation, Python labs.", level: "Beginner", duration: "6 weeks", weeks: 6, link: "https://forms.gle/HmhP4DEC8Q3q4Syw8" },
//     { title: "Deep Learning Advanced", description: "Neural nets, CNNs, RNNs, transformers, projects.", level: "Advanced", duration: "8 weeks", weeks: 8, link: "https://forms.gle/yourformlink2" },
//     { title: "Natural Language Processing", description: "Text processing, embeddings, sequence models, transformers.", level: "Intermediate", duration: "6 weeks", weeks: 6, link: "https://forms.gle/yourformlink3" },
//   ];

//   return (
//     <section id="courses" className={`${darkMode ? "bg-gray-900" : "bg-gray-50"} py-16`}> 
//       <div className="max-w-6xl mx-auto px-6 md:px-8">
//         <h2 className={`text-2xl md:text-3xl font-bold text-center mb-8 ${darkMode ? "text-white" : "text-gray-900"}`}>Available Courses</h2>

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//           {data.map((c, i) => <CourseCard key={i} course={c} darkMode={darkMode} />)}
//         </div>

//         <div className="mt-10 flex justify-center">
//           <a href="#courses" onClick={(e)=>e.preventDefault()} className="inline-block">
//             <button onClick={() => document.getElementById('courses').scrollIntoView({ behavior: 'smooth' })} className="mt-6 inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-full shadow-lg hover:shadow-2xl transition">
//               <Play className="w-5 h-5" /> Explore all courses
//             </button>
//           </a>
//         </div>
//       </div>
//     </section>
//   );
// }

// // ---------------------- Certificates & Badges ----------------------
// function Certificates({ darkMode }) {
//   return (
//     <section id="features" className={`${darkMode ? "bg-gray-800" : "bg-white"} py-12`}> 
//       <div className="max-w-6xl mx-auto px-6 md:px-8 grid md:grid-cols-2 gap-8 items-center">
//         <div>
//           <h3 className={`text-2xl font-bold ${darkMode ? "text-white" : "text-gray-900"}`}>Earn Certificates & Badges</h3>
//           <p className={`mt-4 ${darkMode ? "text-gray-300" : "text-gray-600"}`}>Complete course projects and quizzes to earn shareable certificates and badges that you can add to your LinkedIn or resume.</p>
//           <div className="mt-6 flex gap-3">
//             <img src="/certificate-sample.png" alt="certificate" className="w-40 h-auto rounded-md shadow" />
//             <img src="/badge-sample.png" alt="badge" className="w-20 h-auto rounded-md shadow" />
//           </div>
//         </div>

//         <div>
//           <h4 className={`text-lg font-semibold ${darkMode ? "text-white" : "text-gray-900"}`}>How it works</h4>
//           <ol className={`mt-4 list-decimal ml-5 ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
//             <li>Register via the Google Form.</li>
//             <li>Complete the course assignments and final project.</li>
//             <li>Submit your project for review; receive certificate and badge.</li>
//           </ol>
//         </div>
//       </div>
//     </section>
//   );
// }

// // ---------------------- Testimonials Carousel ----------------------
// function Testimonials({ darkMode }) {
//   const items = [
//     { name: "Shahid", text: "Thank you so much, sir. All the sessions were really beneficial and informative. Plz keep it up and keep educating others with the same spirit." },
//     { name: "Ahmad", text: "I must say, before joining this course, I didn't even have 0.5% knowledge of Machine Learning. But in this course, I learned a lot. I wouldn't have learned anything if it weren't of your hard work. Thank you sir you taught us really well without thinking of any benefits." },
//     { name: "Ahmad Sana Farooq", text: "Sir I really appreciate your efforts for this course. You really taught us a lot. Even before this course, I only knew about two ML algorithms. I also did many projects. Before this course, I had taken a course on Big Data. I paid 28k for this course, and my experience was very bad. After this course, I will move forward and keep practicing. Once again, I am very grateful to you and also appreciate your teaching method." },
//     { name: "Ali", text: "The ML course gave me the confidence to start projects on my own." },
//     { name: "Sara", text: "Clear explanations and practical exercises. Highly recommended!" },
//   ];

//   const [index, setIndex] = useState(0);
//   useEffect(() => {
//     const t = setInterval(() => setIndex(i => (i + 1) % items.length), 5000);
//     return () => clearInterval(t);
//   }, []);

//   return (
//     <section id="testimonials" className={`${darkMode ? "bg-gray-900" : "bg-gray-50"} py-16`}> 
//       <div className="max-w-4xl mx-auto px-6 text-center">
//         <h3 className={`text-2xl font-bold ${darkMode ? "text-white" : "text-gray-900"}`}>What Students Say</h3>
//         <motion.div key={index} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className={`mt-6 p-8 rounded-2xl shadow ${darkMode ? "bg-gray-800 text-gray-200" : "bg-white text-gray-800"}`}>
//           <p className="italic">“{items[index].text}”</p>
//           <div className="mt-4 font-semibold">- {items[index].name}</div>
//         </motion.div>

//         <div className="flex justify-center gap-2 mt-6">
//           {items.map((_, i) => (
//             <button key={i} onClick={() => setIndex(i)} className={`w-3 h-3 rounded-full ${i === index ? "bg-blue-600" : "bg-gray-300"}`}></button>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// // ---------------------- FAQ ----------------------
// function FAQ({ darkMode }) {
//   const faqs = [
//     { q: "Are the courses free?", a: "Some modules are free; advanced tracks are paid. You can register to get details via form." },
//     { q: "Do I need programming experience?", a: "Basic Python knowledge helps, but we include starter labs for beginners." },
//     { q: "How do I get the certificate?", a: "Complete assignments and submit final project for review to receive certificate." },
//   ];

//   return (
//     <section id="faq" className={`${darkMode ? "bg-gray-800" : "bg-white"} py-12`}> 
//       <div className="max-w-4xl mx-auto px-6">
//         <h3 className={`text-2xl font-bold text-center ${darkMode ? "text-white" : "text-gray-900"}`}>FAQ</h3>
//         <div className="mt-6 space-y-4">
//           {faqs.map((f, i) => (
//             <details key={i} className={`p-4 rounded-lg shadow ${darkMode ? "bg-gray-700 text-gray-200" : "bg-gray-50 text-gray-800"}`}>
//               <summary className="font-semibold cursor-pointer">{f.q}</summary>
//               <p className="mt-2">{f.a}</p>
//             </details>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// // ---------------------- Newsletter ----------------------
// function Newsletter({ darkMode }) {
//   return (
//     <section className={`${darkMode ? "bg-gray-900" : "bg-indigo-50"} py-12`}> 
//       <div className="max-w-3xl mx-auto px-6 text-center">
//         <h4 className={`text-xl font-bold ${darkMode ? "text-white" : "text-gray-900"}`}>Get course updates & free resources</h4>
//         <p className={`${darkMode ? "text-gray-300" : "text-gray-700"} mt-2`}>Subscribe to the newsletter — we’ll send updates, tips, and project ideas.</p>
//         <div className="mt-6 flex justify-center">
//           <a href="https://forms.gle/yournewsletterform" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-4 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full shadow">Subscribe</a>
//         </div>
//       </div>
//     </section>
//   );
// }

// // ---------------------- Footer ----------------------
// function Footer({ darkMode }) {
//   return (
//     <footer className={`${darkMode ? "bg-gray-900" : "bg-gray-100"} py-8 mt-8`}>
//       <div className="max-w-6xl mx-auto px-6 text-center text-sm text-gray-500">
//         <div>© {new Date().getFullYear()} Machine Learning by Mehmood. All rights reserved.</div>
//         <div className="mt-3 flex justify-center gap-6">
//           <a href="https://github.com/mehmoodulhaq570" target="_blank" rel="noreferrer">GitHub</a>
//           <a href="https://www.linkedin.com/in/mehmodulhaq570/" target="_blank" rel="noreferrer">LinkedIn</a>
//           <a href="mailto:mehmoodulhaq1040@gmail.com">Email</a>
//         </div>
//       </div>
//     </footer>
//   );
// }

// // ---------------------- App (Main) ----------------------
// export default function App() {
//   const [darkMode, setDarkMode] = useState(false);
//   const homeRef = useRef(null);
//   const coursesRef = useRef(null);
//   const featuresRef = useRef(null);
//   const testimonialsRef = useRef(null);
//   const contactRef = useRef(null);

//   useEffect(() => {
//     // Respect system preference
//     const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
//     setDarkMode(prefersDark);
//   }, []);

//   useEffect(() => {
//     if (darkMode) document.documentElement.classList.add('dark');
//     else document.documentElement.classList.remove('dark');
//   }, [darkMode]);

//   function scrollTo(id) {
//     const map = { home: document.getElementById('home'), courses: document.getElementById('courses'), features: document.getElementById('features'), testimonials: document.getElementById('testimonials'), contact: document.getElementById('faq') };
//     const el = map[id];
//     if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
//   }

//   return (
//     <div className={`min-h-screen ${darkMode ? 'bg-gray-900 text-gray-200' : 'bg-white text-gray-900'}`}>
//       <Navbar darkMode={darkMode} toggleDarkMode={() => setDarkMode(d => !d)} onNavigate={scrollTo} />
//       <main>
//         <section id="home"><Hero darkMode={darkMode} onBrowse={() => scrollTo('courses')} /></section>
//         <section id="courses"><Courses darkMode={darkMode} /></section>
//         <section id="features"><Certificates darkMode={darkMode} /></section>
//         <section id="testimonials"><Testimonials darkMode={darkMode} /></section>
//         <section id="faq"><FAQ darkMode={darkMode} /></section>
//         <section id="newsletter"><Newsletter darkMode={darkMode} /></section>
//       </main>
//       <Footer darkMode={darkMode} />
//     </div>
//   );
// }

function App() {
  return (
    <div>
      <h1>Hello</h1>
      <img src="/logo192.png" alt="test" width="300" />
    </div>
  );
}

export default App;

