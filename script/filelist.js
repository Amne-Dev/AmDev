document.addEventListener('DOMContentLoaded', function() {
var files = [
    { 
      name: 'Retro Snake', 
      version: '0.2', 
      url: 'https://github.com/Amne-Dev/Retro-Snake/releases', 
      size: '9.83 MB',
      desc: 'A GUI based classic Snake game',
      os: 'Windows',
      type: 'Executable' 
    },
    { 
      name: 'Am-Tools (Windows)', 
      version: 'ON HOLD', 
      url: '#', 
      size: 'Soon',
      desc: 'A useful on the go bundle',
      os: 'Windows',
      type: 'ZIP' 
    },
    { 
      name: 'Am-Tools (Linux)', 
      version: 'ON HOLD', 
      url: '#', 
      size: 'Soon',
      desc: 'A useful on the go bundle',
      os: 'Windows',
      type: 'ZIP' 
    },
    { 
      name: 'Am-Filter', 
      version: 'TESTING', 
      url: '#', 
      size: 'Soon',
      desc: 'A tool to Organise Folders',
      os: 'Windows',
      type: 'Python' 
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
    downloadBtn.classList.add('button');
    downloadBtn.classList.add('dark');
    downloadBtn.classList.add('right');
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