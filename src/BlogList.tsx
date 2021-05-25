import { Link } from 'react-router-dom';

const BlogList = (props: any) => {
  const title = props.title;
  const blogs = props.blogs;

  return (
    <div className="blog-list">
      <h2>{ title }</h2>
      {blogs.map((blog: any) => (
        <div className="blog-preview" key={blog.id} >
          <Link to={`/blogs/${blog.id}`}>
            <h2>{ blog.title }</h2>
            <p>Written by { blog.author }</p>
          </Link>
        </div>
      ))}
    </div>
  );
}
 
export default BlogList;