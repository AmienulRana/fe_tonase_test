import Image1 from '../../../../public/image1.png';
import Link from 'next/link';
import Image from 'next/image';
import OverflowText from '../../../../utils/overflowText';
import FormatDate from '../../../../utils/formatDate';

export function CardArticle({image, title, publish, description, id}){
    return(
        <div className="flex flex-col w-full md:w-2/5 mb-12" key={id}>
            <div className="w-full h-235 rounded-lg overflow-hidden">
                <img src={image} className="w-full h-full" alt={title} />
            </div>
            <h1 className="text-2xl montserrat font-semibold mt-4">{title}</h1>
            <p className="text-disabled my-2"><FormatDate date={publish} /></p>
            <p>#ship #shipping #world #businnes</p>
            <p className="text-disabled mt-2 mb-4"><OverflowText text={description} length={80}/></p>
            <Link href={`/${id}`}><p className="text-orange cursor-pointer">Read More</p></Link>
        </div>
    )
}
export default function Article({ currentItems }){
    return currentItems && currentItems.map((item, i) => (
        <CardArticle id={item.id} image={item.urlToImage} title={item.title} publish={item.publishedAt} description={item.description} key={i} />
    ))
}