import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
export function TemplateLoading(){
    return (<div className="flex flex-col w-full md:w-2/5 mb-12">
        <Skeleton height={235} />
        <Skeleton height={30} className="mt-2" />
        <Skeleton width={140} />
        <div className="flex">
            <Skeleton width={50} className="mx-2"/>
            <Skeleton width={50} className="mx-2" />
            <Skeleton width={50} className="mx-2"/>
            <Skeleton width={50} className="mx-2"/>
        </div>
        <Skeleton height={15} />
        <Skeleton height={15} />
        <Skeleton height={15} />
        <Skeleton height={15} />
        <Skeleton height={20} className="mt-2" width={100}/>
    </div>)
}
export default function LoadingArticle(){
    return(
        <div className='lg:px-32 px-4 flex justify-between flex-wrap'>
            <TemplateLoading />
            <TemplateLoading />
            <TemplateLoading />
            <TemplateLoading />
            <TemplateLoading />
            <TemplateLoading />
        </div>
    )
}