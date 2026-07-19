// Approximate number of monospace columns visible in a pinned gist card.
// This is the one knob for horizontal positioning: if the art looks
// off-center on your profile, just change this number.
export const BOX_WIDTH = 50;

// Horizontally center an ASCII art block within `width` columns by prefixing
// every line with the SAME amount of leading spaces. Padding the whole block
// uniformly (rather than each line on its own) keeps the art's internal shape.
export const centerArt = (art, width = BOX_WIDTH) => {
    const lines = art.replace(/\n+$/, '').split('\n');
    const blockWidth = Math.max(...lines.map((line) => line.length));
    const pad = Math.max(0, Math.floor((width - blockWidth) / 2));
    const prefix = ' '.repeat(pad);

    // Leave blank lines empty so they don't carry trailing spaces.
    return lines.map((line) => (line.length ? prefix + line : line)).join('\n');
};
