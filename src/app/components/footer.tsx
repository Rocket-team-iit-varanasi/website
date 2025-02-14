export default function Footer() {
    return (
        <footer className="bg-gray-100 py-10">
        <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center">
            <div>
                <p className="text-gray-600">© 2025 Rocket Team • IIT BHU. All rights reserved.</p>
            </div>
            <div className="flex space-x-4">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                    <img src="/facebook-icon.png" alt="Facebook" className="h-6 w-6" />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                    <img src="/twitter-icon.png" alt="Twitter" className="h-6 w-6" />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                    <img src="/instagram-icon.png" alt="Instagram" className="h-6 w-6" />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                    <img src="/linkedin-icon.png" alt="LinkedIn" className="h-6 w-6" />
                </a>
                <a href="mailto:contact@rocketteam.com" target="_blank" rel="noopener noreferrer">
                    <img src="/email-icon.png" alt="Email" className="h-6 w-6" />
                </a>
            </div>
            </div>
        </div>
        </footer>
    )
}