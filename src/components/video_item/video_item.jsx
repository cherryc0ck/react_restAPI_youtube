import React, { memo} from 'react';
import styles from './video_item.module.css';

const VideoItem = memo(
  ({video, video: {snippet}, onVideoClick, display  }) => {
    const displayType = display === 'list' ? styles.list : styles.grid;

    const countLogic = (viewCount) =>{
      const counts = viewCount.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")
      return counts;
    };

    return (
      <li className={`${styles.container} ${displayType}`} onClick={()=> onVideoClick(video)}>
        <div className={styles.video}>
          <img 
            className={styles.thumbnail}
            src={snippet.thumbnails.medium.url} 
            alt="video thumbnail"
          />
          <div className={styles.alldata}>
          <div className={styles.titledata}>
            <img className={styles.banner} src={video.channelThumbnail} alt="channel thumbnail" />
            <h2 className={styles.title}>{snippet.title}</h2>
            <button className={styles.options}>
              <div className={styles.option}></div>
              <div className={styles.option}></div>
              <div className={styles.option}></div>
            </button>
          </div>
          <div className={styles.metadata}>
            <h3 className={styles.channel}>{snippet.channelTitle}</h3>
            <span className={styles.count}>조회수{countLogic(video.section[0].statistics.viewCount)}회 </span> 
          </div>
          </div>
        </div>
      </li>
  )}
);

export default VideoItem;