function Vider() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName('A supp') //.getActiveSheet();

  var range = sheet.getDataRange();
  //var range = sheet.getSheetByName('A supp')
 //var range = ss.getDataRange(); 
 var data = range.getValues();
 var numberRows = range.getNumRows();
 var numberColumns = range.getNumColumns();
 var firstRow = 1;
  
    for (var i = numberRows; i>=2; i--) {
  sheet.deleteRow(i); 
    }
}
