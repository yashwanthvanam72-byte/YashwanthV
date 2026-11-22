YOUR CA & TAX CONSULTANCY WEBSITE
=================================

FILES
-----
index.html  - Main website content
style.css   - Layout, colours and responsive design
script.js   - Mobile menu, current year and email enquiry form

RUN ON YOUR COMPUTER
--------------------
1. Download and unzip this folder.
2. Install Visual Studio Code: https://code.visualstudio.com/
3. In VS Code choose File > Open Folder and select this folder.
4. Open index.html.
5. Easiest preview: double-click index.html in File Explorer to open it in your browser.
   You can also install the "Live Server" extension in VS Code, right-click index.html,
   and choose "Open with Live Server".

CUSTOMISE BEFORE PUBLISHING
---------------------------
Open index.html and use Find/Replace to change:
- "Yashwanth Tax Solutions" to your actual firm/business name.
- "yashwanthvanam24@gmail.com" to your business email.
- "+91 98484 20247" to your phone number.
- "Somajiguda, Hyderabad, Telangana" to your office address.
- "YF" to your initials or short logo text.
- "https://wa.me/919848420247" to your WhatsApp link.
  Format: https://wa.me/91 followed by your 10-digit mobile number, with no +, spaces or dashes.
- Update service descriptions so they accurately reflect the work you are qualified and authorised to provide.

Open script.js and change:
const businessEmail = "yashwanthvanam24@gmail.com";
to the email address that should receive enquiries.

The gallery photos are sample remote images from Unsplash. Replace their image URLs in index.html
with your own business/office photos if you prefer. An internet connection is needed to load
the sample photos and Google Fonts.

IMPORTANT FORM LIMITATION
--------------------------
The contact form currently prepares an email using the visitor's email application (mailto).
It does NOT securely collect or store enquiries on a server. For a true online form, connect a
form service or build a backend later. Test it on your device before publishing.

FREE PUBLISHING WITH GITHUB PAGES
---------------------------------
1. Create a free account at https://github.com/
2. Create a new public repository named exactly:
   yourusername.github.io
   (replace yourusername with your GitHub username).
3. Upload index.html, style.css and script.js to the repository's root.
4. Open repository Settings > Pages.
5. Under Build and deployment, choose "Deploy from a branch".
6. Choose branch "main" and folder "/ (root)", then Save.
7. Wait a few minutes. Your site should appear at:
   https://yourusername.github.io/

If you use a repository with another name, the URL is usually:
https://yourusername.github.io/repository-name/

CA / PROFESSIONAL COMPLIANCE NOTE
---------------------------------
This is a starter website template, not legal or professional compliance advice.
Before publishing, ensure the business name, qualifications, membership details, claims,
advertising, testimonials and services comply with ICAI requirements and all applicable
professional rules. Do not imply that the business is a Chartered Accountancy firm or that
a person is a CA unless that is accurate and authorised. Do not publish client-confidential
documents or personal data.


LOGO: Copy your existing logo image into this folder and name it logo.png. The website header is configured to display it. If your file has another extension, update the filename in index.html.
