import React from 'react';
import VideoListItem from './video_list_item';

const VideoList = (props) => {
  const videoItems = props.videos.map((video) => {
    return <VideoListItem video={video} />
  });
  //the const videoItems is an array of <li> items that are rendered in the video_list_item component
  // video is the prop/argument that is being sent to VideoListItem

  return (
    <ul className="col-md-4 list-group">
    {videoItems}
    </ul>
  );
};
// react is smart enough to realize videoItems is an array and will try to render all the elements inside of ul

export default VideoList;


//if refactoring from a function component to a class based component, you will have to change all mentions of props to this.props. That is because props gets passed as an argument in a functional component, while it is available anywhere in a class based component by using this.props
