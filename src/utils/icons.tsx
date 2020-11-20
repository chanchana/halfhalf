import React from 'react'

const arrow = (
    <svg viewBox="24 24 896 896" focusable="false" data-icon="left" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M724 218.3V141c0-6.7-7.7-10.4-12.9-6.3L260.3 486.8a31.86 31.86 0 000 50.3l450.8 352.1c5.3 4.1 12.9.4 12.9-6.3v-77.3c0-4.9-2.3-9.6-6.1-12.6l-360-281 360-281.1c3.8-3 6.1-7.7 6.1-12.6z"></path></svg>
)

const pin = (
    <svg width="16" height="20" viewBox="0 0 14 20" fill="none" style={{ marginRight: '8px', marginBottom: '-6px' }}><path d="M7 0C3.13 0 0 3.13 0 7c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z" fill="#000"></path></svg>
)

const doublePin = (
    <svg width="20" height="20" viewBox="0 0 25 30" fill="none" style={{ marginRight: '8px', marginBottom: '-6px' }} ><path d="M9 22l-.371.335.371.411.371-.41L9 22zm0 0l.371.335h0l.002-.002.004-.005.016-.017a4.45 4.45 0 00.02-.023l.04-.045c.053-.06.13-.147.227-.26a46.982 46.982 0 003.235-4.235c.884-1.31 1.776-2.797 2.448-4.297C16.032 11.957 16.5 10.413 16.5 9c0-4.146-3.354-7.5-7.5-7.5A7.495 7.495 0 001.5 9c0 1.414.468 2.957 1.137 4.45.672 1.5 1.564 2.988 2.449 4.298a46.985 46.985 0 003.521 4.563l.016.017.004.005.001.002h0L9 22zm0-11a2 2 0 110-4 2 2 0 010 4z" fill="#222" stroke="#fff"></path><path d="M16 28l-.371.335.371.411.371-.41L16 28zm0 0l.371.335h0l.002-.002.004-.005.016-.017a3.037 3.037 0 00.06-.068c.053-.06.13-.147.227-.26a46.982 46.982 0 003.235-4.235c.884-1.31 1.776-2.797 2.448-4.297.669-1.494 1.137-3.037 1.137-4.451 0-4.146-3.354-7.5-7.5-7.5A7.495 7.495 0 008.5 15c0 1.414.468 2.957 1.137 4.45.672 1.5 1.564 2.988 2.448 4.298a46.982 46.982 0 003.522 4.563l.016.017.004.005.001.002h0L16 28zm0-11a2 2 0 110-4 2 2 0 010 4z" fill="#222" stroke="#fff"></path></svg>
)

const food = (
    <svg width="14" height="14" viewBox="0 0 23 23" fill="none"><path d="M6.464 3.594c-.43 0-.718.431-.718.719v3.593H4.31V4.313c0-.432-.288-.72-.719-.72-.43 0-.718.432-.718.72v3.593H1.437V4.313c0-.432-.288-.72-.719-.72-.43 0-.718.432-.718.72v4.743c0 1.294 1.006 2.3 2.155 2.444v10.063c0 .862.574 1.437 1.436 1.437s1.437-.575 1.437-1.438V11.5c1.15-.144 2.155-1.15 2.155-2.444V4.313c0-.288-.288-.72-.719-.72zm2.873.719v8.625h1.437v8.624c0 .863.575 1.438 1.437 1.438.861 0 1.436-.575 1.436-1.438V0c-2.442 0-4.31 1.869-4.31 4.313zm10.056-1.438c-2.011 0-3.591 2.156-3.591 4.744-.144 1.725.718 3.306 2.155 4.312v9.632c0 .862.574 1.437 1.436 1.437s1.437-.575 1.437-1.438v-9.63c1.436-1.007 2.298-2.588 2.154-4.313 0-2.588-1.58-4.744-3.59-4.744z" fill="#000"></path></svg>
)

const shop = (
    <svg width="14" height="14" viewBox="0 0 20 19" fill="none"><path d="M18 4h-3V2c0-1.11-.89-2-2-2H7C5.89 0 5 .89 5 2v2H2C.89 4 0 4.89 0 6v11c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zM7 2h6v2H7V2zm11 15H2v-2h16v2zm0-5H2V6h3v2h2V6h6v2h2V6h3v6z" fill="#000"></path></svg>
)

const check = (
    <svg viewBox="64 64 896 896" focusable="false" data-icon="check-circle" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M699 353h-46.9c-10.2 0-19.9 4.9-25.9 13.3L469 584.3l-71.2-98.8c-6-8.3-15.6-13.3-25.9-13.3H325c-6.5 0-10.3 7.4-6.5 12.7l124.6 172.8a31.8 31.8 0 0051.7 0l210.6-292c3.9-5.3.1-12.7-6.4-12.7z"></path><path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"></path></svg>
)

export const icons = {
    arrow,
    pin,
    doublePin,
    food,
    shop,
    check,
}