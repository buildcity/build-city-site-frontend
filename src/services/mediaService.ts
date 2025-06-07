import { supabase } from '../lib/supabase';
import { Media } from '../components/MediaCard';

export interface DatabaseMedia {
  id: string;
  title: string;
  description: string;
  image_url: string;
  url: string;
  type: 'article' | 'twitter' | 'youtube' | 'workshop' | 'bootcamp';
  tags: string[];
  twitter_spaces_id: string | null;
  youtube_video_id: string | null;
  article_preview: string | null;
  created_at: string;
  updated_at: string;
}

// Transform database media to component media
const transformMedia = (dbMedia: DatabaseMedia): Media => ({
  id: dbMedia.id,
  title: dbMedia.title,
  description: dbMedia.description,
  imageUrl: dbMedia.image_url,
  url: dbMedia.url,
  type: dbMedia.type,
  tags: dbMedia.tags,
  twitterSpacesId: dbMedia.twitter_spaces_id || undefined,
  youtubeVideoId: dbMedia.youtube_video_id || undefined,
  articlePreview: dbMedia.article_preview || undefined,
});

export const mediaService = {
  async getAll(): Promise<Media[]> {
    const { data, error } = await supabase
      .from('media')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Error fetching media:', error);
      throw error;
    }

    return data.map(transformMedia);
  },

  async getById(id: string): Promise<Media | null> {
    const { data, error } = await supabase
      .from('media')
      .select('*')
      .eq('id', id)
      .single();

    if (error) {
      console.error('Error fetching media by id:', error);
      throw error;
    }

    return data ? transformMedia(data) : null;
  },

  async getByType(type: string): Promise<Media[]> {
    const { data, error } = await supabase
      .from('media')
      .select('*')
      .eq('type', type)
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Error fetching media by type:', error);
      throw error;
    }

    return data.map(transformMedia);
  },

  async searchByTags(tags: string[]): Promise<Media[]> {
    const { data, error } = await supabase
      .from('media')
      .select('*')
      .overlaps('tags', tags)
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Error searching media by tags:', error);
      throw error;
    }

    return data.map(transformMedia);
  },
};
