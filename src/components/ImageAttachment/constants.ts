
export const imagesExtensions = ["png", "jpg", "jpeg", "gif", "jpe", "svg", "bmp"] as const;

export const documentsExtensions = ["pdf"] as const;

export const microsoftOfficeExtensions = ["doc", "docx", "xlsx", "xls"] as const;

export const ACCEPTABLE_EXTENSIONS = [
  ...imagesExtensions,
  ...documentsExtensions,
  ...microsoftOfficeExtensions,
];
