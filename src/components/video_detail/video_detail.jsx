import React, { useEffect, useState } from 'react';
import styles from './video_detail.module.css';

const VideoDetail = ( {video, video: {snippet} } ) => {
  
  const [like, setLike] = useState();
  const [likeCount, setLikeCount] = useState(0);
  const [dislike, setDislike] = useState();
  const [dislikeCount, setDislikeCount] = useState(0);

  const likeRef = React.createRef();
  const dislikeRef = React.createRef();

  useEffect(()=>{
    setLike(parseInt(video.section[0].statistics.likeCount));
    setDislike(parseInt(video.section[0].statistics.dislikeCount));
  },[]);

  const countLogic = (viewCount) =>{
    const counts = viewCount.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")
    return counts;
  };

  const dateLogic = (date) =>{
    const dates = date.substr(0, 10);
    return dates;
  };

  const handleLike = () =>{
      if(likeCount < 1 && dislikeCount === 0){
        setLike(like+1);
        setLikeCount(1);
        likeRef.current.style.color='black';
      }else if(likeCount === 1){
        setLike(like-1);
        setLikeCount(0);
        likeRef.current.style.color='grey';
      }
  };

  const handleDislike = () => {
    if(dislikeCount < 1 && likeCount === 0){
      setDislike(dislike+1);
      setDislikeCount(1);
      dislikeRef.current.style.color='black';
    }else if(dislikeCount === 1){
      setDislike(dislike-1);
      setDislikeCount(0);
      dislikeRef.current.style.color='grey';
    }
  };

  return(
  <>
  <div className={styles.detail}>
    <iframe 
      className={styles.video}
      type="text/html" 
      title="youtube iframe"
      width="100%" 
      src={`https://www.youtube.com/embed/${video.id}`}
      frameBorder="0" 
      allowFullScreen
    >
    </iframe>
    {video.snippet.tags && (
    <div className={styles.tag__container}>
      <span className={styles.tag}>#{snippet.tags[0]}</span>
      <span className={styles.tag}>#{snippet.tags[1]}</span>
    </div>
    )}
    <h2 className={styles.title}>{snippet.title}</h2>
    <div className={styles.statistics__container}> 
      <div className={styles.info}>
        <span>조회수{countLogic(video.section[0].statistics.viewCount)}회 • </span>
        <span> {dateLogic(snippet.publishedAt)}</span>
      </div>
      <div className={styles.btn__container}>
        <button className={styles.btn}  onClick={handleLike} ref={likeRef}>
          <i className="fas fa-thumbs-up"></i>
          <span>{like}</span>
        </button>
        <button className={styles.btn} onClick={handleDislike} ref={dislikeRef}>
          <i className="fas fa-thumbs-down"></i>
          <span>{dislike}</span>
        </button>
      </div>
    </div>
    {/* 채널정보  */}
    <div className={styles.channel}>
      <div className={styles.channel__main}>
        <img 
          className={styles.banner} 
          src={video.channelThumbnail} 
          alt="channel thumbnail" 
        />
        <h3>{snippet.channelTitle}</h3>
      </div>
      <div className={styles.channel__sub}>
        <pre>{snippet.description}</pre>
      </div>
    </div>
  </div>
  </>
)};

export default VideoDetail;