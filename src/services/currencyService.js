const STORAGE_KEY = "currency_rates_url";

export function saveRatesUrl(url) {
    localStorage.setItem(STORAGE_KEY, url);
}

export function getRatesUrl() {
    return localStorage.getItem(STORAGE_KEY);
}
