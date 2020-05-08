import { posts, relatedLink } from "./apiEndpoints";
import Axios from "axios";

// export const fetchBlogs = (id) => Axios.get(`${posts}\\${id}`);
export const fetchRelatedLink = () => Axios.get(relatedLink);

export const fetchBlogs = (id) => {
  console.log("withing helpr", id);
  console.log(`${posts}\\${id}`);
  // return(Axios.get(`${posts}\`))
};
