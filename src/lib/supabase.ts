import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://nvkojrtponbfqxrurjau.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im52a29qcnRwb25iZnF4cnVyamF1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDkwOTg4MDMsImV4cCI6MjA2NDY3NDgwM30.HEh7bhF9i_Wl9MdDJ87Ki88OYWel8xwPyPKNfSSIrQk'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export type Database = {
  public: {
    Tables: {
      projects: {
        Row: {
          id: string
          title: string
          description: string
          image_url: string
          github_url: string
          demo_url: string
          tags: string[]
          created_at: string
          updated_at: string
        }
        Insert: {
          id: string
          title: string
          description: string
          image_url: string
          github_url: string
          demo_url: string
          tags: string[]
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          title?: string
          description?: string
          image_url?: string
          github_url?: string
          demo_url?: string
          tags?: string[]
          created_at?: string
          updated_at?: string
        }
      }
      partners: {
        Row: {
          id: number
          name: string
          description: string
          image_url: string
          link: string
          created_at: string
          updated_at: string
        }
        Insert: {
          name: string
          description: string
          image_url: string
          link: string
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: number
          name?: string
          description?: string
          image_url?: string
          link?: string
          created_at?: string
          updated_at?: string
        }
      }
      media: {
        Row: {
          id: string
          title: string
          description: string
          image_url: string
          url: string
          type: 'article' | 'twitter' | 'youtube' | 'workshop' | 'bootcamp'
          tags: string[]
          twitter_spaces_id: string | null
          youtube_video_id: string | null
          article_preview: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id: string
          title: string
          description: string
          image_url: string
          url: string
          type: 'article' | 'twitter' | 'youtube' | 'workshop' | 'bootcamp'
          tags: string[]
          twitter_spaces_id?: string | null
          youtube_video_id?: string | null
          article_preview?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          title?: string
          description?: string
          image_url?: string
          url?: string
          type?: 'article' | 'twitter' | 'youtube' | 'workshop' | 'bootcamp'
          tags?: string[]
          twitter_spaces_id?: string | null
          youtube_video_id?: string | null
          article_preview?: string | null
          created_at?: string
          updated_at?: string
        }
      }
    }
  }
}