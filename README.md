# screen-project
Projet écran - VueJS


## Utilisation
Lancer l'application en mode dev:
> npm run dev

Lancer la contruction de l'application dans le dossier /dist :
> npm run build

Après le build, ajouter un .htaccess dans le dossier dist pour la résolution des URL's :
```
<ifModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</ifModule>
```

## VueJs dépendance utilisé:

```
"normalize.css": "^8.0.0",
"vue": "^2.5.2",
"vue-lodash": "^2.0.0",
"vue-resource": "^1.5.0",
"vue-router": "^3.0.1"
```

Documentation: [VueJS doc](https://vuejs.org/v2/guide/).
