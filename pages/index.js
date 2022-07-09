import Article from '../components/organism/Home/Article/Article';
import axios from 'axios';
import { BiSearch } from 'react-icons/bi';
import Layout from '../components/Layout/layout';
import LoadingArticle from '../components/organism/Home/Article/LoadingArticle';
import Pagination from '../components/element/Pagination';
import { useState, useEffect } from 'react';

export default function Home({data}) {
  const [articles, setArticles] = useState([]);
  const [currentItems, setCurrentItems] = useState(null);
  const [loading, setLoading] = useState(true);
  const [searchedArticle, setSearchedArticle] = useState(false);

  useEffect(() => {
    const newKeyArt = data.map(article => {
      return {...article, id: Math.ceil(Math.random()*10000000000)}
    })
    setArticles(newKeyArt.splice(0, 30));
    setLoading(false);
  }, [])

  useEffect(() => {
    localStorage.setItem('article', JSON.stringify(articles));
  }, [articles])

  const handleSearch = (e) => {
    if(e.target.value === ''){
      setSearchedArticle(false)
      return setArticles(articles)
    };
    const searchArt = articles.filter(article => {
      if(article.title.toLowerCase().includes(e.target.value.toLowerCase())){
        return article;
      }
    });
    setSearchedArticle(searchArt);
  }
  
  return (
    <Layout>
      <section className='flex justify-between w-full my-12 lg:my-24 px-4 lg:px-32'>
        <h1 className='text-orange text-4xl lg:text-5xl mr-2 font-medium'>Article</h1>
        <div className='relative lg:w-4/12'>
          <input type="text" onChange={handleSearch} placeholder="cari" className='pl-14 py-2 rounded-md w-full'/>
          <BiSearch className="absolute top-2/4 -translate-y-2/4 left-4 text-2xl"/>
        </div>
      </section>
      {loading ? <LoadingArticle /> :
      <>
        <section className="flex flex-wrap px-4 lg:px-32 justify-between">
          <Article currentItems={currentItems} />
        </section>
        <Pagination setCurrentItems={setCurrentItems} data={searchedArticle ? searchedArticle : articles} itemsPerPage={6} />
      </> 
      }
    </Layout>
  )
}

export async function getServerSideProps(context) {
  const url = 'https://newsapi.org/v2/everything?q=Apple&from=2022-07-07&apiKey=14bc3bf9f9e545ecb72c4529da1ee761';
  const response = await axios.get(url);
  if(response && response.data.status === 'ok'){
    return {
      props: { data: response.data.articles }
    }
  }
}
