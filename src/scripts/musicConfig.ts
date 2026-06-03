export interface TrackConfig {
  url: string;
}

export const SOUND_EFFECTS_VOLUME = 0.3;

export const MUSIC_CONFIG: Record<string, TrackConfig> = {
  "/": {
    url: "/sound/menu_theme.mp3",
  },
  "/about": {
    url: "/sound/main_theme_2.mp3",
  },
  "/portfolio": {
    url: "/sound/main_theme_2.mp3",
  },
  "/blog": {
    url: "/sound/main_theme_2.mp3",
  },
  "default": {
    url: "/sound/.mp3",
  },
  "/blog/some-post": {
    url: "/sound/post_theme_1.mp3",
  },
  "/portfolio/some-post": {
    url: "/sound/post_theme_1.mp3",
  }
};
