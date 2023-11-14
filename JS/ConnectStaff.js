const body = document.getElementsByTagName('body')[0];

createScript('Hovering');
createScript('Header');
createScript('Footer');
createScript('HtmlFromFile');


function createScript(name) {
    const script = document.createElement('script');
    script.src = `JS/${name}.js`;
    body.appendChild(script);
}