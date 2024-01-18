document.addEventListener('DOMContentLoaded', function() {
  const button = document.getElementById('checkButton');
  button.addEventListener('click', check);

  function check() {
    output = "";
    // Define an empty object to store the selections
    const selections = {};

    // Get all the dropdowns
    const dropdowns = document.querySelectorAll('select');

    // Loop through each dropdown and add its selection to the object
    for (const dropdown of dropdowns) {
      const categoryId = dropdown.id.replace(/Dropdown$/, ''); // Extract category ID
      const selectedOptionValue = dropdown.value;
      selections[categoryId] = selectedOptionValue;
    }
    let fail = false;
    for (let i = true; i === true; i = false) {
      if (selections["class"] === "first" || selections["class"] === "second") {
        output += "You are in " + selections["class"] + " class. This means that you get to go through significantly lighter screening than third class, since you skip Ellis Island in favor of a quick and cursory inspection aboard your steamboat.";
        if (selections["physical_health"] == "good") {
          output += " You have good physical health anyway, so this just saves some hassle.";
          if (selections["mental_health"] === "medium") {
            output += " As for your mental health, you are certainly a bit unintelligent, but you stop well short of being utterly insane. The cursory inspection of first and second class lets you make it through."
          }
        } else if (selections["physical_health"] == "medium") {
          output += " Because of this, you are admitted with no issues even though you accidentally cough during inspection.";
          if (selections["mental_health"] === "medium") {
            output += " Your mental health is also not the greatest. You're not insane, but you're quite dumb. " + selections["class"].charAt(0).toUpperCase() + selections["class"].slice(1) + "-class inspection comes to the rescue again, though, so you pass.";
          }
        } else {
          output += " However, you are severely sick with trachoma. Even the cursory inspection for first class can detect that, so you get sent to Ellis Island along with third class for further inspection. Upon arrival, the doctors determine that you are dangerous to the United States and you are deported.";
          fail = true;
          break;
        }

        if (selections["mental_health"] === "good") {
          output += " As for your mental health, you are perfectly fine and are quickly sent onward after just a few simple questions."
        } else if (selections["mental_health"] === "bad") {
          output += " As for your mental health, you are completely insane. The inspectors notice this, and send you to Ellis Island. From there, you are quickly deported."
          fail = true;
          break;
        }
      } else {
        output += "You are in third class, which means that you will have to go through thorough thorough medical and legal inspection on Ellis Island."
        if (selections["physical_health"] === "good" && selections["mental_health"] === "good") {
          output += " Your physical and mental health are good, so you pass the examinations with no issues."
        } else {
          if (selections["physical_health"] === "good") {
            output += " Your physical health is good, so you pass that part of the test, but when it comes to mental health, ";
          } else if (selections["physical_health"] === "medium") {
            output += " Your physical health is okay, but you accidentally cough while going up the stairs. Immediately, some inspectors pull you out for more thorough screening. They perform some tests, and you become extremely worried about whether you will be able to pass. However, they quickly realize that you are healthy and release you onward. As for your mental health, ";

          } else if (selections["physical_health"] === "bad") {
            output += " As soon as the first inspector meets your eye, he notices the severe redness that comes from your trachoma. He pulls you aside for further inspection. A doctor quickly diagnoses you with trachoma, and you get deported.";
            fail = true;
            break;
          }
          if (selections["mental_health"] === "good") {
            output += " it's perfectly fine, so you don't have any issues there.";
          }
          else if (selections["mental_health"] === "medium") {
            output += "you are a bit dumb. You are asked some basic questions, and when you fail three, you are deported.";
            fail = true;
            break;
          } else {
            output += "you are completely insane. The inspectors quickly pull you out, and shortly after you get deported.";
            fail = true;
            break;
          }
        }
      }
      if (selections["employment"] === "good") {
        output += " You don't have a job in the United States, which is good.";
      } else {
        output += " Your downfall comes when you are asked about your employment. You have a job waiting for you in the United States, so you are rejected for \"stealing a job from an American.\"";
        fail = true;
        break;
      }
      output += " The final test is literacy, which was introduced as a requirement in 1917.";
      if (selections["literacy"] === "good") {
        output += " You are well-literate in English, so you pass with no issues. Congratulations! You have been admitted to the United States."
      } else if (selections["literacy"] === "medium") {
        output += " Though you are not literate in English, you are literate in another language. Luckily, there are interpreters available to help, and the literacy requirement consists of reading 30-40 words of average text in any language. You pass the literacy test with flying colors and are admitted into the United States. Congratulations!";
      } else {
        output += " When you are asked to read some text, the inspectors quickly realize that you have no idea what to do. You are denied entry into the United States and get deported.";
        fail = true;
      }


    }
    document.getElementById("response").innerHTML = output;
    if (fail) {
      document.getElementById("status").innerHTML = "Rejected✖";
      document.getElementById("status").style.color = "red";
    } else {
      document.getElementById("status").innerHTML = "Accepted✔";
      document.getElementById("status").style.color = "green";
    }
  }
});