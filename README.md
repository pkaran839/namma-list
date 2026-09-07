# NammaList — Bengaluru local guide

A first working prototype inspired by the *concept* of BLR Wiki, branded as NammaList.

## Included
- 97 initial Bengaluru listings across 8 categories
- Search by place, area, category and description
- Category filters
- Area filter
- Price filter (₹ / ₹₹ / ₹₹₹)
- Rating filter
- Sorting
- Interactive OpenStreetMap/Leaflet map
- Google Maps links
- Dark/light mode persisted in localStorage
- Responsive mobile layout

## Run
No build step is required for this prototype.

Option 1: double-click `index.html`.

Option 2 (recommended):
```bash
python -m http.server 8000
```
Then open `http://localhost:8000`.

## Next build
The next production step should move the data into MySQL/PostgreSQL and expose it through a FastAPI backend, then add an admin panel for editing listings, real images, verified prices, exact map coordinates, SEO pages and authentication/favourites.

## Data note
The initial listing names/categories/areas/ratings are based on the publicly visible BLR Wiki page checked during this build. Price levels and map coordinates in this prototype are starter values and should be verified before publication.


## v5 fixes
- Removed LoremFlickr because it could return irrelevant/cat images.
- Added varied category-based Unsplash photo sources with a safe fallback.
- Improved Near Me: HTTPS check, permission/error messages, timeout handling, user marker, and map no longer jumps away after locating you.
- Added a note clarifying that the result count represents the complete filtered list.
