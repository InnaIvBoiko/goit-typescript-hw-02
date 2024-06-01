export interface ImageObj {
    id: string;
    urls: {
        small: string;
        regular: string;
    };
    alt_description: string;
    likes: number;
    description?: string;
    user: { name: string; };
}

export interface ImageForModal {
    urls: {
        regular: string;
    };
    isOpen: boolean;
};

export interface Data {
    total: number;
    total_pages: number;
    results: ImageObj[];
};