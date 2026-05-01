import type { Payload } from 'payload'
import { promises as fs } from 'node:fs'
import path from 'node:path'

const SEED_DIR = path.resolve(process.cwd(), 'public/seed')

const MIME_BY_EXT: Record<string, string> = {
  '.webp': 'image/webp',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.ico': 'image/x-icon',
}

export type SeededMedia = Awaited<ReturnType<typeof seedMedia>>

export async function seedMedia({ payload }: { payload: Payload }) {
  const uploadMedia = async (filename: string, alt: string) => {
    let buffer: Buffer
    try {
      buffer = await fs.readFile(path.join(SEED_DIR, filename))
    } catch {
      buffer = await fs.readFile(path.join(process.cwd(), 'src/endpoints/seed', filename))
    }
    const mimetype = MIME_BY_EXT[path.extname(filename).toLowerCase()] ?? 'image/webp'
    return await payload.create({
      collection: 'media',
      data: { alt },
      file: {
        data: buffer,
        name: filename,
        mimetype,
        size: buffer.byteLength,
      },
    })
  }

  const [
    logoMedia,
    logoLightMedia,
    bgVector,
    bgDetalhe,
    n8nLogo,
    openaiLogo,
    evolutionLogo,
    locxImage,
    titoImage,
    pontoEletronicoImage,
    teamLucas,
    teamSavio,
    teamJorge,
    teamVictor,
    imageHero1,
    imagePost1,
    imagePost2,
    imagePost3,
    faviconMedia,
    ogBannerMedia,
  ] = await Promise.all([
    uploadMedia('logo_and_name.webp', 'Bytewer Logo'),
    uploadMedia('logo_white.webp', 'Bytewer Logo Light'),
    uploadMedia('Vector.webp', 'Background Vector'),
    uploadMedia('detalhe_fundo.webp', 'Background Detail'),
    uploadMedia('n8n.webp', 'n8n Logo'),
    uploadMedia('open_ai.webp', 'OpenAI Logo'),
    uploadMedia('evolution-logo.webp', 'Evolution API Logo'),
    uploadMedia('locx.webp', 'Locx Project'),
    uploadMedia('tito.webp', 'Tito Project'),
    uploadMedia('ponto-eletronico.webp', 'Ponto Eletrônico Project'),
    uploadMedia('team/Lucas.webp', 'Lucas'),
    uploadMedia('team/Savio.webp', 'Sávio'),
    uploadMedia('team/Jorge.webp', 'Jorge'),
    uploadMedia('team/Victor.webp', 'Victor'),
    uploadMedia('image-hero1.webp', 'Hero Image 1'),
    uploadMedia('image-post1.webp', 'Post Image 1'),
    uploadMedia('image-post2.webp', 'Post Image 2'),
    uploadMedia('image-post3.webp', 'Post Image 3'),
    uploadMedia('favicon.svg', 'Favicon'),
    uploadMedia('website-template-OG.webp', 'OpenGraph Banner'),
  ])

  return {
    logoMedia,
    logoLightMedia,
    bgVector,
    bgDetalhe,
    n8nLogo,
    openaiLogo,
    evolutionLogo,
    locxImage,
    titoImage,
    pontoEletronicoImage,
    teamLucas,
    teamSavio,
    teamJorge,
    teamVictor,
    imageHero1,
    imagePost1,
    imagePost2,
    imagePost3,
    faviconMedia,
    ogBannerMedia,
  }
}
