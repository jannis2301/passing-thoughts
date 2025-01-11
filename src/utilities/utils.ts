import { v4 as uuidv4 } from 'uuid';

// Utility to get a new expiration time (by default 60 seconds from now)
export const getNewExpirationTime = (duration: number = 60 * 1000): number =>
  Date.now() + duration;

export const generateId = (): string => uuidv4(); // Returns a unique ID in the form of a UUID string
