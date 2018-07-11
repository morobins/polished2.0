import React from "react";

const FileUpload = props => (
  <div class="input-group mb-3">
    <div class="custom-file">
      <input type="file" class="custom-file-input" id="inputGroupFile02"></input>
      <label class="custom-file-label" for="inputGroupFile02">Choose file</label>
    </div>
    <div class="input-group-append">
      <span class="input-group-text" id="file-input">Upload</span>
    </div>
  </div>
);
export default FileUpload;