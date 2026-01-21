import "./globals.css";

export const metadata = {
  title: "MODSCOM BOT",
  description: "AI Chatbot created by MODSCOM",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-900 text-white">
        <nav className="p-5 bg-gray-800 shadow-xl flex justify-between">
          <h1 className="text-2xl font-bold">MODSCOM BOT</h1>
          <div className="flex gap-6">
            <a href="/" className="hover:text-blue-400">Home</a>
            <a href="/chat" className="hover:text-blue-400">Chat</a>
            <a href="/image-ai" className="hover:text-blue-400">Image AI</a>
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}
