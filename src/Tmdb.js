

const basicFetch = async => (endpoint) => {
    const req = await fetch(`${API_BASE}${endpoint}`);
    const json = await req.json();
    return json;
}

export default {
    getHomeList: async () => {
        return [
            {
                slug: 'originals',
                title: 'Netflix Originals',
                items: await basicFetch(`/discover/tv?with_network=213`)
            },
            {
                slug: 'trending',
                title: 'Recommended for You',
                items: []
            },
            {
                slug: 'toprated',
                title: 'Top Rated',
                items: []
            },
            {
                slug: 'action',
                title: 'Action',
                items: []
            },
            {
                slug: 'comedy',
                title: 'Comedy',
                items: []
            },
            {
                slug: 'horror',
                title: 'Horror',
                items: []
            },
            {
                slug: 'romance',
                title: 'Romance',
                items: []
            },
            {
                slug: 'documentary',
                title: 'Documentary',
                items: []
            },
        ]
    }
}