# Site Impulso X

Repositório separado do site institucional da Impulso X.

Domínio canônico: `https://www.impulsox.com.br`

## Desenvolvimento

```bash
npm install
npm run dev
```

## Validação

```bash
npm run typecheck
npm run build
```

## Deploy na VPS

O deploy atual publica o export estático em `/var/www/impulsox-site`.

```bash
cd /root/impulso-x/site-repositorio
npm run typecheck
npm run build
rsync -a --delete out/ /var/www/impulsox-site/
chown -R www-data:www-data /var/www/impulsox-site
nginx -t
systemctl reload nginx
```

## Separação obrigatória

Este repositório é somente da Impulso X.

Não publicar este site em caminhos da Mimo Power, como:

- `/var/www/mimopower-site/dist`
- `/etc/nginx/sites-available/mp-hub.conf`
- `/etc/letsencrypt/live/www.mimopower.com.br/`
