'use client';

import React from 'react';
import {Button} from "@/components/ui/button";
import uxCardStyles from './ux-card.module.css'

export default function UXCard() {
    return (
        <div className={`${uxCardStyles.uxCardContainer}`}>
            <div className="flex items-center justify-start mb-4">
                <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.0401 3.46982C12.7917 2.66563 13.1675 2.26354 13.569 2.03953C14.4593 1.54281 15.5433 1.54281 16.4336 2.03953C16.8351 2.26354 17.2109 2.66563 17.9625 3.46982C18.8675 4.43803 19.7792 4.79642 21.0607 4.75311C22.1608 4.71593 22.7109 4.69734 23.1531 4.82284C24.1339 5.10114 24.9005 5.86771 25.1788 6.84848C25.3043 7.29077 25.2857 7.84083 25.2485 8.94094C25.2038 10.2654 25.595 11.1636 26.5318 12.0391C27.336 12.7907 27.7381 13.1665 27.9621 13.568C28.4588 14.4583 28.4588 15.5424 27.9621 16.4327C27.7381 16.8342 27.336 17.21 26.5318 17.9616C25.5636 18.8665 25.2052 19.7782 25.2485 21.0597C25.2857 22.1598 25.3043 22.7099 25.1788 23.1522C24.9005 24.1329 24.1339 24.8995 23.1531 25.1778C22.7109 25.3033 22.1608 25.2847 21.0607 25.2475C19.7792 25.2042 18.8675 25.5626 17.9625 26.5308C17.2109 27.335 16.8351 27.7371 16.4336 27.9611C15.5433 28.4578 14.4593 28.4578 13.569 27.9611C13.1675 27.7371 12.7917 27.335 12.0401 26.5308C11.1645 25.5941 10.2664 25.2028 8.94191 25.2475C7.8418 25.2847 7.29175 25.3033 6.84946 25.1778C5.86869 24.8995 5.10212 24.1329 4.82382 23.1522C4.69832 22.7099 4.71691 22.1598 4.75409 21.0597C4.79739 19.7782 4.43901 18.8665 3.47079 17.9616C2.66661 17.21 2.26452 16.8342 2.04051 16.4327C1.54379 15.5424 1.54379 14.4583 2.04051 13.568C2.26452 13.1665 2.66661 12.7907 3.47079 12.0391C4.43901 11.1342 4.79739 10.2224 4.75409 8.94094C4.71691 7.84083 4.69832 7.29077 4.82382 6.84848C5.10212 5.86771 5.86869 5.10114 6.84946 4.82284C8.77248 4.27718 10.4399 5.18186 12.0401 3.46982Z" stroke="url(#paint0_linear_784_19008)" strokeWidth="1.5"/>
                    <defs>
                        <linearGradient id="paint0_linear_784_19008" x1="15.0013" y1="1.66699" x2="15.0013" y2="28.3337" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#09C564"/>
                            <stop offset="0.53" stopColor="#FFA100"/>
                            <stop offset="1" stopColor="#FE3737"/>
                        </linearGradient>
                    </defs>
                </svg>
            </div>
            <div>
                <p className="text-sm leading-5 tracking-[0%] font-normal">Unlock Full UX Insights!</p>
                <p className=" text-[14px] leading-[20px] tracking-[0%] font-normal">Gain deeper data, with evidence.</p>
            </div>
            <Button className="mt-3 w-[160px] h-[40px] px-[3px] py-[12px] bg-blue-600 text-white font-medium rounded-[12px] hover:bg-blue-700 transition">
                Upgrade to Pro
            </Button>
        </div>
    );
}
