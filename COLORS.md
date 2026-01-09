# Syrio Color Palette

## Available Colors

The following colors are defined in `globals.css` using Tailwind v4's `@theme` directive:

| Color Name | Hex Code | Tailwind Class |
|------------|----------|----------------|
| Syrio Black | `#000d18` | `bg-syrio-black`, `text-syrio-black`, `border-syrio-black` |
| Syrio Blue | `#212f5e` | `bg-syrio-blue`, `text-syrio-blue`, `border-syrio-blue` |
| Syrio White | `#ffffff` | `bg-syrio-white`, `text-syrio-white`, `border-syrio-white` |
| Syrio Pink | `#d39ca6` | `bg-syrio-pink`, `text-syrio-pink`, `border-syrio-pink` |
| Syrio Red | `#90302d` | `bg-syrio-red`, `text-syrio-red`, `border-syrio-red` |

## Configuration (Tailwind v4)

Colors are defined in `src/app/globals.css`:

```css
@theme {
  --color-syrio-black: #000d18;
  --color-syrio-blue: #212f5e;
  --color-syrio-white: #ffffff;
  --color-syrio-pink: #d39ca6;
  --color-syrio-red: #90302d;
}
```

## Usage Examples

```tsx
// Background colors
<div className="bg-syrio-black">...</div>
<div className="bg-syrio-blue">...</div>

// Text colors
<p className="text-syrio-white">...</p>
<p className="text-syrio-pink">...</p>

// Border colors
<div className="border border-syrio-red">...</div>

// Combined
<div className="bg-syrio-black text-syrio-white">
  <h1 className="text-syrio-blue">Title</h1>
  <p className="text-syrio-pink">Subtitle</p>
</div>
```

## Current Implementation

- **Default background**: `bg-syrio-black`
- **Default text**: `text-syrio-white`
- **Accent color**: `text-syrio-pink` / `bg-syrio-pink`

All components use these standardized colors. To change the color scheme, update the `@theme` block in `globals.css`.

