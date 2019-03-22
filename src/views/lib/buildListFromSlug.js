import { useState, useEffect } from 'react';
import axios from 'axios';

const buildListFromSlug = (slug) => {
  const [resourceList, setResourceList] = useState([]);
  useEffect(() => {
    (async () => {
      const { data } = await axios.get(`https://jsonplaceholder.typicode.com/${slug}`);
      setResourceList(data);
    })();
  }, [slug]);
  return resourceList;
};

export default buildListFromSlug;
