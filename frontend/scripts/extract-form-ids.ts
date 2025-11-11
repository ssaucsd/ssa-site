/**
 * Google Form Entry ID Extractor (Browser Console Version)
 *
 * INSTRUCTIONS:
 *
 * 1. Open your Google Form in EDIT mode:
 *    https://docs.google.com/forms/d/1FAIpQLSeqAfXHr8gYVR7HUYnbBAjY2pYg1641C2p1Fv4uC4YcFWLzLQ/edit
 *
 * 2. Click: Three dots menu (⋮) → "Get pre-filled link"
 *
 * 3. Fill in dummy data for ALL fields (this is important!)
 *
 * 4. Click "Get Link" and copy the URL
 *
 * 5. Open your browser console (F12) on any page
 *
 * 6. Paste and run this code:
 */

const url = "PASTE_YOUR_PREFILLED_URL_HERE";

try {
  const urlObj = new URL(url);
  const params = urlObj.searchParams;

  const entries: { [key: string]: string } = {};

  params.forEach((value, key) => {
    if (key.startsWith("entry.")) {
      entries[key] = value;
    }
  });

  if (Object.keys(entries).length === 0) {
    console.log("❌ No entry IDs found. Make sure you used a pre-filled link!");
  } else {
    console.log("\n✅ Found entry IDs! Copy this into JoinForm.tsx:\n");
    console.log("const ENTRY_IDS = {");

    Object.entries(entries).forEach(([key, value]) => {
      console.log(`  field: "${key}", // Sample value: ${value}`);
    });

    console.log("};\n");
  }
} catch {
  console.log("❌ Invalid URL format");
}

/**
 * ALTERNATIVE METHOD - Run this in the Google Form preview page:
 *
 * 1. Go to the form VIEW page (not edit):
 *    https://docs.google.com/forms/d/e/1FAIpQLSeqAfXHr8gYVR7HUYnbBAjY2pYg1641C2p1Fv4uC4YcFWLzLQ/viewform
 *
 * 2. Open browser console (F12)
 *
 * 3. Run this code to extract entry IDs:
 */

// const formInputs = document.querySelectorAll('[name^="entry."]');
// const entryIds = Array.from(formInputs).map(input => input.getAttribute('name'));
// console.log('Entry IDs found:', entryIds);

export {};
