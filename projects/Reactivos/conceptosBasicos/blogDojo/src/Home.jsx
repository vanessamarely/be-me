import { useState } from "react";

const Home = () => {

    const [blogs, setBlogs] = useState([
        {title:'My new website', body:'lorem ipsum...', author:'Manu', id:1},
        {title:'Wecome to React', body:'lorem ipsum...', author:'Migue', id:2},
        {title:'Web dev toips', body:'lorem ipsum...', author:'Manu', id:3},
    ]);
       
    return (
      <div className="home">
        {blogs.map(blog => (
            <div className="blog-preview" key={blog.id}>
                <h2>{blog.title}</h2>
                <p>Written by {blog.author}</p>
            </div>
        ))}
      </div>
    );
  }

  export default Home;
   
