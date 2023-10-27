import {useParams} from 'react-router-dom';
import articles from './article-content';
import NotFoundPage from './NotFoundPage';

const ArticlePage = () => {
    const params = useParams();
    const articleID = params.articleID;
    const article = articles.find(article => article.name === articleID);

    if(!article) {
        return <NotFoundPage />
    }

    return (
        // React fragment, in react cannot return more than one top level element (heading and paragraph, so need to wrap it into a react fragment)
        <> 
        <h1>{article.title}</h1>
        {article.content.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
        ))}
        </> 
    );
}

export default ArticlePage;