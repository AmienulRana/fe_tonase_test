import axios from 'axios';
import { CardArticle } from '../components/organism/Home/Article/Article';
import { FiChevronRight } from 'react-icons/fi';
import FormatDate from '../utils/formatDate';
import Layout from '../components/Layout/Layout';
import { MobileOverflowText } from '../utils/overflowText';
import Skeleton from 'react-loading-skeleton';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import 'react-loading-skeleton/dist/skeleton.css';
export function LoadingFullContent(){
    return (<div className="flex flex-col w-full mb-12">
        <Skeleton height={15} />
        <Skeleton height={15} />
        <Skeleton height={15} />
        <Skeleton height={15} />
        <Skeleton height={15} width="50%" />
        <Skeleton height={15} />
        <Skeleton height={15} />
        <Skeleton height={15} />
        <Skeleton height={15} width="50%"/>
        <Skeleton height={15} />
        <Skeleton height={15} />
        <Skeleton height={15} />
        <Skeleton height={15} width="50%"/>
    </div>)
}

export default function DetailArticle({}){
    const router = useRouter();
    const { id } = router.query;

    const [idStorage, setIdStorage] = useState(0)
    const [articleStorage, setArticleStorage] = useState([]);
    const [detail, setDetail] = useState({});
    const [fullContent, setFullContent] = useState(null);
    const [similiar, setSimiliar] = useState([]);

    useEffect(() => {
        const getArticleStorage = JSON.parse(localStorage.getItem('article'));
        setArticleStorage(getArticleStorage);
    }, []);

    useEffect(() => {
        // menyimpan id ke localStorage sebagai alternatif 
        // agar ketika halaman di referesh data tidak hilang
        // ini karena semua query yang ada pada useRouter()
        // hilang ketika di refresh
        if(id){
            localStorage.setItem('idArticle', id);
        }
        setIdStorage(localStorage.getItem('idArticle'))

    }, [id])

    useEffect(() => {
        const findArticle = articleStorage.filter(data => data.id === Number(id ? id : idStorage));
        const randomArticle1= articleStorage[Math.round(Math.random() * articleStorage.length)]; 
        const randomArticle2 = articleStorage[Math.round(Math.random() * articleStorage.length - 2)]; 
        setDetail(findArticle);
        setSimiliar([randomArticle1, randomArticle2]);
    }, [articleStorage, id]);

    useEffect(() => {
        // get detail full article
        if(detail[0]?.url){
            console.log('tes');
            axios.get(`/api/fullArticle?url=${detail[0].url}`)
            .then(res => setFullContent(res.data.content))
            .catch(err => console.log(err));
        }
    }, [detail]);


    return(
        <Layout title={detail[0]?.title}>
            {detail.length > 0 ? 
            <div className="lg:px-32 px-4 lg:mt-14 mt-8 mb-6">    
                <p className="text-orange flex items-center">Article <span className="text-disabled flex items-center mx-4"><FiChevronRight className="mr-4"/><MobileOverflowText text={detail[0]?.title} length={18} /></span></p>
                <h1 className="my-6 md:text-4xl text-2xl font-normal">{detail[0]?.title} </h1>
                <p className="text-disabled">Dipost oleh {detail[0]?.author} - <FormatDate date={detail[0]?.publishedAt} /> 12:54 WIB </p>
                <img src={detail[0]?.urlToImage} className="w-full mt-7 mb-10" alt={detail[0]?.title} height={511} />
                <p className="mb-12">{fullContent ? fullContent : <LoadingFullContent />}</p>
                <p className='text-disabled mb-4'>Tag</p>
                <p className='mb-14 word-20'>#ship #shipping #businnes #world</p>
                <p className='text-disabled mb-4'>Keyword</p>
                <p className='mb-32 word-20'>ship safe shipping priority businnes world</p>
                <h1 className="mt-6 mb-12 md:text-4xl text-2xl text-orange">Similiar</h1>
                <div className='flex justify-between flex-wrap'>
                    {similiar.length > 1 && similiar.map(sim => (
                        <CardArticle 
                        image={sim?.urlToImage}
                        publish={sim?.publishedAt}
                        description={sim?.description} 
                        title={sim?.title}
                        id={sim?.id}
                        key={sim?.id}
                        />
                    ))}
                </div>
            </div>: null}
        </Layout>
    )
}