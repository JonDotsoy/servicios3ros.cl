mkdir -p static/img/favicons
mkdir -p static/css

files=('img/favicons/apple-touch-icon.png'
  'img/bars-s3ros.png'
  'img/drager.brand.jpg'
  'img/favicons/browserconfig.xml'
  'img/favicons/favicon-16x16.png'
  'img/favicons/favicon-32x32.png'
  'img/favicons/favicon.ico'
  'img/favicons/manifest.json'
  'img/favicons/mstile-144x144.png'
  'img/favicons/safari-pinned-tab.svg'
  'img/interexport.grand.jpg'
  'img/PROVEEDORES-DE-MAQUINARIA.jpg'
  'img/quarry-330563_1280.jpg'
  'img/RE_Portacount_Beauty_Shot_Slider1.jpg'
  'img/reinike.brand.jpg'
  'img/roundtable-828546_1280_.jpg'
  'img/roundtable-828546_1280_.jpgs'
  'img/santaelvira.brand.png'
  'img/santaveatris.brand.jpg'
  'img/tricomin.brand.png'
  'css/style.css')

for i in "${files[@]}"; do
  curl "https://www.servicios3ros.cl/$i" >static/$i
done
