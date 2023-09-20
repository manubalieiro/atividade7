// bike-not-found-error.ts
export class BikeNotFoundError extends Error {
  public readonly name = 'BikeNotFoundError';
  
  constructor() {
    super('Bike not found.');
  }
}
