import fs from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const root = path.resolve(import.meta.dirname, '..');
const identitySourceDir = path.resolve(root, '..', 'identidade');
const identityOutputDir = path.resolve(root, 'public', 'assets', 'identidade');
const casesSourceDir = path.resolve(root, '..', 'cases');
const casesOutputDir = path.resolve(root, 'public', 'assets', 'cases');

const jobs = [
  ['Fundosite0IX.png', 'fundo-site-0-desktop.webp', { width: 1717, quality: 76 }],
  ['Fundosite0IX.png', 'fundo-site-0-mobile.webp', { width: 900, quality: 74 }],
  ['Fundosite1IX.png', 'fundo-site-1-desktop.webp', { width: 1717, quality: 76 }],
  ['Fundosite1IX.png', 'fundo-site-1-mobile.webp', { width: 900, quality: 74 }],
  ['Marcatransp0IM.png', 'marca-completa.webp', { width: 760, quality: 82 }],
  ['Marcatransp1IM.png', 'marca-escudo.webp', { width: 760, quality: 82 }],
  ['logoImpulsox.PNG', 'logo-institucional.webp', { width: 720, quality: 80 }],
  ['EscritorioIX.png', 'escritorio.webp', { width: 1400, quality: 78 }],
  ['MacbookIX.png', 'mockup-macbook.webp', { width: 1180, quality: 80 }],
  ['IphoneIX.png', 'mockup-iphone.webp', { width: 760, quality: 80 }],
  ['IpadIX.png', 'mockup-ipad.webp', { width: 980, quality: 80 }],
  ['IconesIX.png', 'icones.webp', { width: 960, quality: 78 }],
  ['RedesIX.png', 'redes.webp', { width: 960, quality: 78 }],
  ['TemasIX.png', 'temas.webp', { width: 760, quality: 78 }],
  ['perfil Luizv2.png', 'perfil-luiz-v2.webp', { width: 720, quality: 80 }],
  ['Perfil Karina.JPG', 'perfil-karina.webp', { width: 720, quality: 80 }],
];

// Logos transparentes (sem flatten) — devem flutuar sobre o fundo preto da seção.
const clientJobs = [
  ['Jamil.PNG', 'jamil.webp', { height: 220, quality: 86, trim: true }],
  ['Ohana2.png', 'ohana-v2.webp', { quality: 92, trim: true }],
  ['Mimo Power.PNG', 'mimo-power.webp', { height: 220, quality: 86, trim: true }],
  ['Food.PNG', 'minas-eventos.webp', { height: 220, quality: 86, trim: true }],
];

async function optimize(inputName, outputName, options, dirs = {}) {
  const sourceDir = dirs.sourceDir ?? identitySourceDir;
  const outputDir = dirs.outputDir ?? identityOutputDir;
  const inputPath = path.join(sourceDir, inputName);
  const outputPath = path.join(outputDir, outputName);
  let image = sharp(inputPath, { failOn: 'none' }).rotate();
  const metadata = await image.metadata();
  const hasAlpha = Boolean(metadata.hasAlpha);

  if (options.trim) {
    image = image.trim();
  }

  image = image.resize({
    width: options.width,
    height: options.height,
    withoutEnlargement: true,
    fit: 'inside',
  });

  if (options.flatten) {
    image = image.flatten({ background: '#ffffff' });
  }

  await image
    .webp({
      quality: options.quality,
      alphaQuality: hasAlpha && !options.flatten ? 88 : undefined,
      effort: 5,
    })
    .toFile(outputPath);

  const outputMetadata = await sharp(outputPath).metadata();
  const stat = await fs.stat(outputPath);

  return {
    source: inputName,
    file: outputName,
    width: outputMetadata.width,
    height: outputMetadata.height,
    bytes: stat.size,
    sourceHasAlpha: hasAlpha,
  };
}

async function makeOgImage() {
  const background = path.join(identityOutputDir, 'fundo-site-0-desktop.webp');
  const logo = path.join(identityOutputDir, 'marca-completa.webp');
  const out = path.join(root, 'public', 'og-image.png');
  const versionedOut = path.join(root, 'public', 'og-image-ai-first.png');

  const canvas = sharp(background)
    .resize(1200, 630, { fit: 'cover', position: 'center' })
    .modulate({ brightness: 0.62, saturation: 0.9 });

  const logoBuffer = await sharp(logo)
    .resize({ width: 360, withoutEnlargement: true })
    .png()
    .toBuffer();

  const textSvg = Buffer.from(`
    <svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
      <rect width="1200" height="630" fill="rgba(5,5,5,0.42)"/>
      <rect x="70" y="72" width="1060" height="486" fill="none" stroke="rgba(201,162,39,0.34)" stroke-width="1"/>
      <text x="80" y="455" fill="#f4f0e7" font-family="Arial, sans-serif" font-size="50" font-weight="700" letter-spacing="-1">
        Inteligência que atende, qualifica
      </text>
      <text x="80" y="514" fill="#c9a227" font-family="Arial, sans-serif" font-size="46" font-weight="700">
        e faz seu cliente voltar.
      </text>
      <text x="82" y="552" fill="#b8b2a5" font-family="Arial, sans-serif" font-size="22" font-weight="400">
        Agente de IA no WhatsApp para PMEs
      </text>
    </svg>
  `);

  const pngBuffer = await canvas
    .composite([
      { input: textSvg, top: 0, left: 0 },
      { input: logoBuffer, top: 84, left: 74 },
    ])
    .png({ compressionLevel: 9 })
    .toBuffer();

  await fs.writeFile(out, pngBuffer);
  await fs.writeFile(versionedOut, pngBuffer);

  return [
    { file: 'og-image.png', width: 1200, height: 630, bytes: (await fs.stat(out)).size },
    { file: 'og-image-ai-first.png', width: 1200, height: 630, bytes: (await fs.stat(versionedOut)).size },
  ];
}

async function makeIcons() {
  const logo = path.join(identityOutputDir, 'marca-escudo.webp');
  const favicons = [
    ['favicon.png', 96],
    ['apple-touch-icon.png', 180],
  ];

  const results = [];
  for (const [file, size] of favicons) {
    const out = path.join(root, 'public', file);
    await sharp(logo)
      .resize(size, size, { fit: 'cover' })
      .png({ compressionLevel: 9 })
      .toFile(out);
    results.push({ file, width: size, height: size, bytes: (await fs.stat(out)).size });
  }
  return results;
}

await fs.mkdir(identityOutputDir, { recursive: true });
await fs.mkdir(casesOutputDir, { recursive: true });

const manifest = [];
for (const job of jobs) {
  manifest.push(await optimize(...job));
}
manifest.push(...(await makeOgImage()));
manifest.push(...(await makeIcons()));

await fs.writeFile(
  path.join(identityOutputDir, 'manifest.json'),
  `${JSON.stringify(manifest, null, 2)}\n`,
);

const casesManifest = [];
for (const job of clientJobs) {
  casesManifest.push(
    await optimize(...job, {
      sourceDir: casesSourceDir,
      outputDir: casesOutputDir,
    }),
  );
}

await fs.writeFile(
  path.join(casesOutputDir, 'manifest.json'),
  `${JSON.stringify(casesManifest, null, 2)}\n`,
);

for (const item of [...manifest, ...casesManifest]) {
  const kb = `${(item.bytes / 1024).toFixed(1)} KB`.padStart(10, ' ');
  const size = `${item.width}x${item.height}`.padEnd(11, ' ');
  console.log(`${item.file.padEnd(28, ' ')} ${size} ${kb}`);
}
