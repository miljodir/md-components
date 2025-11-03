import { existsSync, mkdirSync, readdirSync, readFileSync, writeFileSync } from 'fs';
import { join } from 'path';

// Configurations
// Source for React icon components
const sourceDir = './packages/react/src/icons-material';

// Output folder for SVG
const outputDir = './packages/css/src/svg/icons';

// Check if output folder exists
function ensureDirectoryExistence(dir) {
  if (!existsSync(dir)) {
    mkdirSync(dir, { recursive: true });
    console.log(`Created folder: ${dir}`);
  }
}

// Read the SVG-code and clean React attributes
function cleanSvg(svgContent, size) {
  let cleaned = svgContent.replace(/className=\{className\}/g, '').replace(/\{\.\.\.otherProps\}/g, '');
  cleaned = cleaned.replace(/\s+/g, ' ').trim();

  const viewboxMatch = cleaned.match(/viewBox="([^"]+)"/);
  const fillMatch = cleaned.match(/fill="([^"]+)"/);
  const pathMatch = cleaned.match(/<path d="([^"]+)"/);

  let sizeAttr = size === 'large' ? 'width="48px" height="48px"' : 'width="20px" height="20px"';

  // Rebulld SVG structure
  if (viewboxMatch && pathMatch) {
    return `<svg xmlns="http://www.w3.org/2000/svg" ${sizeAttr} viewBox="${viewboxMatch[1]}"${
      fillMatch ? ` fill="${fillMatch[1]}"` : 'fill="currentColor"'
    }>
  <path d="${pathMatch[1]}" />
</svg>`;
  }

  return cleaned; // Fallback
}

// Get SVGs
function extractSvgs() {
  ensureDirectoryExistence(outputDir);

  // Get files
  const files = readdirSync(sourceDir).filter(file => file.endsWith('.tsx'));

  // If files = 0, end script cause there aren't any components
  if (files.length === 0) {
    console.log(`Can't find any components in ${sourceDir}`);
    return;
  }

  // Get component name (some regex magic)
  const componentNameRegex = /export\s+const\s+(\w+):/;
  const largeSvgRegex = /if\s+\(large\)\s+\{[\s\S]*?return\s*\([\s\S]*?(<svg[\s\S]*?<\/svg>)/s;
  // const defaultSvgRegex = /(}\s*return\s*\()[\s\S]*?(<svg[\s\S]*?<\/svg>)/s;

  for (const file of files) {
    // Read single file
    const filePath = join(sourceDir, file);
    const fileContent = readFileSync(filePath, 'utf8');

    // Get filename
    const nameMatch = fileContent.match(componentNameRegex);
    const componentName = nameMatch ? nameMatch[1] : null;

    // Temp variables
    let largeSvgContent = null;
    let defaultSvgContent = null;

    // Large
    const largeMatch = fileContent.match(largeSvgRegex);
    if (largeMatch && largeMatch[1]) {
      largeSvgContent = cleanSvg(largeMatch[1], 'large');
    }

    // Small
    const contentAfterLargeIf = fileContent.substring(fileContent.lastIndexOf('return ('));
    const defaultMatch = contentAfterLargeIf.match(/<svg[\s\S]*?<\/svg>/s);

    if (defaultMatch && defaultMatch[0]) {
      defaultSvgContent = cleanSvg(defaultMatch[0], 'default');
    }

    // Save large variant of icon
    if (largeSvgContent) {
      const largeFileName = `${componentName}.large.svg`;
      writeFileSync(join(outputDir, largeFileName), largeSvgContent);
    }

    // SAve default variant of icon
    if (defaultSvgContent) {
      const defaultFileName = `${componentName}.svg`;
      writeFileSync(join(outputDir, defaultFileName), defaultSvgContent);
    }

    // Display message in terminal
    if (largeSvgContent || defaultSvgContent) {
      console.log(
        `  ✅ ${componentName} -> Saved ${largeSvgContent ? 'large' : 0} ${
          defaultSvgContent ? 'and small' : 0
        } SVG in ${outputDir}`,
      );
    } else {
      console.error(`❌ Oh no! Fail to make SVG for ${componentName}`);
    }
  }
}

extractSvgs();
