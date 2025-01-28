import React from "react"; import { motion } from "framer-motion"; import { Card, CardContent } from "@/components/ui/card"; import { Button } from "@/components/ui/button"; const Portfolio = () => { return (
<div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
    <header className="p-6 shadow-lg bg-gray-950">
        <div className="container mx-auto flex justify-between items-center">
            <h1 className="text-3xl font-bold">Tatiana Tokareva</h1>
            <nav>
                <ul className="flex space-x-6">
                    <li><a href="#about" className="hover:underline">About</a></li>
                    <li><a href="#projects" className="hover:underline">Projects</a></li>
                    <li><a href="#contact" className="hover:underline">Contact</a></li>
                </ul>
            </nav>
        </div>
    </header>

    <main className="container mx-auto px-4">
        {/* Hero Section */}
        <section className="text-center py-20" id="hero">
            <motion.div initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                <h2 className="text-5xl font-bold mb-6">Hi, I'm Tatiana Tokareva</h2>
                <p className="text-xl mb-6">
                    Software Engineer with expertise in building scalable web applications and elegant user experiences.
                </p>
                <Button className="text-lg px-6 py-3">View My Work</Button>
            </motion.div>
        </section>

        {/* About Section */}
        <section className="py-20" id="about">
            <h3 className="text-4xl font-bold text-center mb-8">About Me</h3>
            <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-8">
                <img src="/profile.jpg" alt="Tatiana Tokareva" className="rounded-full w-48 h-48 object-cover shadow-lg" />
                <p className="text-lg">
                    I specialize in full-stack development with a passion for clean and efficient code. My goal is to craft solutions that are not only functional but also a pleasure to use. When I'm not coding, I enjoy hiking in the PNW and exploring new technologies.
                </p>
            </div>
        </section>

        {/* Projects Section */}
        <section className="py-20" id="projects">
            <h3 className="text-4xl font-bold text-center mb-8">Projects</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Example Project Cards */} {Array.from({ length: 6 }).map((_, index) => (
                <Card key={index} className="shadow-xl">
                    <CardContent>
                        <img src={`/project-${index + 1}.jpg`} alt={`Project ${index + 1}`} className="rounded-xl mb-4" />
                        <h4 className="text-2xl font-bold mb-2">Project {index + 1}</h4>
                        <p className="text-sm">
                            A brief description of the project, highlighting its features and technologies used.
                        </p>
                        <Button className="mt-4">View Details</Button>
                    </CardContent>
                </Card>
                ))}
            </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 bg-gray-950" id="contact">
            <h3 className="text-4xl font-bold text-center mb-8">Contact Me</h3>
            <form className="max-w-xl mx-auto space-y-6">
                <div>
                    <label className="block text-sm font-medium mb-1" htmlFor="name">Name</label>
                    <input type="text" id="name" className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white focus:ring focus:ring-blue-500" />
                </div>
                <div>
                    <label className="block text-sm font-medium mb-1" htmlFor="email">Email</label>
                    <input type="email" id="email" className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white focus:ring focus:ring-blue-500" />
                </div>
                <div>
                    <label className="block text-sm font-medium mb-1" htmlFor="message">Message</label>
                    <textarea id="message" rows="5" className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white focus:ring focus:ring-blue-500"></textarea>
                </div>
                <Button type="submit" className="w-full py-3">Send Message</Button>
            </form>
        </section>
    </main>

    <footer className="py-6 text-center bg-gray-950">
        <p>&copy; 2025 Tatiana Tokareva. All rights reserved.</p>
    </footer>
</div>
); }; export default Portfolio;