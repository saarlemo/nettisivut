// app/layout.tsx
import '@/styles/globals.css';
import Sidebar from '@/components/Sidebar';

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
    return (
        <html lang="en">
            <body className="
                flex
                flex-row        
                lg:min-w-auto
                lg:max-w-[1000px]
            ">
                <div className="background-1"></div>
                <div className="background-2"></div>
                <div className="background-3"></div>
                <Sidebar />
                <main className="
                    m-0
                    p-8
                    px-4
                    lg:pl-8

                    bg-[#1a1a1a]
                    lg:rounded-r
                    text-white
                    z-10
                    flex-grow
                ">
                    {children}
                </main>
            </body>
        </html>
    );
}