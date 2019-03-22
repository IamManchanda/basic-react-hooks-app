import React from 'react';
import buildListFromSlug from '../../lib/buildListFromSlug';

const ResourceList = ({ resources }) => {
  const resourceList = buildListFromSlug(resources);
  return (
    <ul>
      { resourceList.map((resource) => 
          <li key={ resource.id }>{ resource.title }</li>) }
    </ul>
  );
};

export default ResourceList;
