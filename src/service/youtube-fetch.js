class Youtube {
  constructor(key){
    this.key=key;
    this.getRequeryOptions = {
      method: 'GET',
      redirect: 'follow',
    };
  }

  async mostPopular() {
    const response = await fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=24&regionCode=KR&key=${this.key}`,
      this.getRequestOptions
    );
    const result = await response.json();
    return result.items;
  };

  async search(query) {
    const response = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=24&q=${query}&type=video&key=${this.key}`,
      this.getRequestOptions
    );
    const result = await response.json();
    return result.items.map(item => ({ ...item, id: item.id.videoId }));
  };

  async channel(channelId) {
    const response = await fetch(`https://youtube.googleapis.com/youtube/v3/channels?part=snippet&id=${channelId}&key=${this.key}`,
      this.getRequestOptions
    );
    const result = await response.json();
    return result.items[0].snippet.thumbnails.medium.url;
  };









};

export default Youtube;