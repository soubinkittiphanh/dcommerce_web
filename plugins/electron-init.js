export default async function ({ $axios }) {
  // Only run this in the desktop app (client-side)
  if (process.client && window.posApi) {
    try {
      // Ask the Electron 'Main' process for the URL we just saw in the terminal
      const dynamicUrl = await window.posApi.getBaseUrl();
      
      if (dynamicUrl) {
        $axios.setBaseURL(dynamicUrl);
        
        // Log this so you can see it in the App's DevTools
        console.log("✅ POS successfully connected to dynamic API:", dynamicUrl);
      }
    } catch (error) {
      console.error("❌ Failed to fetch dynamic URL from Electron:", error);
    }
  }
}