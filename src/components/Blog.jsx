import { useParams, Link } from "react-router-dom";
import Comment from "./comments";
const Blog = (props) => {
    const blogs = props.data;
    const { id } = useParams();
    return (
        <div className="blog-details">
            <div>
                <Link to="/home" className="btn back" ><i className="material-icons">arrow_back</i></Link>
                <div className="blog-title">{blogs[id].title.slice(0, 10)}</div>
                <div className="blog-subtitle">{blogs[id].title}</div>
                <div className="blog-content">{blogs[id].body}</div>
            </div>
            <div>
                <div className="add-comment">
                    <div className="input-field">
                        <input type="text" id="comment" className="add-comment " />
                        <label htmlFor="comment">Write a Comment</label>
                    </div>
                    <span className=" waves-effect send ">
                        <i className="material-icons ">send</i>
                    </span>
                </div>
                <div className="comments">
                    <Comment/>
                </div>
            </div>
        </div>
    );
};

export default Blog;
