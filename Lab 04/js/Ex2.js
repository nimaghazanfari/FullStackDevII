const siteUrls = ["http://nba.com", "http://mlb.com", "http://nhl.com", "http://tesla.com"];

const openTabs = () => {
    siteUrls.forEach(url => {
        window.open(url, '_blank');
    });
}