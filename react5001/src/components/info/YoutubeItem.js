import React from "react";

const YoutubeItem = (props) => {
    //console.log(props);
    return (
        <div>
            <a href={`https://www.youtube.com/embed/${props.video.id.videoId}`} target="_blank" rel="noopener noreferrer">
                <img src={props.video.snippet.thumbnails.medium.url} alt={props.video.snippet.title}></img>
                <p className="title">{props.video.snippet.title}</p>
            </a>
        </div>
    );
};

export default YoutubeItem;
