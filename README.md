# Site Impulso X

Repositorio separado do site institucional da Impulso X.

Dominio canonico: `https://www.impulsox.com.br`

## Desenvolvimento

```bash
npm install
npm run dev
```

## Validacao

```bash
npm run typecheck
npm run build
```

## Deploy na VPS

O deploy atual publica o export estatico em `/var/www/impulsox-site`.

```bash
cd /root/impulso-x-site
npm run typecheck
npm run build
rsync -a --delete out/ /var/www/impulsox-site/
chown -R www-data:www-data /var/www/impulsox-site
nginx -t
systemctl reload nginx
```

## Separacao obrigatoria

Este repositorio e somente da Impulso X.

Nao publicar este site em caminhos da Mimo Power, como:

- `/var/www/mimopower-site/dist`
- `/etc/nginx/sites-available/mp-hub.conf`
- `/etc/letsencrypt/live/www.mimopower.com.br/`

