export default async function ({ $axios }) {
    if (window.posApi) {
        const dynamicUrl = await window.posApi.getBaseUrl();
        $axios.setBaseURL(dynamicUrl);
        console.log("POS API Connected to:", dynamicUrl);
    }
}