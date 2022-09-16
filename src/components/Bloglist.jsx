import { Link } from "react-router-dom";
const Bloglist = ({data}) => {
    return ( 
        <>
        {data.map((blog)=>(
        <div key={blog.id} className="blog" >
            <div>
                <div className="title">{blog.title.slice(0,13)}...</div>
                <div className="subtitle">{blog.title.slice(0, 30)}</div>   
                <div className="content">{blog.body.slice(0,120)}... <Link to={`/home/blog/${blog.id-1}`} className=" ">Read More</Link></div>  
            </div>
            <div className="blog-nav">
                <i className="material-icons ">favorite_border</i>
                <Link to={`/home/blog/${blog.id-1}`} ><i className="material-icons ">chat_bubble_outline</i></Link>
                <i className="material-icons ">arrow_forward</i>
                <i className="material-icons ">star</i>
            </div>       
        </div>        
        ))}
        </>
    );
}
 
export default Bloglist;