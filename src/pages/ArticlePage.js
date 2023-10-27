import {useParams} from 'react-router-dom';
import articles from './article-content';

const ArticlePage = () => {
    const params = useParams();
    const articleID = params.articleID;
    const article = articles.find(article => article.name === articleID);

    return (
        // React fragment, in react cannot return more than one top level element (heading and paragraph, so need to wrap it into a react fragment)
        <> 
        <h1>{article.title}</h1>
        {article.content.map(paragraph => (
            <p>{paragraph}</p>
        ))}
        </> 
    );
}

export default ArticlePage;