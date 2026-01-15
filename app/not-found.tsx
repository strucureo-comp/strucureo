'use client';

export default function NotFound() {
    return (
        <html lang="en">
            <body className="bg-white text-black font-sans antialiased">
                <div className="flex flex-col items-center justify-center min-h-screen text-center px-4">
                    <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
                    <p className="mb-8">The page you are looking for does not exist.</p>
                    <a href="/" className="underline hover:text-gray-600">
                        Go back home
                    </a>
                </div>
            </body>
        </html>
    );
}
