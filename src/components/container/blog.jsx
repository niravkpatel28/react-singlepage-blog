// main container that renders a complete new  blog
// this will contain the state
// information will be passed down to reusable components in form of props
// any event handler or function will be stored in here

// this component renders only a single blog

// {
//     "userId": 1,
//     "id": 1,
//     "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
//     "body": "quia et suscipit
//     suscipit recusandae consequuntur expedita et cum
//     reprehenderit molestiae ut ut quas totam
//     nostrum rerum est autem sunt rem eveniet architecto"
// http://jsonplaceholder.typicode.com/posts?id=1
//     }
import React from "react";
import axios from "axios";
import RE from "../../banner.png";
import BannerImage from "../common/bannerImage";
import Title from "../common/title";
import Paragraph from "../common/paragraph";
import SidePanel from "../common/sidePanel";
import "./blog.style.css";
class Blog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      blogData: [], // objec with single blog data,
      imageUrl: RE,
      relatedLinks: [], // passed as props to Side Panel
      currentId: 1,
    };
  }

  componentDidMount() {
    axios
      .get(
        `http://jsonplaceholder.typicode.com/posts?id=${this.state.currentId}`
      )
      .then((response) => {
        this.setState({
          blogData: [...response.data],
        });
      });
    this.generateRelatedLinks();
  }

  generateRelatedLinks = () => {
    // this will be eliminated since the blog data itself will have related links
    let relatedLinks = [];
    console.log("generate link");
    axios
      .get("http://jsonplaceholder.typicode.com/posts?_page=1&_limit=5")
      .then(({ data }) => {
        relatedLinks = data.map((post) => {
          return {
            title: post.title,
            id: post.id,
          };
        });
        this.setState({
          relatedLinks: [...relatedLinks],
        });
      });
  };

  changeBlog = (event) => {
    //onclick event handler
    // make api call and re render the blog
    this.setState(
      {
        currentId: event.target.id,
      },
      () => {
        //console.log make api call
        axios
          .get(
            `http://jsonplaceholder.typicode.com/posts?id=${this.state.currentId}`
          )
          .then((response) => {
            this.setState({
              blogData: [...response.data],
            });
          });
      }
    );
  };
  render() {
    console.log(this.state);
    return (
      <div>
        {this.state.blogData.map((blog) => {
          console.log(blog);
          return (
            <React.Fragment key={blog.id}>
              <div className="blog-elements">
                <div className="blog-content">
                  <Title title={blog.title} />
                  <BannerImage imageUrl={this.state.imageUrl} />
                  <Paragraph body={blog.body} />
                </div>
                <div className="side-panel">
                  <SidePanel
                    relatedLinks={this.state.relatedLinks}
                    changeBlog={this.changeBlog}
                  />
                </div>
              </div>
            </React.Fragment>
          );
        })}
      </div>
    );
  }
}

export default Blog;
