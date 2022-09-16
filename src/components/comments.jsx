const Comment = () => {
    const comments=[
        {
            'id':'1',
            'body':'first comment',
            'name':'commenter1',
            'subcomms':[
                {
                    'subid':'1',
                    'name':'commenter2',
                    'subbody':'first sub comment',
                },
            ],
        },
        {
            'id':'2',
            'body':'second comment',
            'name':'commenter3',
            'subcomms':[
                {
                    'subid':'1',
                    'name':'commenter4',
                    'subbody':'first sub comment',
                },
                {
                    'subid':'2',
                    'name':'commenter3',
                    'subbody':'second sub comment',
                },
            ],
        },
        {
            'id':'3',
            'body':'third comment',
            'name':'commenter5',
            'subcomms':[

            ],
        },
    ]


    return (
        <ul>
            {comments.map((comment)=>(<li className="comments-main" key={comment.id}>
                <div className="comment-wrap">
                    <div className="comment"><span className="commenter">{comment.name}&nbsp;</span>{comment.body}</div>
                    <ul className="comment-nav">
                        <i className="material-icons chat">chat_bubble_outline</i>
                        <i className="material-icons">favorite_border</i>
                    </ul>
                    <div className="comment-wrap comment-wrap-inner">
                        {comment.subcomms.map((subcomm)=>(
                            <>
                                <li>
                                    <span className="commenter">{subcomm.name}&nbsp;</span>{subcomm.subbody}
                                </li>
                            </>

                        ))}
                    </div>
                    <hr/>
                </div>
            </li>))}
        </ul>
    );
}

export default Comment;