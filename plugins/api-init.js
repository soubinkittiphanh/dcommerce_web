export default async function ({ $axios }) {
    if (window.posApi) {
        const dynamicUrl = await window.posApi.getBaseUrl();
        $axios.setBaseURL(dynamicUrl);
        if (typeof window !== 'undefined' && window.localStorage) {
            window.localStorage.setItem('api_base_url', dynamicUrl);
        }
        console.log("POS API Connected to:", dynamicUrl);
    } else {
        if (typeof window !== 'undefined' && window.localStorage) {
            const currentBase = $axios.defaults.baseURL || window.location.origin;
            window.localStorage.setItem('api_base_url', currentBase);
        }
    }
}