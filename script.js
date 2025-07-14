const APIKEY = "ADD YOUR API KEY HERE";

document.getElementById("form1").addEventListener("submit",function(event){

const schoolName = document.getElementById("InputschoolName").value;

event.preventDefault();

fetch(`https://api.data.gov/ed/collegescorecard/v1/schools?api_key=${APIKEY}&school.name=${encodeURIComponent(schoolName)}&fields=latest.school.degrees_awarded.highest`)
.then(response => {
    if (!response.ok) {
      throw new Error("Unable to fetch First Data data from the API");
    }
    return response.json();
  })

  .then(data1=>{
    console.log(data1);
    if(!data1 || !data1.results || data1.results.length === 0){
      console.error("No data returned from the API.");
      return;
    }
    const schoolData1 = data1.results[0];
    const schoolType = schoolData1["latest.school.degrees_awarded.highest"];
    let fieldsArray;
    let fieldsString;

    if(schoolType == 2){
    fieldsArray = [
      "id",
      "school.name",
      "latest.student.size",
      "latest.cost.tuition.in_state",
      "latest.completion.completion_rate_less_than_4yr_150nt",
      "latest.student.retention_rate.lt_four_year.full_time",
      "latest.student.retention_rate.lt_four_year.part_time"
    ];
    fieldsString = fieldsArray.join(",");
    }
    else if (schoolType == 4||3){
      fieldsArray = [
        "id",
        "school.name",
        "latest.student.size",
        "latest.cost.tuition.in_state",
        "latest.completion.completion_rate_4yr_150nt",
        "latest.student.retention_rate.four_year.full_time",
        "latest.student.retention_rate.four_year.part_time"
      ];
      fieldsString = fieldsArray.join(",");
    }

    else {
      console.error("Please enter a 4 year college or a Community College");
      return;
    }

  fetch(`https://api.data.gov/ed/collegescorecard/v1/schools?api_key=${APIKEY}&school.name=${encodeURIComponent(schoolName)}&fields=${fieldsString}`)
  .then(response => {
    if (!response.ok) {
      throw new Error("Unable to fetch data from the API");
    }
    return response.json();
  })
  .then(data => {
    if (!data || !data.results || data.results.length === 0) {
      console.error("No results returned from the API.");
      return;
    }

    const schoolData = data.results[0];
    document.getElementById("instName").textContent = schoolData[fieldsArray[1]];
    document.getElementById("fullTime").textContent = `${Math.round(schoolData[fieldsArray[5]]*100)}%`;
    document.getElementById("partTime").textContent = `${Math.round(schoolData[fieldsArray[6]]*100)}%`;
    document.getElementById("completionRate").textContent = `${Math.round(schoolData[fieldsArray[4]]*100)}%`;
  })
  .catch(error => console.error("Error fetching data:", error))
})

});