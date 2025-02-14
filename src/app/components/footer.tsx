import Image from 'next/image';

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
                            <Image src="./facebook-icon.png" alt="Facebook" width={24} height={24} className="h-6 w-6" />
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                            <Image src="./twitter-icon.png" alt="Twitter" width={24} height={24} className="h-6 w-6" />
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                            <Image src="./instagram-icon.png" alt="Instagram" width={24} height={24} className="h-6 w-6" />
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                            <Image src="./linkedin-icon.png" alt="LinkedIn" width={24} height={24} className="h-6 w-6" />
                        </a>
                        <a href="mailto:contact@rocketteam.com" target="_blank" rel="noopener noreferrer">
                            <Image src="./email-icon.png" alt="Email" width={24} height={24} className="h-6 w-6" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}