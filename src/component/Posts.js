
import {useEffect , useState} from 'react';

function Posts() {

    const [posts , setPosts] = useState([]);
    


    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(r => r.json())
        .then(r => {
            setPosts(r);
        })
    } , [])


    const deletepost = (id)=>{
        let postid  = id; 
        posts.filter((p)=>{
            if(p.id != postid){
                setPosts(p)
            }
        })
    }
    
    return(
        <div className="container">
        <h1 className="text-center mt-5">Posts Component</h1>
            <div className="container">
                <div className="row">

                {
                    posts.map((p)=>{
                        return (
                            <div className="col-md-4" key={p.id} onClick={()=> {deletepost(p.id) }}>
                            <div className="card text-white bg-dark mb-3" >
                                <div className="card-header">Name: {p.name}</div>
                                <div className="card-body">
                                    <h5 className="card-title">Email: {p.email}</h5>
                                    <p className="card-text">Address: {p.address.city}</p>
                                </div>
                            </div>
                    </div>
                        );
                    })
                }

                    

                    


                </div>
            </div>
        </div>
    );
}


export default Posts;