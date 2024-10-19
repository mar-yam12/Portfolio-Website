import { Button } from "@/components/ui/button";
import Navbar from "../components/Navbar";

const Contact = () => {
    return (
        <div className="min-h-screen bg-cover bg-center bg-fixed text-purple-200"
        style={{ backgroundImage: "url('/bg3.jpg')" }}>
            <Navbar/>
            <div className="py-20 px-4 sm:px-6 lg:px-8 animate-fade-in">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-6xl font-extrabold mb-8 animate-slide-in-left text-purple-200 hover:text-purple-950 transition-colors duration-900 animate-bounce">
                        Lets Connect
                    </h1>
                    <div className="bg-purple-800 bg-opacity-30 rounded-lg p-8 shadow-2xl animate-fade-in-up backdrop-blur-md hover:bg-opacity-40 transition-all duration-300">
                        <p className="text-xl mb-8 leading-relaxed text-center text-purple-100 animate-slide-in-right">
                            I am excited to hear from you! Drop me a message, and lets create something amazing together.
                        </p>
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="animate-fade-in-up" style={{animationDelay: '0.2s'}}>
                                    <label htmlFor="name" className="block text-sm font-medium text-purple-200">Name</label>
                                    <input type="text" id="name" name="name" className="mt-1 block w-full rounded-md bg-purple-700 bg-opacity-50 border-blue-500 text-white placeholder-blue-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 transition duration-300 hover:bg-opacity-70" required />
                                </div>
                                <div className="animate-fade-in-up" style={{animationDelay: '0.4s'}}>
                                    <label htmlFor="email" className="block text-sm font-medium text-purple-200">Email</label>
                                    <input type="email" id="email" name="email" className="mt-1 block w-full rounded-md bg-purple-700 bg-opacity-50 border-blue-500 text-white placeholder-blue-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 transition duration-300 hover:bg-opacity-70" required />
                                </div>
                            </div>
                            <div className="animate-fade-in-up" style={{animationDelay: '0.6s'}}>
                                <label htmlFor="message" className="block text-sm font-medium text-purple-200">Message</label>
                                <textarea id="message" name="message" rows={4} className="mt-1 block w-full rounded-md bg-purple-700 bg-opacity-50 border-purple-500 text-white placeholder-purple-300 focus:border-purple-300 focus:ring focus:ring-purple-200 focus:ring-opacity-50 transition duration-300 hover:bg-opacity-70" required></textarea>
                            </div>
                            <div className="animate-fade-in-up" style={{animationDelay: '0.8s'}}>
                            <Button className='bg-purple-500 hover:bg-black text-white font-bold rounded-full text-lg transition duration-700 transform hover:scale-105 animate-bounce'>Submit</Button>

                            </div>
                        </form>
                        <div className="mt-12 border-t border-purple-500 pt-8">
                            <h2 className="text-3xl font-bold mb-6 text-center text-purple-300 animate-fade-in hover:text-purple-100 transition-colors duration-300">Get in Touch</h2>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                                <div className="animate-fade-in-up hover:transform hover:scale-105 transition-all duration-300" style={{animationDelay: '1s'}}>
                                    <div className="text-4xl mb-2 text-purple-300">📧</div>
                                    <p className="font-semibold text-purple-200">Email</p>
                                    <a href="maryamshahid@gmail.com" target="_blank" rel="noopener noreferrer" className="text-purple-100 hover:text-purple-300 transition-colors duration-300">maryam-shahid</a>

                                </div>
                                <div className="animate-fade-in-up hover:transform hover:scale-105 transition-all duration-300" style={{animationDelay: '1.2s'}}>
                                    <div className="text-4xl mb-2 text-purple-300">💼</div>
                                    <p className="font-semibold text-purple-200">LinkedIn</p>
                                    <a href="https://www.linkedin.com/in/maryam-shahid-b2765529a/" target="_blank" rel="noopener noreferrer" className="text-purple-100 hover:text-purple-300 transition-colors duration-300">maryam-shahid</a>
                                </div>
                                <div className="animate-fade-in-up hover:transform hover:scale-105 transition-all duration-300" style={{animationDelay: '1.4s'}}>
                                    <div className="text-4xl mb-2 text-purple-300">🧾</div>
                                    <p className="font-semibold text-purple-200">Github</p>
                                    <a href="https://github.com/mar-yam12" target="_blank" rel="noopener noreferrer" className="text-purple-100 hover:text-purple-300 transition-colors duration-300">mar-yam12</a>
                                </div>
                               
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;