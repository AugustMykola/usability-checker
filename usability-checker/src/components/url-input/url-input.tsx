'use client';
import styles from './UrlInput.module.css';
import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import {CheckCircle, Loader, AlertTriangle} from 'lucide-react';

export default function UrlInput({ onSubmit }: { onSubmit?: (url: string) => Promise<boolean> }) {
    const [url, setUrl] = useState('');
    const [status, setStatus] = useState<'default' | 'focus' | 'loading' | 'success' | 'error'>('default');
    const [isButtonDisabled, setIsButtonDisabled] = useState(false);

    const validateUrl = (inputUrl: string) => {
        try {
            new URL(inputUrl);
            return true;
        } catch {
            return false;
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newUrl = e.target.value;
        setUrl(newUrl);
        setStatus('loading');

        setTimeout(() => {
            if (validateUrl(newUrl)) {
                setStatus('success');
                setIsButtonDisabled(false)
            } else {
                setStatus('error');
                setIsButtonDisabled(true)
            }
        }, 2000);
    };

    return (
        <div className="space-y-4">
            <div className={`${styles.urlInputContainer} flex items-center gap-2`}>
                <div>
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 0.875C7.39303 0.875 5.82214 1.35152 4.486 2.24431C3.14985 3.1371 2.10844 4.40605 1.49348 5.8907C0.87852 7.37535 0.717618 9.00901 1.03112 10.5851C1.34463 12.1612 2.11846 13.6089 3.25476 14.7452C4.39106 15.8815 5.8388 16.6554 7.4149 16.9689C8.99099 17.2824 10.6247 17.1215 12.1093 16.5065C13.594 15.8916 14.8629 14.8502 15.7557 13.514C16.6485 12.1779 17.125 10.607 17.125 9C17.1225 6.84588 16.2657 4.78069 14.7425 3.2575C13.2193 1.7343 11.1541 0.877481 9 0.875ZM15.875 9C15.8755 9.63403 15.788 10.2651 15.6148 10.875H12.6063C12.7979 9.63235 12.7979 8.36765 12.6063 7.125H15.6148C15.788 7.73493 15.8755 8.36597 15.875 9ZM6.96875 12.125H11.0313C10.631 13.4364 9.93624 14.6389 9 15.6406C8.06413 14.6387 7.36939 13.4362 6.96875 12.125ZM6.66407 10.875C6.44949 9.63421 6.44949 8.36579 6.66407 7.125H11.3422C11.5568 8.36579 11.5568 9.63421 11.3422 10.875H6.66407ZM2.125 9C2.12446 8.36597 2.21202 7.73493 2.38516 7.125H5.39375C5.20208 8.36765 5.20208 9.63235 5.39375 10.875H2.38516C2.21202 10.2651 2.12446 9.63403 2.125 9ZM11.0313 5.875H6.96875C7.36898 4.5636 8.06377 3.36108 9 2.35938C9.93588 3.36134 10.6306 4.56378 11.0313 5.875ZM15.1195 5.875H12.3367C11.986 4.58821 11.3948 3.37943 10.5945 2.3125C11.5615 2.54479 12.4668 2.98342 13.2484 3.59832C14.03 4.21323 14.6693 4.98987 15.1227 5.875H15.1195ZM7.40547 2.3125C6.60516 3.37943 6.01403 4.58821 5.66328 5.875H2.87735C3.33068 4.98987 3.97006 4.21323 4.75163 3.59832C5.53321 2.98342 6.43851 2.54479 7.40547 2.3125ZM2.87735 12.125H5.66328C6.01403 13.4118 6.60516 14.6206 7.40547 15.6875C6.43851 15.4552 5.53321 15.0166 4.75163 14.4017C3.97006 13.7868 3.33068 13.0101 2.87735 12.125ZM10.5945 15.6875C11.3948 14.6206 11.986 13.4118 12.3367 12.125H15.1227C14.6693 13.0101 14.03 13.7868 13.2484 14.4017C12.4668 15.0166 11.5615 15.4552 10.5945 15.6875Z" fill="white" fillOpacity="0.6"/>
                    </svg>
                </div>
                <Input
                    type="text"
                    placeholder="Paste your page URL"
                    className="bg-transparent flex-1 border-none outline-none shadow-none focus-visible:ring-0"
                    value={url}
                    onFocus={() => setIsButtonDisabled(true)}
                    onBlur={() => {
                        if(status === 'success') {
                            setIsButtonDisabled(false);
                        }
                        if (!url.trim()) {
                            setStatus('default');
                        }
                    }}
                    onChange={handleChange}
                />
                {status !== 'default' && (
                    <div className="flex items-center gap-2">
                        {status === 'loading' && (
                            <div className="flex items-center gap-2 text-gray-500">
                                <Loader className="animate-spin" size={18} />
                            </div>
                        )}
                        {status === 'success' && (
                            <div className="flex items-center gap-2 text-green-500">
                                <CheckCircle size={18} />
                            </div>
                        )}
                        {status === 'error' && (
                            <div className="flex items-center gap-2 text-red-500">
                                <AlertTriangle size={18} /> Wrong link
                            </div>
                        )}
                        <Button variant="secondary" disabled={isButtonDisabled}>
                            Submit
                        </Button>
                    </div>
                )}
            </div>

        </div>
    );
}
