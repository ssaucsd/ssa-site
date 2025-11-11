# Custom Google Form Integration

This custom form submits directly to Google Forms without using an iframe, providing a better user experience with consistent styling.

## Quick Setup Guide

### Step 1: Get Entry IDs from Your Google Form

You need to extract the field entry IDs from your Google Form. Choose one of these methods:

#### Method A: Using Pre-filled Link (Recommended)

1. **Open your form in edit mode:**

   ```
   https://docs.google.com/forms/d/1FAIpQLSeqAfXHr8gYVR7HUYnbBAjY2pYg1641C2p1Fv4uC4YcFWLzLQ/edit
   ```

2. **Click the three dots menu (⋮)** in the top right → Select **"Get pre-filled link"**

3. **Fill in dummy data for ALL fields** you want to capture

4. **Click "Get Link"** and copy the generated URL

5. **Extract entry IDs** from the URL. It will look like:

   ```
   https://docs.google.com/forms/d/e/.../viewform?
   entry.1234567890=John&
   entry.9876543210=Doe&
   entry.1111111111=john@ucsd.edu&
   ...
   ```

6. The numbers after `entry.` are your entry IDs!

#### Method B: Inspect the Form (Alternative)

1. **Open the form view page:**

   ```
   https://docs.google.com/forms/d/e/1FAIpQLSeqAfXHr8gYVR7HUYnbBAjY2pYg1641C2p1Fv4uC4YcFWLzLQ/viewform
   ```

2. **Right-click → Inspect** (or press F12)

3. **Open the Console tab** and run:

   ```javascript
   const formInputs = document.querySelectorAll('[name^="entry."]');
   const entryIds = Array.from(formInputs).map((input) =>
     input.getAttribute("name")
   );
   console.table(entryIds);
   ```

4. Copy the entry IDs from the output

### Step 2: Update JoinForm.tsx

1. Open `/frontend/src/components/join/JoinForm.tsx`

2. Find the `ENTRY_IDS` object (around line 30)

3. Replace the placeholder values with your actual entry IDs:

```javascript
const ENTRY_IDS = {
  email: "entry.YOUR_EMAIL_ID",
  firstName: "entry.YOUR_FIRSTNAME_ID",
  lastName: "entry.YOUR_LASTNAME_ID",
  year: "entry.YOUR_YEAR_ID",
  college: "entry.YOUR_COLLEGE_ID",
  major: "entry.YOUR_MAJOR_ID",
  instrument: "entry.YOUR_INSTRUMENT_ID",
  experience: "entry.YOUR_EXPERIENCE_ID",
};
```

### Step 3: Match Fields to Your Form

Make sure the fields in `JoinForm.tsx` match your Google Form questions:

- **Email Address** → email
- **First Name** → firstName
- **Last Name** → lastName
- **Year** (dropdown) → year
- **College** (dropdown) → college
- **Major** → major
- **Instrument(s)** → instrument
- **Musical Experience** → experience

If your form has different fields, modify the form accordingly.

### Step 4: Verify the Form Action URL

The form submits to:

```
https://docs.google.com/forms/d/e/1FAIpQLSeqAfXHr8gYVR7HUYnbBAjY2pYg1641C2p1Fv4uC4YcFWLzLQ/formResponse
```

This is the same form ID with `/formResponse` at the end.

## Testing

1. Fill out the form on your site
2. Click "Subscribe"
3. Check the Google Form responses to verify submission was received
4. Since we use `mode: 'no-cors'`, the form will always show success (this is a Google Forms limitation)

## Customization

### Styling

Edit `/frontend/src/components/join/JoinForm.scss` to customize the appearance.

### Fields

Add or remove fields in both:

- The `formData` state
- The `ENTRY_IDS` mapping
- The form JSX
- The submit handler

### Validation

Bootstrap Form validation is already included. Add custom validation as needed.

## Troubleshooting

**Form not submitting?**

- Verify entry IDs are correct
- Check browser console for errors
- Test the Google Form directly to ensure it's accepting responses

**Wrong field mapping?**

- The order of fields in `ENTRY_IDS` must match the questions in your Google Form
- Use the pre-filled link method to verify each entry ID corresponds to the right question

## Helper Script

See `/frontend/scripts/extract-form-ids.ts` for a utility to help extract entry IDs.
