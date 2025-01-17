export interface Milestone {
    id: string; // Unique ID (e.g., from Firestore)
    title: string; // Title of the milestone
    description: string; // Description of the milestone
    date: string; // Date in ISO format
    songURL: string; // URL of the associated song
  }