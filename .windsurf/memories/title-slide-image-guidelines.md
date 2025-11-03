# Title Slide Image Sizing Guidelines

## Image Layout Structure

The title slide uses a 2x2 grid layout with a centered logo at the bottom:
- **Top-Left**: Equipment image (40% width)
- **Top-Right**: Equipment image (40% width)
- **Bottom-Left**: Equipment image (40% width)
- **Bottom-Right**: Equipment image (40% width OR 22-30% for vertical structures)
- **Center-Bottom**: Logo (25% width)

## Sizing Rules by Image Type

### Horizontal Equipment (Trucks, Loaders, Drills)
**Examples**: AD30, ST14, S2, MT42B

**Sizing**:
- Width: `w-[40%]`
- Vertical position: `top-[35%]` (top row) or `top-[70%]` (bottom row)
- Horizontal position: `left-[5%]` or `right-[5%]`

**CSS Class**:
```typescript
className: 'absolute top-[35%] -translate-y-1/2 left-[5%] w-[40%] transform transition-transform hover:scale-105'
```

**Aspect Ratio**: Wide (landscape orientation)

---

### Vertical Structures (Headgear, Towers)
**Examples**: Headgear.png

**Sizing**:
- Width: `w-[22-30%]` (depends on aspect ratio)
- Vertical position: `top-[60-65%]` (avoid overlap with top row)
- Horizontal position: `right-[8%]` (slightly more inset)

**CSS Class**:
```typescript
className: 'absolute top-[65%] -translate-y-1/2 right-[8%] w-[30%] transform transition-transform hover:scale-105'
```

**Aspect Ratio**: Tall (portrait orientation)
**Issue**: Tall images at 40% width will overlap with top row equipment

---

### Compact Equipment (Winders, Compact Machinery)
**Examples**: Winder.png

**Sizing**:
- Width: `w-[40%]` (same as horizontal equipment)
- Vertical position: `top-[70%]` (bottom row)
- Horizontal position: `right-[5%]`

**CSS Class**:
```typescript
className: 'absolute top-[70%] -translate-y-1/2 right-[5%] w-[40%] transform transition-transform hover:scale-105'
```

**Aspect Ratio**: Moderate (balanced width/height)
**Advantage**: Better proportions than tall structures; fits standard sizing

---

## Image Selection Guidelines

### Preferred Image Characteristics
1. **Aspect Ratio**: Wide or moderate (not tall/portrait)
2. **Background**: Transparent or white (matches slide background)
3. **Resolution**: High quality (no pixelation when scaled)
4. **Orientation**: Landscape or square preferred
5. **Content**: Clear, recognizable equipment

### Images to Avoid
1. **Tall structures** (headgear, towers) - require special sizing
2. **Very wide panoramas** - may not fit in 40% width
3. **Low resolution** - will pixelate when scaled
4. **Busy backgrounds** - distract from equipment
5. **Multiple equipment in one image** - unclear focus

---

## Testing Process

When adding a new image to the title slide:

### Step 1: Initial Placement
Add image with standard horizontal equipment sizing:
```typescript
{ src: '/images/NewImage.png', alt: 'Description', 
  className: 'absolute top-[70%] -translate-y-1/2 right-[5%] w-[40%] transform transition-transform hover:scale-105' }
```

### Step 2: Capture Screenshot
```bash
node capture-slides.js
```

### Step 3: Check for Overlaps
Review `screenshots/review/slide-1.png`:
- Does image overlap with top row equipment?
- Does image overlap with logo at bottom?
- Does image extend beyond slide boundaries?

### Step 4: Adjust if Needed

**If overlaps with top row**:
- Reduce width: `w-[40%]` → `w-[30%]` → `w-[22%]`
- Move down: `top-[70%]` → `top-[65%]` → `top-[60%]`
- Move inset: `right-[5%]` → `right-[8%]`

**If overlaps with logo**:
- Move up: `top-[70%]` → `top-[65%]`
- Reduce width: `w-[40%]` → `w-[30%]`

**If extends beyond boundaries**:
- Reduce width: `w-[40%]` → `w-[30%]`

### Step 5: Re-capture and Verify
```bash
node capture-slides.js
```

Repeat until no overlaps exist.

---

## Current Title Slide Configuration (Week 18)

```typescript
cover: {
  images: [
    { src: '/images/AD30.png', alt: 'AD30 Dump Truck', 
      className: 'absolute top-[35%] -translate-y-1/2 left-[5%] w-[40%] transform transition-transform hover:scale-105' },
    { src: '/images/ST14.png', alt: 'ST14', 
      className: 'absolute top-[35%] -translate-y-1/2 right-[5%] w-[40%] transform transition-transform hover:scale-105' },
    { src: '/images/S2.png', alt: 'S2', 
      className: 'absolute top-[70%] -translate-y-1/2 left-[5%] w-[40%] transform transition-transform hover:scale-105' },
    { src: '/images/Winder.png', alt: 'Winder - Shafts & Winders', 
      className: 'absolute top-[70%] -translate-y-1/2 right-[5%] w-[40%] transform transition-transform hover:scale-105' },
    { src: '/images/cover-logo.png', alt: 'Logo', 
      className: 'absolute top-[88%] left-1/2 -translate-x-1/2 w-1/4' }
  ],
}
```

**Represents**:
- **Top-Left**: AD30 (Underground mining - dump truck)
- **Top-Right**: ST14 (BEV equipment - loader)
- **Bottom-Left**: S2 (Underground mining - drill)
- **Bottom-Right**: Winder (Shafts & Winders operations)

---

## Lessons Learned

### Week 18 Image Update Process

**Attempt 1: Headgear.png at 40% width**
- **Issue**: Too tall, overlapped with ST14 loader in top-right
- **Action**: Reduced to 30% width

**Attempt 2: Headgear.png at 30% width**
- **Issue**: Still slight overlap with ST14 loader
- **Action**: Reduced to 22% width, moved to top-[65%]

**Attempt 3: Headgear.png at 22% width**
- **Result**: No overlap, but image too small
- **Decision**: Switch to different image

**Final Solution: Winder.png at 40% width**
- **Result**: Perfect fit, no overlaps
- **Reason**: Better aspect ratio (more compact than Headgear)
- **Outcome**: Represents Shafts & Winders effectively

**Learning**: Image selection matters as much as sizing. Prefer compact/moderate aspect ratios over tall structures.

---

## Quick Reference

| Image Type | Width | Top Position | Right Position | Notes |
|------------|-------|--------------|----------------|-------|
| Horizontal Equipment | 40% | 35% or 70% | 5% | Standard sizing |
| Compact Equipment | 40% | 70% | 5% | Standard sizing |
| Vertical Structures | 22-30% | 60-65% | 8% | Reduce width, move inset |
| Logo | 25% | 88% | 50% (centered) | Fixed position |

---

**Rule**: Always test new images with screenshot capture before finalizing. Prefer compact/moderate aspect ratios.

**Last Updated**: Week 18 (Nov 3, 2025)
**Maintained By**: Engineering Reporting Team
