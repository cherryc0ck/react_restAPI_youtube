import { useCallback, useEffect, useState } from 'react';
import styles from './app.module.css';
import SearchHeader from './components/searchHeader/searchHeader';
import VideoDetail from './components/video_detail/video_detail';
import VideoList from './components/video_list/video_list';
import './reset.css';

function App({youtube}) {

  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  useEffect(()=> {
    youtube
    .mostPopular() //
    .then(videos => showThumbnails(videos));
  },[youtube]);

  const search = useCallback(query =>{
    selectVideo(null);
    youtube
    .search(query)
    .then(videos =>  showThumbnails(videos))
  }, [youtube]);

  const selectVideo = (video) =>{
    setSelectedVideo(video)
  };

  const showThumbnails = useCallback(videos=> {
    const promise = [];
    const fuckmise = [];
    videos.forEach(video => {
      promise.push(youtube.channel(video.snippet.channelId)
        .then(result => video.channelThumbnail =  result ));
      });
    videos.forEach(video => {
      promise.push(youtube.getVideo(video.id)
        .then(result => video.section = result))
    });

    Promise.all(promise).then(()=>{
      setVideos(videos);
    });
  },[youtube]);




  return (
    <>
    <div className={styles.app}>
      <SearchHeader onSearch={search}/>
      <section className={styles.content}>
      {selectedVideo && (
        <div className={styles.detail}>
          <VideoDetail video={selectedVideo} section={videos} />
        </div>
      )}
        <div className={styles.list}>
          <VideoList videos={videos} onVideoClick={selectVideo} display={selectedVideo? 'list' : 'grid'}/>
        </div>
      </section>
    </div>
    </>
  );
}

export default App;
