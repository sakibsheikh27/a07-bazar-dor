import React from 'react';
import Link from 'next/link';

const NotFound = () => {
    return (
        <div>
            <main className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4 text-center">
      <h1 className="text-8xl font-bold text-green-600">
        404
      </h1>

      <h2 className="mt-4 text-2xl font-bold text-gray-800">
        Page Not Found!
      </h2>

      <p className="mt-3 max-w-md text-gray-600">
        দুঃখিত! আপনি যে পেজটি খুঁজছেন,
        সেটি খুঁজে পাওয়া যায়নি।
      </p>

      <Link
        href="/"
        className="mt-6 rounded-lg bg-green-600 px-6 py-3 font-semibold text-white transition hover:bg-green-700"
      >
        ← Go Back Home
      </Link>
    </main>
        </div>
    );
};

export default NotFound;