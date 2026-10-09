import React from 'react';
import { LuPercent } from 'react-icons/lu';
import MarqueeText from "react-marquee-text"
import "react-marquee-text/dist/styles.css"

const Marquee = async () => {
    const res = await fetch(process.env.ALL_PRODUCTS_API_LINK);
    if (!res.ok) {
    throw new Error('Failed to fetch products');
}

    const data = await res.json();
    console.log(data)
    
    return (
        <div>
            <MarqueeText className='my-3' direction='right' duration={15}>
                <div className='flex items-center'>
                    {data.map(headline => (
                        <div className='flex items-center gap-1' key={headline.id}>
                            <span>{headline.image}</span>
                            <span>{headline.nameBn}</span>
                            <span>{headline.today.toLocaleString('bn-BD')}</span>
                            <span>{headline.change.pct.toLocaleString('bn-BD')}</span>
                            <span><LuPercent /></span>
                            <span className='border-gray-100'>|</span>
                        </div>
                    ))}
                </div>
            </MarqueeText>
        </div>
    );
};

export default Marquee;