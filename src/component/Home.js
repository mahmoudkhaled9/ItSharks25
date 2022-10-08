import {Link} from 'react-router-dom';
function Home() {
    return(
        <div className="text-center mt-5">
        <h1 >Home Component</h1>
        <Link to={"/posts"} ><button className="btn btn-success">Go To All Posts</button>
        </Link>
        </div>
    );
}


export default Home;