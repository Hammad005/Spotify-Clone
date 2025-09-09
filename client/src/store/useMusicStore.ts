import { create } from 'zustand'

export const useMusicStore = create((set, get) => ({
    albums: [],
    songs: [],

    fetchAlbums: async () => {
        
    }
}))