'use client';
import { useState, useRef } from 'react';

const EmailCollect = () => {
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState('idle');
    const [message, setMessage] = useState('');

    const submit = async (e) => {
        e.preventDefault();
        const email = e.target.email.value;

        try {
            const response = await fetch("https://script.google.com/macros/s/AKfycby2I1BJWQ1h7RGIw92uJ5XtkLlPhbkwCIO5SmU_l8GJiwGH_vqnEOLiOQ_66a9lamE-/exec", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: new URLSearchParams({ email }),
            });

            setStatus('success');
            setMessage('Thank you for submitting your email!');
            setEmail('');
        } catch (e) {
            setStatus('failed')
            setMessage('There was an error submitting your email. Please try again in a few minutes!');
        }
    }

    if (status === 'success') {
        return (
            <>
            {message && (
                <p className={`mt-4 text-sm text-semibold px-8 py-2 border-2 rounded-lg bg-steelBlue/20 ${status === 'success' ? 'text-royalBlue-600' : 'text-red-500'}`}>
                    {message}
                </p> 
            )}
            </>
        );
    }

    return (
        <form onSubmit={submit} className="mt-4 flex items-center gap-2 flex flex-col sm:flex-row">
            <input 
                type="email" 
                name="email"
                value={email}
                placeholder="johndoe@email.com" 
                className="w-full sm:w-auto px-8 py-2 text-royalBlue border-2 border-royalBlue rounded-lg focus:outline-none cursor-pointer bg-cream/20"
                onChange={(event) => setEmail(event.target.value)}
                required
            />
            <button 
                type="submit"
                disabled={status === 'loading'}
                className="w-full sm:w-auto bg-royalBlue text-white px-8 py-2 rounded-lg hover:border-2 border-royalBlue border-2 hover:bg-cream/20 hover:text-royalBlue cursor-pointer transition duration-150 ease-in-out">
                {status === 'loading' ? 'Submitting...' : 'Submit'}
            </button>
          </form>
    );
}

export default EmailCollect;