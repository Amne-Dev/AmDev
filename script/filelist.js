document.addEventListener('DOMContentLoaded', function() {
var files = [
    { 
      name: 'file1.txt', 
      version: '1.0', 
      url: 'http://example.com/file1.txt', 
      size: '10 KB',
      desc: 'This is a sample text file.',
      os: 'Windows',
      type: 'Text' 
    },
    { 
      name: 'file2.pdf', 
      version: '2.1', 
      url: 'http://example.com/file2.pdf', 
      size: '500 KB',
      desc: 'This is a sample PDF document.',
      os: 'Windows',
      type: 'PDF' 
    },
    { 
      name: 'file3.docx', 
      version: '3.2', 
      url: 'http://example.com/file3.docx', 
      size: '1.2 MB',
      desc: 'This is a sample Word document.',
      os: 'Windows',
      type: 'Word' 
    },
    // add more files here as needed
  ];
  
  var fileList = document.getElementById('file-list');
  for (var i = 0; i < files.length; i++) {
    var file = files[i];
    var li = document.createElement('li');
    var fileTitle = document.createElement('span');
    fileTitle.classList.add('fileTitle');
    fileTitle.textContent = file.name;
    li.appendChild(fileTitle);
    var subList = document.createElement('ul');
    subList.classList.add('sub-list');
    var liVersion = document.createElement('li');
    liVersion.textContent = 'Version: ' + file.version;
    subList.appendChild(liVersion);
    var liSize = document.createElement('li');
    liSize.textContent = 'Size: ' + file.size;
    subList.appendChild(liSize);
      var downloadBtn = document.createElement('a');
    downloadBtn.href = file.url;
    downloadBtn.textContent = 'Download';
    downloadBtn.classList.add('download-btn');
    li.appendChild(downloadBtn);
    var liType = document.createElement('li');
    liType.textContent = 'Type: ' + file.type;
    subList.appendChild(liType);
    li.appendChild(subList);
    var fileDesc = document.createElement('div');
    fileDesc.classList.add('file-desc');
    fileDesc.textContent = file.desc;
    li.appendChild(fileDesc);
    fileList.appendChild(li);
    if (i < files.length - 1) {
      var hr = document.createElement('hr');
      fileList.appendChild(hr);
    }
  }
});