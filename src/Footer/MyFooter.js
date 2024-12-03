import React from 'react'
import "./MyFooter.css"
export default function MyFooter() {
  return (
    <div>
       

<footer class="footer">

  <div class="footer-container">
    <nav class="footer-links">
      <a href="#about">افلام</a>
      <a href="#services">مسلسلات </a>
      <a href="#contact">مسلسلات انمي</a>
    </nav>
    <div class="footer-social">
      <a href="#" target="_blank" rel="noopener noreferrer">Facebook</a>
      <a href="#" target="_blank" rel="noopener noreferrer">Twitter</a>
      <a href="#" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      <a href="#" target="_blank" rel="noopener noreferrer">WhatsApp</a>
    </div>
    <p class="footer-copyright">
      © 2024 YourWebsite. All rights reserved.
    </p>
  </div>
  {/* <button class="back-to-top" id="backToTopBtn">Back to Top</button> */}
</footer>
      
    </div>
  )
}
