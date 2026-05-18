/**
 * Optional layout overrides for coach/manager entries in messages.
 * Use Tailwind classes (e.g. scale-95 md:scale-100, translate-x-2).
 */
export type StaffImageOverrides = {
  /** Profile section (ContentBlockThree / Four) — applied to the portrait `<Image>`. */
  imageScale?: string;
  /** Profile section — applied to the image wrapper (positioning). */
  imageTranslate?: string;
  /** Horizontal card strip in CardModule — applied to the thumbnail `<Image>`. */
  cardImageScale?: string;
};
