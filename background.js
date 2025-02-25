chrome.runtime.onInstalled.addListener(() => {
    console.log("Smart Price Tracker Installed Successfully!");
});

// Listen for messages from content script (price tracking, search tracking)
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.type === "price_update") {
        console.log("Received Price Update:", request.data);
        // Call API to store price data securely (to be implemented)
    }
    if (request.type === "search_tracking") {
        console.log("Tracking Search Query:", request.query);
        // Call API to analyze search behavior (to be implemented)
    }
});
