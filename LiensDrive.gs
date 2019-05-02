function Links() {
  var folderId = "0B2AfsJGT0qmPNWY2MjU0ZDEtMWY3OC00NzlmLWFkMTUtYTQ1YzkwODMzNDg0";
  //https://drive.google.com/drive/folders/0B2AfsJGT0qmPNWY2MjU0ZDEtMWY3OC00NzlmLWFkMTUtYTQ1YzkwODMzNDg0?usp=sharing
  var files = DriveApp.getFolderById(folderId).getFiles();
  var result = [];
  while (files.hasNext()) {
      var file = files.next();
      file.setSharing(DriveApp.Access.ANYONE_WITH_LINK, DriveApp.Permission.VIEW);
      var temp = {
        file_name: file.getName(),
        url: "http://drive.google.com/uc?export=view&id=" + file.getId(),
      };
      result.push(temp);
  };
  Logger.log(JSON.stringify(result))
}

