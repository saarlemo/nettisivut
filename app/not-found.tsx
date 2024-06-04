// app/not-found.tsx
import { NextPage, Metadata } from 'next';

export const metadata: Metadata = {
    title: '404',
}

const NotFound: NextPage= () => {
    return (
        <div className="container mx-auto lg:pr-[6px] max-h-[100%] lg:overflow-auto">
            <main className="flex flex-col justify-center w-full h-full">
            <h2 className="text-4xl mb-1">404</h2>
            <p className="mb-8">Sivua ei löytynyt</p>
            </main>
        </div>
    )
}

export default NotFound;