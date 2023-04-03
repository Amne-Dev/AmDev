document.addEventListener('DOMContentLoaded', function() {
    var projects = [
        { 
          name: 'AmBot', 
          version: '0.4', 
          url: 'https://ambot.gq/', 
          date: 'Oct 28, 2022',
          desc: 'AmBot is a Discord bot Aimed at ending the era of "Premium bots"',
          state: 'UnFinished' 
        },
        { 
          name: 'AmTools Web', 
          version: 'Soon', 
          url: 'https://amtools.gq/', 
          date: 'Soon',
          desc: 'AmBot is a Web Tool bundle to suite your needs on the go',
          state: 'UnFinished' 
        },
        { 
          name: 'Win11+', 
          version: 'Soon', 
          url: '#', 
          date: 'Soon',
          desc: 'Win11+ Is a Customisation pack That include popular programms such as (Rain Meter, etc...)',
          state: 'UnFinished' 
        },
        // add more projects here as needed
      ];
      
      var projectList = document.getElementById('project-list');
      for (var i = 0; i < projects.length; i++) {
        var project = projects[i];
        var li = document.createElement('li');
        var projectTitle = document.createElement('span');
        projectTitle.classList.add('projectTitle');
        projectTitle.textContent = project.name;
        li.appendChild(projectTitle);
        var subList = document.createElement('ul');
        subList.classList.add('sub-list');
        var liVersion = document.createElement('li');
        liVersion.textContent = 'Version: ' + project.version;
        subList.appendChild(liVersion);
        var lidate = document.createElement('li');
        lidate.textContent = 'Date: ' + project.date;
        subList.appendChild(lidate);
          var browseBtn = document.createElement('a');
        browseBtn.href = project.url;
        browseBtn.textContent = 'Browse';
        browseBtn.classList.add('browse-btn');
        li.appendChild(browseBtn);
        var listate = document.createElement('li');
        listate.textContent = 'State: ' + project.state;
        subList.appendChild(listate);
        li.appendChild(subList);
        var projectDesc = document.createElement('div');
        projectDesc.classList.add('project-desc');
        projectDesc.textContent = project.desc;
        li.appendChild(projectDesc);
        projectList.appendChild(li);
        if (i < projects.length - 1) {
          var hr = document.createElement('hr');
          projectList.appendChild(hr);
        }
      }
    });