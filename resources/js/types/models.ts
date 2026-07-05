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
    thumbnail_url: string;
}

export interface IStats {
    cars_sold: number;
    brands_count: number;
    avg_delivery_days: number;
}

export interface IReview {
    id: number;
    author_name: string;
    author_initials: string;
    car_model: string;
    rating: number;
    content: string;
}

export interface IBlogPost {
    id: number;
    title: string;
    slug: string;
    excerpt: string;
    published_at: string | null;
    cover_url: string;
    car: {
        brand: { name: string } | null;
    } | null;
}
