function doGet(e) {
  return HtmlService.createHtmlOutputFromFile('index');
}

function sendDataToGoogleSheet(row) {
  const sheet = SpreadsheetApp.openById('https://docs.google.com/spreadsheets/d/ "your file id after /d/"  ').getSheetByName('Sheetname');
  sheet.appendRow([row.date, row.time, row.left, row.center, row.right]);
}

function getDefectData() {
  const sheet = SpreadsheetApp.openById('https://docs.google.com/spreadsheets/d/ "your file id after /d/"  ').getSheetByName('Sheetname');
  const data = sheet.getDataRange().getValues();
  
  const defectCounts = {
    Left: {},
    Center: {},
    Right: {}
  };

  for (let i = 1; i < data.length; i++) { // Start at 1 to skip the header row
    const [_, __, left, center, right] = data[i];

    if (left) defectCounts.Left[left] = (defectCounts.Left[left] || 0) + 1;
    if (center) defectCounts.Center[center] = (defectCounts.Center[center] || 0) + 1;
    if (right) defectCounts.Right[right] = (defectCounts.Right[right] || 0) + 1;
  }

  return defectCounts;
}



function doGet(e) {
  const page = e.parameter.page || 'index'; // Default to 'index' if no parameter is provided
  if (page === 'histogram') {
    return HtmlService.createHtmlOutputFromFile('histogram');
  }
  return HtmlService.createHtmlOutputFromFile('index');
}

function addActionToSheet(action) {
  try {
    const sheet = SpreadsheetApp.openById('https://docs.google.com/spreadsheets/d/ "your file id after /d/"  ').getSheetByName('Sheetname');
    const lastRow = sheet.getLastRow();
    const actionColumn = 6; // Column F is the 6th column

    if (lastRow < 2) {
      // No rows to update
      return { success: false, message: "No defect data available to associate the action with." };
    }

    sheet.getRange(lastRow, actionColumn).setValue(action);

    return { success: true };
  } catch (error) {
    Logger.log("Error in addActionToSheet: " + error.message);
    return { success: false, message: "Internal server error. Please check logs or contact support." };
  }
}


