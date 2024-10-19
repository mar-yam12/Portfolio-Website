import Navbar from "../components/Navbar";

const About = () => {
    return (
        <div
        className="min-h-screen bg-cover bg-center bg-fixed text-purple-200"
        style={{ backgroundImage: "url('/bg3.jpg')" }}>
            <Navbar />
            <div className="min-h-screen text-purple-200 py-20 px-4 sm:px-6 lg:px-8 animate-fade-in">

                <div className="max-w-4xl mx-auto">
                    <h1 className="text-6xl font-extrabold mb-8 animate-slide-in-left text-purple-200 hover:text-purple-950 transition-colors duration-900 animate-bounce">
                        About Me
                    </h1>
                    

                    <div className="bg-purple-800 bg-opacity-10 rounded-lg p-8 shadow-2xl animate-fade-in-up backdrop-blur-md hover:bg-opacity-40 transition-all duration-300">
                        <p className="text-xl mb-6 leading-relaxed animate-slide-in-right text-purple-200">

                        Hello! 👋 I am Maryam Shahid, a passionate frontend developer.                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                            <div className="text-center animate-bounce-in hover:transform hover:scale-105 transition-all duration-300">
                                <div className="text-5xl mb-4 animate-pulse text-purple-200">🚀</div>
                                <h3 className="text-2xl font-semibold mb-2 animate-slide-in-bottom text-purple-200">My Journey</h3>
                                <p className="animate-fade-in text-purple-100">My journey started with a curiosity about how websites are built, and it quickly turned into a passion. 🚀 Since then, I’ve been learning and creating amazing projects to enhance my skills.</p>
                            </div>
                            <div className="text-center animate-bounce-in delay-150 hover:transform hover:scale-105 transition-all duration-300">
                                <div className="text-5xl mb-4 animate-pulse text-purple-300">⚙</div>
                                <h3 className="text-2xl font-semibold mb-2 animate-slide-in-bottom text-purple-200">Technologies</h3>
                                <p className="animate-fade-in text-purple-100">I am skilled in TypeScript, JavaScript, React, Next.js, Tailwind CSS, and more. 🛠️</p>
                            </div>
                            <div className="text-center animate-bounce-in delay-300 hover:transform hover:scale-105 transition-all duration-300">
                                <div className="text-5xl mb-4 animate-pulse text-purple-300">✨</div>
                                <h3 className="text-2xl font-semibold mb-2 animate-slide-in-bottom text-purple-200">Hobbies</h3>
                                <p className="animate-fade-in text-purple-100">Apart from coding, I enjoy photography 📸, fashion 👗, and reading tech blogs.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;