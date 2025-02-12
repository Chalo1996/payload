/* eslint-disable import/no-extraneous-dependencies */
import type express from 'express'
import type serveStatic from 'serve-static'
import type { ResizeOptions, Sharp } from 'sharp'

export type FileSize = {
  filename: null | string
  filesize: null | number
  height: null | number
  mimeType: null | string
  width: null | number
}

export type FileSizes = {
  [size: string]: FileSize
}

export type FileData = {
  filename: string
  filesize: number
  height: number
  mimeType: string
  sizes: FileSizes
  tempFilePath?: string
  width: number
}

export type ProbedImageSize = {
  height: number
  mime: string
  type: string
  width: number
}

/**
 * Params sent to the sharp toFormat() function
 * @link https://sharp.pixelplumbing.com/api-output#toformat
 */
export type ImageUploadFormatOptions = {
  format: Parameters<Sharp['toFormat']>[0]
  options?: Parameters<Sharp['toFormat']>[1]
}

/**
 * Params sent to the sharp trim() function
 * @link https://sharp.pixelplumbing.com/api-resize#trim
 */
export type ImageUploadTrimOptions = Parameters<Sharp['trim']>[0]

export type ImageSize = Omit<ResizeOptions, 'withoutEnlargement'> & {
  /**
   * @deprecated prefer position
   */
  crop?: string // comes from sharp package
  formatOptions?: ImageUploadFormatOptions
  name: string
  trimOptions?: ImageUploadTrimOptions
  /**
   * When an uploaded image is smaller than the defined image size, we have 3 options:
   *
   * `undefined | false | true`
   *
   * 1. `undefined` [default]: uploading images with smaller width AND height than the image size will return null
   * 2. `false`: always enlarge images to the image size
   * 3. `true`: if the image is smaller than the image size, return the original image
   */
  withoutEnlargement?: ResizeOptions['withoutEnlargement']
}

export type GetAdminThumbnail = (args: { doc: Record<string, unknown> }) => false | null | string

export type IncomingUploadType = {
  adminThumbnail?: GetAdminThumbnail | string
  crop?: boolean
  disableLocalStorage?: boolean
  filesRequiredOnCreate?: boolean
  focalPoint?: boolean
  /** Options for original upload file only. For sizes, set each formatOptions individually. */
  formatOptions?: ImageUploadFormatOptions
  handlers?: any[]
  imageSizes?: ImageSize[]
  mimeTypes?: string[]
  resizeOptions?: ResizeOptions
  staticDir?: string
  staticOptions?: serveStatic.ServeStaticOptions<express.Response<any, Record<string, any>>>
  staticURL?: string
  trimOptions?: ImageUploadTrimOptions
}

export type Upload = {
  adminThumbnail?: GetAdminThumbnail | string
  crop?: boolean
  disableLocalStorage?: boolean
  filesRequiredOnCreate?: boolean
  focalPoint?: boolean
  formatOptions?: ImageUploadFormatOptions
  handlers?: any[]
  imageSizes?: ImageSize[]
  mimeTypes?: string[]
  resizeOptions?: ResizeOptions
  staticDir: string
  staticOptions?: serveStatic.ServeStaticOptions<express.Response<any, Record<string, any>>>
  staticURL: string
  trimOptions?: ImageUploadTrimOptions
}

export type File = {
  data: Buffer
  mimetype: string
  name: string
  size: number
}

export type FileToSave = {
  buffer: Buffer
  path: string
}
