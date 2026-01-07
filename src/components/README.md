# Design System Components

This directory contains standardized, reusable components for the Syrio Volleyball Academy website.

## Usage Guidelines

**DO NOT** add custom styling directly to pages. Always use the standardized components and classes.

## Components

### Layout Components

#### `PageContainer`
Wraps page content with standardized layout and spacing.

```tsx
import PageContainer from "@/components/layout/PageContainer";

<PageContainer>
  {/* Your page content */}
</PageContainer>
```

### Typography Components

#### `Heading`
Standardized headings with consistent sizing and spacing.

```tsx
import Heading from "@/components/typography/Heading";

<Heading level={1}>Main Title</Heading>
<Heading level={2}>Section Title</Heading>
<Heading level={3}>Subsection Title</Heading>
<Heading level={4}>Small Heading</Heading>
```

#### `Text`
Standardized text with consistent sizing and colors.

```tsx
import Text from "@/components/typography/Text";

<Text>Regular body text</Text>
<Text size="base">Base size text</Text>
<Text size="sm">Small text</Text>
<Text size="xs">Extra small text</Text>
```

#### `FontSample`
Component for displaying font samples (used on home page).

## CSS Classes

### Typography Classes
- `.heading-1` - Main page title (text-4xl, bold, mb-8)
- `.heading-2` - Section title (text-3xl, bold, mb-6)
- `.heading-3` - Subsection title (text-2xl, semibold, mb-4)
- `.heading-4` - Small heading (text-xl, semibold, mb-3)
- `.body-text` - Regular body text (text-lg, gray-300)
- `.body-text-sm` - Small body text (text-base, gray-300)
- `.body-text-xs` - Extra small text (text-sm, gray-400)

### Layout Classes
- `.page-container` - Full page container (min-h-screen, bg-black, text-white)
- `.page-content` - Content wrapper (container, mx-auto, px-4, py-16)

### Font Family Classes
- `.font-archivo` - Archivo font (default)
- `.font-montserrat` - Montserrat font
- `.font-bank-gothic` - Bank Gothic font
- `.font-geek-trend` - Geek Trend font
- `.font-serif12` - Serif12 font
- `.font-youshe` - YouShe BiaoTi Hei font

## Example Page Structure

```tsx
import PageContainer from "@/components/layout/PageContainer";
import Heading from "@/components/typography/Heading";
import Text from "@/components/typography/Text";

export default function MyPage() {
  return (
    <PageContainer>
      <Heading level={1}>Page Title</Heading>
      <Text>
        Your content here.
      </Text>
    </PageContainer>
  );
}
```

