const BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api';

export async function fetchWithAuth(endpoint, options = {}) {
    try {
        const fullUrl = `${BASE_URL}${endpoint}`;
        console.log('Fetching from:', fullUrl);

        const response = await fetch(fullUrl, {
            ...options,
            headers: {
                'Content-Type': 'application/json',
                ...options.headers,
            },
        });

        const text = await response.text();
        console.log('Raw response:', text);

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status} ${text}`);
        }

        try {
            return JSON.parse(text);
        } catch (e) {
            console.error('JSON parse error:', e);
            throw new Error('Invalid JSON response');
        }
    } catch (error) {
        console.error('API Error:', error);
        throw error;
    }
}
