

const a = document.getElementById("worldsvg");

// It's important to add an load event listener to the object,
// as it will load the svg doc asynchronously
a.addEventListener(
  "load",
  function () {
    // get the inner DOM of the svg file (note it will only if served from a server)
    var svgDoc = a.contentDocument;
    // get all elements
    let countries = svgDoc.getElementsByTagName("path");

    // Set a serach bar listener to compare against the countries array
    document.getElementById("inputCountryName").addEventListener("input", checkValue);
    function checkValue(event) {
      let value = event.target.value.toLowerCase();

      // Search the countries collections
      for (let i = 0; i < countries.length; i++) {
        let currCountryName = countries[i].getAttribute('title').toLowerCase()
        //let currCountryId = countries[i].getAttribute('id').toLowerCase()
        if (value === currCountryName /*|| value === currCountryId*/) {
          countries[i].setAttribute("fill", "red");
          this.value="";
        }
      }
    }
  },
  false
);