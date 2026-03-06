
import { ROUTES } from './lib/data';

console.log("Checking ROUTES data...");
let errorCount = 0;
ROUTES.forEach((r, i) => {
    if (!r.origin) {
        console.error(`Route at index ${i} missing origin:`, r.id);
        errorCount++;
    }
    if (typeof r.distance !== 'number') {
        console.error(`Route at index ${i} has non-number distance:`, r.id, r.distance);
        errorCount++;
    }
    if (!r.slug) {
        console.error(`Route at index ${i} missing slug:`, r.id);
        errorCount++;
    }
});

if (errorCount === 0) {
    console.log("All routes passed basic validation.");
} else {
    console.error(`Found ${errorCount} data errors.`);
}

const routesByOrigin = ROUTES.reduce((acc, route) => {
    if (!route.origin) return acc;
    if (!acc[route.origin]) {
        acc[route.origin] = []
    }
    acc[route.origin].push(route)
    return acc
}, {});

console.log("Grouped Origins:", Object.keys(routesByOrigin));
