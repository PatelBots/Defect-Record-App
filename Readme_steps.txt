# Step-by-Step Guide: Uploading Files to Google Sheets & Creating an Apps Script

This guide will walk you through the process of integrating your defect tracking HTML project with Google Sheets using Google Apps Script.

---

## 1. **Create a Google Sheet**
1. Open [Google Sheets](https://docs.google.com/spreadsheets/).
2. Click on **Blank** to create a new spreadsheet.
3. Rename the sheet (e.g., `Defect_Records`).
4. In **Sheet1**, set up column headers:
   - `Date`
   - `Time`
   - `Left Defect`
   - `Center Defect`
   - `Right Defect`

---

## 2. **Open Apps Script**
1. In the Google Sheet, click **Extensions** → **Apps Script**.
2. Delete any default code.

---

## 3. **Add Google Apps Script Code**
Copy and paste the following script into the editor:

index.html for defect collect
histography.html for defect display
code.gs to integrate

---

## 4. **Deploy as Web App**
1. Click **Deploy** → **New deployment**.
2. Under **Select type**, choose **Web app**.
3. Set **Who has access** to **Anyone**.
4. Click **Deploy** → **Authorize** → **Allow**.
5. Copy the **Web App URL**.

---

## 5. **Modify Your HTML File**
Update your `sendDataToGoogleSheet` function in the HTML file:


Replace `YOUR_WEB_APP_URL` with the copied URL from Step 4.

---

## 6. **Test the Integration**
1. Open your **HTML file** in a browser.
2. Click the defect buttons.
3. Check if data appears in Google Sheets.

---

### Your integration is now complete! 🚀

