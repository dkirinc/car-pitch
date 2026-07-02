export interface IBrand {
    id: number;
    name: string;
    slug: string;
}

export interface ICar {
    id: number;
    model: string;
    slug: string;
    year: number;
    fuel_type: string;
    transmission: string;
    mileage: number;
    price: string | null;
    status: 'novo' | 'dostupno';
    brand: IBrand;
}

export interface IStats {
    cars_sold: number;
    brands_count: number;
    avg_delivery_days: number;
}
