const body = document.getElementsByTagName('body')[0];
const head = document.getElementsByTagName('head')[0];

const native = document.createElement('meta');
native.content = 'width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no" name="viewport';
head.appendChild(native);

const shortcutIcon = document.createElement('link');
shortcutIcon.href = 'images/shortcutIcon.png';
shortcutIcon.rel = 'shortcut icon';
head.appendChild(shortcutIcon);

linkStyle('stuff_style')
linkStyle('header_style')
linkStyle('mainText_style')
createScript('Hovering');
createScript('Header');
createScript('Footer');
createScript('HtmlFromFile');


function createScript(name) {
    const script = document.createElement('script');
    script.src = `../JS/${name}.js`;
    body.appendChild(script);
}

function linkStyle(style) {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = `../CSS/${style}.css`;
    head.insertBefore(link, head.firstChild);
}