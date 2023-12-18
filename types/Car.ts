export default interface Car {
    id: number;
    brand: string;
    model: string;
    year?: number;
    description?: string;
    createdAt: Date;
    updatedAt: Date;
  }