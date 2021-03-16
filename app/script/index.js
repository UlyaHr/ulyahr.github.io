import { Header } from "Header.js";
import { SectionObs } from "SectionObs.js";
import { DarkMode } from "DarkMode.js";
import { ContactForm } from "ContactForm.js";
import { About } from "About.js";

window.addEventListener("DOMContentLoaded", () => {
  Header();
  DarkMode();
  SectionObs();
  About();
  ContactForm();
});
