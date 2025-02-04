// src/routes/portfolio/[series]/+page.js
export function load({ params }) {
    // params.series will contain the actual value from the URL
    return {
      series: params.series
    };
  }