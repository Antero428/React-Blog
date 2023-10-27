import articles from './article-content';
import {Link} from 'react-router-dom';

const ArticlesListPage = () => {
    return (
        <>
        <h1>Articles</h1>
        {articles.map(article => (
            // when using map or anything that will dynamically change the length and order of a list  need to have a key prop to the outer most element in the list that has a unique value for each object
            <Link key={article.name} className="article-list-item" to={`/articles/${article.name}`}>
                <h3>{article.title}</h3>
                <p>{article.content[0].substring(0,150)}...</p>
            </Link>
        ))}
        </>
    );
}

export default ArticlesListPage;