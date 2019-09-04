export default function importPhoto(el) {
    let images = {};
    el.keys().map(item => { images[item.replace('./', '')] = el(item); });
    return images;
}
// const images = importPhoto(require.context('../image/', false, /\.(png|jpe?g|svg)$/));
