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
    created_at: string;
}

export interface ICarDetail extends ICar {
    description: string;
    video_url: string | null;
    engine: string;
    power: number;
    exterior_color: string;
    interior_color: string;
    doors: number;
    seats: number;
    registration_date: string | null;
    vin_masked: string;
    equipment: string[];
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

export interface IBlogPostDetail extends IBlogPost {
    content: string;
    gallery: string[];
}
