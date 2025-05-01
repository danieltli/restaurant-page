export function createHome() {
  const container = document.getElementById("content");
  container.innerHTML = "";
  const about = document.createElement("div");
  const header = document.createElement("h1");
  header.textContent = "About us";
  
  const aboutText = document.createElement("p");
  aboutText.textContent = `Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex 
  sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. 
  Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. 
  Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. 
  Ad litora torquent per conubia nostra inceptos himenaeos. ${"\n"}
Lorem ipsum dolor sit amet consectetur adipiscing elit. 
Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. 
Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. 
Iaculis massa nisl malesuada lacinia integer nunc posuere. 
Ut hendrerit semper vel class aptent taciti sociosqu. 
Ad litora torquent per conubia nostra inceptos himenaeos.`;

about.append(header);
container.append(about);
about.append(aboutText);
}
