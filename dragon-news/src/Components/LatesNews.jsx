import Marquee from "react-fast-marquee";
const headlines = [
    "🚨 Breaking: React 19 brings faster rendering and smaller bundles!",
    "🌿 Proyash Skincare launches new Vitamin C Serum — available now!",
    "💻 Kandari completes software project ahead of schedule — team celebrates success!",
    "📱 Kronofun announces a new cybersecurity tool for startups.",
    "🎓 DIU students build an AI model to read doctors’ handwriting.",
    "🚴‍♂️ Nazmul Hridoy captures stunning travel photography in Cox’s Bazar!",
    "💡 Learn MERN stack: Master MongoDB, Express, React, and Node this semester.",
    "📈 Entrepreneurs see a 40% boost using Proyash’s digital campaign strategies.",
    "🌏 Google announces AI-integrated Chrome update — smarter, faster browsing.",
    "🎬 Photography exhibition by Drishtigochor opens this weekend at DIU!"
];
const LatesNews = () => {
    return (
        <div className='flex justify-center items-center container mx-auto'>
            <div className='bg-[#F3F3F3] flex  items-center
            gap-x-3 p-3'>
                <button className='btn rounded-none text-white bg-[#D72050]'>Latest</button>
                <p > <Marquee speed={30} pauseOnHover={true} >
                    {headlines.join("  |  ")} </Marquee></p>
            </div>
        </div>
    );
};

export default LatesNews;