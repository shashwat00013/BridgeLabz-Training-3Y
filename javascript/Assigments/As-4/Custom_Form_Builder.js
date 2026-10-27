// Q4: Custom Form Builder

class FormBuilder {
  constructor(fields, containerId) {
    this.fields = fields;
    this.container = document.getElementById(containerId);
    this.render();
  }

  // Ek field ka HTML string banata hai
  buildFieldHTML(field, index) {
    const id = `field_${index}`;
    let control;

    if (field.type === "select") {
      const options = (field.options || []).map((o) => `<option value="${o}">${o}</option>`).join("");
      control = `<select id="${id}">${options}</select>`;
    } else if (field.type === "textarea") {
      control = `<textarea id="${id}" rows="3"></textarea>`;
    } else {
      control = `<input type="${field.type}" id="${id}" />`;
    }

    return `<div class="field"><label for="${id}">${field.label}</label>${control}</div>`;
  }

  // innerHTML se poora form banata hai
  render() {
    const fieldsHTML = this.fields.map((f, i) => this.buildFieldHTML(f, i)).join("");
    this.container.innerHTML = `<form id="dynamicForm">${fieldsHTML}<button type="submit">Submit</button></form>`;

    document.getElementById("dynamicForm").addEventListener("submit", (e) => {
      e.preventDefault();
      const data = this.getFormData();
      console.log("Form Data:", data);
      document.getElementById("output").textContent = JSON.stringify(data, null, 2);
    });
  }

  // Saari entered values object ki form mein return karta hai (label = key)
  getFormData() {
    const data = {};
    this.fields.forEach((field, i) => {
      data[field.label] = document.getElementById(`field_${i}`).value;
    });
    return data;
  }
}

// Fields array - isse kuch bhi form ban sakta hai
const fields = [
  { type: "text", label: "Username" },
  { type: "email", label: "Email" },
  { type: "password", label: "Password" },
  { type: "number", label: "Age" },
  { type: "select", label: "Course", options: ["B.Tech", "BCA", "MCA"] },
  { type: "textarea", label: "About You" },
];

new FormBuilder(fields, "formContainer");