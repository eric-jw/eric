import { portfolioData } from "../public/data"
import Image from "next/image"
import Link from "next/link"

const Works = () => {
    return (
        <div className="content font-light">
            <h1>My Portfolio</h1>
            <div className="relative text-left">
                {portfolioData.map((portfolioItem) => (
                    <Link passHref key={portfolioItem.id} href={`/Works/${portfolioItem.name}`}>
                        <div className="w-full p-4 lg:p-8 overflow-hidden border-black dark:border-white mb-8 last:mb-0">
                            <div className="">{portfolioItem.desc}</div>
                            <span className="">{portfolioItem.title}</span>
                                <Image 
                                    src={`/img/${portfolioItem.thumbnail}`} 
                                    alt=""
                                    width="100%"
                                    height="100%"
                                    layout="responsive"
                                    objectFit="cover"
                                />
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default Works;
