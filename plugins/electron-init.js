export default async function ({ $axios }) {
  // Only run this in the desktop app (client-side)
  if (process.client && window.posApi) {
    try {
      // Ask the Electron 'Main' process for the URL we just saw in the terminal
      const dynamicUrl = await window.posApi.getBaseUrl();
      
      if (dynamicUrl) {
        $axios.setBaseURL(dynamicUrl);
        localStorage.setItem('api_base_url', dynamicUrl);
        
        // Log this so you can see it in the App's DevTools
        console.log("✅ POS successfully connected to dynamic API:", dynamicUrl);
      }
    } catch (error) {
      console.error("❌ Failed to fetch dynamic URL from Electron:", error);
    }
  } else if (process.client) {
    const currentBase = $axios.defaults.baseURL || window.location.origin;
    localStorage.setItem('api_base_url', currentBase);
  }
}