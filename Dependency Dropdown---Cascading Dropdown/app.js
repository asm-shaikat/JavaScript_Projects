var subjectObject = {
    "Front-end": {
      "HTML": ["Links", "Images", "Tables", "Lists"],
      "CSS": ["Borders", "Margins", "Backgrounds", "Float"],
      "JavaScript": ["Variables", "Operators", "Functions", "Conditions"]    
    },
    "Back-end": {
      "PHP": ["Variables", "Strings", "Arrays"],
      "SQL": ["SELECT", "UPDATE", "DELETE"]
    },
    "Nothing":{}
  }
  window.onload = function() {
    var subjectSel = document.getElementById("subject");
    var topicSel = document.getElementById("topic");
    var chapterSel = document.getElementById("chapter");

    // For showing subject value
    for (var x in subjectObject) {
      subjectSel.options[subjectSel.options.length] = new Option(x);
    }

    // For showing topic value
    subjectSel.onchange = function() {
        chapterSel.length = 1;
        topicSel.length = 1;

        for (var y in subjectObject[this.value]) {
        topicSel.options[topicSel.options.length] = new Option(y);
      }
    }
    // For showing chapter value
    topicSel.onchange = function() {
        chapterSel.length = 1;
      var z = subjectObject[subjectSel.value][this.value];
      for (var i = 0; i < z.length; i++) {
        chapterSel.options[i] = new Option(z[i], z[i]);
      }
    }
  }