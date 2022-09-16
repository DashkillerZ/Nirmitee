import { useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Blog from "./Blog";
import Bloglist from "./Bloglist";

const Blogpage = () => {
    const [blogs, setBlogs] = useState([
        {
            userId: 1,
            id: 1,
            title: "aut facere repellat provident occaecati excepturi optio reprehenderit",
            body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
        },
        {
            userId: 1,
            id: 2,
            title: "qui est esse",
            body: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
        },
        {
            userId: 1,
            id: 3,
            title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
            body: "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut",
        },
        {
            userId: 1,
            id: 4,
            title: "eum et est occaecati",
            body: "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit",
        },
    ]);

    return (
        <div className="blogpage ">
            <BrowserRouter>
                <Switch>
                    <Route exact path="/home">
                        <div className="carousel">
                            Carousel with Posts
                        </div>
                        <div className="flex">
                            <div className="filter">
                                <h5>Filters</h5>
                                <div className="input-field col s6">
                                    <input type="text" className="validate" />
                                </div>
                                <div className="chips-list">
                                    <div className="chip">
                                        web
                                        <i className="close material-icons">
                                            close
                                        </i>
                                    </div>
                                    <div className="chip">
                                        design
                                        <i className="close material-icons">
                                            close
                                        </i>
                                    </div>
                                    <div className="chip">
                                        UI
                                        <i className="close material-icons">
                                            close
                                        </i>
                                    </div>
                                    <div className="chip">
                                        Material
                                        <i className="close material-icons">
                                            close
                                        </i>
                                    </div>
                                </div>
                            </div>
                            <div className="blog-grid">
                                <Bloglist data={blogs} key={blogs[1]} />
                            </div>
                        </div>
                        <ul className="pagination center ">
                          <li className="disabled"><a href="#!"><i className="material-icons">chevron_left</i></a></li>
                          <li className="active"><a href="#!">1</a></li>
                          <li className="waves-effect"><a href="#!">2</a></li>
                          <li className="waves-effect"><a href="#!">3</a></li>
                          <li className="waves-effect"><a href="#!">4</a></li>
                          <li className="waves-effect"><a href="#!">5</a></li>
                          <li className="waves-effect"><a href="#!"><i className="material-icons">chevron_right</i></a></li>
                        </ul>
                    </Route>

                    <Route path="/home/blog/:id">
                        <Blog data={blogs} />
                    </Route>
                    
                </Switch>
            </BrowserRouter>
        </div>
    );
};

export default Blogpage;
