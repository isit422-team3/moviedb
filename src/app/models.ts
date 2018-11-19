// This is the mongodb movie object retrievable through server api
export class DBMovie {
    movie_id: number; 
    title: string;
    rating: number
    rating_count: number;
    reviews: number[];
    review_count: number;
    api_link: string
}

// This is the movie object from other websites combined with our mongodb movie object.
export class Movie {
    movie_id: number; 
    title: string;
    rating: number;
    rating_count: number;
    reviews: number[];
    release: string;
    genre: string;
    description: string;
    review_count: number;
    background: string;
    link: string;
}

// soley retrieved from our mongodb or user input.
export class Review {
    review_id: number;
    author_id: number;
    movie_id: number;
    title: string;
    rating_up: number;
    rating_down: number;
    review_score: number;
}

// soley retrieved from our mongodb or user input
export class User {
    user_id: number 
    name: string;
    username: string;
    password: string;
    phone_number: string;
    movie_favorites: number[];
    location: string;
    profile_picture: string;
    biography: string;
    ratings: number[];
    rating_count: number;
    reviews: number[];
    review_count: number;
    status: string;
    settings: any;
}
