import { writable } from 'svelte/store';
import { browser } from '$app/environment';

export const sources = writable([]);
export const consoles = writable([]);

if (browser) {
    sources.set(JSON.parse(localStorage.getItem('sources')) || []);

    sources.subscribe((value) => {
        localStorage.setItem('sources', JSON.stringify(value));
    });

    consoles.set(JSON.parse(localStorage.getItem('consoles')) || []);

    consoles.subscribe((value) => {
        localStorage.setItem('consoles', JSON.stringify(value));
    });

}