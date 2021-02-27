import axios from 'axios';

class Youtube {
  constructor(key){
    this.youtube = axios.create({
      baseURL: 'https://youtube.googleapis.com/youtube/v3',
      params: {key: key},
    });
  }

  async mostPopular() {
    const response = await this.youtube.get('videos', {
      params: {
        part: 'snippet, statistics',
        chart: 'mostPopular',
        maxResults: 24,
        regionCode: 'KR',
      }
    });
    return response.data.items;
  }

  async search(query){
    const response = await this.youtube.get('search', {
      params:{
        part: 'snippet',
        maxResults: '24',
        type: 'video',
        q: query,
      },
    });
    return response.data.items.map(item => ({...item, id: item.id.videoId}));
  }

  async channel(channelId){
    const response = await this.youtube.get('channels', {
      params: {
        part:'snippet, statistics',
        id: channelId,
      },
    });
    return response.data.items[0].snippet.thumbnails.medium.url;
  }


  async getVideo(videoId){
    const response = await this.youtube.get('videos', {
      params: {
        part: 'snippet, statistics',
        id: videoId,
      },
    });
    return response.data.items;
  };


}
export default Youtube;